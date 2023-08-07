import React, { forwardRef } from "react";

const ModalContent = forwardRef((props, ref) => {
  return (
    <div className="flex flex-col items-center" ref={ref}>
      <div className="flex justify-center items-center">
        <img src={props.pictures} alt="" className=" h-full object-cover foud:hidden" />
        <div className=" text-justify pl-3 foud:p-0 fifd:mx-1">
          <h2 className="text-secol text-center text-2xl font-bold">{props.name}</h2>
          <p className="text-white mt-5 mb-3">{props.desc1}</p>
          <p className="text-white mb-3">{props.desc2}</p>
          <ul className="flex flex-wrap justify-center gap-4 my-5">
            {props.skills.map((e, index) => (
              <li className="bg-secol py-1 px-2 rounded-xl" key={index}>{e}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center gap-20 w-14 h-full">
          <button className="rotate-90 border-2 border-secol rounded-xl text-xl px-5 pt-1" onClick={(e) => {window.open(`${props.site}`, '_blank')}}>Site</button>
          <button className="rotate-90 border-2 border-secol rounded-xl text-xl px-5 pt-1" onClick={(e) => {window.open(`${props.repo}`, '_blank')}}>Github</button>
        </div>
      </div>
    </div>
  )
})

export default ModalContent