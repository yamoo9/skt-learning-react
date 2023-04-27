import axios from 'axios';
import { useState } from 'react';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import { SignInButton } from '../components/Button';

const SignInForm = () => {
  const [email, setEmail] = useState('user-name@company.io');
  const [password, setPassword] = useState('숫자, 영문 조합 6자리 이상 입력');

  // React 할 수 없는 일 (side effects)
  // 이벤트 핸들러
  // 사이드 이펙트를 처리하는 전용 React 훅
  // - 네트워크 요청/응답
  // - DOM 요소 접근/조작
  // - 이벤트 구독/취소
  // useEffect (99%)
  // useLayoutEffect (1%)
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/users', {
        email,
        password,
      });
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form className="SignInForm">
      <EmailInput
        label="사용자 계정"
        value={email}
        onChange={handleChangeEmail}
      />
      <PasswordInput
        id="signInPassword"
        value={password}
        onChange={handleChangePassword}
      />
      <SignInButton onClick={handleSignIn} />
    </form>
  );
};

export default SignInForm;
