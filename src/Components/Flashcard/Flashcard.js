import { SwitchTransition, CSSTransition } from "react-transition-group";
import { useState } from "react";
import { Box, } from "@chakra-ui/react";

export default function Flashcard({ path, question, answer }) {
  const [show, setShow] = useState(false);
 
  return (
    <SwitchTransition >
      <CSSTransition key={show+'version'} classNames="bouncer" timeout={1000}>
        <div onClick={(e) => setShow((s) => !s)} className='preserve3d grid w-3/4 h-[400px] lg:w-[700px] sm:h-[500px] grid-rows-6 grid-cols-1 bg-sea shadow-black shadow-lg  p-2 lg:p-8 rounded'>
        { !show && <img src={process.env.REACT_APP_BACKEND+path} className="row-start-1 row-end-4 w-full h-full object-contain " alt="zdjęcie związane z pytaniem" />}

          <Box marginY={8} className="row-start-4">
            {" "}
            <h2 className="bold-serif">{show ? "Odpowiedź" : "Pytanie"}</h2>
            <p className="block " dangerouslySetInnerHTML={{__html:show ? answer : question }}></p>
          </Box>
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}
