import React from 'react';
import styles from './Role.module.scss';

const Role = (props) => {
  const { role } = props;
  return (
    <p>role{role}</p>
  )
}

export default Role;