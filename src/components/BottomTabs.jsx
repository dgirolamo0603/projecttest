import React from 'react';
import './BottomTabs.css';

export default function BottomTabs({ tabs, activeTab, onChange }) {
  return (
    <div className="bottom-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={`bottom-tab${tab.className ? ` ${tab.className}` : ''}${activeTab === tab.id ? ' is-active' : ''}`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
