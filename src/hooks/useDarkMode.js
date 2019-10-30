import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

const useDarkMode = (key, initialValue) => {
  const [dark, setDark] = useLocalStorage(key, initialValue);
  const body = document.querySelector('body');

  useEffect( () => {
    if(dark) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [dark])

  return [dark, setDark]
};

export default useDarkMode;