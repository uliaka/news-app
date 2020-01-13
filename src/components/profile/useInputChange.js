import { useState } from "react";

const useInputChange = (initialState) => {
  const [inputs, setValues] = useState(initialState);
  const handleInputChange = (event) => {
    setValues({
      ...inputs,
      [event.target.name]: event.target.value
    })};
    return [inputs, handleInputChange]
  }

  export default useInputChange;
