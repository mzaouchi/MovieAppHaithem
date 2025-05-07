import AddMovie from "./AddMovie"
import CardMovie from "./CardMovie"
import FilterMovie from "./FilterMovie"

const ListMovies=({movies,titre,njoum,setTitre,setNjoum,setMovies})=>{
    var x =  movies.filter((el,i,t)=> el.title.toUpperCase().includes(titre.toUpperCase()) && el.rating >= njoum)
    return(
        <>
        <FilterMovie setTitre={setTitre} setNjoum={setNjoum} titre={titre} njoum={njoum}/>
        <AddMovie movies={movies} setMovies={setMovies} />
        <div id="listMovies">
            {
                x.length == 0 
                
                ?

                <h1>Not Found</h1>
                
                :
                
                x.map((el,i,t)=> <CardMovie key={el.id} el={el}/>)
            }
        </div>
        </>
        
    )
}

export default ListMovies