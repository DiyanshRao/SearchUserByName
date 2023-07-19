import userEvent from "@testing-library/user-event";
import { useState } from "react";

function Form({ search }) {
  const [term, setTerm] = useState("");

  function handleChange(evt) {
    setTerm(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    search(term);
    setTerm("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <intput value={term} onChange={handleChange}></intput>
      <button>Search!</button>
    </form>
  );
}
export default Form;
