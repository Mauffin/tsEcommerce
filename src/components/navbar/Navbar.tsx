import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import style from "@/components/navbar/navbar.module.css";

const navbar = () => {
  return (
    <nav className={style.navContainer}>
      <div className={style.navLeft}>
        <p className={style.Logo}>Logo</p>
        <ul className={style.ListOptions}>
          <li className={style.liText}>productos</li>
          <li className={style.liText}>hombre</li>
          <li className={style.liText}>mujer</li>
        </ul>
      </div>

      <div>
        <ul className={style.cartLogin}>
          <li >Login</li>
          <li className={style.liText}>
            <ShoppingCartOutlinedIcon />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
