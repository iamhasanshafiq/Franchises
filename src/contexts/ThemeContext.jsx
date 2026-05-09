import {
  createContext,
  useContext,
  useLayoutEffect,
  useEffect,
  useState,
} from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  const getSystemTheme = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  };

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || getSystemTheme();
  });

  useLayoutEffect(() => {

    document.documentElement.classList.toggle(
      'dark',
      theme === 'dark'
    );

    localStorage.setItem('theme', theme);

  }, [theme]);

  useEffect(() => {

    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) return;

    const mediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );

    const handleChange = (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };

  }, []);

  const toggleTheme = () => {

    setTheme(prev =>
      prev === 'dark' ? 'light' : 'dark'
    );
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);