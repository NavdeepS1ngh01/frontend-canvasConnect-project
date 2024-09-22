import Image from "next/image";
import LoginBox from "@/components/LoginBox";
import styles from "./styles.module.css";
export default function Login() {
  return (
    <div>
      <div className={styles.LoginContainer}>
        <div className={styles.LoginComponent}>
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
          <p className="font-bold">Sign in to your account</p>
          <div className={styles.loginForm}>
            <form className={styles.Formitems}>
              <label>Email Address</label>
              <input
                type="email"
                className="focus:ring-sky-500 border-2 border-[#17b2ff] w-96 rounded-md"></input>
              <label>Password</label>
              <input
                type="password"
                className="focus:ring-sky-500 border-2 border-[#17b2ff] rounded-md"></input>
              <div className={styles.formremember}>
                <input
                  type="checkbox"
                  className="focus:ring-sky-500 border-2 border-[#17b2ff] rounded-md"></input>
                <label>Remember Me</label>
                <a href="#" className={styles.forgotPassword}>
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
          <div className={styles.userActions}>
          <button
            className={`${styles.submitButton} rounded-full font-bold bg-[#17b2ff] text-white w-48 hover:bg-blue-800`}
          >
            Log In
          </button>
          <a href="/">
          <button
            className={`${styles.submitButton} rounded-full font-bold bg-[#17b2ff] text-white w-48 hover:bg-blue-800`}
          >
            Home
          </button></a>
          </div>
        </div>
        <img
          src="/images/loginImage.png"
          alt="A person Painting"
          className={styles.loginImage}
        />
      </div>
    </div>
  );
}
