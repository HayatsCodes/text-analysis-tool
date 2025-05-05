
'use client';

import Link from 'next/link';

export default function Processing() {
  return (
    <main className="flex min-h-screen">
      <div className="w-64 bg-blue-600 p-4 text-white">
        <div className="mb-4">
          <div className="text-sm mb-2">Data Generation</div>
          <div className="pl-4">Text Analysis</div>
        </div>
        <div className="mb-4">
          <div>Data Preprocessing</div>
        </div>
        <div>
          <div>Data Analysis</div>
          <div className="pl-4">Text Analysis</div>
        </div>
      </div>
      <div className="flex-1 p-8">
        <div className="max-w-xl mx-auto">
          <div className="border-2 border-gray-200 rounded-lg p-12 text-center">
            <div className="mb-4">
              <svg className="w-12 h-12 mx-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-red-500">test_file.csv (127.5KB)</p>
          </div>
          <div className="mt-4 flex justify-center gap-4">
            <Link href="/results" className="bg-blue-600 text-white px-4 py-2 rounded">
              Upload
            </Link>
            <button className="border border-gray-300 px-4 py-2 rounded text-gray-600">
              Cancel Upload
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
