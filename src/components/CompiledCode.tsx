import React from 'react';

interface CompiledCodeProps {
  originalCode: string;
  compiledCode: string;
}

export const CompiledCode: React.FC<CompiledCodeProps> = ({ originalCode, compiledCode }) => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg mt-8">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-bold">Compiled Code View</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-green-400 mb-2 font-semibold">Original TSX:</h3>
          <pre className="bg-gray-800 p-4 rounded overflow-x-auto">
            <code className="text-sm">{originalCode}</code>
          </pre>
        </div>
        <div>
          <h3 className="text-blue-400 mb-2 font-semibold">Compiled JavaScript:</h3>
          <pre className="bg-gray-800 p-4 rounded overflow-x-auto">
            <code className="text-sm">{compiledCode}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};