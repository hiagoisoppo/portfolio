'use client'
import { createContext, useContext, useState } from 'react'

interface ILanguageContext {
  isEnglish: boolean
  toggleLanguage: () => void
}

const LanguageContext = createContext<ILanguageContext>({} as ILanguageContext)

function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [isEnglish, setIsEnglish] = useState(false)

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish)
  }

  return (
    <LanguageContext.Provider
      value={{
        isEnglish,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

const useLanguage = () => useContext(LanguageContext)

export { LanguageProvider, useLanguage }
