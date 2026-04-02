import React from 'react';
import './TopTabs.css';

export default function TopTabs({ tabs, activeTab, onChange }) {
  return (
    <div className="medical-topbar">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={`top-tab ${tab.className}${activeTab === tab.id ? ' is-active' : ''}`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
