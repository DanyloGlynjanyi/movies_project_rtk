import {SearchForm} from "../components";
import {useAppSelector} from "../hooks";
import {Box, LinearProgress} from "@mui/material";


const SearchPage = () => {
    const {isLoading} = useAppSelector(state => state.movie);


    return (
        <div >
            <div style={{height:'8px'}}>    {isLoading && <Box sx={{width: '100%'}}><LinearProgress/></Box>}</div>
            <div style={{display:"flex",alignItems:'center',justifyContent:'center'}}><SearchForm/></div>
        </div>
    );
};

export {SearchPage};