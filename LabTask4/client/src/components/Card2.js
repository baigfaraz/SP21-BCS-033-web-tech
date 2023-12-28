import Card from "react-bootstrap/Card";
// import image1 from "../assets/image1.jpg";
import { Icon } from "@iconify/react";

function Card2({ image, name, price }) {
  return (
    <Card
      style={{
        width: "200px",
        height: "300px",
        marginTop: "2rem",
        cursor: "pointer",
      }}
    >
      <Card.Img variant="top" style={{ height: "170px" }} src={image} />
      <Card.Body>
        <Card.Title
          style={{
            fontSize: "16px",
            fontFamily:
              "'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', sans-serif",
            fontWeight: "bold",
          }}
        >
          {name}
        </Card.Title>
        <Card.Text
          style={{
            fontSize: "13px",
            fontFamily:
              "'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', sans-serif",
            fontWeight: "400",
          }}
        >
          <span style={{ color: "red" }}>Rating : </span>
          <span style={{ color: "black", fontWeight: "500" }}>2.3</span>
        </Card.Text>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Card.Text
            style={{
              fontSize: "13px",
              fontFamily:
                "'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', sans-serif",
              fontWeight: "400",
            }}
          >
            <span style={{ color: "red" }}>Price : </span>
            <span style={{ color: "black", fontWeight: "500" }}>{price}</span>
          </Card.Text>
          {/* <a href="/Login" style={{ textDecoration: "none" , paddin:"1rem"}}> */}
          {/* <Icon
              icon="mdi-light:cart"
              fontSize={26}
              color="#903D10"
              style={{
                backgroundColor: "#E6ECF2",
                borderRadius: "50%",
                padding: "2px",
                cursor: "pointer",
                boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
              }}
            /> */}
          <span
            style={{
              fontSize: "12px",
              color: "black",
              backgroundColor: "#E6ECF2",
              borderRadius: "10px",
              padding: "2px",
              cursor: "pointer",
              boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
            }}
          >
            Info
          </span>
          {/* </a> */}
        </div>
      </Card.Body>
    </Card>
  );
}

export default Card2;
