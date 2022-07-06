import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const menuList = ["여성", "Divided", "남성", "신생아/유아", "아동", "H&M HOME", "Sale", "지속가능성"];
  return (
    <div>
      <div>
        <div className="login_button">
          <FontAwesomeIcon icon={faUser} />
          <div>LOGIN</div>
        </div>
      </div>

      <div>
        <div className="nav_section">
          <img width={100} src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo.png" alt="" />
        </div>
      </div>

      <div className="menu_area">
        <ul className="menu_list">
          {/* 리스트 array와 map을 사용하여 자동으로 그려주도록 한다! */}
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>

        <div className="search_area">
          <FontAwesomeIcon icon={faSearch} className="search_button" />
          <input type="text" className="search_input" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
