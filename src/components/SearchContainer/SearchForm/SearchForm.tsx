import {useForm} from "react-hook-form";
import {useState} from "react";

import {ISearchWord} from "../../../interfaces";
import {SearchContainer} from "../SearchContainer";

import css from "./SearchForm.module.css";
import {Box, TextField} from "@mui/material";



const SearchForm = () => {
    const {handleSubmit, reset, register} = useForm()
    const [word, setWord] = useState<string>()

    const search = (query: ISearchWord) => {
        setWord(query.word)
        reset()
    };

    return (
        <div>
            <form onSubmit={handleSubmit(search)}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': {m: 1, width: '25ch'},
                    }}
                    noValidate
                    autoComplete="off">
                    <TextField label='Movie' variant="standard" {...register('word')}/>
                </Box>

                <button className={css.button}>Search</button>
            </form>
            <SearchContainer word={word}/>
        </div>

    );
};

export {SearchForm};


