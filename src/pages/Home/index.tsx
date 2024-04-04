import React from "react";
import HeaderSection from "../../components/molecules/HeaderSection";
import { Calendar } from "../../components/organisms";
import WelcomeSection from "../../components/organisms/WelcomeSection";
import CalendarProvider from "../../contexts/CalendarProvider";
import { timelineItems } from "../../lib/data";
import styles from "./index.module.css";

const Home = () => {
  return (
    <CalendarProvider events={timelineItems}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <HeaderSection />
          <WelcomeSection />
        </div>
        <Calendar canEdit />
      </div>
    </CalendarProvider>
  );
};

export default Home;
