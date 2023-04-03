import React, { Fragment } from 'react';
import { Container, Col, Row, ListGroup} from 'react-bootstrap';
//import ReactImageMagnify from 'react-image-magnify';
import { useParams } from 'react-router-dom';
import './Product.css'

const SingleProduct = () => {
    const {id}= useParams();

    const productsArr = [
      {
         quantity: 1,
          id: 'ablum1',
          name: 'Album 1',
          imageURL: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
          price: 100
      },
      {
        quantity: 1,
          id: 'ablum2',
          name: 'Album 2',
          imageURL: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
          price: 140
      },
      {
        quantity: 1,
          id: 'ablum3',
          name: 'Album 3',
          imageURL: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
          price: 200
      },
      {
        quantity: 1,
          id: 'ablum4',
          name: 'Album 4',
          imageURL: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
          price: 180
      }
  ];

        const snglprdct=productsArr.find((currItem)=>currItem.id===id);


  return (
    <Fragment>
                     <Container>
                <Row>
                    <Col md={5}>
                    <div className="containerimage">
                    <img src={snglprdct.imageURL} alt={snglprdct.title}  className="imageZoomFeature" />
                    </div>
                    </Col>
                    <Col md={7}>

                        <ListGroup>
                            <ListGroup.Item variant="success"><h1>{snglprdct.title}</h1></ListGroup.Item>
                            <ListGroup.Item variant="primary"><h3>Amount ${snglprdct.price}</h3></ListGroup.Item>
                            <ListGroup.Item action variant="secondary"> Quantity: {snglprdct.quantity}</ListGroup.Item> </ListGroup>
                       <Row md={1}> 
                            <Col >
                            <div className="bottomConatiner">
                            <img  className="bottomImage" src={snglprdct.imageURL} alt=""/>
                            <img  className="bottomImage" src={snglprdct.imageURL} alt=""/>
                            <img  className="bottomImage" src={snglprdct.imageURL} alt=""/>
                            
                            </div>
                       
                          
                            
                            </Col>
                     </Row>
                     </Col>
      
      </Row>
   
    </Container>

    </Fragment>
  )
}

export default SingleProduct