import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from 'react-bootstrap';
import bigStar from '../assets/bigStar.png'
import {getOneDevice} from '../http/deviceApi';
import {useParams, useHistory, NavLink} from 'react-router-dom';
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from '../helpers/routesConsts'

const DevicePage = () => {
  const [device, setDevice] = useState({info: []})
  const {id} = useParams()
  const history = useHistory()

  useEffect(() => {
    getOneDevice(id).then(data => setDevice(data))
  }, [])

  const toRegistrationPage = () => {
    history.push(REGISTRATION_ROUTE)
  }
  const toLoginPage = () => {
    history.push(LOGIN_ROUTE)
  }

  return (
    <Container className='mt-2'>
      <Row>
        <Col md={4}>
          <Image
            src={device.image ? process.env.REACT_APP_API_URL + device.image : null}
            width={300}
          />
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
                style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
          >
            <h3>От {device.price} руб.</h3>
            {localStorage.token ?
              <Button
                variant='outline-dark'
              >
                Добавить в корзину
              </Button> :
              <p style={{fontSize: '16px'}}>
                <NavLink

                  to={LOGIN_ROUTE}
                >
                  Войдите&nbsp;
                </NavLink>
                или&nbsp;
                <NavLink
                  className='fs-2'

                  to={REGISTRATION_ROUTE}
                >
                  зарегистрируйтесь
                </NavLink>
              </p>}
          </Card>
        </Col>
      </Row>
      <Row className='d-flex flex-column m-3'>
        <h3>Характеристики</h3>
        {device.info.map((el, index) =>
          <Row key={el.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent'}}>
            {el.title}: {el.description}
          </Row>
        )}
      </Row>
    </Container>
  );
};

export default DevicePage;