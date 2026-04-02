import React from 'react';
import './TabPanel.css';

export default function TabPanel({ title, items }) {
  return (
    <section className="tab-panel is-active">
      <h3>{title}</h3>
      <div className="tab-panel-list">
        {items.map((item) => (
          <div className="tab-card" key={item}>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
