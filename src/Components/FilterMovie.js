import Rating from '@mui/material/Rating';
import { Button } from 'react-bootstrap';

const FilterMovie=({setTitre,setNjoum,titre,njoum})=>{
    const handleReset=()=>{
        setTitre('')
        setNjoum(0)
    }
    return(
        <div>
            <input value={titre} type="text" onChange={(e)=> setTitre(e.target.value)}/>
            <Rating value={njoum} onChange={(e)=>setNjoum(e.target.value)}/>
            <Button variant="outline-warning" onClick={handleReset}>Reset</Button>
        </div>
    )
}

export default FilterMovie