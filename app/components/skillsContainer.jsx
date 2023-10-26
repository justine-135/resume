import BoldText from "./boldText";
import Texts from "./texts";

async function getData() {
  const res = await fetch("http://localhost:3000/api/skills");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const Lists = ({ skills }) => {
  return (
    <ul className="flex flex-wrap gap-x-2">
      {skills.map((skill) => {
        return (
          <li key={skill.id}>
            <Texts>{skill.text}</Texts>
          </li>
        );
      })}
    </ul>
  );
};

export const SkillsContainer = async () => {
  const skills = await getData();

  const technical = skills[0].technical;
  const professional = skills[1].professional;

  return (
    <div>
      <div>
        <BoldText>Technical</BoldText>
        <Lists skills={technical} />
      </div>

      <div>
        <BoldText>Professional</BoldText>
        <Lists skills={professional} />
      </div>
    </div>
  );
};
