import styles from '../app/Home/styles.module.css'
import Image from 'next/image'
import DropdownMenu from './DropdownMenu'
import Link from 'next/link'
export default function Header(){
    return(
        <header className={styles.Header}>
                <nav className={styles.navbar}>
                    <div className={styles.navbarLinks}>
                    <div className={styles.navbarLogo}>
                    <Image src="/images/logo.png" alt="Logo" className={styles.logoImage} width={100} height={100} />
                    <h1 className={styles.navtitle}>Canvas <span className={styles.navtitleDesign}>Connect</span></h1>
                    </div>
                        <a href="#TopSelling">Top Selling</a>
                        <a href="#testimonials">Testimonials</a>
                    </div>
                    <div className={styles.navbarLinks2}>
                        <Link href="/Login/">Log In</Link>
                        <a href="/SignUp/">Sign Up</a>
                        <a href='/Contact/'><button className='rounded-full text-white font-semibold'>Contact Us</button></a>
                    </div>
                    <DropdownMenu styles={styles}/>
                </nav>
            </header>
    )
}