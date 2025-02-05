import { createContext, useContext, useState } from "react";

interface DetailProps {
  details: boolean,
  handleDetails: ()=> void,
};

const DetailContext = createContext({} as DetailProps);

interface DetailProviderProps {
  children: React.ReactNode;
};

export const useDetailsContext = ()=> useContext(DetailContext);

export const DetailProvider = ({children}:DetailProviderProps)=> {
  const [details, setDetails] = useState(false)

  function handleDetails() {
    const newValue = details ? false : true;
    setDetails(newValue);
  }

  const value = { details, handleDetails }

  return(
    <DetailContext.Provider value={value}>
      {children}
    </DetailContext.Provider>
  )
};
