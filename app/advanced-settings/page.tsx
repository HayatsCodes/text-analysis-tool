
'use client';

export default function AdvancedSettings() {
  return (
    <div className="p-8">
      <div className="border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-6">Advanced Analysis Settings</h2>
        <div className="space-y-6">
          <div>
            <label className="font-medium mb-2 block">Select Language</label>
            <select className="w-full p-2 border rounded">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
          <div>
            <label className="font-medium mb-2 block">Morphological Analysis Settings</label>
            <select className="w-full p-2 border rounded mb-4">
              <option>Basic</option>
              <option>Advanced</option>
              <option>Custom</option>
            </select>
            <select className="w-full p-2 border rounded">
              <option>Morphological Analysis Strategy</option>
              <option>Strategy 1</option>
              <option>Strategy 2</option>
            </select>
          </div>
          <div>
            <label className="font-medium mb-2 block">Word Length</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="Minimum word length" />
          </div>
          <div>
            <label className="font-medium mb-2 block">File Format</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="Supported formats: .txt, .doc, .pdf" />
          </div>
        </div>
      </div>
      <div className="mt-4 flex gap-2 justify-end">
        <button className="px-4 py-2 bg-gray-100 rounded-md">Previous Step</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Continue</button>
      </div>
    </div>
  );
}
