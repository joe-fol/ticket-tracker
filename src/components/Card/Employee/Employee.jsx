import React from 'react';
import styles from './Employee.module.scss';

const Employee = (props) => {
  const { name } = props;
  return (
    <h4>name{name}</h4>
  );
}

export default Employee;
