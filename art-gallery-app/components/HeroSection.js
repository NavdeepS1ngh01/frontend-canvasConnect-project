import SignUp from '@/app/SignUp/page'
import styles from '../app/Home/styles.module.css'
import Login from '@/app/Login/page';
import '../app/globals.css'

export default function HeroSection(){
    return(
        <div id="hero-section" className={`${styles.Hero}`}>
            <div className={styles.heroTop}>
            <img src="/images/hero-image.png" alt="Sale" className={styles.heroImage}/>
            <div className={styles.heroInfo}>
                <pre><h1><span className={styles.heroCatch}>Buy & Sell Your Favourite Artworks</span></h1></pre>
                <p>Dive into a world of creativity! Connect with artists and collectors,<br></br>
                        and find your next masterpiece or new home for your art. Join our vibrant community <span className={styles.underlineWord}>today!</span></p>
            </div>
            </div>
            <div className={styles.userActions}>
            <span className={`${styles.loginButton} hover:bg-blue-800 text-white font-bold py-2 px-4 rounded`}>
                <a href="/Login/">Log In </a></span>
                <span className={`${styles.signupButton} hover:bg-blue-800 text-white font-bold py-2 px-4 rounded`}><a href="/SignUp/">Sign Up</a></span>
            </div>
        </div>
    )
}