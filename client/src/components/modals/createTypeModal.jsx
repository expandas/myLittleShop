import React from 'react';
import {Button, Form, Modal} from 'react-bootstrap';

const CreateTypeModal = ({show, onHide}) => {
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
        <Form >
          <Form.Control
            placeholder={'Введите тип'}/>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-success' onClick={onHide}>Добавить</Button>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateTypeModal;