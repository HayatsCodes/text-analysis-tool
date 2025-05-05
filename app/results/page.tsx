
'use client';

export default function Results() {
  return (
    <div className="p-8">
      <div className="flex items-start gap-4 p-6 border rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium">text_file.csv (1727.8kb)</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div className="bg-green-500 h-2 rounded-full w-full"></div>
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>Upload Complete</span>
            <span>100%</span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex gap-2 justify-end">
        <button className="px-4 py-2 bg-gray-100 rounded-md">Download Results</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Start New Analysis</button>
      </div>
    </div>
  );
}
