import { useRef, forwardRef } from "react";

export const ForwardRefExample = () => {
  const myInputRef = useRef(null);

  function handleClick() {
    myInputRef.current.focus();
    myInputRef.current.style.opacity = 0.2;
  }

  return (
    <form>
      <MyInput label="Enter your name:" ref={myInputRef} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </form>
  );
};

const MyInput = forwardRef(function MyInput(props, myInputRef) {
  const { label, ...otherProps } = props;

  return (
    <label>
      {label}
      <input {...otherProps} ref={myInputRef} />
    </label>
  );
});
