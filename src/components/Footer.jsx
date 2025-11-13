import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faStore, 
    faPhone, 
    faEnvelope, 
    faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/components/footer.module.css'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                
                {/* Company Info */}
                <div className={styles.footerSection}>
                    <div className={styles.footerLogo}>
                        <FontAwesomeIcon icon={faStore} className={styles.logoIcon} />
                        <span>EnredArte</span>
                    </div>
                    <p className={styles.footerDescription}>
                        Creaciones únicas de bisutería, maquillaje y pulseras hechas a mano con amor y dedicación.
                    </p>
                    <div className={styles.socialLinks}>
                        <a href="https://instagram.com/enred.arte_puebla" className={styles.socialLink} aria-label="Instagram">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className={styles.footerSection}>
                    <h3 className={styles.footerTitle}>Enlaces Rápidos</h3>
                    <div className={styles.footerLinks}>
                        <Link href="/" className={styles.footerLink}>Inicio</Link>
                        <Link href="/maquillaje" className={styles.footerLink}>Maquillaje</Link>
                        <Link href="/pulseras" className={styles.footerLink}>Pulseras</Link>
                        <Link href="/about" className={styles.footerLink}>Sobre Nosotros</Link>
                    </div>
                </div>

                {/* Contact Info */}
                <div className={styles.footerSection}>
                    <h3 className={styles.footerTitle}>Contacto</h3>
                    <div className={styles.contactInfo}>
                        {/* <div className={styles.contactItem}>
                            <FontAwesomeIcon icon={faPhone} className={styles.contactIcon} />
                            <span>+34 123 456 789</span>
                        </div>
                        <div className={styles.contactItem}>
                            <FontAwesomeIcon icon={faEnvelope} className={styles.contactIcon} />
                            <span>info@enredarte.com</span>
                        </div> */}
                        <div className={styles.contactItem}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.contactIcon} />
                            <span>Heroica Puebla de Zaragoza , Puebla, México</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className={styles.footerBottom}>
                <div className={styles.footerBottomContainer}>
                    <p>&copy; {currentYear} EnredArte. Todos los derechos reservados.</p>
                    <div className={styles.footerLegal}>
                        <Link href="/politica-privacidad" className={styles.legalLink}>
                            Política de Privacidad
                        </Link>
                        <Link href="/terminos-servicio" className={styles.legalLink}>
                            Términos de Servicio
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}