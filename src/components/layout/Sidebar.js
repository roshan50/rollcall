import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom'

class Sidebar extends Component {
    render() {
        return (
            <Menu>
                <NavLink to="/">خانه</NavLink>
                <NavLink to="/users">کاربران</NavLink>
                <NavLink to="/calendars">تقویم</NavLink>
                <NavLink to="/timesheet">جدول زمانی</NavLink>
                <NavLink to="/offices">دفاتر کاری</NavLink>
                <NavLink to="/config">تنظیمات</NavLink>
            </Menu>
        );
    }
}

export default Sidebar;


