import { useAppSelector } from "@store/hooks";
import { useEffect, useState } from "react";

export default function SubTotal() {
  const ProductFullInfo = useAppSelector(
    (state) => state.cartSlice.ProductFullInfo
  );
  const [Total, setTotal] = useState(0);

  const getTotal = () => {
    if (!ProductFullInfo || Object.keys(ProductFullInfo).length === 0) {
      setTotal(0);
      return;
    }

    const total = Object.values(ProductFullInfo).reduce((acc, e) => acc + e, 0);
    setTotal(total);
  };

  useEffect(() => {
    getTotal();
  }, [ProductFullInfo]);

  return <div>SubTotal: {Total}</div>;
}
