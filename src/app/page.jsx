import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGem,
  faPalette,
  faHands,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Bienvenid@ a<span className={styles.highlight}> EnredArte</span>
            </h1>
            <p className={styles.heroDescription}>
              Donde la elegancia se encuentra con la artesanía. Descubre nuestra
              exclusiva colección de bisutería, maquillaje y pulseras hechas a
              mano con amor y dedicación.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/productos" className={styles.primaryButton}>
                Ver Productos
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
              <Link href="/about" className={styles.secondaryButton}>
                Conoce Nuestra Historia
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <span className={styles.logoBadgePage}>
              <span className={styles.logoBadgeInner}>
                <Image
                  src="/logo_enredarte.jpg"
                  alt="EnredArte Logo"
                  width={400}
                  height={400}
                  className={styles.logoImage}
                  priority
                />
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Categorías Section */}
      <section className={styles.categories}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Nuestras Creaciones</h2>
          <p className={styles.sectionSubtitle}>
            Explora nuestras categorías de productos artesanales
          </p>
        </div>

        <div className={styles.categoriesGrid}>
          <div className={styles.categoryCard}>
            <div className={styles.categoryIcon}>
              <FontAwesomeIcon icon={faGem} />
            </div>
            <h3 className={styles.categoryTitle}>Bisutería</h3>
            <p className={styles.categoryDescription}>
              Joyería artesanal única que realza tu estilo personal
            </p>
            <Link href="/bisuteria" className={styles.categoryLink}>
              Descubrir más
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>

          <div className={styles.categoryCard}>
            <div className={styles.categoryIcon}>
              <FontAwesomeIcon icon={faPalette} />
            </div>
            <h3 className={styles.categoryTitle}>Maquillaje</h3>
            <p className={styles.categoryDescription}>
              Productos de belleza naturales para resaltar tu esencia
            </p>
            <Link href="/maquillaje" className={styles.categoryLink}>
              Explorar
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>

          <div className={styles.categoryCard}>
            <div className={styles.categoryIcon}>
              <FontAwesomeIcon icon={faHands} />
            </div>
            <h3 className={styles.categoryTitle}>Pulseras</h3>
            <p className={styles.categoryDescription}>
              Pulseras tejidas a mano con significado y estilo único
            </p>
            <Link href="/pulseras" className={styles.categoryLink}>
              Ver colección
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2 className={styles.aboutTitle}>
              Arte en Cada <span className={styles.highlight}>Detalle</span>
            </h2>
            <p className={styles.aboutDescription}>
              En EnredArte, creemos que la verdadera belleza reside en los
              detalles y en la historia detrás de cada creación. Nuestros
              productos son elaborados cuidadosamente a mano, utilizando
              materiales de calidad y mucho amor.
            </p>
            <p className={styles.aboutDescription}>
              Cada pieza que creamos está impregnada de pasión y dedicación,
              convirtiendo simples materiales en obras de arte que puedes llevar
              contigo todos los días.
            </p>
            <Link href="/about" className={styles.primaryButton}>
              Conoce Más Sobre Nosotros
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
          <div className={styles.aboutImage}>
            {false ? (
              <Image
                src="/about-artisan.svg"
                alt="Artesana creando productos"
                width={400}
                height={500}
                className={styles.aboutImageContent}
              />
            ) : (
              <div className={styles.imagePlaceholder}>
                <FontAwesomeIcon
                  icon={faHands}
                  className={styles.placeholderIcon}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            ¿List@ para Descubrir{" "}
            <span className={styles.highlight}>Tu Pieza Perfecta</span>?
          </h2>
          <p className={styles.ctaDescription}>
            Explora nuestra colección y encuentra esa creación especial que
            habla directamente a tu corazón.
          </p>
          <Link href="/productos" className={styles.ctaButton}>
            Comenzar a Explorar
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>
    </div>
  );
}
