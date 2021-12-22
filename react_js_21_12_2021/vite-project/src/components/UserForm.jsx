import React, { useRef, useState } from "react";

const UserForm = () => {
  const [isDisabled, seTisDisabled] = useState(true);

  const nameRef = useRef();
  const emailRef = useRef();
  const pswRef = useRef();

  const isValid = () => {
    return (
      !nameRef.current.value || !emailRef.current.value || !pswRef.current.value
    );
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(nameRef.current.value);
          console.log(emailRef.current.value);
          console.log(pswRef.current.value);
        }}
      >
        <br />
        <input
          ref={nameRef}
          type="text"
          onChange={() => seTisDisabled(isValid())}
        />
        <br />
        <br />
        <input
          ref={emailRef}
          type="text"
          onChange={() => seTisDisabled(isValid())}
        />
        <br />
        <br />
        <input
          ref={pswRef}
          type="text"
          onChange={() => seTisDisabled(isValid())}
        />
        <br />
        <br />
        <input type="submit" value={"submit"} disabled={isDisabled} />
      </form>
    </div>
  );
};

export default UserForm;
