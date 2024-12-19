import Product from "@components/eCommerce/product/Product";
import { useAppSelector } from "@store/hooks";
import axios from "axios";
import { useEffect, useState } from "react";
import TProduct from "src/customTypes/product";

export default function WishPage() {
  const { items } = useAppSelector((state) => state.wishSlice);
  const [products, setProducts] = useState<TProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async (items: number[]): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const requests = items.map((id) =>
        axios.get<TProduct>(`http://localhost:3000/products?id=${id}`)
      );
      const responses = await Promise.all(requests);
      console.log(responses[0].data);
      const fetchedProducts = responses.map((response) => response.data);
      setProducts(fetchedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to fetch products. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (items.length > 0) {
      fetchProducts(items);
    } else {
      setProducts([]);
    }
  }, [items]);

  if (loading) {
    return <h1 className="text-center">Loading...</h1>;
  }

  if (error) {
    return <h1 className="text-center text-danger">{error}</h1>;
  }

  return (
    <>
      {products.length > 0 ? (
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <h1 className="text-center">No Items</h1>
      )}
    </>
  );
}
