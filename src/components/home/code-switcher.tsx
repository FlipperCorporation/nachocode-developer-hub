'use client';

import React from 'react';

import CodeBlock from './code-block';

// Copy 아이콘 컴포넌트

interface CodeSwitcherProps {
  tabs: { label: string; snippets: { [key: string]: string } }[];
}

const CodeSwitcher: React.FC<CodeSwitcherProps> = ({ tabs }) => {
  return (
    <>
      {tabs.map(tab => (
        <CodeBlock key={tab.label} label={tab.label} snippets={tab.snippets} />
      ))}
    </>
  );
};

export default CodeSwitcher;
