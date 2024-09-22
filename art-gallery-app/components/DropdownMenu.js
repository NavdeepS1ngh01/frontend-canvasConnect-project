"use client";
import { useState } from "react";
import styles from '../app/Home/styles.module.css'
import Link from "next/link";
export default function DropdownMenu({ styles }) {
  const [dropmenustatus, setdropmenustatus] = useState(false);

  function handleClick() {
    const heroSection = document.getElementById("hero-section");
    if (dropmenustatus === false) {
      setdropmenustatus(true);
      if (heroSection) {
        heroSection.classList.toggle("blur");
      }
    } else if (dropmenustatus === true) {
      setdropmenustatus(false);
      if (heroSection) {
        heroSection.classList.toggle("blur");
      }
    }
  }

  return (
    <div>
      <button onClick={handleClick} className={styles.navdropdownBtn}>
        More
      </button>
      {dropmenustatus && (
        <div
          className={`${styles.dropdownmenu} bg-slate-100 rounded-md space-y-1 font-semibold`}>
          <Link href="#Explore">Explore</Link>
          <Link href="#Testimonials">Testimonials</Link>
          <Link href="/Login/">Log In</Link>
          <Link href="/SignUp/">Sign Up</Link>
          <Link href="/Contact/">Contact Us</Link>
        </div>
      )}
    </div>
  );
}
