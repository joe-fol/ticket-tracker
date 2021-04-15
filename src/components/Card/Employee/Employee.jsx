import React from 'react';
import styles from './Employee.module.scss';

const Employee = (props) => {
  return (
    <h4>{props.name}</h4>
  );
}

export default Employee;
