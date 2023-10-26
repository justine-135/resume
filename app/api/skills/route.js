export async function GET() {
  const data = [
    {
      technical: [
        { id: 1, text: "HTML/CSS" },
        { id: 2, text: "Javascript/Typescript" },
        { id: 3, text: "ReactJS/NextJS" },
        { id: 4, text: "Object-oriented design" },
        { id: 5, text: "PHP/Python/NodeJS" },
        { id: 6, text: "MySQ/MongoDB" },
      ],
    },
    {
      professional: [
        { id: 1, text: "Effective communication" },
        { id: 2, text: "Strong problem solver" },
        { id: 3, text: "Good time management" },
        { id: 4, text: "Team player" },
        { id: 5, text: "Adaptability" },
        { id: 6, text: "Ethical Decision-Making" },
        { id: 7, text: "Project management" },
        { id: 8, text: "Conflict resolution" },
      ],
    },
  ];
  return Response.json(data);
}
