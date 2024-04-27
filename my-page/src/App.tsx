import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faLinkedinIn, faTelegram } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import details from "./data/details.json";

function App() {

  return (
    <>
      <main>
        <h1>{details.name}</h1>
        <p>{details.autobiography}</p>
        <img width={"40%"} src={details.photo} alt={details.name} />
        <h2>Working Experience</h2>
        <p>
          <span>I'm working as {details.workingExperience.name}</span> for <span>{details.workingExperience.years} {details.workingExperience.years === 1 ? "year" : "years"}</span>
        </p>
        <ul>
          {details.skills.map(s => <li>
            <span>{s.title}</span>: <span>{s.score}</span>
          </li>)}
        </ul>
      </main>
      <footer>
        <ul>
          <li>
            <a href={`mailto:${details.contacts.email}`}>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
          <li>
            <a href={details.contacts.instagram}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href={details.contacts.linkedin}>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          <li>
            <a href={details.contacts.telegram}>
              <FontAwesomeIcon icon={faTelegram} />
            </a>
          </li>
        </ul>
      </footer>

    </>
  )
}

export default App;
