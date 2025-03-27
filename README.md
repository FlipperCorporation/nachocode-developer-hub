# nachocode Developer Hub

**nachocode Developer Hub**는 nachocode SDK 및 API 사용을 위한 공식 문서를 제공합니다.  
웹 개발자와 앱 개발자가 nachocode의 강력한 노코드 & 로우코드 플랫폼을 활용하여 네이티브 앱을 빠르고 효율적으로 개발할 수 있도록 돕습니다.

- 최신화 일자 : 2025-02-06

---

## 📚 프로젝트 개요

nachocode Developer Hub는 다음과 같은 자료를 포함합니다:

- **SDK 문서**: nachocode SDK를 사용하여 네이티브 기능을 웹 앱에 통합하는 방법.
- **API 문서**: 개인화 푸시(푸시알림) 및 기타 nachocode API 엔드포인트 활용 방법.
- **사용자 가이드**: 플랫폼 설정, 앱 구성, 고급 기능 사용법.

nachocode의 대시보드와 함께 이 문서를 사용하면 더욱 강력한 네이티브 앱을 구축할 수 있습니다.

### 🌐 nachocode 공식 웹사이트

nachocode의 메인 플랫폼을 탐험하려면 아래 링크를 방문하세요:  
👉 [https://nachocode.io](https://nachocode.io)

nachocode의 개발자 문서를 정독하려면 아래 링크를 방문하세요:  
👉 [https://developer.nachocode.io](https://developer.nachocode.io)

---

## 🛠️ 기술 스택

nachocode Developer Hub는 [Docusaurus](https://docusaurus.io/)를 사용하여 생성되었습니다.  
Docusaurus는 개발자 문서를 작성하고 배포하는 데 최적화된 정적 사이트 생성기입니다.

---

## 🚀 시작하기

### 1. **레포지토리 클론**

```bash
git clone https://github.com/FlipperCorporation/nachocode-developer-hub.git
cd nachocode-developer-hub
```

### 2. **의존성 설치**

`yarn` 또는 `npm`을 사용하여 프로젝트 의존성을 설치합니다.

```bash
yarn install
```

```bash
npm install
```

### 3. **로컬 개발 서버 실행**

로컬 개발 환경에서 문서를 확인하고 수정할 수 있습니다.

```bash
yarn start
```

```bash
npm run start
```

브라우저에서 [http://localhost:3005](http://localhost:3005)을 열어 사이트를 확인하세요.

### 4. **프로덕션 빌드**

정적 파일을 생성하여 배포할 준비를 합니다.

```bash
yarn build
```

```bash
npm run build
```

### 5. **GitHub Pages에 배포**

GitHub Pages에 배포하려면 아래 명령을 실행하세요:

```bash
GIT_USER=<your-github-username> yarn deploy
```

---

## 📁 디렉토리 구조

```plain
nachocode-developer-hub/
├── docs/                # 문서 파일 (Markdown)
│   ├── intro.md         # 서비스 소개
│   ├── sdk/             # SDK 관련 문서
│   └── api/             # API 관련 문서
├── src/                 # 커스텀 컴포넌트
├── static/              # 정적 파일 (이미지, 로고 등)
├── docusaurus.config.js # Docusaurus 설정 파일
└── package.json         # 프로젝트 설정 및 의존성 정보
```

---

## 🔑 주요 링크

- **nachocode 공식 웹사이트**: [https://nachocode.io](https://nachocode.io)
- **nachocode 개발자 문서**: [https://developer.nachocode.io](https://developer.nachocode.io)
- **nachocode GitHub 레포지토리**: [https://github.com/FlipperCorporation](https://github.com/FlipperCorporation)

---

## 🤝 기여하기

nachocode Developer Hub는 오픈 소스 프로젝트입니다.  
문서 수정, 피드백, 제안은 언제든 환영합니다!

1. 이 레포지토리를 포크하세요.
2. 새 브랜치를 생성하세요. (`git checkout -b feature/new-doc`)
3. 수정 후 커밋하세요. (`git commit -m 'Add new documentation'`)
4. 브랜치를 푸시하세요. (`git push origin feature/new-doc`)
5. Pull Request를 생성하세요.

---

## 📧 지원

문서에 대한 질문이나 nachocode에 대한 문의는 아래 이메일로 연락주세요:  
[support@nachocode.io](mailto:support@nachocode.io)
