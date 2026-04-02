import React from 'react';

export default function SelectField({ field }) {
  return (
    <>
      <label>{field.label}</label>
      <select className={`field${field.highlight ? ' highlight' : ''}`} defaultValue={field.defaultValue}>
        {field.options.map((option, index) => (
          <option key={`${field.label}-${option || 'empty'}-${index}`} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}
