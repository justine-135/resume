export const SocialLinks = ({ link }) => {
  return (
    <a href={link.url} target="_blank" className="text-slate-800">
      {link.text}
    </a>
  );
};
