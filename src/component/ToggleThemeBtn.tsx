import React from 'react';
import { useTheme } from 'next-themes';
import clsx from 'clsx';

type Props = {}

export function ToggleThemeBtn ({}: Props) {
    const {setTheme, resolvedTheme} = useTheme();

    function toggolTheme() {
        if(resolvedTheme === "dark"){
            setTheme("light");
        }
        if(resolvedTheme === "light"){
            setTheme("dark");
        }
    }
  return (
    <button className='flex h-5 w-10 items-center rounded-full p-1 bg-slate-900 dark:bg-white' onClick={toggolTheme}>
      <div 
        className={clsx("h-4 w-4 rounded-full bg-white transition-all dark:bg-black",
        {"translate-x-full": resolvedTheme === "light"},
        {"translate-x-0": resolvedTheme === "dark"}
        )}
       />
    </button>
  );
}
