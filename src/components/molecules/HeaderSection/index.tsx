import React from "react";
import Text from "../../atoms/Text";
import styles from './index.module.css';

const HeaderSection = () => {
  return (
    <div className={styles.container}>
      <header tabIndex={0}>
        <Text variant="h1">Welcome, Friend</Text>
        <Text variant="h2">
          This is my Calendar
        </Text>
      </header>
      
    </div>
  );
};

export default HeaderSection;
