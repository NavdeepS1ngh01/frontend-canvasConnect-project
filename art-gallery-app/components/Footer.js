import styles from '../app/Home/styles.module.css'
import Image from 'next/image'
export default function Footer(){
    return(
        <div className={styles.footer}>
        <div className={styles.footerLogo}>
        <Image src="/images/logo.png" alt="Logo" className={styles.logoImage} width={100} height={100} />
        <h1 className={styles.navtitle}>Canvas <span className={styles.footertitleDesign}>Connect</span></h1>
        </div>
        <div className={styles.footerLinks}>
            <a href='#Testimonails'>Testimonials</a>
            <a href="#TopSelling">Top Selling</a>
            <a>FAQ</a>
        </div>
        </div>
    )
}