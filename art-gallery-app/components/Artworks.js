import styles from '../app/Home/styles.module.css'
export default function Artworks({image_url,image_name,image_artist,image_description}){
    return(
        <div className={styles.artworkContainer}>
        <div className={`${styles.artworkBox} hover:shadow-xl hover:bg-sky-50 hover:cursor-pointer`}>
        <img src={image_url} className={styles.artworksImage} loading="lazy" alt={image_name}></img>
        <p>{image_name}</p>
        <p>{image_artist}</p>
        <p>{image_description}</p>
        </div>
        </div>
    )
}