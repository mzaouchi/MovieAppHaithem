import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
const CardMovie=({el})=>{
    const [showMore, setShowMore] = useState(false);
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={el.posterURL} style={{width:'286px', height:'407px'}}/>
        <Card.Body>
          <Card.Title>{el.title}</Card.Title>
          <Card.Text>
            {/* {el.description} */}

            {showMore ? el.description : `${el.description.substring(0, 50)}`}
            <button className='buttShow' onClick={()=> setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
          </Card.Text>
          <Rating name="read-only" value={el.rating} readOnly />
        </Card.Body>
      </Card>
    )
}

export default CardMovie