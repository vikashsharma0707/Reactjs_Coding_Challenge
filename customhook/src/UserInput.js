// hooks/useInput.js
import { useState } from 'react';

const useInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => setValue(e.target.value);
  const reset = () => setValue('');

  return { value, onChange, reset };
};

export default useInput;
