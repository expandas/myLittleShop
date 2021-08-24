import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Row} from 'react-bootstrap';
import {NavLink, useHistory, useLocation} from 'react-router-dom';
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTER} from '../helpers/routesConsts';
import {login, registration} from '../http/userApi';
import {observer} from 'mobx-react-lite';
import {Context} from '../index';

const Auth = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation()
  const history = useHistory()
  const isLogin = location.pathname === LOGIN_ROUTE

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const authFn = async () => {
    try {
      let data
      if (isLogin) {
        data = await login(email, password)
      } else {
        data = await registration(email, password)
      }
      user.setUser(user)
      user.setIsAuth()
      history.push(SHOP_ROUTER)
    } catch (e) {
      alert(e.response.data.message)
    }
  }

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: 600}} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            value={email}
            type="email"

            onChange={e => setEmail(e.target.value)}
            className="mt-3"
            placeholder="введите email"
          />
          <Form.Control
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="mt-3"
            placeholder="введите password"
            type="password"
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3 align-items-center">
            {isLogin ?
              <div>
                Нет аккаунта?&nbsp;
                <NavLink
                  to={REGISTRATION_ROUTE}
                >
                  Зарегистрироваться!
                </NavLink>
              </div> :
              <div>
                Есть аккаунт? &nbsp;
                <NavLink
                  to={LOGIN_ROUTE}
                >
                  Войти!
                </NavLink>
              </div>
            }
            <Button
              className="mt-3 align-items-center"
              variant={'outline-success'}
              onClick={() => authFn()}
            >
              {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  )
})

export default Auth;