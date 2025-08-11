import { useState } from "react";
import data from "./assets/data";
import './index.css'

function Accordion() {
    const [show, setShow] = useState(null)

    const toggle = (i) => {
        if (show == i) {
            return setShow(null)
        } 
        return setShow(i)
    }

  return (
    <div className="flex flex-col w-[65vw] mx-auto">
      <h1 className="font-bold text-6xl py-10 text-center">Frequently Asked Questions (FAQs)</h1>

      {data?.map((item, i) => (
        <div key={i}>
          <h1 onClick={() => toggle(i)} className="font-semibold text-2xl flex justify-between items-center cursor-pointer pt-5 ">{item.title} <span className="text-pink-700 text-3xl">{show == i ? "-":"+"}</span></h1>
          <h2 className={show == i ? 'content show': 'content'} > {item.content} </h2>
          <div className="bg-gray-300 h-[1.5px] rounded-full mt-5"></div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
