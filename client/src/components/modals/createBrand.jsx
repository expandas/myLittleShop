import React, {useState} from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import {createBrand} from '../../http/deviceApi';
import {observer} from 'mobx-react-lite';

const CreateBrand = observer(({show, onHide}) => {
  const [input, setInput] = useState('')

  const addBrand = (brand) => {
    if (brand) {
      createBrand(input)
      setInput('')
      onHide()
    } else {
      alert('Введите название брэнда')
    }
  }

  return (
    <Modal
      size="lg"
      centered
      show={show}
      backdrop={true}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить брэнд
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={'Введите брэнд'}/>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-success' onClick={() => addBrand(input)}>Добавить</Button>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateBrand;