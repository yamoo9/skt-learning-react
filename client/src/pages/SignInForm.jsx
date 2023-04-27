import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import { SignInButton } from '../components/Button';

const SignInForm = () => {
  return (
    <form className="SignInForm">
      <EmailInput id="signInEmail" label="사용자 계정" />
      <PasswordInput id="signInPassword" />
      <SignInButton />
    </form>
  );
};

export default SignInForm;
