import "./PersonalInfo.css";

type Props = {
  "name": string, "autobiography": string, "photo": string
}

const PersonalInfo = ({ name, autobiography, photo }: Props) => {
  return (
    <>
      <h1>{name}</h1>
      <p>{autobiography}</p>
      <img className="my-photo" width={"40%"} src={photo} alt={name} />
    </>
  )
}

export default PersonalInfo
