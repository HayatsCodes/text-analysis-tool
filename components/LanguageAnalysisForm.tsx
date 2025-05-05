
'use client';

import { useState } from 'react';

export default function LanguageAnalysisForm() {
  const [language, setLanguage] = useState('Korean');
  const [column, setColumn] = useState('Process');
  const [analyzer, setAnalyzer] = useState('Hannanym');
  const [analyzerSettings, setAnalyzerSettings] = useState('Adjective');
  const [wordLength, setWordLength] = useState('2, 3');
  const [fileName, setFileName] = useState('Process File');

  const handleProcessFile = () => {
    // Handle process file logic here
    console.log('Processing file...');
  };

  const handleDownload = () => {
    // Handle download logic here
    console.log('Downloading file...');
  };

  return (
    <div className="max-w-md mx-auto space-y-6 p-6">
      <div className="border rounded-lg p-4 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Select Language</label>
          <select 
            className="w-full p-2 border rounded-lg"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>Korean</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Select Column</label>
          <select 
            className="w-full p-2 border rounded-lg"
            value={column}
            onChange={(e) => setColumn(e.target.value)}
          >
            <option>Process</option>
          </select>
        </div>
      </div>

      <div className="border rounded-lg p-4 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Morphological Analyzer</label>
          <select 
            className="w-full p-2 border rounded-lg"
            value={analyzer}
            onChange={(e) => setAnalyzer(e.target.value)}
          >
            <option>Hannanym</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Morphological Analyzer Settings</label>
          <select 
            className="w-full p-2 border rounded-lg"
            value={analyzerSettings}
            onChange={(e) => setAnalyzerSettings(e.target.value)}
          >
            <option>Adjective</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Word Length</label>
          <input 
            type="text" 
            className="w-full p-2 border rounded-lg"
            value={wordLength}
            onChange={(e) => setWordLength(e.target.value)}
          />
        </div>
      </div>

      <div className="border rounded-lg p-4">
        <div>
          <label className="block text-sm font-medium mb-1">Set file name</label>
          <input 
            type="text" 
            className="w-full p-2 border rounded-lg"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex gap-4 justify-center">
        <button 
          onClick={handleProcessFile}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Process File
        </button>
        <button 
          onClick={handleDownload}
          className="bg-white text-gray-600 px-6 py-2 rounded-lg border hover:bg-gray-50"
        >
          Download
        </button>
      </div>
    </div>
  );
}
