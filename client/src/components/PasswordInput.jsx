import { string } from 'prop-types';

function PasswordInput({ id, label = '비밀번호' }) {
  return (
    <div className="PasswordInput">
      <label htmlFor={id}>{label}</label>
      <input type="password" id={id} />
    </div>
  );
}

PasswordInput.propTypes = {
  id: string.isRequired,
  label: string,
};

export default PasswordInput;
