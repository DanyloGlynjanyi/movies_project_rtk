import {Genres} from "../components";
import {Outlet} from "react-router-dom";
import {Box, LinearProgress} from "@mui/material";
import {useAppSelector} from "../hooks";

const GenresPage = () => {
    const {isLoading} = useAppSelector(state => state.movie);
    return (
        <div>
            <div style={{height: '8px'}}>{isLoading && <Box sx={{width: '100%'}}><LinearProgress/></Box>}</div>
            <Genres/>
            <Outlet/>
        </div>
    );
};

export {GenresPage};