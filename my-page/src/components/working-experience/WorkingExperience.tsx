type Props = {
  workingExperience: { "years": number, "name": string }
}


const WorkingExperience = ({ workingExperience }: Props) => {
  return (
    <>
      <h2>Working Experience</h2>
      <p>
        <span>I'm working as {workingExperience.name}</span> for <span>{workingExperience.years} {workingExperience.years === 1 ? "year" : "years"}</span>
      </p>
    </>
  )
}

export default WorkingExperience;
