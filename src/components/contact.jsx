import "./contact.css"

const Contact = () => {
  return (
    <div className="footer">
      <section id="contact" className="section">
        <h2 className="hed">Contact Me</h2>
        <p className="meil">📧 thotaharshareddy@email.com</p>
          <a href="https://github.com/Harshareddy3391">< img src="https://cdn-icons-png.flaticon.com/128/16546/16546614.png" alt="github" className="icon"/></a>
         <a href="https://www.linkedin.com/in/harshavardhan-reddy-thota-8b8ab5318/">  <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="linkedin" className="icon"/></a>


        <p className="number">📞 739668327</p>
      </section>
      <div className="footer-bottom">
        <p>© 2025 Harsha Reddy | Built with React ⚛️</p>
      </div>
    </div>
  );
};

export default Contact;