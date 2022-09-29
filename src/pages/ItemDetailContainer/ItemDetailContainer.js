import { useEffect, useState } from 'react';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { data } from '../../components/mockData';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  const db = getFirestore();

  const getProduct = () => {
    const queryDoc = doc(db, 'items', id);

    getDoc(queryDoc)
      .then((res) => {
        setProduct({ id: res.id, ...res.data() });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProduct();
  }, [id]);
  return (
    <div className="modal-container">
      Estoy en el ItemDetail
      {product && <ItemDetail product={product} />}
    </div>
  );
};

export default ItemDetailContainer;
