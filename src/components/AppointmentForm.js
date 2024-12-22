import React, { useState } from 'react';

const AppointmentForm = ({ onSubmit }) => {
  const [patientName, setPatientName] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ patientName, doctor, date });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre del Paciente:</label>
        <input
          type="text"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
        />
      </div>
      <div>
        <label>Doctor:</label>
        <input
          type="text"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
        />
      </div>
      <div>
        <label>Fecha:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button type="submit">Agendar Cita</button>
    </form>
  );
};

export default AppointmentForm;
