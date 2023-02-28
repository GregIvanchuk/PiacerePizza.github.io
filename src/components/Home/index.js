import styles from "./Home.module.css"
import Main from "./Main";
import Header from "./Header";
import React from "react";
function Home () {
return(
    <div className={styles.container}>
        <Header />
        <Main/>
      <footer className={styles.footer}></footer>
      </div>
       )}
     export default Home;