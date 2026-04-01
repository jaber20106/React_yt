import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro: "lorem ipsum dolor sit amet consectetur adipisicing elit. Enim provident optio laudantium veritatis possimus hic!",
      tag: "Satisfied",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro: "lorem ipsum dolor sit amet consectetur adipisicing elit. Enim provident optio laudantium veritatis possimus hic!",
      tag: "unsaved",
    },
    {
      img: "https://images.unsplash.com/photo-1587614298171-a223667e51c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro: "lorem ipsum dolor sit amet consectetur adipisicing elit. Enim provident optio laudantium veritatis possimus hic!",
      tag: "unSatisfied",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1731355865761-69e8d539e328?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
      intro: "lorem ipsum dolor sit amet consectetur adipisicing elit. Enim provident optio laudantium veritatis possimus hic!",
      tag: "unSatisfied",
    },
  ];

  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
