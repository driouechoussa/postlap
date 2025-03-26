import logo from "../images/logo_footer.svg"
import mailIcon from "../images/icons/mail.svg"
import phoneIcon from "../images/icons/phone.svg"
import locationIcon from "../images/icons/location.svg"
function Footer() {
  return (
    <footer className="">
      <section className="container">
        <div className="row">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h5 className="pt-3">
              <img src={logo} width={100} alt="footer logo" />
            </h5>
            <p className="footer_description">
              A space dedicated to sharing insights, tutorials, and personal
              experiences on technology, coding, and digital trends.
            </p>
          </div>
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h5 className="pt-3 title_footer text-capitalize">services</h5>
            <p>
              <a className="" href="#">
                about us
              </a>
            </p>
            <p>
              <a className="" href="#">
                events
              </a>
            </p>
            <p>
              <a className="" href="#">
                contact
              </a>
            </p>
          </div>

          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h5 className="pt-3 title_footer text-capitalize">get help</h5>
            <p>
              <a className="" href="#">
                FAQ
              </a>
            </p>
            <p>
              <a className="" href="#">
                help
              </a>
            </p>
            <p>
              <a className="" href="#">
                terms
              </a>
            </p>
          </div>

           <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h5 className="pt-3 title_footer text-capitalize">contact</h5>
            <p>
                <span><img src={mailIcon} alt="mail" /></span>
              <a className="text-lowercase ps-2" href="">
                info@postlap.com
              </a>
            </p>
            <p>
                <span><img src={phoneIcon} alt="phone" /></span>
              <a className="text-lowercase ps-2" href="#">
                +212 (603) 427 204
              </a>
            </p>
            <p>
                <span><img src={locationIcon} alt="location" /></span>
              <a className="text-capitalize ps-2" href="#">
                marrakech 40050 , morocco
              </a>
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
