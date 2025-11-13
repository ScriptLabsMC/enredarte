"use client";

import styles from "@/styles/components/ProfileCard.module.css";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProfileCard() {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <img
          src="/logo_enredarte.jpg"
          alt="Logo Enredarte"
          className={styles.logo}
        />
        <h2 className={styles.title}>Enredarte</h2>
        <p className={styles.description}>
          Creaciones artesanales hechas a mano con amor, detalle y tradición
          mexicana.
        </p>
        <div className={styles.socials}>
          <a
            href="https://instagram.com/enredarte.mx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram}/>
          </a>
          <a
            href="https://facebook.com/enredarte.mx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook}/>
          </a>
          <a
            href="https://www.tiktok.com/@enredarte.mx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <FontAwesomeIcon icon={faTiktok}/>
          </a>
        </div>
      </div>
    </section>
  );
}
