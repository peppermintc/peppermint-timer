import React from "react";
import styles from "./app.module.css";
import Header from "./components/header/header";
import TimerContainer from "./components/timer_container/timer_container";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <TimerContainer />
      <footer className={styles.footer}>
        <a
          href="https://github.com/peppermintc/peppermint-timer"
          target="_blank"
        >
          <img src="/images/github.png" alt="github logo" />
        </a>
        <span class={styles.footer_text}>Developed by peppermint</span>
      </footer>
    </div>
  );
}

export default App;
