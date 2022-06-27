import { useRef, forwardRef, useImperativeHandle } from "react";

export const ForwardRefUseImperativeHandleExample = () => {
  const myInputRef = useRef(null);

  function handleClick() {
    myInputRef.current.focus();
    myInputRef.current.style.opacity = 0.5; // This gives error because the DOM node isn't exposed
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
  const inputRef = useRef(null);

  useImperativeHandle(
    myInputRef,
    () => {
      return {
        focus() {
          //only expose focus()
          inputRef.current.focus();
        },
      };
    },
    []
  );

  return (
    <label>
      {label}
      <input {...otherProps} ref={inputRef} />
    </label>
  );
});
