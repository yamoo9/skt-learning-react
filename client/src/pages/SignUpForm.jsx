import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";
import { SignUpButton } from "../components/Button";

const SignUpForm = () => {
  return (
    <form className="SignUpForm">
      <EmailInput />
      <PasswordInput />
      <PasswordInput />
      <SignUpButton />
    </form>
  );
}

export default SignUpForm;