import styles from "./styles.module.css";
import Image from "next/image";
export default function SignUp() {
  return (
    <div>
      <div className={styles.signupContainer}>
        <div className={styles.benefitsSection}>
          <div className={styles.benefit1}>
            <img src="/images/checkmar.png"></img>
            <p className="font-extrabold hover:text-sky-500 cursor-default ">
              24/7 Support
            </p>
          </div>
          <div className={styles.benefit2}>
            <img src="/images/checkmar.png"></img>
            <p className="font-extrabold hover:text-sky-500 cursor-default">
              Biggest Catalogue
            </p>
          </div>
          <div className={styles.benefit3}>
            <img src="/images/checkmar.png"></img>
            <p className="font-extrabold hover:text-sky-500 cursor-default">
              Affordable Prices
            </p>
          </div>
        </div>
        <div className={styles.signupForm}>
          <div className={styles.signupLogo}>
            <Image
              src="/images/logo.png"
              alt="Logo"
              className={styles.logoImage}
              width={100}
              height={100}
            />
            <h1 className="font-semibold">Canvas Connect</h1>
          </div>
          <div className={`${styles.formitems} rounded-md`}>
            <h1 className="font-extrabold">Create a new Account</h1>
            <label className="font-semibold">Name</label>
            <input
              type="text"
              className="focus:ring-sky-500 border-2 border-[#17b2ff] w-96 rounded-md"
            ></input>
            <label className="font-semibold">Email</label>
            <input
              type="email"
              className="focus:ring-sky-500 border-2 border-[#17b2ff] w-96 rounded-md"
            ></input>
            <label className="font-semibold border-[#17b2ff] w-96 rounded-md">Select Country</label>
            <select id="country" name="country" className="w-96 rounded-md focus:ring-sky-500 border-2 border-[#17b2ff]">
              <option value="usa">USA</option>
              <option value="uk">UK</option>
              <option value="india">India</option>
              <option value="hong-kong-sar">Hong Kong SAR</option>
              <option value="canada">Canada</option>
              <option value="australia">Australia</option>
            </select>
            <label className="font-semibold">Password</label>
            <input
              type="password"
              className="focus:ring-sky-500 border-2 border-[#17b2ff] w-96 rounded-md"
            ></input>
            <div className={styles.privacyPolicy}>
              <input type="checkbox"></input>
              <p>
                By clicking, you agree to the{" "}
                <span className="font-bold text-sky-500 cursor-pointer">
                  privacy policy
                </span>{" "}
                and{" "}
                <span className="font-bold text-sky-500 cursor-pointer">
                  user agreement.
                </span>
              </p>
            </div>
            <div className={styles.userActions}>
              <button
                className={`${styles.submitButton} rounded-full font-bold bg-[#17b2ff] text-white w-48 hover:bg-blue-800`}
              >
                Sign Up
              </button>
              <a href="/">
                <button
                  className={`${styles.submitButton} rounded-full font-bold bg-[#17b2ff] text-white w-48 hover:bg-blue-800`}
                >
                  Home
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
