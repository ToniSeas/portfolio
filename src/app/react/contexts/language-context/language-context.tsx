import { FC, ReactNode, createContext, useState, useContext } from 'react';
import { LanguageList } from './language-mapper';

interface LangProviderProps {
  children: ReactNode;
}

interface LanguageContextProps {
  currentLanguage: string;
  setLanguage: (language: string) => void;
}

export const LanguageContext = createContext({} as LanguageContextProps);

// This function component is used to provide the language context
const LanguageProvider: FC<LangProviderProps> = ({ children }) => {
  const defaultLanguage = getStoredLanguage();
  let mainLanguage = 'es';

  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage || mainLanguage);

  const provider = {
    currentLanguage,
    setLanguage: (language: string) => {
      const newLanguage = LanguageList[language as keyof typeof LanguageList] ? language : mainLanguage;
      setCurrentLanguage(newLanguage);
      setStoredLanguage(newLanguage);
    }
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
}

// This function component gets the text according to the tid (text id)
export const Text = ({tid}: {tid: string}): JSX.Element => {
  const languageContextAux = useContext(LanguageContext);
  let languageData: {} = {};
  languageData = LanguageList[languageContextAux.currentLanguage as keyof typeof LanguageList];
  let dictionaryAux = languageData['dictionary' as keyof typeof languageData];

  let jsonIds = tid.split(".");
  let text: string = tid;
  jsonIds.forEach(element => {
    try {
      dictionaryAux = dictionaryAux[element as keyof typeof dictionaryAux];
    } catch {
      console.error(`The next tid is not recognized: '${tid}'`)
    }
  });

  text = dictionaryAux as string || tid;
  return text as unknown as JSX.Element;
}

// Storage language in cookies
function setStoredLanguage(language: string) {
  window.localStorage.setItem('user-lang', language);
}

// Get language from cookies
function getStoredLanguage() {
  return window.localStorage.getItem('user-lang');
}

export default LanguageProvider;