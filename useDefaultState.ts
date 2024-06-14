import { useState } from "react";

// Returns the state value if it is not undefined nor null, otherwise returns the default value.
export default function useDefault(initialValue, defaultValue) {
  const [state, setState] = useState(initialValue);
  if (state === undefined || state === null) {
    return [defaultValue, setState];
  }
  return [state, setState];
}
