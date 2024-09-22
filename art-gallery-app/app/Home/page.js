import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import TopSelling from '@/components/TopSelling'
import styles from './styles.module.css'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
export default function Home(){
    return(
        <div className={styles.mainContainer}>
            <Header/>
            <HeroSection/>
            <TopSelling/>
            <Testimonials/>
            <Footer/>
        </div>
    )
}