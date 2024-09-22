import styles from "./styles.module.css";
import Image from "next/image";
export default function Contact(){
    return(
        <div>
            <div className={styles.contactContainer}>
            <div className={`${styles.contactHeading}`}>
                <h1 className="font-bold text-5xl">Contact Us</h1>
                <p>We provide <span className="font-semibold text-[#17b2ff]">24/7</span> support for our customers. Please fill in the form below and state your enquiries!</p>
            </div>
            <div className={styles.infoAndForm}>
            <div className={styles.contactForm}>
            <div className={`${styles.formitems} rounded-md`}>
            <div className={styles.LoginLogo}>
            <Image
              src="/images/logo.png"
              alt="Logo"
              className={styles.logoImage}
              width={100}
              height={100}
            />
            <h1 className="font-semibold">Canvas Connect</h1>
          </div>
            <label className="font-semibold">Name<sup>★</sup></label>
            <input type="text" className="focus:ring-sky-500 border-2 border-[#17b2ff] w-96 rounded-md" ></input>
            <label className="font-semibold">Email<sup>★</sup></label>
            <input type="email" className="focus:ring-sky-500 border-2 border-[#17b2ff] w-96 rounded-md" ></input>
            <label className="font-semibold">Phone Number</label>
            <input type="password" className="focus:ring-sky-500 border-2 border-[#17b2ff] w-96 rounded-md"></input>
            <label className="font-semibold">Message<sup>★</sup></label>
            <textarea className="focus:ring-sky-500 border-2 border-[#17b2ff] w-96 h-48 rounded-md"></textarea>
            <div className={styles.userActions}>
              <button className={`${styles.submitButton} rounded-full font-bold bg-[#17b2ff] text-white w-48 hover:bg-blue-800 `}>
                Send
              </button>
              <a href="/"> <button className={`${styles.submitButton} rounded-full font-bold bg-[#17b2ff] text-white w-48 hover:bg-blue-800`}>
                  Home
                </button> </a>
            </div>
            </div>
        </div>
        <div className={styles.contactInfo}>
            <div>
                <p>Company Information</p>
                <p>Hong Kong, Kowloon, Golden Building, 1412</p>
            </div>
            <div>
                <p>Call Us</p>
                <p>+852 2999 9999</p>
            </div>
            <div>
                <p>Company Information</p>
                <p>Canvas Connect International</p>
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}