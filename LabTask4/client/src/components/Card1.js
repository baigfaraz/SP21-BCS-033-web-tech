import Card from 'react-bootstrap/Card';
import image1 from '../assets/image1.jpg';

function Card1({image , title , stock}) {
  return (
    <Card style={{ width: '250px' , height:'340px', marginTop:'2rem' , cursor:'pointer' }}>
      <Card.Img variant="top" style={{height:"230px"}} src={image} />
      <Card.Body style={{display:'flex'  , justifyContent:'center' , flexDirection:'column' , alignItems:'center'}}>
        <Card.Title style={{
          fontSize:'16px' , 
          fontFamily: "'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', sans-serif",
          fontWeight:'bold',

        }}>
          {title}</Card.Title>
        <Card.Text style={{
          fontSize:'13px' , 
          fontFamily: "'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', sans-serif",
          fontWeight:'400',

        }}>
          Stok Available : {stock}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Card1;