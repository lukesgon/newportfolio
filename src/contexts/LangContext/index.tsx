import { createContext, useState, useContext } from "react";
import PTLang from '../../locales/ptbr.json';
import ENLang from '../../locales/enus.json';

interface LangProps {
  [key: string]: string;
};

interface LangContextProps {
  lang: boolean,
  setLang: ()=> void,
  library: LangProps
}

const LangContext = createContext<LangContextProps>({} as LangContextProps);

interface LangProviderProps {
  children: React.ReactNode;
};

export const useLang = ()=> {
  return useContext(LangContext);
};

export const LangProvider = ({children}:LangProviderProps)=> {
  const preferLang = navigator.language.split('-')[0];
  const localLang = localStorage.getItem('lang');
  const currentLang = localLang && JSON.parse(localLang) || (preferLang !== 'pt');

  const [lang, setLang] = useState(currentLang);
  const library:LangProps = lang ? ENLang : PTLang;

  function handleChangeLang() {
    if (library === ENLang) {
      setLang(false);
      localStorage.setItem('lang', JSON.stringify(false));
    } else {
      setLang(true)
      localStorage.setItem('lang', JSON.stringify(true));
    }
  };

  return(
    <LangContext.Provider value={{ lang: lang, setLang: handleChangeLang, library: library}}>
      {children}
    </LangContext.Provider>
  )
}