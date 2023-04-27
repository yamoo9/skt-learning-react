import { string } from 'prop-types';
import SrOnly from './SrOnly';

function EmailInput({ id, label = '이메일' }) {
  return (
    <div className="EmailInput">
      {/* <label htmlFor={id}>{label}</label> */}
      <SrOnly as="label" htmlFor={id}>
        {label}
      </SrOnly>
      <input type="email" id={id} />
    </div>
  );
}

EmailInput.propTypes = {
  id: string.isRequired,
  label: string,
};

export default EmailInput;
