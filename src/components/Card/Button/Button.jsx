import React, { useState } from 'react';
import styles from './Button.module.scss';

const Button = () => {
  const [count, setCount] = useState(0);

  const increaseButton = () => {
    const increase = count + 1;
    return setCount(increase);
  }

  const decreaseButton = () => {
    const decrease = count - 1;
    return setCount(decrease);
  }

  return (
    <>
      <p>{count}</p>
      <div className={styles.buttons}>
        <button onClick={decreaseButton}>-</button>
        <button onClick={increaseButton}>+</button>
      </div>
    </>
  )
}

export default Button;