/**
 * llms.txt / llms-full.txt 생성 플러그인
 *
 * - `yarn build` 의 postBuild 단계에서 `build/llms.txt`, `build/llms-full.txt` 를 만든다.
 * - 대상·정제 규칙은 저장소 루트의 KNOWLEDGE_CLEANING_RULES.md 를 따른다.
 *   (MCP 인덱서와 같은 규칙이어야 하므로 규칙을 바꾸면 그 문서와 nacho-mcp-backend 도 함께 바꾼다.)
 * - 외부 의존성 없이 Node 내장 모듈만 사용한다.
 */
import type { Plugin } from '@docusaurus/types';
import fs from 'fs';
import path from 'path';

import sidebars from '../../../sidebars';

const SITE_URL = 'https://developer.nachocode.io';
const DOCS_DIR = 'docs';
const RELEASE_FULL_LIMIT = 3;

type Section = 'guide' | 'api' | 'sdk' | 'mcp' | 'releases';

type DocEntry = {
  id: string; // e.g. guide/push/intro
  file: string; // absolute path
  url: string;
  title: string;
  description: string;
  section: Section;
  unlisted: boolean;
  draft: boolean;
};

const SECTION_ORDER: Section[] = ['guide', 'api', 'sdk', 'mcp', 'releases'];
const SECTION_TITLE: Record<Section, string> = {
  guide: '가이드',
  api: 'API',
  sdk: 'SDK',
  mcp: 'MCP',
  releases: '릴리즈 노트',
};

// ---------- sidebars.ts 순회 ----------

function collectSidebarDocIds(items: unknown, out: string[]): void {
  if (!Array.isArray(items)) return;
  for (const item of items) {
    if (typeof item === 'string') {
      out.push(item);
    } else if (item && typeof item === 'object') {
      const obj = item as Record<string, unknown>;
      if (obj.type === 'doc' && typeof obj.id === 'string') {
        out.push(obj.id);
      } else if (obj.type === 'category') {
        const link = obj.link as Record<string, unknown> | undefined;
        if (link && link.type === 'doc' && typeof link.id === 'string') {
          out.push(link.id);
        }
        collectSidebarDocIds(obj.items, out);
      }
    }
  }
}

function orderedDocIds(): string[] {
  const ids: string[] = [];
  const sb = sidebars as unknown as Record<string, unknown>;
  for (const key of SECTION_ORDER) {
    collectSidebarDocIds(sb[key], ids);
  }
  // 사이드바에 없는 문서는 같은 섹션 끝에 붙인다 (docs/temp 제외)
  const all = walkDocs(path.resolve(DOCS_DIR))
    .map(f => toDocId(f))
    .filter(id => !id.startsWith('temp/'));
  const known = new Set(ids);
  const orphans = all.filter(id => !known.has(id)).sort();
  const result: string[] = [];
  for (const section of SECTION_ORDER) {
    result.push(...ids.filter(id => sectionOf(id) === section));
    result.push(...orphans.filter(id => sectionOf(id) === section));
  }
  return result;
}

function walkDocs(dir: string): string[] {
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkDocs(full));
    else if (/\.mdx?$/.test(entry.name)) out.push(full);
  }
  return out;
}

function toDocId(file: string): string {
  const rel = path
    .relative(path.resolve(DOCS_DIR), file)
    .split(path.sep)
    .join('/');
  return rel.replace(/\.mdx?$/, '');
}

function sectionOf(id: string): Section {
  const head = id.split('/')[0] as Section;
  return SECTION_ORDER.includes(head) ? head : 'guide';
}

// ---------- 프론트매터 ----------

type FrontMatter = { body: string; data: Record<string, string> };

function parseFrontMatter(raw: string): FrontMatter {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { body: raw, data: {} };
  const data: Record<string, string> = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (kv) data[kv[1]] = stripQuotes(kv[2].trim());
  }
  return { body: raw.slice(m[0].length), data };
}

