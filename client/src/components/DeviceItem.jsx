import {Card, Col, Image} from 'react-bootstrap';
import {useHistory} from 'react-router-dom'
import {DEVICE_ROUTE} from '../helpers/routesConsts';
import star from '../assets/star.png'

const DeviceItem = ({device}) => {
  const history = useHistory()

  return (
    <Col md={3} className='m-3'>
      <Card
        style={{
          width: 150,
          height: 200,
          cursor: 'pointer',
          alignItems: 'center',
          border: "none",
        }}
        onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}
      >
        <Image height={130} style={{maxWidth: '150px', objectFit: 'contain'}}
               src={process.env.REACT_APP_API_URL + device.image}/>
        <div className='d-flex align-items-center flex-grow-1 '>
          <div className={'d-flex'} style={{width: "120px", fontSize: '14px'}}>{device.name}</div>
          <div className='d-flex align-items-center'>
            <div style={{fontSize: '14px'}}>{device.rating}</div>
            <Image height={15} width={15}
                   src={star}
            />
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default DeviceItem;