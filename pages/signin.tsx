import { AuthContext } from '@/context/auth/AuthContext';
import signinStyles from '@/styles/Signin.module.scss';
import { CircularProgress } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useContext(AuthContext);
  const {
    state: { user },
  } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);

  useEffect(() => {
    // Prefetch the home page
    router.prefetch('/');
  }, [router]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    login({ user: 'test' });
    router.push('/');
  };

  if (user)
    return (
      <div>
        <CircularProgress size="6rem" />
      </div>
    );

  return (
    <div className={signinStyles.container}>
      <header className={signinStyles.header}>
        <div className="logo">
          <h2>NETFLIX CLONE</h2>
        </div>
      </header>
      <form action="#" className={signinStyles.form} onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <div className={signinStyles.inputs}>
          <input type="email" name="" id="" required placeholder="Email" />
          <div className={signinStyles.pwdWrapper}>
            <input
              type={showPassword ? 'text' : 'password'}
              name=""
              id=""
              required
              placeholder="Password"
            />
            <button
              className={signinStyles.showPwd}
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              SHOW
            </button>
          </div>
        </div>
        <div className={signinStyles.bottom}>
          <button type="submit" className={signinStyles.submit}>
            Sign In
          </button>
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
export default Signin;
