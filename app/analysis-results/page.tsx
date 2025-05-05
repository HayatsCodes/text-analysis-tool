
'use client';

export default function AnalysisResults() {
  return (
    <div className="p-8">
      <div className="border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-6">Analysis Results</h2>
        <div className="space-y-6">
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-4">Word Frequency Analysis</h3>
            <div className="h-40 bg-gray-50 rounded"></div>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-4">Text Statistics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="block text-gray-500">Total Words</span>
                <span className="text-lg font-medium">1,234</span>
              </div>
              <div>
                <span className="block text-gray-500">Unique Words</span>
                <span className="text-lg font-medium">567</span>
              </div>
              <div>
                <span className="block text-gray-500">Average Word Length</span>
                <span className="text-lg font-medium">5.2</span>
              </div>
              <div>
                <span className="block text-gray-500">Reading Time</span>
                <span className="text-lg font-medium">4 min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex gap-2 justify-end">
        <button className="px-4 py-2 bg-gray-100 rounded-md">Export Results</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">New Analysis</button>
      </div>
    </div>
  );
}
