import React from 'react';
import './TopPanelContent.css';

export default function TopPanelContent({ activeTab, panels }) {
  const content = panels[activeTab];

  return (
    <div className="top-panels">
      <section className="top-panel is-active">
        {activeTab === 'journal' ? (
          <div className="journal-content">
            {content.map((card) => (
              <div className="journal-card" key={card.title}>
                <strong>{card.title}</strong>
                {card.lines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="patient-line">
            <span className="home">⌂</span>
            <span>{content.name}</span>
          </div>
        )}
      </section>
    </div>
  );
}
