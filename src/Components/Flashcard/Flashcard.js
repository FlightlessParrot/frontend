import { SwitchTransition, CSSTransition } from "react-transition-group";
import { useState } from "react";
import { Box, useBoolean, } from "@chakra-ui/react";
import CloseButton from "../Buttons/CloseButton";
import BiggerPhoto from "../Buttons/BiggerPhoto";

export default function Flashcard({ path, question, answer }) {
  const [show, setShow] = useState(false);
  const [flag, setFlag] = useBoolean(false)

  return (
    <>
      {flag && <div className="z-20 absolute top-0 w-screen h-screen flex align-center justify-center">
      <div className="z-20 absolute top-0 w-screen h-screen flex bg-black opacity-50"></div>
        <div className="z-30  relative top-0  object-contain" >  
          <CloseButton onClick={setFlag.off} />
        <img src={process.env.REACT_APP_BACKEND + path} className="max-w-screen max-h-screen" alt="zdjęcie związane z pytaniem"/></div>
      </div>}
      <SwitchTransition >
        <CSSTransition key={show + 'version'} classNames="bouncer" timeout={1000}>
          <div onClick={(e) => setShow((s) => !s)} className='preserve3d grid w-3/4 h-[400px] lg:w-[800px] sm:h-[400px] grid-rows-6 grid-cols-1 bg-sea shadow-black shadow-lg  p-2 lg:p-8 rounded'>
            {!show && path !== null && path !== '' && <div className="relative top-0 row-start-1 row-end-4 w-full h-full">
              <BiggerPhoto onClick={e=>{e.stopPropagation(); setFlag.on()}} />
              <img sizes='(min-width: 1024px) 700px, 300px' src={process.env.REACT_APP_BACKEND + path} className="w-full h-full object-cover " alt="zdjęcie związane z pytaniem" />

            </div>}

            <Box marginY={8} className={path !== null && path !== '' ? "row-start-4  row-end-6" : "row-start-1  row-end-6 flex flex-col justify-center items-center"}>
              {" "}
              {path !== null && path !== '' && <h2 className="bold-serif">{show ? "Odpowiedź" : "Pytanie"}</h2>}
              <p className={"block " + (path !== null && path !== '' ? 'text-2xl' : '')} dangerouslySetInnerHTML={{ __html: show ? answer : question }}></p>
            </Box>
          </div>
        </CSSTransition>
      </SwitchTransition></>
  );
}
