import { useEffect, useState } from 'react';

const darkMode = "dark";
const lightMode = "light";

export const useTheme = ( ) => {

    const [mode, setMode] = useState(lightMode)

    const handleChange = (e) => setMode(e.target.checked ? darkMode: lightMode)

    useEffect(() => {
        document.body.setAttribute('data-theme', mode);
        document.getElementById("sidebar").setAttribute("data-theme", mode);

      }, [mode])

    return [mode, handleChange]
}