function stripQuotes(v: string): string {
  return v.replace(/^'(.*)'$/, '$1').replace(/^"(.*)"$/, '$1');
}

function loadDoc(id: string): DocEntry | null {
  const candidates = [`${id}.md`, `${id}.mdx`].map(p =>
    path.resolve(DOCS_DIR, p)
  );
  const file = candidates.find(f => fs.existsSync(f));
  if (!file) return null;
  const raw = fs.readFileSync(file, 'utf8');
  const { body, data } = parseFrontMatter(raw);
  const h1 = body.match(/^#\s+(.+?)\s*$/m);
  const title = cleanHeadingText(data.title ?? (h1 ? h1[1] : id));
  return {
    id,
    file,
    url: `${SITE_URL}/docs/${id}`,
    title,
    description: data.description ?? '',
    section: sectionOf(id),
    unlisted: data.unlisted === 'true',
    draft: data.draft === 'true',
  };
}

function cleanHeadingText(t: string): string {
  return t
    .replace(/\s*\\?\{#[^}]+\}\s*$/, '')
    .replace(/\*\*/g, '')
    .replace(/`/g, '')
    .trim();
}

// ---------- 본문 정제 (KNOWLEDGE_CLEANING_RULES.md 2절) ----------

function toAbsoluteUrl(href: string, docId: string): string {
  if (/^(https?:|mailto:|#)/.test(href)) return href;
  let target = href;
  let hash = '';
  const hashIdx = target.indexOf('#');
  if (hashIdx >= 0) {
    hash = target.slice(hashIdx);
    target = target.slice(0, hashIdx);
  }
  target = target.replace(/\.mdx?$/, '');
  if (target.startsWith('/')) return `${SITE_URL}${target}${hash}`;
  const base = path.posix.dirname(docId);
  const joined = path.posix.normalize(path.posix.join(base, target));
  return `${SITE_URL}/docs/${joined}${hash}`;
}

function cleanLine(line: string, docId: string): string | null {
  let l = line;
  if (/^import\s.+from\s+['"].+['"];?\s*$/.test(l)) return null;
  if (/^\s*<ThumbnailImage[\s\S]*\/>\s*$/.test(l)) return null;
  if (/^\s*<hr[^>]*\/?>\s*$/.test(l)) return null;
  // 한 줄짜리 <div class="underlined-subtitle">제목</div> 은 강조 텍스트로 남긴다
  l = l.replace(/<div[^>]*>([^<]*)<\/div>/g, '**$1**');
  if (/^\s*<\/?div[^>]*>\s*$/.test(l)) return null;
  if (/^\s*(<br\s*\/?>\s*)+$/.test(l)) return null;
  if (/^\s*(<br\s*\/?>\s*)*<hr[^>]*\/?>(\s*<br\s*\/?>)*\s*$/.test(l))
    return null;

  // BadgeWithVersion -> [SDK v1.8.0]
  l = l.replace(
    /<BadgeWithVersion[^>]*type="([^"]+)"[^>]*version="([^"]+)"[^>]*\/>/g,
    '[$1 $2]'
  );
  // 이미지 -> [이미지: alt]
  l = l.replace(
    /!\[([^\]]*)\]\([^)]*\)/g,
    (_m, alt: string) => `[이미지: ${alt || '이미지'}]`
  );
  l = l.replace(/<img[^>]*alt="([^"]*)"[^>]*\/?>/g, '[이미지: $1]');
  l = l.replace(
    /<img[^>]*src="([^"]*)"[^>]*\/?>/g,
    (_m, src: string) => `[이미지: ${path.posix.basename(src)}]`
  );

  const isTableRow = /^\s*\|/.test(l);
  l = l.replace(/<br\s*\/?>/g, isTableRow ? ' ' : '\n');
  l = l.replace(/&nbsp;/g, ' ');
  // span / i / b / u 래퍼 제거
  l = l.replace(/<\/?(span|i|b|u|small|strong|em)(\s[^>]*)?>/g, '');
  // 이스케이프된 앵커 정규화
  l = l.replace(/\\\{#/g, '{#');
  // 제목의 ** 제거
  if (/^#{1,6}\s/.test(l)) l = l.replace(/\*\*/g, '');
  // 링크 절대화
  l = l.replace(
    /\]\(([^)\s]+)\)/g,
    (_m, href: string) => `](${toAbsoluteUrl(href, docId)})`
  );
  l = l.replace(/[ \t]+$/g, '');
  return l;
}

function cleanBody(body: string, docId: string): string {
  const out: string[] = [];
  let inCode = false;
  let inComment = false;
  let admonition: string | null = null;

  for (const rawLine of body.split(/\r?\n/)) {
    const line = rawLine;
    if (inComment) {
      if (line.includes('-->')) inComment = false;
      continue;
    }
    if (/^\s*<!--/.test(line)) {
      if (!line.includes('-->')) inComment = true;
      continue;
    }
    if (/^\s*```/.test(line)) {
      inCode = !inCode;
      out.push(admonition ? `> ${line}` : line);
      continue;
    }
    if (inCode) {
      out.push(admonition ? `> ${line}` : line);
      continue;
    }
    const adm = line.match(/^\s*:::(\w+)\s*(.*)$/);
    if (adm && !admonition) {
      admonition = adm[1].toUpperCase();
      out.push(
        adm[2] ? `> [!${admonition}] ${adm[2].trim()}` : `> [!${admonition}]`
      );
      continue;
    }
    if (/^\s*:::\s*$/.test(line) && admonition) {
      admonition = null;
      out.push('');
      continue;
    }
    const cleaned = cleanLine(line, docId);
    if (cleaned === null) continue;
    for (const part of cleaned.split('\n')) {
      out.push(admonition ? `> ${part}`.replace(/\s+$/, '') : part);
    }
  }
  // 나머지 JSX 태그 제거 (코드 블록 밖)
  const text = out
    .join('\n')
    .replace(/<\/?[A-Z][A-Za-z]*(\s[^>]*)?>/g, '')
    .replace(/<\/?details[^>]*>/g, '')
    .replace(/<\/?summary[^>]*>/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
  return text;
}

// ---------- 출력 ----------

function releasePlatform(id: string): string | null {
  const m = id.match(
    /^releases\/v1\/(sdk|app-source\/android|app-source\/ios)\//
  );
  return m ? m[1] : null;
}

function isReleaseIntro(id: string): boolean {
  return /^releases\/.*\/intro$/.test(id);
}

function selectFullReleases(docs: DocEntry[]): Set<string> {
  // sidebars.ts 의 릴리즈 순서는 최신 → 과거 이므로 플랫폼별 앞의 N개를 고른다.
  const picked = new Set<string>();
  const count: Record<string, number> = {};
  for (const d of docs) {
    const plat = releasePlatform(d.id);
    if (!plat) continue;
    if (isReleaseIntro(d.id)) {
      picked.add(d.id);
      continue;
    }
    count[plat] = (count[plat] ?? 0) + 1;
    if (count[plat] <= RELEASE_FULL_LIMIT) picked.add(d.id);
  }
  return picked;
}

function buildLlmsTxt(docs: DocEntry[]): string {
  const lines: string[] = [];
  lines.push('# nachocode Developer Hub');
  lines.push('');
  lines.push(
    '> nachocode(하이브리드 앱 빌더)의 Client SDK, Open API, 앱소스(App Source) 개발자 문서입니다. 한국어로 작성되어 있습니다.'
  );
  lines.push('');
  lines.push(
    'nachocode는 웹사이트를 Android·iOS 네이티브 앱으로 만들어 주는 노코드·로우코드 앱 빌더입니다. ' +
      '이 사이트는 웹 클라이언트에서 네이티브 기능을 호출하는 nachocode Client SDK, 서버에서 푸시 알림과 앱 유저를 관리하는 Open API, ' +
      '앱의 기반 소스 코드인 앱소스의 가이드와 릴리즈 노트를 제공합니다.'
  );
  lines.push('');
  for (const section of SECTION_ORDER) {
    const items = docs.filter(d => d.section === section);
    if (items.length === 0) continue;
    lines.push(`## ${SECTION_TITLE[section]}`);
    lines.push('');
    for (const d of items) {
      lines.push(
        `- [${d.title}](${d.url})${d.description ? `: ${d.description}` : ''}`
      );
    }
    lines.push('');
  }
  lines.push('## Optional');
  lines.push('');
  lines.push(
    `- [llms-full.txt](${SITE_URL}/llms-full.txt): 전체 문서 전문 (릴리즈 노트는 플랫폼별 최신 ${RELEASE_FULL_LIMIT}개 버전만 전문 수록)`
  );
  lines.push(
    '- [OpenAPI 3.1 명세](https://github.com/FlipperCorporation/nachocode-developer-hub/blob/main/openapi/nachocode-open-api.yaml): nachocode Open API 기계 판독 명세'
  );
  lines.push(
    `- [사용자 가이드](https://docs.nachocode.io): 대시보드 사용법 등 비개발자용 가이드`
  );
  lines.push('');
  return lines.join('\n');
}

function buildLlmsFullTxt(docs: DocEntry[]): string {
  const full = selectFullReleases(docs);
  const parts: string[] = [];
  parts.push('# nachocode Developer Hub (full)');
  parts.push('');
  parts.push(
    `> ${SITE_URL} 의 문서 전문입니다. 릴리즈 노트는 플랫폼별 최신 ${RELEASE_FULL_LIMIT}개 버전만 전문으로 싣고 나머지는 링크로 대체합니다.`
  );
  parts.push('');
  for (const section of SECTION_ORDER) {
    const items = docs.filter(d => d.section === section);
    if (items.length === 0) continue;
    parts.push(`\n# ${SECTION_TITLE[section]}\n`);
    for (const d of items) {
      if (d.section === 'releases' && !full.has(d.id)) {
        parts.push(
          `- [${d.title}](${d.url})${d.description ? `: ${d.description}` : ''}`
        );
        continue;
      }
      const raw = fs.readFileSync(d.file, 'utf8');
      const { body } = parseFrontMatter(raw);
      parts.push('');
      parts.push('---');
      parts.push(`# ${d.title}`);
      parts.push(`URL: ${d.url}`);
      if (d.description) parts.push(`설명: ${d.description}`);
      parts.push('');
      parts.push(cleanBody(body, d.id));
      parts.push('');
    }
  }
  return parts.join('\n').replace(/\n{3,}/g, '\n\n') + '\n';
}

export function generateLlmsFiles(outDir: string): {
  count: number;
  llms: string;
  llmsFull: string;
} {
  const docs = orderedDocIds()
    .map(loadDoc)
    .filter((d): d is DocEntry => d !== null && !d.unlisted && !d.draft);
  const llms = buildLlmsTxt(docs);
  const llmsFull = buildLlmsFullTxt(docs);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'llms.txt'), llms, 'utf8');
  fs.writeFileSync(path.join(outDir, 'llms-full.txt'), llmsFull, 'utf8');
  return { count: docs.length, llms, llmsFull };
}

export default function llmsTxtPlugin(): Plugin {
  return {
    name: 'nachocode-llms-txt',
    async postBuild({ outDir }) {
      const { count } = generateLlmsFiles(outDir);
      console.log(
        `[nachocode-llms-txt] llms.txt / llms-full.txt 생성 완료 (문서 ${count}개)`
      );
    },
  };
}
