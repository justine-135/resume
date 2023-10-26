import { ExperiencesContainer } from "../components/experiencesContainer";
import SectionTitle from "../components/sectionTitle";
import { MdOutlineWork } from "react-icons/md";
import { SkillsContainer } from "../components/skillsContainer";
import { Line } from "../components/line";
import { HeaderContainer } from "../components/headerContainer";

const Resume = async () => {
  return (
    <main className="main flex items-center justify-center w-full">
      <div className="flex flex-col gap-8 w-2/4">
        <HeaderContainer />
        <Line title={"Skills"} />
        <SkillsContainer />
        <Line title={"Work experience"} />
        <ExperiencesContainer />
        <footer className="mb-8 text-center">
          Designed and built by @killua
        </footer>
      </div>
    </main>
  );
};

export default Resume;
