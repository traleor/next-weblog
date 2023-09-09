// styles import
import styles from "./styles.module.css";

type GridChildrenProp = {
  num?: 2 | 3 | 4;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

const Grid: React.FC<GridChildrenProp> = ({ num, style, children }) => {
  return (
    <div
      style={style}
      className={`${styles.grid}  ${
        num === 4 ? styles.grid_4 : num === 3 ? styles.grid_3 : styles.grid_2
      }`}
    >
      {children}
    </div>
  );
};

export default Grid;
