import FlexBetweenContainer from "./flexBetweenContainer";
import BoldText from "./boldText";
import LightText from "./lightText";
import Texts from "./texts";

async function getData() {
  const res = await fetch("http://localhost:3000/api/experience");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const Lists = ({ data: completes }) => {
  return (
    completes && (
      <ul className="list-outside ms-5">
        {completes?.map((complete) => {
          return (
            <li className="list-disc" key={complete.id}>
              <Texts>{complete.text}</Texts>
            </li>
          );
        })}
      </ul>
    )
  );
};

export const ExperiencesContainer = async () => {
  const experiences = await getData();

  return (
    <section className="flex flex-col gap-2">
      {experiences.map((experience) => {
        return (
          <div className="flex flex-col gap-2" key={experience.id}>
            <FlexBetweenContainer>
              <BoldText>{experience.title}</BoldText>
              <LightText>
                {experience.company} | {experience.startYear} -{" "}
                {experience.endYear}
              </LightText>
            </FlexBetweenContainer>
            <Texts>{experience.description}</Texts>
            <Lists data={experience.completed} />
          </div>
        );
      })}
    </section>
  );
};
