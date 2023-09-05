import { useEffect, useReducer } from "react";
import Square from "../Squares/Square";
import { Flex } from "@chakra-ui/react";
import { squaresColors as colors } from "../../Data/colors";
export default function MakePairs({ squares, isValid, answersController }) {
  const initValue = { currentElement: "", pairs: [] };
  const [state, dispatchPairs] = useReducer(reducer, initValue);
  useEffect(
    ()=>{
      answersController(state.pairs)
      2*state.pairs.length===squares.length ?
      isValid(true):
      isValid(false)
    },[state]
  )

  function reducer(state, action) { 
     const pairs = state.pairs.filter(
        (e) => e[0] !== action && e[1] !== action
      );
    if (state.currentElement === "" || state.currentElement === action) {
     const currentElement=state.pairs.every(e=>e[0]!=action && e[1]!=action)? action: "";
      return { ...state, currentElement: currentElement, pairs:pairs };
    } else {
    
      pairs.length === state.pairs.length && pairs.push([state.currentElement, action]);
      
      return {
        pairs: pairs,
        currentElement: "",
      };
    }
  }
  const createSquares=(e) => (
    <Square
      color={e.color}
      key={e.id}
      element={e}
      clickHandler={(e) => dispatchPairs(e.target.id)}
      halo={e.id==state.currentElement}
      rounded 
    />
  )
  const squaresColorfulData = squares.map((e, i) => ({
    ...e,
    color: colors[i],
  }));
  const unchosenElements=squaresColorfulData.filter(
    (e)=>state.pairs.every(
      (el)=>el[0]!= e.id && el[1]!=e.id
    )
  );

  const jsxElements=unchosenElements.map(createSquares)

  const pairedElements=squaresColorfulData.filter((e) =>
      state.pairs.some(el=>el[0]==e.id || el[1]==e.id)
    );

  const jsxPairs = state.pairs.map((e)=>{
  const onePair=[]
  
    onePair[0]=createSquares(pairedElements.find(el=>el.id==e[0]))
    onePair[1]=createSquares(pairedElements.find(el=>el.id==e[1]))

  
    return (
      <Flex
        justifyItems={"center"}
        key={`${e[0]}-${e[1]}`}
        marginY={"24px"}
        gap={8}
      >
        {onePair}
      </Flex>
    );
  });

  return (
    <div>
      <div className="my-12">
        <h2 className="lead">Wybrane pary</h2>
        <i>
          Tutaj będą się wyświetlać wybrane pary. Aby usunąć parę, kliknij na
          jej dowolny element
        </i>
      </div>
      <div>{jsxPairs}</div>
      <div>
        <h2 className="lead">Połącz kafelki w pary.</h2>
        <i>
          Kliknij na jeden z ich, a gdy podświetli się, wybierz
          odpowiadający mu element.
        </i>
        <Flex wrap={'wrap'} gap={12} marginY={'40px'}>{jsxElements}</Flex>
      </div>
    </div>
  );
}
