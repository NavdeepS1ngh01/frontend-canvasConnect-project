import styles from '../app/Home/styles.module.css'
export default function Reviews({imageUrl,userName,userReview,reviewTitle}){
    return(
        <div id="Reviews" className={`${styles.reviewBox} hover:shadow-xl hover:bg-sky-50 hover:cursor-pointer shadow-inner`}>
        <img src={imageUrl}></img>
        <div className={styles.reviewuserInfo}>
        <p>{reviewTitle}</p>
        <p>{userReview}</p>
        {/* <p>{userName}</p> */}
        </div>
        </div>
    )
}