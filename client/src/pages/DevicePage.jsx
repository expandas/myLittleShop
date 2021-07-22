import React from 'react';
import {Button, Card, Col, Container, Image, Row} from 'react-bootstrap';
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {
  const device = {
    id: 6,
    name: "Iphone X",
    price: 1500,
    rating: 5,
    image: 'https://static.re-store.ru/upload/resize_cache/iblock/f8b/1160_880_17f5c944b3b71591cc9304fac25365de2/f8b9b92009a23e99a9118f3379e15aca.jpg'
  }
  const description = [
    {id: 1, title: 'Память', description: 'достаточно'},
    {id: 2, title: 'Процессор', description: 'мощный'},
    {id: 3, title: 'Аккумулятор', description: 'держит долго'},
    {id: 4, title: 'Камера', description: 'есть'},
  ]
  return (
    <Container className='mt-2'>
      <Row>
        <Col md={4}>
          <Image src={device.image} width={300}/>
        </Col>
        <Col md={4}>
          <Row className='d-flex flex-column align-items-center'>
            <h2>{device.name}</h2>
            <div
              className='d-flex justify-content-center align-items-center'
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 50
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card className='d-flex align-items-center justify-content-around'
          style={{width: 300, height: 300, fontSize: 32, border:'5px solid lightgray'}}
          >
            <h3>От {device.price} руб.</h3>
            <Button
              variant='outline-dark'
            >Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className='d-flex flex-column m-3'>
        <h3>Характеристики</h3>
        {description.map((el, index) =>
          <Row key={el.id} style={{background: index % 2 === 0 ? 'lightgray' :'transparent' }}>
            {el.title}: {el.description}
          </Row>
        )}
      </Row>
    </Container>
  );
};

export default DevicePage;