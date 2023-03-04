import signinStyles from '@/styles/Signin.module.scss';
import Link from 'next/link';

const signin = () => {
  return (
    <div className={signinStyles.container}>
      <div className="logo">
        <h2>NETFLIX CLONE</h2>
      </div>
      <form action="#" className={signinStyles.form}>
        <h1>Sign In</h1>
        <div className={signinStyles.inputs}>
          <input type="email" name="" id="" required />
          <input type="password" name="" id="" required />
        </div>
        <button type="submit">Sign In</button>
        <div className={signinStyles.bottom}>
          <div className={signinStyles.group}>
            <div className={signinStyles.checkGroup}>
              <input type="checkbox" name="" id="" defaultChecked />
              <span>Remember me</span>
            </div>
            <span>Need help?</span>
          </div>
          <div className={signinStyles.group}>
            <p>New to Netflix?</p>
            <Link href="/register">Sign up now</Link>
          </div>
        </div>
      </form>
    </div>
  );
};
export default signin;
