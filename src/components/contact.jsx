import "./contact.css"

const Contact = () => {
  return (
    <div className="footer">
      <section id="contact" className="section">
        <h2 className="hed">Contact Me</h2>
        
        <p className="meil">📧 thotaharshareddy@gmail.com</p>
        <p className="number">📞 7396683427</p>

        <div className="social-icons">
          <a href="https://github.com/Harshareddy3391" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/16546/16546614.png" alt="GitHub" className="icon"/>
          </a>
          
          <a href="https://www.linkedin.com/in/harshavardhan-reddy-thota-8b8ab5318/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="LinkedIn" className="icon"/>
          </a>
        </div>
      </section>

      <div className="footer-bottom">
        <p>© 2025 Harsha Reddy | Built with React ⚛️</p>
      </div>
    </div>
  );
};

export default Contact;