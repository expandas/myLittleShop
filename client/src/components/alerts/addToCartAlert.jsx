import {Alert} from "react-bootstrap";

const AddToCartAlert = () => {

  return (
    <Alert
      style={{width: '250px', position: 'absolute', top: '10px', fontSize: '16px'}}
      variant='success'
    >
      Добавлено в корзину
    </Alert>
  )
}

export default AddToCartAlert