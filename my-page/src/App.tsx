import './App.css';

import Main from './components/ui/main/Main';
import Footer from './components/ui/footer/Footer';
import Contacts from './components/contacts/Contacts';
import SkillsList from './components/skills-list/SkillsList';
import WorkingExperience from './components/working-experience/WorkingExperience';

import details from "./data/details.json";
import PersonalInfo from './components/personal-info/PersonalInfo';

function App() {
  const { name, autobiography, workingExperience, skills, photo, contacts } = details;

  return (
    <>
      <Main>

        <PersonalInfo name={name} autobiography={autobiography} photo={photo} />

        <WorkingExperience workingExperience={workingExperience} />

        <SkillsList skills={skills} />

      </Main>
      <Footer>
        <Contacts contacts={contacts} />
      </Footer>
    </>
  )
}

export default App;
