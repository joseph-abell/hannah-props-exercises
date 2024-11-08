import React from 'react';

interface CodeExplanationProps {
  title: string;
  code: string;
  explanation: string;
}

export const CodeExplanation: React.FC<CodeExplanationProps> = ({
  title,
  code,
  explanation,
}) => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="space-y-4">
        <pre className="bg-gray-800 p-4 rounded overflow-x-auto">
          <code className="text-sm">{code}</code>
        </pre>
        <div className="bg-gray-800 p-4 rounded">
          <p className="text-gray-300">{explanation}</p>
        </div>
      </div>
    </div>
  );
};