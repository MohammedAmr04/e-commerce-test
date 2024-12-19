import CartItem from "@components/eCommerce/cartItem/CartItem";
import SubTotal from "@components/eCommerce/subTotal/SubTotal";
// import { getItems } from "@store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import axios from "axios";
import { useEffect, useState } from "react";
import TProduct from "src/customTypes/product";

export default function CartPage() {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.cartSlice);

  const [products, setProducts] = useState<TProduct[]>([]);

  const info = async (items: number[]): Promise<TProduct[]> => {
    try {
      const requests = items.map((id) =>
        axios.get<TProduct>(`http://localhost:3000/products?id=${id}`)
      );

      const responses = await Promise.all(requests);
      const products = responses.map((response) => response.data);

      return products; // إرجاع المنتجات
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };
  useEffect(() => {
    if (items && items.length > 0) {
      const fetchProducts = async () => {
        const fetchedProducts = await info(items);
        setProducts(fetchedProducts);
      };
      fetchProducts();
    }
    if (items.length === 0) {
      setProducts([]);
    }
  }, [dispatch, items]);

  return (
    <>
      {products.length > 0 ? (
        products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))
      ) : (
        <h1 className=" text-center">No Items</h1>
      )}
      <SubTotal />
    </>
  );
}
