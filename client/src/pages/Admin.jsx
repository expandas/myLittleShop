import {Button, Container} from 'react-bootstrap';
import CreateDeviceModal from '../components/modals/createDeviceModal';
import CreateTypeModal from '../components/modals/createTypeModal';
import {useState} from 'react';
import CreateBrand from '../components/modals/createBrand';

const Admin = () => {
  const [typeVisible, setTypeVisible] = useState(false)
  const [brandVisible, setBrandVisible] = useState(false)
  const [deviseVisible, setDeviceVisible] = useState(false)

  return (
  <Container className='d-flex flex-column p-2' >
      <Button
        variant={'outline-dark'}
        className={'mt-2'}
        onClick={()=>setTypeVisible(true)}
      >
        Добавить тип
      </Button>
      <Button
        variant={'outline-dark'}
        className={'mt-2'}
        onClick={()=>setBrandVisible(true)}
      >
        Добавить брэнд
      </Button>
      <Button
        variant={'outline-dark'}
        className={'mt-2'}
        onClick={()=>setDeviceVisible(true)}
      >
        Добавить устройство
      </Button>
    <CreateBrand show={brandVisible} onHide={ ()=>setBrandVisible(false) }/>
    <CreateDeviceModal show={deviseVisible} onHide={ ()=>setDeviceVisible(false) }/>
    <CreateTypeModal show={typeVisible} onHide={ ()=>setTypeVisible(false) }/>
  </Container>
  )
};

export default Admin