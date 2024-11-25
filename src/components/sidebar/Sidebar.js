import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Sidebar.module.css";
import { menuItems } from "../../data/mockData";
import ProfileIcon from "../../assets/profile-icon.png";
import RightArrow from "../../assets/icons/right-arrow.png"
import { Collapse, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
const Sidebar = ({isExpanded}) => {
    const [collapse,setCollapse] = useState(true);
    const [open, setOpen] = useState(false);

    const handleCollapse = () =>{
        setCollapse(!collapse)
    }
    return (
        <div className={`${isExpanded} ?"w-[212px]":"w-0" ${classes['sidebar']} fixed z-[100] flex h-full pl-4 pt-4 flex-col overflow-x-hidden border-r border-slate-300`}>
            <div className="flex items-center gap-1">
                <img src={ProfileIcon} />
                <span className="content-body">ByeWind</span>
            </div>
            
            {/* <List>
          {menuItems.map((item, key) =>
            item.items && item.links.length === 0 ? (
              <ListItem button key={key}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            ) : (
              item.links.map((child, index) => (
                <React.Fragment key={index}>
                  <ListItem button onClick={() => setOpen(!open)}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItem>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItem button>
                        <ListItemText inset primary={child.title} />
                      </ListItem>
                    </List>
                  </Collapse>
                </React.Fragment>
              ))
            )
          )}
        </List> */}
            <nav
                className="sidebar pt-4 gap=2"
            >
                <ul className={classes.list}>
                    {menuItems.map((menuItem, index) => (
                        <li>
                            <div className="content-body opacity-40 mb-3 mt-3">{menuItem.title}</div>
                            {menuItem.links.map((item) => (
                                <li className="mt-1 pb-2" onClick={handleCollapse}>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            isActive
                                                ? classes.active
                                                : undefined
                                        }
                                        end
                                    >
                                        <img src={RightArrow } />
                                        <img src={item.icon} />
                                        <span className="content-body">{item.label}</span>
                                        {/* {item.links?.map((subLink) => (
                                            <li>
                                                <NavLink
                                                    to="/"
                                                    className={({ isActive }) =>
                                                        isActive
                                                            ? classes.active
                                                            : undefined
                                                    }
                                                    end
                                                >
                                                    {subLink.label}
                                                </NavLink>
                                            </li>
                                        ))} */}
                                    </NavLink>
                                </li>
                            ))}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
