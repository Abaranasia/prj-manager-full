import { useState } from 'react'

export const useForm = (initialState = {}) => {
  /* Custom hook to store data from form elements */

  const [values, setValues] = useState(initialState);

  const reset = () => { // form reset
    setValues(initialState)
  }

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value
    })
  };

  return [values, handleInputChange, reset]
}
