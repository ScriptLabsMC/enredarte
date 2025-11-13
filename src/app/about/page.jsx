import ProfileCard from "@/components/ProfileCard";
import styles from "@/styles/AboutPage.module.css";
import { faGem, faHeart, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata = {
  title: "Sobre Enredarte",
  description:
    "Conoce la historia detrás de Enredarte, un proyecto entre amigos que buscan compartir lo que disfrutan crear.",
};

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <section className={styles.intro}>
        <h1>Sobre Enredarte</h1>
        <p>
          Enredarte nació de la idea de hacer algo juntos entre amigos. Sin
          pretensiones, solo con ganas de compartir lo que nos gusta hacer y
          transformar el tiempo libre en algo bonito. Cada producto cuenta una
          historia, y detrás de cada uno hay alguien que disfruta crear.
        </p>
      </section>

      <section className={styles.profile}>
        <ProfileCard />
      </section>

      <section className={styles.story}>
        <h2>Nuestra historia</h2>
        <p>
          Todo comenzó con una charla casual y una pregunta sencilla: “¿y si
          empezamos algo nuestro?”. Así nació Enredarte. Uno de nosotros empezó
          con pulseras tejidas a mano, otro con maquillaje, y poco a poco fuimos
          dando forma al proyecto. No somos artesanos ni expertos, solo personas
          comunes con la ilusión de compartir algo hecho con dedicación.
        </p>
      </section>

      <section className={styles.values}>
        <h2>Lo que queremos transmitir</h2>
        <ul>
          <li>
            <FontAwesomeIcon style={{
              color: "var(--color-brand-primary)"
            }} icon={faGem}/> Crear algo propio puede ser más valioso que hacerlo perfecto.
          </li>
          <li><FontAwesomeIcon icon={faHeart} style={{
            color: "#de3163"
          }}/> Cada detalle cuenta, sobre todo cuando se hace con cariño.</li>
          <li>
            <FontAwesomeIcon icon={faShareAlt} style={{
              color: "var(--color-info)"
            }} /> Compartir lo que haces puede inspirar a otros a crear también.
          </li>
        </ul>
      </section>

      <section className={styles.closing}>
        <h2>Lo que somos hoy</h2>
        <p>
          Enredarte es un espacio para experimentar, aprender y disfrutar lo que
          hacemos. Queremos que cada persona que vea nuestros productos sienta
          la conexión humana detrás, porque más allá de vender, lo que buscamos
          es compartir un pedacito de nosotros.
        </p>
      </section>
    </main>
  );
}
