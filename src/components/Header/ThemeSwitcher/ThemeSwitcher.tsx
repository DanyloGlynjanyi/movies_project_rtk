import {ChangeEvent, useEffect, useState} from "react";

import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

import {useAppDispatch} from "../../../hooks";
import {themeActions} from "../../../redux/slices/themeSlice";


const ThemeSwitcher = () => {
    const dispatch = useAppDispatch();
    let saveLocal = JSON.parse(localStorage.getItem('theme')) || false

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setChecking(event.target.checked);
        localStorage.setItem('theme', JSON.stringify(event.target.checked))
    };
    const [checking, setChecking] = useState(saveLocal);
    useEffect(() => {
        dispatch(themeActions.themeChange(saveLocal))
    }, [checking, dispatch, saveLocal]);

    if (!checking) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }


    return (
        <FormControlLabel
            control={<Switch
                checked={checking}
                onChange={handleChange}
                color="default"
                inputProps={{'aria-label': 'controlled'}}
            />}
            label=""
            labelPlacement="end"
        />
    );
};

export {ThemeSwitcher};
