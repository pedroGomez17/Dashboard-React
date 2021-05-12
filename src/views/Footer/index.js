function Footer() {
return(
    <footer className="page-footer font-small text-dark">
        <div className="container">
            <div className="row text-center d-flex justify-content-center pt-1 mb-1">
                <div className="col-md-2 mb-2">
                    <h6 className="text-uppercase font-weight-bold">
                    <a href="#!">Home</a>
                    </h6>
                </div>
               
                <div className="flex-center">
                     <a className="fb-ic"href={"https://www.facebook.com/bodegacatenazapata"}>
                         <i className="fab fa-facebook-f fa-lg white-text mr-4"  > </i>
                     </a>
                     <a className="tw-ic"  href={"https://twitter.com/CatenaMalbec"}>
                         <i className="fab fa-twitter fa-lg white-text mr-4"> </i>
                     </a>
                    <a className="ins-ic" href={"https://www.instagram.com/catenawines/"}>
                         <i className="fab fa-instagram fa-lg white-text mr-4" > </i>
                     </a>
                     <a className="pin-ic" href={"https://www.youtube.com/CatenaMalbec/"}>
                         <i className="fab fa-youtube fa-lg white-text" > </i>
                     </a>
                  </div>
            </div>
            <hr className="rgba-white-light"></hr>
            <div className="row d-flex text-center justify-content-center mb-md-0">
               <div className="col-md-8 col-12">
                  <p>Elegida como la marca de vinos más admirada del mundo.</p>
                  <small>Cobos s/n - Luján de Cuyo (5509), Mendoza, Argentina Te: +54 261 413 1100</small>
               </div>
            </div>
         </div>
         <div className="footer-copyright text-center py-3">© 2021 Copyright:
           <a href="#!"> elevenGroup.com</a>
         </div>
      </footer>

);
}

export default Footer;