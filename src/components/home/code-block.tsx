'use client';

import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { hybrid } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import CopyIconSvg from '@site/src/components/svg/copy-icon';

interface CodeBlockProps {
  label: string;
  snippets: { [key: string]: string };
}

const CodeBlock: React.FC<CodeBlockProps> = ({ snippets }) => {
  const [selectedSnippet, setSelectedSnippet] = useState<string>(
    Object.keys(snippets)[0]
  ); // 기본값은 첫 번째 키

  return (
    <div className="flex min-h-[352px] w-full max-w-[576px] flex-col rounded-[10px] bg-gray-9">
      <div className="flex items-center justify-between rounded-t-[10px] bg-gray-black px-6 py-4">
        <div className="flex items-center gap-4">
          {Object.keys(snippets).map(key => (
            <div
              role="button"
              key={key}
              onClick={() => setSelectedSnippet(key)}
              onKeyDown={() => {
                setSelectedSnippet(key);
              }}
              tabIndex={0}
              className={`text-[16px] font-medium leading-[28px] ${
                key === selectedSnippet
                  ? 'text-gray-4'
                  : 'text-gray-6 hover:text-gray-4'
              }`}
            >
              {key}
            </div>
          ))}
        </div>
        <CopyToClipboard
          text={snippets[selectedSnippet]}
          onCopy={() => {
            console.log('Copied:', snippets[selectedSnippet]);
          }}
        >
          <button
            type="button"
            className="transition-transform duration-200 hover:scale-125 active:scale-75"
          >
            <CopyIconSvg />
          </button>
        </CopyToClipboard>
      </div>

      {/* Code snippet display */}
      <div className="flex items-center justify-start rounded-b-[10px] px-6 py-5">
        <SyntaxHighlighter
          language="javascript"
          style={hybrid}
          customStyle={{
            backgroundColor: '#191919',
          }}
          wrapLines // 줄을 감싸도록 설정
          lineProps={{
            style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' }, // 줄바꿈 설정
          }}
        >
          {snippets[selectedSnippet]}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
