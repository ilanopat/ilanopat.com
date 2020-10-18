import React, { useEffect, useState } from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { lightTheme, darkTheme } from "./Theme"
import Header from "./Header"
import Footer from "./Footer"
import ContainerWrapper from "./Container"

const ThemeContext = React.createContext()

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
`

const Provider = ({ children }) => {
  const [themeMode, setThemeMode] = React.useState("light")

  const setMode = mode => {
    localStorage.setItem("theme", mode)
    setThemeMode(mode)
  }

  useEffect(() => {
    const localTheme = localStorage.getItem("theme")
    if (localTheme) {
      setMode(localTheme)
    } else {
      setMode("light")
    }
  }, [])

  const handleThemeChange = () => {
    if (themeMode === "light") {
      setMode("dark")
    } else {
      setMode("light")
    }
  }

  return (
    <ThemeContext.Provider value={{ themeMode, handleThemeChange }}>
      <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <ContainerWrapper>
          <Header />
          {children}
          <Footer />
        </ContainerWrapper>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default Provider

export const useTheme = () => React.useContext(ThemeContext)
