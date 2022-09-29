import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';

export const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [count, setCount] = useState(1);

  function onAdd(product) {
    addToCart(product, count);
  }
  return (
    <div className="detail-container">
      <Link to="/">Volver</Link>
      <img
        className="detail-image"
        src={'../img/' + product.image}
        alt={product.title}
      />
      <h2>{product.title}</h2>
      <div className="product-information">
        <p>{product.description}</p>
        <p>{product.category}</p>
        <p>{product.price}</p>
        <ItemCount stock={5} count={count} setCount={setCount} />
        <div>
          <button className="add-btn" onClick={() => onAdd(product)}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
