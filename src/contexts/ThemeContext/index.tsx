import { useState, createContext, useContext, useEffect } from "react";

export type ThemeProps = {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    background: string;
    detailColor: string;
    detailBackground: string;
  };
};

interface ThemeContextProps {
  $theme: ThemeProps;
  $themeData: ThemeProps[];
  $toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const useThemeContext = () => useContext(ThemeContext);

const darkTheme = {
  name: "dark",
  colors: {
    primary: "var(--color-3)",
    secondary: "var(--color-1)",
    tertiary: "var(--color-2)",
    background: "var(--color-0)",
    detailColor: "var(--color-5)",
    detailBackground: "var(--color-5)"
  },
};

const lightTheme = {
  name: "light",
  colors: {
    primary: "var(--color-3)",
    secondary: "var(--color-3)",
    tertiary: "var(--color-4)",
    background: "var(--color-1)",
    detailColor: "var(--color-0)",
    detailBackground: "var(--color-5)"
  },
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(darkTheme);
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  function defTheme(theme: ThemeProps) {
    const newTheme = theme;
    setTheme(newTheme);
    const stringfyTheme = JSON.stringify(newTheme);
    localStorage.setItem("theme", stringfyTheme);
  }

  function defineStartTheme() {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      const currentTheme = JSON.parse(localTheme);

      if (currentTheme.name === darkTheme.name) {
        defTheme(darkTheme);
      } else {
        defTheme(lightTheme);
      }
    } else {
      if (prefersDarkMode) {
        defTheme(darkTheme);
      } else {
        defTheme(lightTheme);
      }
    }
  }

  useEffect(() => {
    defineStartTheme();
  }, []);

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      theme === darkTheme
        ? (body.style.backgroundColor = "var(--color-0)")
        : (body.style.backgroundColor = "var(--color-1)");
      theme === darkTheme
        ? (body.style.color = "var(--color-2)")
        : (body.style.color = "var(--color-4)");
    }
  }, [theme]);

  function handleChangeTheme() {
    if (theme === darkTheme) {
      defTheme(lightTheme);
    } else {
      defTheme(darkTheme);
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        $theme: theme,
        $toggleTheme: handleChangeTheme,
        $themeData: [darkTheme, lightTheme],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
