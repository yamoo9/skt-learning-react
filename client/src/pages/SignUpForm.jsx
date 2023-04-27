import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import { SignUpButton } from '../components/Button';

const SignUpForm = () => {
  return (
    <form className="SignUpForm">
      <EmailInput />
      <PasswordInput id="signUpPassword" />
      <PasswordInput id="signUpPasswordConfirm" label="비밀번호 확인" />
      <SignUpButton />
    </form>
  );
};

export default SignUpForm;
