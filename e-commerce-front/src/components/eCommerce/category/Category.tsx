import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import TCategory from "src/customTypes/categore";
const { categoryImg, containerImg } = styles;

export default function Category(props: TCategory) {
  const { title, img, prefix } = props;
  return (
    <div className=" position-relative">
      <Link to={`/categories/products/${prefix}`}>
        <div className={containerImg}>
          <img className={categoryImg} src={`${img}`} alt={title} />
        </div>
        <h3 className=" text-center my-2">{title}</h3>
      </Link>
    </div>
  );
}
