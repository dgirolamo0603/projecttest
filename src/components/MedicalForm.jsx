import React from 'react';
import './MedicalForm.css';
import SelectField from './SelectField.jsx';

export default function MedicalForm({ fields, diagnosisOptions }) {
  return (
    <div className="case-grid">
      {fields.map((field) => (
        <SelectField key={field.label} field={field} />
      ))}

      <label>Основной диагноз:</label>
      <div className="diagnosis-row">
        <select className="field" defaultValue="">
          {diagnosisOptions.map((option, index) => (
            <option key={`diagnosis-${option || 'empty'}-${index}`} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span className="search-icon">⌕</span>
      </div>
    </div>
  );
}
