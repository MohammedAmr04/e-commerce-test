import { Button, Spinner } from "react-bootstrap";
import TProduct from "src/customTypes/product";
import styles from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { addToCart } from "@store/cart/cartSlice";
import { useEffect, useState } from "react";
import LikeFill from "../../../assets/svg/like-fill.svg?react";
import Like from "../../../assets/svg/like.svg?react";
import {
  addToWishList,
  getItem,
  removeFromWishList,
} from "@store/cart copy/wishSlice";

const { containerImg, productTitle, containerProduct, likeProduct } = styles;
export default function Product(props: TProduct) {
  const [isDisabled, SetIsDisbled] = useState(false);
  const { id, title, img, price } = props;
  const [isLiked, SetIsLiked] = useState(
    getItem(
      useAppSelector((state) => state.wishSlice),
      id
    )
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isDisabled) {
      return;
    }
    const start = setTimeout(() => SetIsDisbled(false), 300);
    return () => clearTimeout(start);
  }, [isDisabled]);

  const addToCartHandler = () => {
    dispatch(addToCart(id));
    SetIsDisbled(true);
  };
  const addToWishHandler = () => {
    if (isLiked) {
      dispatch(removeFromWishList(id));
      SetIsLiked(false);
    } else {
      dispatch(addToWishList(id));
      SetIsLiked(true);
    }
  };

  return (
    <div className={containerProduct}>
      <div className=" position-relative">
        <div className={likeProduct} onClick={addToWishHandler}>
          {isLiked ? <LikeFill /> : <Like />}
        </div>
        <img className={containerImg} src={img} alt={title} />
      </div>
      <h4 className={productTitle}>{title}</h4>
      <p>{price}</p>
      <Button variant="info" disabled={isDisabled} onClick={addToCartHandler}>
        {isDisabled ? (
          <>
            <Spinner animation="border" role="status" size="sm" /> Loading...
          </>
        ) : (
          "Add To Cart"
        )}
      </Button>
    </div>
  );
}
