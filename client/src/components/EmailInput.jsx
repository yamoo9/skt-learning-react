import { useId } from 'react';
import { func, string } from 'prop-types';

// useState: State Hook - React Component (Controlled)
// Debounce
// useRef: Reference Hook

function EmailInput({ label = '이메일', value, onChange }) {
  const id = useId();

  return (
    <div className="EmailInput">
      <label htmlFor={id}>{label}</label>
      {/* <SrOnly as="label" htmlFor={id}>
        {label}
      </SrOnly> */}
      <input type="email" id={id} value={value} onChange={onChange} />
    </div>
  );
}

EmailInput.propTypes = {
  label: string,
  value: string,
  onChange: func,
};

export default EmailInput;
