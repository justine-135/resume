import { HeadText } from "./headText";
import { Line } from "./line";
import Image from "next/image";
import Texts from "./texts";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { SocialLinks } from "./socialLinks";
import BoldText from "./boldText";

async function getData() {
  const res = await fetch("http://localhost:3000/api/about");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const getIcon = (icon) => {
  switch (icon) {
    case "gh":
      return <AiFillGithub />;
    case "gm":
      return <BiLogoGmail />;
    case "ln":
      return <AiFillLinkedin />;
    default:
      return "";
  }
};

export const Lists = ({ data: links }) => {
  console.log(links);
  return (
    links && (
      <ul className="list-outside">
        {links?.map((link) => {
          return (
            <li
              key={link.id}
              className={`${link.icon && "flex items-center gap-1"}`}
            >
              {getIcon(link.icon)}
              <SocialLinks link={link} />
            </li>
          );
        })}
      </ul>
    )
  );
};
export const HeaderContainer = async () => {
  const data = await getData();

  return (
    <>
      <div className="flex justify-between items-center">
        <header className="mt-10">
          <HeadText>{data.name}</HeadText>
          <BoldText>{data.title}</BoldText>
        </header>
        <Lists data={data.address} />
      </div>
      <Line title={"About"} />
      <div className="flex items-start gap-5">
        <Image
          className="profile rounded-full hover:animate-spin hover:h-60 hover:w-60"
          src="/profile.jpg"
          width={120}
          height={120}
          alt="killua"
        />
        <div className="flex flex-col gap-5">
          <Texts>{data.description}</Texts>
          <Lists data={data.socialLinks} />
        </div>
      </div>
    </>
  );
};
