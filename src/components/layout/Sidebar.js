import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom'
import MaterialIcon from 'material-icons-react';

class Sidebar extends Component {
    render() {
        return (
            <Menu right >
                <NavLink to="/"><MaterialIcon icon="home" color='#d2d6de' /><span className="mr-1">خانه</span></NavLink>
                <NavLink to="/users"><MaterialIcon icon="group" color='#d2d6de' /><span className="mr-1">کاربران</span></NavLink>
                <NavLink to="/calendars"><MaterialIcon icon="list" color='#d2d6de' /><span className="mr-1">تقویم</span></NavLink>
                <NavLink to="/timesheet"><MaterialIcon icon="list" color='#d2d6de' /><span className="mr-1">جدول زمانی</span></NavLink>
                <NavLink to="/offices"><MaterialIcon icon="list" color='#d2d6de' /><span className="mr-1">دفاتر کاری</span></NavLink>
                <NavLink to="/config"><MaterialIcon icon="settings" color='#d2d6de' /><span className="mr-1">تنظیمات</span></NavLink>
            </Menu>
        );
    }
}

export default Sidebar;


