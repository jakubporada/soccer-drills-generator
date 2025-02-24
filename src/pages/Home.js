import { useState } from "react";
import drills from "../data/drills";  // Import drills data
import "../styles.css";  

export default function Home() {
  const [skillLevel, setSkillLevel] = useState("Select One");
  const [goal, setGoal] = useState("Select One");
  const [filteredDrills, setFilteredDrills] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Filter drills based on user input
    const results = drills.filter(
      (drill) =>
        drill.skillLevel === skillLevel &&
        drill.goal === goal
    );

    setFilteredDrills(results);
  };

  return (
    <div className="container">
      <h1>Soccer Training Drills Generator</h1>
      <p>Get personalized drills tailored to your needs.</p>

      <form onSubmit={handleSubmit}>

        <label>Select Your Skill Level:</label>
        <select value={skillLevel} onChange={(e) => setSkillLevel(e.target.value)}>
          <option>Select One</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        <label>Training Goal:</label>
        <select value={goal} onChange={(e) => setGoal(e.target.value)}>
          <option>Select One</option>
          <option>Shooting</option>
          <option>Dribbling</option>
          <option>Passing</option>
          <option>Defense</option>
        </select>

        <button type="submit">Generate Drills</button>
      </form>

      <div className="drills-container">
        <h2>Recommended Drills:</h2>
        {filteredDrills.length > 0 ? (
          filteredDrills.map((drill) => (
            <div key={drill.id} className="drill-card">
              <h3>{drill.title}</h3>
              <p>{drill.description}</p>
            </div>
          ))
        ) : (
          <p>No drills found. Try different options!</p>
        )}
      </div>
    </div>
  );
}
