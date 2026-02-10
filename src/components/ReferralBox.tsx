'use client';
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { content } from '@/data/content';

export const ReferralBox = () => {
  const [copied, setCopied] = useState(false);
  const { code, label, copyButtonText, copiedText, note } = content.referral;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 bg-red-50 border border-red-100 rounded-xl p-6 shadow-sm">
      <p className="text-sm font-semibold text-red-800 uppercase tracking-wide mb-2">{label}</p>
      <div className="flex items-center gap-3">
        <code className="text-3xl font-mono font-bold text-gray-900 bg-white px-4 py-2 rounded-lg border border-gray-200 tracking-wider">
          {code}
        </code>
        <button
          onClick={handleCopy}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
            copied 
              ? 'bg-green-600 text-white hover:bg-green-700' 
              : 'bg-red-600 text-white hover:bg-red-700'
          }`}
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
          {copied ? copiedText : copyButtonText}
        </button>
      </div>
      <p className="text-xs text-red-600 mt-3">{note}</p>
    </div>
  );
};
