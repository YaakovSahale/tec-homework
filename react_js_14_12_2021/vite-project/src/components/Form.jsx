import { useState } from "react";

export default function Form() {
  const [{ name, email, password }, setFormDetails] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log({ name, email, password });
        }}
      >
        <label>name: </label>
        <input
          onChange={(e) =>
            setFormDetails({ name: e.target.value, email, password })
          }
          type="text"
        />
        <br />
        <label>email: </label>
        <input
          onChange={(e) =>
            setFormDetails({ name, email: e.target.value, password })
          }
          type="text"
        />
        <br />
        <label>password: </label>
        <input
          onChange={(e) =>
            setFormDetails({ name, email, password: e.target.value })
          }
          type="text"
        />
        <br />
        <button>submit</button>
      </form>
    </div>
  );
}
