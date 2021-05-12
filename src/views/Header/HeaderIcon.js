function HeaderIcon(props) {
    return(
        <li className="nav-item dropdown no-arrow mx-1">
        <a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
            <i className={props.icono}></i>
            <span className={props.color}>{props.cantidad}</span>
        </a>
    </li>

    );
}

export default HeaderIcon;