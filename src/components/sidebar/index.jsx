import React from 'react';
import style from './index.module.scss'
import NavItem from "./navItem";
import Friend from "./friend";
const Sidebar = (props) => {
    let navItemsElements = props.sidebar.links.map(el => <NavItem title={el.title} url={el.url} key={el.id}/>),
        friendsItemsElements = props.sidebar.friends.map(el => <Friend name={el.name} url={el.photoUrl} key={el.id}/>);
    return (
        <div className={style.sidebar}>
            <nav className={style.nav}>
                {navItemsElements}
            </nav>
            <div className={style.friends}>
                <h2 className={style['friends__title']}>Friends</h2>
                <div className={style['friends__wrap']}>
                    {friendsItemsElements}
                </div>
            </div>
        </div>
    )
}
export default Sidebar