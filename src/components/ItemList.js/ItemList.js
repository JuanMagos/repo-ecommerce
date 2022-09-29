import Item from '../Item/Item';
import './ItemList.css';
import { Link } from 'react-router-dom';

const ItemList = ({ list }) => {
  return (
    <div className="listContainer">
      {list.map((item) => (
        <Link
          key={item.id}
          to={'/detail/' + item.id}
          style={{ textDecoration: 'none' }}
        >
          <Item
            title={item.title}
            price={item.price}
            category={item.category}
            description={item.description}
            image={item.image}
          />
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
