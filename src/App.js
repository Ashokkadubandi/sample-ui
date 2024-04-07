import { useState } from "react";
import Header from "./Components/Header";
import Choose from "./Components/Choosing";
import KnowData from "./Components/Knowing";
import Placements from "./Components/Placements";
import "./App.css";

const knowledgeData = [
  {
    id: 1,
    topHeading: "Knowledge Level",
    bottomPaper: 3,
    content: [
      "Bachelors and Technology",
      "Management Accounting",
      "Financial Accounting",
    ],
  },
  {
    id: 2,
    topHeading: "Skill Level",
    bottomPaper: 6,
    content: [
      "Bachelors and Technology",
      "Management Accounting",
      "Financial Accounting",
    ],
  },
  {
    id: 3,
    topHeading: "Professional Level",
    bottomPaper: 5,
    content: [
      "Bachelors and Technology",
      "Management Accounting",
      "Financial Accounting",
    ],
  },
];

const App = () => {
  const [name, setDyn] = useState("");

  const changeInput = (event) => setDyn(event.target.value);

  return (
    <>
      <Header />
      <div className="body-flow">
        <Choose />
        <h1 className="why-choose">Why choose Us?</h1>
        <ul className="card-choosing">
          <li className="slip-card">
            <h1 className="card-heading">Expert Faculty</h1>
            <p className="card-desc">
              ontrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
            </p>
          </li>
          <li className="slip-card">
            <h1 className="card-heading">Complete Success Package</h1>
            <p className="card-desc">
              ontrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
            </p>
          </li>
          <li className="slip-card">
            <h1 className="card-heading">Placements</h1>
            <p className="card-desc">
              ontrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
            </p>
          </li>
        </ul>
        <ul className="duration-cells">
          <li className="cell">
            <h1 className="cell-heading">Levels</h1>
            <p className="cell-desc">Three (33 Papers)</p>
          </li>
          <li className="cell">
            <h1 className="cell-heading">Durations</h1>
            <p className="cell-desc">Three (33 Papers)</p>
          </li>
          <li className="cell">
            <h1 className="cell-heading">Exams</h1>
            <p className="cell-desc">Three (33 Papers)</p>
          </li>
          <li className="cell">
            <h1 className="cell-heading">Exemptions</h1>
            <p className="cell-desc">Three (33 Papers)</p>
          </li>
        </ul>
        <h1 className="why-choose">What Will you Learn in ACCA</h1>
        <ul className="knowledge-ul">
          {knowledgeData.map((each) => (
            <KnowData key={each.id} each={each} />
          ))}
        </ul>
        <Placements />
        <div className="placements-prep">
          <div className="bottom-prep-text">
            <h1 className="bottom-place-heading">
              Kick off your ACCA Prep journey with indigoLearn
            </h1>
            <p className="signin-text">
              Signin and get instant access to our free courses
            </p>
            <button type="button" className="sin">
              Sign in
            </button>
          </div>
          <form className="place-form">
            <h1 className="form-heading">Approving to ACCA</h1>
            <input placeholder="Number" />
            <input placeholder="Email ID" />
            <select>
              <option>Random1</option>
              <option>Random2</option>
            </select>
            <select>
              <option>Random1</option>
              <option>Random2</option>
            </select>
            <button className="request">Request Call Back</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
