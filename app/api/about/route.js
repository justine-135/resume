export async function GET() {
  const data = {
    name: "Killua Zoldyck",
    title: "Assassin",
    description:
      "I'm Killua Zoldyck, a character from the anime and manga series 'Hunter x Hunter.' I come from the infamous Zoldyck family, a family of deadly assassins, but I'm determined to break free from that life and pursue my own dreams. I'm best known for my agility, incredible strength, and skills in the art of assassination. If you have any questions or need assistance, feel free to ask!",
    address: [
      { id: 1, text: "+63 912 123 1234" },
      { id: 2, text: "Manila, Philippines" },
    ],
    socialLinks: [
      {
        id: 1,
        text: "killua@github.com",
        url: "https://facebook.com",
        icon: "gh",
      },
      {
        id: 2,
        text: "killua@linkedin.com",
        url: "https://facebook.com",
        icon: "ln",
      },
      {
        id: 3,
        text: "killua@gmail.com",
        url: "https://facebook.com",
        icon: "gm",
      },
    ],
  };
  return Response.json(data);
}
