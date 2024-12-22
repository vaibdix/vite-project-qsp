import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import html from 'react-syntax-highlighter/dist/esm/languages/prism/markup';
import { CopyButton } from './CopyButton';

// Register languages
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('html', html);

const sentryTheme = {
  'code[class*="language-"]': {
    color: '#e6e8ea',
    background: 'none',
    fontFamily: 'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',
    fontSize: '14px',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    tabSize: '4',
    hyphens: 'none',
  },
  'pre[class*="language-"]': {
    color: '#e6e8ea',
    background: '#1B1825',
    padding: '1em',
    margin: '0',
    overflow: 'auto',
    borderRadius: '6px',
  },
  comment: { color: '#6C7280' },
  string: { color: '#85EED6' },
  number: { color: '#85EED6' },
  builtin: { color: '#E34C4C' },
  keyword: { color: '#C875EF' },
  function: { color: '#3FB950' },
  'class-name': { color: '#FAC863' },
  operator: { color: '#E34C4C' },
  punctuation: { color: '#e6e8ea' },
  property: { color: '#85EED6' },
  tag: { color: '#E34C4C' },
  parameter: { color: '#E6B673' },
};

export const CodeBlock = ({ children, className }) => {
  const language = className ? className.replace('language-', '') : 'text';

  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
      <div className="relative">
        <div className="flex items-center bg-[#252131] px-4 py-2 rounded-t-lg border-b border-gray-700/50">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
          </div>
          {language && <span className="ml-4 text-sm text-gray-400">{language}</span>}
        </div>
        <SyntaxHighlighter
          language={language}
          style={sentryTheme}
          className="!rounded-t-none !m-0"
          customStyle={{
            margin: 0,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          }}
        >
          {children}
        </SyntaxHighlighter>
        <CopyButton text={children} />
      </div>
    </div>
  );
};
