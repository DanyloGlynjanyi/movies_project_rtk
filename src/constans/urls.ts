const baseURL ='https://api.themoviedb.org/3'

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjAwNWExYmFkZThlNmVlZjI5ZmE1ZGMyYjkwMzE1NCIsInN1YiI6IjY1NDY2ZDI2Mjg2NmZhMDBlMWVlY2YxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mEcL-nRVjGcNSy7vtLTJyIFkognHEVufcUdCLwmEKKw'
const movie='/movie'
const genre='/genre'
const list ='/list'
const search='/search'
const discover='/discover'



const urls = {
    movies:`${discover}${movie}`,
    info:{
        byId:(id:string)=>`${movie}/${id}`
    },
    genre:`${genre}${movie}${list}`,
    search:`${search}${movie}`
}




export {token, baseURL, urls}