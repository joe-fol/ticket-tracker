import React from 'react';
import Button from './Button';
import Employee from './Employee';
import Role from './Role';
import styles from './Card.module.scss';

const Card = (props) => {
  return (
  <>
  <div className={styles.card}>
    <Employee name={props.name} />
    <Role role={props.role} />
    <Button />
  </div>
  </>

  )
}

export default Card