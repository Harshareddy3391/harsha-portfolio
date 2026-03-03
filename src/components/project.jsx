 import "./project.css"
 
 const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-container">  {/* ✅ Add wrapper */}
        <div className="project-card">
          <h3>Mini Cart App</h3>
          <p>React-based shopping cart with context API.</p>
          <a href="https://github.com/Harshareddy3391/mini-cart.git">GitHub</a>   


          <a href=" https://mini-cart-rouge.vercel.app/">Opean</a>   





          
        </div>

        <div className="project-card">
          <h3>Portfolio</h3>
          <p >React js.</p>
          <a href="https://github.com/Harshareddy3391/harsha-portfolio.git">GitHub</a>

           <a href=" https://harsha-portfolio-2.onrender.com">Opean</a>  
        </div>

         
      </div>
    </section>
  );
};

export default Projects;