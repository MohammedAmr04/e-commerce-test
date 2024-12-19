import { useAppSelector } from "@store/hooks";
import CartM from "../../../assets/svg/CartM.svg?react";
import WishList from "../../../assets/svg/wishlist.svg?react";
import styles from "./styles.module.css";
import { getCountItemsCart } from "@store/cart/cartSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const { basketContainer, basketQuantity, pumpCartQuantity, basketCart } =
  styles;
export default function HeaderBasket() {
  const [isAnimated, setIsAnimated] = useState(false);
  const navigate = useNavigate();
  const totalQuantity = useAppSelector(getCountItemsCart) || 0;

  const quantityStyle = `${basketQuantity} ${
    isAnimated ? pumpCartQuantity : ""
  }`;
  useEffect(() => {
    if (!totalQuantity) {
      return;
    }

    setIsAnimated(true);
    const timer = setTimeout(() => setIsAnimated(false), 300);

    return () => clearTimeout(timer);
  }, [totalQuantity]);

  return (
    <div className={basketContainer}>
      <div
        className=" pe-3 position-relative d-flex border-1 border-end"
        onClick={() => navigate("wishlist")}
      >
        <WishList />
        <h5 className="ps-1">Wishlist</h5>
      </div>
      <div className={basketCart} onClick={() => navigate("cart")}>
        <CartM title="basket icon" />
        <div className={quantityStyle}>{totalQuantity}</div>
        <h5 className="ps-1">Cart</h5>
      </div>
    </div>
  );
}
