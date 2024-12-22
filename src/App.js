import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import DoctorCard from './components/DoctorCard';
import ServiceList from './components/ServiceList';
import AppointmentForm from './components/AppointmentForm';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
  const [doctors, setDoctors] = useState([]);
  const [services, setServices] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Simula la carga de datos desde una API
    setDoctors([
      { name: 'Dr. Juan Pérez', specialty: 'Cardiología', experience: 15 },
      { name: 'Dra. Ana Gómez', specialty: 'Pediatría', experience: 10 },
    ]);
    setServices(['Consulta General', 'Rayos X', 'Vacunación']);
  }, []);

  const handleAppointmentSubmit = (appointment) => {
    setAppointments([...appointments, appointment]);
    console.log('Cita agendada:', appointment);
  };

  return (
    <div>
      <h1>Sistema del Hospital</h1>
      <h2>Doctores</h2>
      {doctors.map((doctor, index) => (
        <DoctorCard key={index} doctor={doctor} />
      ))}
      <h2>Servicios</h2>
      <ServiceList services={services} />
      <h2>Agendar Cita</h2>
      <AppointmentForm onSubmit={handleAppointmentSubmit} />
    </div>
  );
};

export default App;
