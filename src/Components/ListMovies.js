import CardMovie from "./CardMovie"

const ListMovies=({movies})=>{
    return(
        <div id="listMovies">
            {
                movies.map((el,i,t)=> <CardMovie key={el.id} el={el}/>)
            }
        </div>
    )
}

export default ListMovies