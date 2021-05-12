import HeaderUser from "../Header";
import Users from "./components/Users";
import Products from "./components/Products/index.";
import Footer from "../Footer";


export default function ContentWrapper() {
  
    return(
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <HeaderUser />
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Informacion</h1>
                    </div> 
                    <Products />     
                    <Users />
                </div>
            </div>
            <Footer />
    </div>
    );
}
    