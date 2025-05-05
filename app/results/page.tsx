
'use client';

export default function Results() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Analysis Results</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Word Frequency</h2>
          <p className="text-gray-600">Your word frequency analysis results will appear here.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Topic Modeling</h2>
          <p className="text-gray-600">Your LDA topic modeling results will appear here.</p>
        </div>
      </div>
    </div>
  );
}
