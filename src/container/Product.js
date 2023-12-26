import React from 'react'
import { useNavigate,useParams } from "react-router-dom"
import { ProductList } from '../data/ProductList';
import { useDispatch, useSelector } from "react-redux"
import { addItem } from '../redux/reducer/cart';


export default function Product() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const props = ProductList.find(
    (element) => element.id === parseInt(params.id)
  );

  const list = useSelector((state) => state.cart.list)

  const element = list.find((item) => item.id === props.id)

  const addToCart = () => {
dispatch(addItem(props));
  };

  return (
    <div className="mt-3 card m-2">
      <div className="mt-2">
        <img src={props.thumbnail}
          height={350} width={400}
          alt={props.title}
          className="border-radius-9" />
      </div>
      <div className='mt-3 card-body'>
        <h5 className='card-title'>{props.title}</h5>
        <h6 className="mt-2">Price:{`$${props.price}`}</h6>
        <h6 className="mt-2">Discount: {props.discountPercentage}%</h6>
        <h6 className="mt-2">Rating: {props.rating}</h6>

        <div className="mt-4">
          {props.stock > 0 ? (
            <>
              <button className="btn btn-success">Buy Now</button>
              {element?.count > 0 ? 
               <button className="ms-3 btn btn-outline-warning" onClick={() => navigate('/cart')}>
               Go to cart
               </button>:
              <button className="ms-3 btn btn-success" onClick={addToCart}>
                Add to cart
                </button>
                }
            </>
          ) : (
            <button className="btn btn-outline-danger">Out of stock</button>
          )}
        </div>

      </div>
    </div>
  );
}
