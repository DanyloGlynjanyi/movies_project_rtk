import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layout";
import {GenresPage, MoviesPage, SearchPage} from "./pages";
import {InfoPage} from "./pages";
import {GenreLists} from "./components";



const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'movies'}/>},

            {path:'movies', element: <MoviesPage/>},
            {path:'info/:id', element: <InfoPage/>},
            {path:'genres', element: <GenresPage/>, children:[
                    {path:':id', element:<GenreLists/>}
                ]},
            {path: 'search', element: <SearchPage/>}
        ]
    }
])
export {
    router
}
