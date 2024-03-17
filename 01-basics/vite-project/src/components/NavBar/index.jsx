// react
import React from 'react'

// styles
import styles from "./NavBar.module.css";

// assets
import logo from "../../assets/images/logo.svg";


const listOfLinks = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "New",
        link: "/new"
    },
    {
        name: "Popular",
        link: "/popular"
    },
    {
        name: "Trending",
        link: "/trending"
    },
    {
        name: "Categories",
        link: "/categories"
    },
    
]

const NavBar = () => {
  return (
    <div className={styles.navbar}>
        <img src={logo} />
        <ul>
            {listOfLinks.map((element, idx) => {
                return (
                    <li key={idx}>
                        <a href={element.link}>{element.name}</a>
                    </li>)
            })}
        </ul>
    </div>
  )
}

export default NavBar