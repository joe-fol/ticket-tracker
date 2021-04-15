import React from 'react';
import Button from './Button';
import Employee from './Employee';
import Role from './Role';
import styles from './Card.module.scss';

const Card = () => {
  return (
  <>
  <div className={styles.card}>
    <Employee />
    <Role />
    <Button />
  </div>
  </>

  )
}

export default Card