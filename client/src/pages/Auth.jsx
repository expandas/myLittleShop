import React from 'react';
import {Button, Card, Container, Form, Row} from 'react-bootstrap';
import {NavLink, useLocation} from 'react-router-dom';
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from '../helpers/routesConsts';

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: 600}} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="type email"
          />
          <Form.Control
            className="mt-3"
            placeholder="type password"
            type="password"
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3 align-items-center">
            {isLogin ?
              <div>
                No account? <NavLink to={REGISTRATION_ROUTE}>Register now! </NavLink>
              </div> :
              <div>
                Got account? <NavLink to={LOGIN_ROUTE}>Log in now! </NavLink>
              </div>
            }
            <Button
              className="mt-3 align-items-center"
              variant={'outline-success'}
            >
              {isLogin ? 'Log in' : 'Registration'}
            </Button>
          </Row>

        </Form>
      </Card>
    </Container>
  )
}

export default Auth;