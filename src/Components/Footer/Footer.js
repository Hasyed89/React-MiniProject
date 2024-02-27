import"./Footer.css"
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
        <img  className = "navbar-logo"src="https://i.pinimg.com/originals/8f/17/98/8f1798a79cd8ebc06ea4cb03df81e15f.jpg" alt="/Logo.jpg" />
          <p>choose your favorite destination.</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-behance-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Change log</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>

        </div>
        <div>
          <h4>Community</h4>
          <a href="/">GitHub</a>
          <a href="/">Status</a>
          <a href="/">Project</a>
          <a href="/">Twitter</a>

        </div>
        <div>
          <h4>Help</h4>
          <a href="/services">Support</a>
          <a href="/">Trouble-shooting</a>
          <a href="/contact">Contact-Us</a>
              </div>
              <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
