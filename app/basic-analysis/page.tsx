
'use client';

export default function BasicAnalysis() {
  return (
    <div className="p-8">
      <div className="border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-6">Basic Analysis Settings</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <label className="font-medium mb-2 block">Author</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div className="p-4 border rounded-lg">
              <label className="font-medium mb-2 block">Title</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div className="p-4 border rounded-lg">
              <label className="font-medium mb-2 block">Category</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div className="p-4 border rounded-lg">
              <label className="font-medium mb-2 block">Tags</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex gap-2 justify-end">
        <button className="px-4 py-2 bg-gray-100 rounded-md">Cancel</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Start Analysis</button>
      </div>
    </div>
  );
}
