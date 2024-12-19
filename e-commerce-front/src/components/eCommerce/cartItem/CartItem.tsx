import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./styles.css";
import TProduct from "src/customTypes/product";
import { useAppDispatch } from "@store/hooks";
import { getItemsPrice, removeFromCart } from "@store/cart/cartSlice";
import { useEffect, useState } from "react";

export default function CartItem({ product }: { product: TProduct[] }) {
  const [quantityItem, setQuantityItem] = useState(1);
  const dispatch = useAppDispatch();
  const removeCartHandler = () => dispatch(removeFromCart(product[0].id));
  const payload = {
    id: product[0].id,
    quantity: quantityItem, // الكمية
    price: product[0].price,
  };
  const getQuantityHandler = () => dispatch(getItemsPrice(payload));
  useEffect(() => {
    getQuantityHandler();
    console.log(quantityItem);
  }, [quantityItem]);
  return (
    <div className="d-flex align-items-center position-relative my-3 containerCartItem">
      <div className="containerImage">
        <img src={product[0].img} alt={product[0].title} />
      </div>

      <div className="containerContent d-flex">
        <div className="content">
          <h5 className="px-3">{product[0].title}</h5>
          <p className="my-3 px-3">Price: ${product[0].price.toFixed(2)}</p>
          <Button variant="danger" className="mx-3" onClick={removeCartHandler}>
            Remove
          </Button>
        </div>
      </div>

      {/* اختيار الكمية */}
      <div className="quantity">
        <Form.Select
          aria-label="Select quantity"
          onChange={(e) => setQuantityItem(+e.target.value)}
        >
          {[...Array(product[0].quantity)].map((_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </Form.Select>
      </div>
    </div>
  );
}
