import CardMovie from "./CardMovie"

const ListMovies=({movies,titre,njoum})=>{
    var x =  movies.filter((el,i,t)=> el.title.toUpperCase().includes(titre.toUpperCase()) && el.rating >= njoum)
    return(
        <div id="listMovies">
            {
                x.length == 0 
                
                ?

                <h1>Not Found</h1>
                
                :
                
                x.map((el,i,t)=> <CardMovie key={el.id} el={el}/>)
            }
        </div>
    )
}

export default ListMovies