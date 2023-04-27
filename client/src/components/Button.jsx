import { memo } from 'react';

// eslint-disable-next-line react/prop-types
export const SignInButton = memo(function SignInButton({ onClick }) {
  return (
    <button type="submit" onClick={onClick}>
      로그인
    </button>
  );
});

export const SignUpButton = () => {
  return <button type="submit">회원가입</button>;
};

export const NormalButton = () => {
  return <button type="submit">일반 버튼</button>;
};
