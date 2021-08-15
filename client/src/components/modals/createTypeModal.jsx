import React, {useState} from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import {createType} from '../../http/deviceApi';
import {observer} from 'mobx-react-lite';

const CreateTypeModal = observer(({show, onHide}) => {
  const [input, setInput] = useState('')

  const addType = (type) => {
    if (type) {
      createType(type)
      setInput('')
      onHide()
    } else {
      alert('Введите тип')
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
          Добавить тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder={'Введите тип'}
            value={input}
            onChange={(e)=> setInput(e.target.value)}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-success' onClick={()=>addType(input)}>Добавить</Button>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateTypeModal;