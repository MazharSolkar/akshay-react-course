import { createContext } from 'react';

const AgeContext = createContext({
  age: 'Default age (not wrapped)',
});

export default AgeContext;
