
'use client';

import { useState } from 'react';

export default function ChartControls() {
  const [activeView, setActiveView] = useState('topicChart');
  const [chartStyle, setChartStyle] = useState('Basic Style');
  
  const views = [
    { id: 'modelScore', label: 'Model Score', icon: '📊' },
    { id: 'topic', label: 'Topic', icon: '📑' },
    { id: 'topicChart', label: 'Topic Chart', icon: '📈' },
    { id: 'network', label: 'Network', icon: '🕸️' },
    { id: 'wordCloud', label: 'Word Cloud', icon: '☁️' },
    { id: 'interactive', label: 'Interactive View', icon: '🔍' }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* View Controls */}
      <div className="flex gap-2 mb-6">
        {views.map((view) => (
          <button
            key={view.id}
            onClick={() => setActiveView(view.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
              activeView === view.id 
                ? 'bg-blue-600 text-white border-blue-600' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            <span>{view.icon}</span>
            <span>{view.label}</span>
          </button>
        ))}
      </div>

      {/* Chart Style Controls */}
      <div className="border rounded-lg p-6">
        <div className="mb-6">
          <h3 className="mb-2">Chart Style</h3>
          <div className="flex gap-2">
            <input
              type="text"
              value={chartStyle}
              onChange={(e) => setChartStyle(e.target.value)}
              className="flex-1 px-3 py-2 border rounded-lg"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Apply
            </button>
          </div>
        </div>

        {/* Topic Keywords */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3>Topic 1 Keywords</h3>
              <button className="text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </button>
            </div>
            <div className="h-48 border rounded-lg"></div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3>Topic 2 Keywords</h3>
              <button className="text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </button>
            </div>
            <div className="h-48 border rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
