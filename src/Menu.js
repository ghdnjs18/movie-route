import { Link } from "react-router-dom";
import './Menu.css'
import React from "react";

function Menu({menus}) {
    return (
        <>
            {menus.map ((menu, id) => {
                return (
                    <Link key={id} to={menu.url} className="menu-item">{menu.name}</Link>
                )
            })}
        </>
    )
}

export default Menu