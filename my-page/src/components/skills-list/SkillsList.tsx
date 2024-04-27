import "./SkillsList.css";

type Props = {
  skills: { "title": string, "score": string }[]
}

const SkillsList = ({ skills }: Props) => {
  return (
    <ul className="skills-list">
      {skills.map(s => <li>
        <span className="skill-name">{s.title}</span>: <span className="skill-score">{s.score}</span>
      </li>)}
    </ul>
  )
}

export default SkillsList;
