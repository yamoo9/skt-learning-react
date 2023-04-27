import { func, string } from 'prop-types';
import { useId } from 'react';

function PasswordInput({ label = '비밀번호', value, onChange }) {
  const id = useId();

  return (
    <div className="PasswordInput">
      <label htmlFor={id}>{label}</label>
      <input type="password" id={id} value={value} onChange={onChange} />
    </div>
  );
}

PasswordInput.propTypes = {
  value: string,
  onChange: func,
  label: string,
};

export default PasswordInput;
