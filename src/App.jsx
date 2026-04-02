import React from 'react';
import { useState } from 'react';
import './App.css';
import BottomTabs from './components/BottomTabs.jsx';
import MedicalForm from './components/MedicalForm.jsx';
import NeuromedFrame from './components/NeuromedFrame.jsx';
import TabPanel from './components/TabPanel.jsx';
import TopPanelContent from './components/TopPanelContent.jsx';
import TopTabs from './components/TopTabs.jsx';
import { bottomTabs, diagnosisOptions, selectFields, tabPanels, topPanels, topTabs } from './data.js';

export default function App() {
  const [activeTopTab, setActiveTopTab] = useState('journal');
  const [activeBottomTab, setActiveBottomTab] = useState('diagnosis');

  return (
    <main>
      <section className="medical-shell">
        <TopTabs tabs={topTabs} activeTab={activeTopTab} onChange={setActiveTopTab} />
        <TopPanelContent activeTab={activeTopTab} panels={topPanels} />

        <div className="medical-body">
          <aside className="side-rail">ЗАБОЛЕВАНИЯ И СЛУЧАИ ЛЕЧЕНИЯ</aside>

          <div className="medical-panel">
            <div className="panel-title">Случай амбулаторного лечения № 1968</div>

            <div className="case-form">
              <div className="workspace-layout">
                <div className="case-content">
                  <MedicalForm fields={selectFields} diagnosisOptions={diagnosisOptions} />
                  <BottomTabs tabs={bottomTabs} activeTab={activeBottomTab} onChange={setActiveBottomTab} />

                  <div className="tab-panels">
                    <TabPanel
                      title={bottomTabs.find((tab) => tab.id === activeBottomTab)?.label ?? ''}
                      items={tabPanels[activeBottomTab]}
                    />
                  </div>
                </div>

                <NeuromedFrame />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
