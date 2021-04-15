import React from 'react';
import './App.css';
import Card from './components/Card';
import Employee from './components/Card/Employee';
import employees from './data/team';
import styles from './App.module.scss';

const App = () => {
  const generateCard = employees.map(employee =>{
    return <Card name={employees.name} role={employees.role} />
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
