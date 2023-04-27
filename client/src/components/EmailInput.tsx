interface Props {
  id: string;
}

function EmailInput(props: Props): JSX.Element {
  return (
    <div className="EmailInput">
      <label htmlFor={props.id}>이메일</label>
      <input type="email" id={props.id} />
    </div>
  );
}

export default EmailInput;
