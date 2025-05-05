
'use client';

import { useState } from 'react';

export default function TopicVisualizer() {
  const [activeView, setActiveView] = useState('topic');
  
  const views = [
    { id: 'model', label: 'Model Score', icon: '📊' },
    { id: 'topic', label: 'Topic', icon: '📑' },
    { id: 'topicChart', label: 'Topic Chart', icon: '📈' },
    { id: 'network', label: 'Network', icon: '🕸️' },
    { id: 'wordCloud', label: 'Word Cloud', icon: '☁️' },
    { id: 'interactive', label: 'Interactive View', icon: '🔍' }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Visualization Options */}
      <div className="flex gap-2 mb-6">
        {views.map((view) => (
          <button
            key={view.id}
            onClick={() => setActiveView(view.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded border ${
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

      {/* Topics Display */}
      <div className="border rounded-lg p-6 space-y-6">
        {[1, 2].map((topicNum) => (
          <div key={topicNum} className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Topic {String(topicNum).padStart(2, '0')}</h3>
              <div className="flex gap-2">
                <button className="text-blue-600 text-sm flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125" />
                  </svg>
                  Edit Keyword
                </button>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  40 keywords
                </span>
              </div>
            </div>
            <div className="border rounded-lg h-32"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
