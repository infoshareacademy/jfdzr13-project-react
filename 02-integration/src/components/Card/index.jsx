import React from 'react'
import styles from "./Card.module.css";

const Card = ({ task }) => {
    const { gender, value, ordinalNumber } = task;

  return (
    <li className={styles.card}>
        <p>Gender: {gender}</p>
        <p>Value: {value}</p>
    </li>
  )
}

export default Card