export const getSystemTheme = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

export const applyTheme = (theme) => {

  const root = document.documentElement;

  root.classList.remove('dark');

  if (theme === 'dark') {
    root.classList.add('dark');
  }
};