import React from "react";

const defaultValue = {
  locale: 'en',
  setLocale: (value) => {} 
}

export default React.createContext(defaultValue);