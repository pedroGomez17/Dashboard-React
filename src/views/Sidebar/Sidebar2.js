import SidebarNavItem from "./SidebarNavItem";

function Sidebar() {
return(
    <ul className="navbar bg-gradient-secondary navbar-expand-lg sidebar-dark" id="accordionSidebar">

			<SidebarNavItem name="Productos" i="fas fa-fw fa-clipboard-list"/> 
            <SidebarNavItem name="Ventas" i="fas fa-fw fa-dollar-sign"/>
            <SidebarNavItem name="Mis Datos" i="fas fa-fw fa-address-card"/>
            <SidebarNavItem name="Usuarios" i="fas fa-fw fa-users"/>

    		<hr className="sidebar-divider d-none d-md-block"></hr>
		</ul>
);
}

export default Sidebar;