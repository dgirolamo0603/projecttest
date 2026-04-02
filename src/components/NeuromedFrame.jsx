import React from 'react';
import './NeuromedFrame.css';

export default function NeuromedFrame() {
  return (
    <section className="embed-app">
      <h2>Neuromed</h2>
      <iframe
        src="https://beta.neuromed.digital/"
        title="External Application"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </section>
  );
}
