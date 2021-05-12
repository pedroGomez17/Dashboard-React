import SidebarNavItem from "./SidebarNavItem";

function Sidebar() {
return(
    <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

			
			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<i className="fas fa-chart-line"></i>
				</div>
				<div className="sidebar-brand-text mx-3">Usuario</div>
			</a>

			<hr className="sidebar-divider my-0"></hr>

			<li className="nav-item active">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Menu Administrador</span></a>
			</li>

			<hr className="sidebar-divider"></hr>

			<div className="sidebar-heading">Actions</div>

			{/* <SidebarNavItem name="Estadísticas" i="fas fa-fw fa-chart-area"/> */}
            <SidebarNavItem name="Productos" i="fas fa-fw fa-clipboard-list"/> 
            <SidebarNavItem name="Usuarios" i="fas fa-fw fa-users"/>

    		<hr className="sidebar-divider d-none d-md-block"></hr>
		</ul>
);
}

export default Sidebar;