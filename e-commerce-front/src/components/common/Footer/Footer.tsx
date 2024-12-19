import styles from "./styles.module.css";
const { footerContainer } = styles;
export default function Footer() {
  return (
    <div className={footerContainer} style={{ backgroundColor: "#274D60" }}>
      © 2024 Our WearAura. All rights reserved.
    </div>
  );
}
