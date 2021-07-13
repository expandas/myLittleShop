import {Col, Container, Row} from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';

const Shop = () => {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <TypeBar/>
        </Col>
        <Col md={9}>
          <BrandBar/>
        </Col>
      </Row>

    </Container>
  );
};

export default Shop;