import { Rating } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"

const Profil=({movies})=>{
    const {id} = useParams()

    const found = movies.find((el,i,t)=> el.id == id)

    const navigate = useNavigate()
    return(
        <div>
            <h1>Profil Component</h1>
            <h2>{found.title}</h2>
            <img src={found.posterURL} alt="Not Found"/>
            <Rating name="read-only" value={found.rating} readOnly />
            <iframe width="560" height="315" src={found.trailler} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <button onClick={()=>navigate('/')}>GO Home</button>
        </div>
    )
}

export default Profil