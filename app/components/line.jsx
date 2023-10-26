import SectionTitle from "./sectionTitle";

export const Line = ({ title }) => {
  return (
    <div className="flex items-center gap-3">
      <SectionTitle>{title}</SectionTitle>
      <div className="h-[0.1px] w-full bg-slate-300"></div>
    </div>
  );
};
