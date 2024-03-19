import React,{ userState }  from "react"
import styles from "./Navbar.module.css"
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  return (
<nav className={styles.navbar}>
    <a className={styles.title} href="/">Portfolio</a>
    <div className={styles.menu}>
      <img src={getImageUrl("nav/img.png")} alt="Menu"/>
        <ul className={styles.menuItems}>
        <li><a  href="#about">About</a></li>
            <li><a href="#education">Education </a></li>
            <li><a href="#experience">Experience </a></li>
            <li><a href="#skills">Skills</a></li>
        </ul>
        
    </div>
</nav>
  );
}