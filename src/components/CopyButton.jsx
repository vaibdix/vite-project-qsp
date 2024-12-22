import { useState } from 'react';
import { CopyCheck, Copy } from 'lucide-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <CopyToClipboard text={text} onCopy={handleCopy}>
      <button
        className="absolute top-14 right-2 p-2 rounded-md transition-colors duration-200
                   bg-[#252131] hover:bg-[#312B3F] border border-gray-700/50"
        title={copied ? 'Copied!' : 'Copy to clipboard'}
      >
        {copied ? (
          <CopyCheck className="w-4 h-4 text-green-400" />
        ) : (
          <Copy className="w-4 h-4 text-gray-400" />
        )}
      </button>
    </CopyToClipboard>
  );
};
