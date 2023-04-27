import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";
import { SignInButton } from "../components/Button";

const SignInForm = () => {
  return (
    <form className="SignInForm">
      <EmailInput />
      <PasswordInput />
      <SignInButton />
    </form>
  );
}

export default SignInForm;