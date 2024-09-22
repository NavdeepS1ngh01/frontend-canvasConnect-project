import Reviews from "./Reviews";
import styles from '../app/Home/styles.module.css'

const reviewsData = [
        {
            imageUrl: '/images/user1.png',
            userName: 'Alice',
            reviewTitle: 'Great service, highly recommend!',
            userReview: "I ordered 2 paintings for my new house and they turned out amazing! The quality and detail are exceptional."
        },
        {
            imageUrl: '/images/user2.png',
            userName: 'Bob',
            reviewTitle: 'Good experience overall.',
            userReview: "The service was good and the product met my expectations. I would definitely consider ordering again."
        },
        {
            imageUrl: '/images/user3.png',
            userName: 'Charlie',
            reviewTitle: 'Satisfactory, but room for improvement.',
            userReview: "The product quality was decent, but there were some delays in delivery. Overall, a satisfactory experience."
        },
        {
            imageUrl: '/images/user4.png',
            userName: 'Diana',
            reviewTitle: 'Great Product Quality!',
            userReview: "The product quality is great and the customer service was very helpful. I am happy with my purchase."
        }
];

export default function Testimonials() {
    return (
        <div className={styles.Testimonials} id="#testimonials">
            <h1 className={styles.TestimonailsHeading}>Testimonials</h1>
        <div id="testimonials" className={styles.TestimonialsContainer}>
            {reviewsData.map((review, index) => (
                <Reviews
                    key={index}
                    imageUrl={review.imageUrl} 
                    userName={review.userName}
                    reviewTitle={review.reviewTitle}
                    userReview={review.userReview}
                />
            ))}
        </div>
        </div>
    );
}
