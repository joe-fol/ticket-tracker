import React from 'react';
import './App.css';
import Card from './components/Card';
import employees from './data/team';
import styles from './App.module.scss';

const App = () => {
  const generateCard = employees.map((employee) =>{
    return <Card key={employee.id} name={employee.name} role={employee.role} />
  })

  return (
    <>
      <h1>Ticket Tracker</h1>
      <div className={styles.card}>
        {generateCard}
      </div>
    </>
  );
}

export default App;
