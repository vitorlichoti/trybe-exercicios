import React from "react";

class About extends React.Component {
  render() {
    const myName = <h1>Vitor Lichoti</h1>
    const aboutMe = <p>Sou brasileiro natural de Nova Andradina - MS, apaixonado por programação, jogos e pedalar.</p>
    const skills = ["HTML","CSS", "JavaScript", "Unit Tests", "TDD", "API", "Async Functions"];
    const jsxSkills = skills.map((skill) => <li>{skill}</li>);
    return (
      <div>
        {myName}
        {aboutMe}
        <h2>Minhas Habilidades</h2>
        <ul>
        {jsxSkills}
        </ul>
      </div>
    );
  }
}

export default About;