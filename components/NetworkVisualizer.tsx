
'use client';

import { useState } from 'react';

export default function NetworkVisualizer() {
  const [selectedTopics, setSelectedTopics] = useState('');
  const views = [
    { id: 'modelScore', label: 'Model Score', icon: '📊' },
    { id: 'topic', label: 'Topic', icon: '📑' },
    { id: 'topicChart', label: 'Topic Chart', icon: '📈' },
    { id: 'network', label: 'Network', icon: '🕸️' },
    { id: 'wordCloud', label: 'Word Cloud', icon: '☁️' },
    { id: 'interactive', label: 'Interactive View', icon: '🔍' }
  ];

  const handleApply = () => {
    console.log('Applying topics:', selectedTopics);
  };

  const handleClear = () => {
    setSelectedTopics('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* View Controls */}
      <div className="flex gap-2 mb-6">
        {views.map((view) => (
          <button
            key={view.id}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
              view.id === 'network' 
                ? 'bg-blue-600 text-white border-blue-600' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            <span>{view.icon}</span>
            <span>{view.label}</span>
          </button>
        ))}
      </div>

      {/* Network Controls */}
      <div className="border rounded-lg p-6">
        <div className="mb-6">
          <h3 className="mb-2">Selected Topics</h3>
          <div className="flex gap-2">
            <input
              type="text"
              value={selectedTopics}
              onChange={(e) => setSelectedTopics(e.target.value)}
              className="flex-1 px-3 py-2 border rounded-lg"
              placeholder="Enter topics..."
            />
            <button 
              onClick={() => setSelectedTopics(prev => prev ? prev + ', ' : '')}
              className="px-3 py-2 border rounded-lg hover:bg-gray-50"
            >
              ⬅️
            </button>
            <button 
              onClick={() => setSelectedTopics(prev => prev ? prev + ', ' : '')}
              className="px-3 py-2 border rounded-lg hover:bg-gray-50"
            >
              ➡️
            </button>
            <button 
              onClick={handleClear}
              className="px-3 py-2 border rounded-lg hover:bg-gray-50"
            >
              Clear
            </button>
            <button 
              onClick={handleApply}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Apply
            </button>
          </div>
        </div>

        {/* Network Visualization Area */}
        <div>
          <h3 className="mb-2">Topic-Keyword Network Visualization</h3>
          <div className="border rounded-lg h-96 bg-gray-50"></div>
        </div>
      </div>
    </div>
  );
}
