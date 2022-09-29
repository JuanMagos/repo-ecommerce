import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList.js/ItemList';
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from 'firebase/firestore';

const styles = {
  container: {
    display: 'flex',
    backgroundColor: '#282c34',
  },
};

export const ItemListContainer = () => {
  const [list, setList] = useState([]);
  const { categoryName } = useParams();
  // const [url, setUrl] = useState('');
  console.log(categoryName);

  const getProducts = () => {
    const db = getFirestore();
    const queryBase = collection(db, 'items');
    const querySnapshot = categoryName
      ? query(queryBase, where('categoryId', '==', categoryName))
      : queryBase;

    getDocs(querySnapshot).then((response) => {
      const data = response.docs.map((product) => {
        console.log(product.data());
        return { id: product.id, ...product.data() };
      });
      setList(data);
    });
  };
  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryName]);

  return (
    <div style={styles.container}>
      <Link style={{ color: 'white' }} to="/cart">
        Carrito
      </Link>
      <ItemList list={list} />
    </div>
  );
};

export default ItemListContainer;
