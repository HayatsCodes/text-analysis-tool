
'use client';

export default function Processing() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Data Preprocessing</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600 mb-4">
          Configure preprocessing options for your text data:
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="lowercase" className="rounded" />
            <label htmlFor="lowercase">Convert to lowercase</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="punctuation" className="rounded" />
            <label htmlFor="punctuation">Remove punctuation</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="numbers" className="rounded" />
            <label htmlFor="numbers">Remove numbers</label>
          </div>
        </div>
      </div>
    </div>
  );
}
