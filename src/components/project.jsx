const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="project-card">
        <h3>Mini Cart App</h3>
        <p>React-based shopping cart with context API.</p>
        <a href="#">GitHub</a>
      </div>

      <div className="project-card">
        <h3>API Fetch App</h3>
        <p>Fetched data using useEffect and displayed dynamically.</p>
        <a href="#">GitHub</a>
      </div>
    </section>
  );
};

export default Projects;