import Category from "@components/eCommerce/category/Category";
import Loading from "@components/feedback/loading/Loading";
import { actGetCategories } from "@store/categories/categotiesSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { Container } from "react-bootstrap";

export default function Categories() {
  const dispatch = useAppDispatch();
  const { loading, records, error } = useAppSelector(
    (state) => state.categoriesSlice
  );

  useEffect(() => {
    if (records.length === 0) dispatch(actGetCategories());
  }, [dispatch, records]);

  return (
    <Loading loading={loading} error={error}>
      <Container className="">
        <div className="  d-flex justify-content-center flex-wrap">
          {records.map((record) => (
            <div
              key={record.id} // Moved the key here
              className="d-flex justify-content-center align-items-center my-3 mx-2"
            >
              <Category {...record} />
            </div>
          ))}
        </div>
      </Container>
    </Loading>
  );
}
