import registerStyles from '@/styles/Register.module.scss';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from 'next/link';

const register = () => {
  return (
    <div className={registerStyles.container}>
      <div className={registerStyles.banner}>
        <small>NEW!</small>
        <p>
          Plans now start at <strong>$6.99</strong>.
        </p>
        <button>
          Learn More <ArrowForwardIosIcon />
        </button>
      </div>
      <section className={registerStyles.section}>
        <header className={registerStyles.header}>
          <div className="logo">
            <h2>NETFLIX CLONE</h2>
          </div>
          <Link href="/signin">Sign In</Link>
        </header>
        <div className={registerStyles.content}>
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className={registerStyles.inputGroup}>
            <input type="email" name="" id="" placeholder="Email address" />
            <button type="submit">
              Get Started <ArrowForwardIosIcon />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default register;
