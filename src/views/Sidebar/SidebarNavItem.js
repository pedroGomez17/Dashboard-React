function SidebarNavItem (props){
    return(
    <li className="nav-item">
        <a className="nav-link" href="/">
            <i className={props.i}></i>
            <span>{props.name}</span>
        </a>
    </li>
);
}
export default SidebarNavItem;