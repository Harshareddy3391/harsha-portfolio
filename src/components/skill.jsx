import "./skill.css"
const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-container">

        <div className="skill-card">
          <h3>Frontend</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Backend</h3>
          <ul>
            <li>Python</li>
            <li>FastAPI</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Tools</h3>
          <ul>
            <li>VS Code</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>ChatGPT</li>
            <li>Claude</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skills;