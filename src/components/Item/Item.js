import './Item.css';

export const Item = ({ title, price, category, image }) => {
  return (
    <div className="item-container">
      <img
        className="product-image"
        height={'200px'}
        width={'200px'}
        src={'../img/' + image}
        alt={title}
      />
      <div className="item-info">
        <h6>{title}</h6>
        <div className="product-footer">
          <p>{category}</p>
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
