import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function CodeBlock({ children, className }) {
  const [copied, setCopied] = useState(false);
  const language = className ? className.replace('language-', '') : 'text';
  const code = children.trim();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="code-block-wrapper">
      <button
        className="copy-button"
        onClick={copyToClipboard}
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <SyntaxHighlighter
        language={language}
        style={dracula}
        customStyle={{
          margin: 0,
          borderRadius: '0.5rem',
          padding: '1rem'
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}