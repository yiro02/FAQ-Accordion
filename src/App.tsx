import "./App.css";
import background from "./assets/background-pattern-desktop.svg";
import iconstar from "./assets/icon-star.svg";
import iconminus from "./assets/icon-minus.svg";
import iconplus from "./assets/icon-plus.svg";
import mobile from "./assets/background-pattern-mobile.svg";
import { useState } from "react";

const App = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleItemClick = (value: string) => {
    setOpenItem(openItem === value ? null : value);
  };
  const faqs = [
    {
      id: "item-1",
      question: "What is Frontend Mentor, and how will it help me?",
      answer:"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      id: "item-2",
      question: "Is Frontend Mentor free?",
      answer: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },
    {
      id: "item-3",
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer:"Yes, you can use any of your completed Frontend Mentor projects in your portfolio to showcase your skills.",
    },

    {
      id: "item-4",
      question: "How can I get help if I'm stuck on a challenge?",
      answer:"The best place to get help is the Frontend Mentor community forum, where other developers share advice and feedback.",
    },
  ];

  return (
    <div
      className="bg-Purple-100 h-226 w-full justify-center items-center
        relative mx-auto grid grid-cols-4 max-w-screen lg:grid-cols-none  " 
    >
      {/* Imagen de fondo */}
      <img
        src={background}
        alt="Background header"
        className="absolute top-0 left-0 w-full  h-[250px] object-cover 
         hidden lg:block"
      />
       
     {/* Imagen mobile */}
      <img
        src={mobile}
        alt="Background header"
        className=" absolute top-0 left-0  w-full  h-[200px]
         justify-center flex-wrap flex-col object-cover block lg:hidden"
      />
      {/* Contenedor principal */}
      <div
        className="relative bg-White w-full max-w-3xl rounded-lg shadow-lg p-5
        mt-5 col-start-2"
      >
        <div className="flex relative items-center gap-2 mb-6">
          <img src={iconstar} alt="Star icon" width={35} />
          <h1 className="text-3xl font-extrabold text-Purple-950">FAQs</h1>
        </div>

        {/* Preguntas (acordeón)*/}
        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.id} className="border-b border-Purple-100 pb-4">
              <button
                className="w-full flex justify-between items-center text-md text-Purple-950
                 font-semibold hover:text-Purple-400 transition active:hover:text-Purple-200 cursor-pointer p-2"
                onClick={() => handleItemClick(item.id)}
              >
                {item.question}
                <img
                  src={openItem === item.id ? iconminus : iconplus}
                  alt="Toggle icon"
                  className="w-10 h-10"
                />
              </button>
              {/* Respuesta */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openItem === item.id ? "max-h-40 mt-2" : "max-h-1" }`}
              >
                <p className="text-Purple-600 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
 };
export default App;