import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import SidebarToggle from "../../assets/icons/toggle-left.png";
import Star from "../../assets/icons/star.png";
import Theme from "../../assets/icons/light.png";
import Refresh from "../../assets/icons/refresh.png";
import Notification from "../../assets/icons/notification.png";
import DrawerToggle from "../../assets/icons/toggle-right.png";
import Search from "../../assets/icons/search.png"

const MainNavigation = ({ toggleSidebar }) => {
    return (
        <header className={`${classes["header"]} border-b flex justify-between items-center`}>
            <div className="flex items-center gap-3 pl-4">
                <img src={SidebarToggle} onClick={toggleSidebar} />
                <img src={Star} />
                <span>Dashboards / </span>
                <span>Default</span>
            </div>
            <div className="flex items-center gap-3 pr-4">
            <form className="" method='post' action='#'>
            <button type='submit' title="search">
                <img src={Search} />
            </button>
            <input type='text' name='query' className='rounded-md' placeholder='Search' title='Enter Search Keyword' />
            
        </form>
        <img src={Theme} />
        <img src={Refresh} />
        <img src={Notification} />
        <img src={SidebarToggle} />
            </div>
        </header>
    );
};

export default MainNavigation;
