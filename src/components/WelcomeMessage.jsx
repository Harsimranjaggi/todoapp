import React from 'react'
import styles from "./WelcomeMessage.module.css";

function WelcomeMessage({todoItems}) {
  return todoItems.length=== 0 && <p className={styles.welcome}>Enjoy Your Day</p>;
  
}

export default WelcomeMessage
