import { Flex } from "@chakra-ui/react";
import { squaresColors as colors } from "../../Data/colors";
import NumberInCircle from "./NumberInCircle";
import { useEffect, useReducer } from "react";

import NumberSquare from "../Squares/NumberSquare";

export default function MakeOrder({squares, isValid, answersController}) {
  const [state, dispatch] = useReducer(reducer, squares, init);

  const squaresColorfulData = squares.map((e, i) => ({
    ...e,
    color: colors[i],
    number: state.order[e.id],
  }));
  useEffect(
    ()=>{
      answersController(state.order)
      let valid=true
        for(const [key, value] of Object.entries(state.order))
        {
          if(value==null)
          {
            valid=false
          }
        }
      isValid(valid)
    },[state]
  )
  const numbers = (id) => {
    const jsx = [];
    for (let i = 1; i <= squares.length; i++) {
      jsx.push(
        <NumberInCircle
        key={i}
          clickHandler={() => dispatch({ id: id, number: i, type: 'number' })}
        >
          {i}
        </NumberInCircle>
      );
    }
    return jsx;
  };

  const numberSquares = squaresColorfulData.map((e) => {
    return (
      <NumberSquare
      key={e.id}
        element={e}
        currentElement={state.currenElement}
        clickHandler={() => dispatch({ type: "choose", id: e.id })}
        numbers={numbers}
      >
        {numbers(e.id)}
        </NumberSquare>
    );
  });

  function init(initValue) {

    const state = {order:{},
      currenElement: null};
    initValue.forEach((square) => {
      state['order'][square.id] = null;
    });
    return { ...state };
  }

  function reducer(state, action) {
    switch (action.type) {
      case "choose":
        return { ...state, currenElement: action.id };
      case "number":
        const newState = { ...state, currenElement: '' };
        for(const [key, value] of Object.entries(newState.order))
        {
          if(value===action.number)
          {
            newState.order[key]=null
          }
        }
        newState.order[action.id] = action.number;
        
        
        return {...newState}
    }
  }
  return (
    <div>
      <h2>Ustaw kafelki w kolelności</h2>
      <i>Po naciśnięciu kafelka będziesz mógł wybrać jego numer</i>
      <Flex gap={12} flexWrap={'wrap'} marginY={'40px'}>{numberSquares}</Flex>
    </div>
  );
}
