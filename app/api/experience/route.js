export async function GET() {
  const data = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Google.",
      startYear: "2023",
      endYear: "Present",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempore reprehenderit blanditiis ut rerum ea debitis, animi libero consequatur voluptate consectetur repudiandae alias distinctio veritatis quo quidem quia tenetur ullam saepe, suscipit qui! Vero voluptates odio, eligendi praesentium repudiandae vitae tempore consectetur quasi, labore iure nisi ut necessitatibus quos a.",
      completed: [
        {
          id: 1,
          text: "Lorem ipsum dolor asdasasd wqsvad asddaw asdopasdopkawdpo opasdopawd opk sit amet consectetur adipisicing elit. Ipsa tempore reprehenderit blanditiis ut rerum ea debitis",
        },
        {
          id: 2,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempore reprehenderit blanditiis ut rerum ea debitis",
        },
        {
          id: 3,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempore reprehenderit blanditiis ut rerum ea debitis",
        },
      ],
    },
    {
      id: 2,
      title: "React Developer",
      company: "Oracle.",
      startYear: "2019",
      endYear: "2022",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempore reprehenderit blanditiis ut rerum ea debitis, animi libero consequatur voluptate consectetur repudiandae alias distinctio veritatis quo quidem quia tenetur ullam saepe, suscipit qui! Vero voluptates odio, eligendi praesentium repudiandae vitae tempore consectetur quasi, labore iure nisi ut necessitatibus quos a.",
      completed: [
        {
          id: 1,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempore reprehenderit blanditiis ut rerum ea debitis",
        },
        {
          id: 2,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempore reprehenderit blanditiis ut rerum ea debitis",
        },
        {
          id: 3,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempore reprehenderit blanditiis ut rerum ea debitis",
        },
      ],
    },
    {
      id: 3,
      title: "Lead Software Engineer",
      company: "Microsoft.",
      startYear: "2017",
      endYear: "2019",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempore reprehenderit blanditiis ut rerum ea debitis, animi libero consequatur voluptate consectetur repudiandae alias distinctio veritatis quo quidem quia tenetur ullam saepe, suscipit qui! Vero voluptates odio, eligendi praesentium repudiandae vitae tempore consectetur quasi, labore iure nisi ut necessitatibus quos a.",
      completed: [
        {
          id: 1,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempore reprehenderit blanditiis ut rerum ea debitis",
        },
        {
          id: 2,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempore reprehenderit blanditiis ut rerum ea debitis",
        },
        {
          id: 3,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempore reprehenderit blanditiis ut rerum ea debitis",
        },
      ],
    },
  ];
  return Response.json(data);
}
