import {Stack } from "@chakra-ui/react";
import { useReducer } from "react";
import Switcher from "./Switcher";

export default function QuestionSettings() {
  const switchersData={
    
      questionsOneAnswer: ['Pytania jednokrotnego wyboru','one-answer'],
      questionsManyAnswers: ['Pytania wielokrotnego wyboru', 'many-answers'],
      questionsOrder:  ['Pytania typu ustaw w kolejności', 'order'],
      questionsPairs: ['Pytania typu znajdź pary', 'pairs'],
      questionsShortAnswer: ['Pytania typu krótka odpowiedź pisemna', 'short-answer'],
      questionsAll: ['Wszystkie pytania',true],
    
  }
    const initValue = {
        questionsOneAnswer: true,
        questionsManyAnswers: true,
        questionsOrder: true,
        questionsPairs: true,
        questionsShortAnswer: true,
        questionsAll: true,
      };
      const questionsReducer = (state, action) => {
        const node = action.target;
        const value = node.checked;
    
        const newState = { ...state };
        if (node.name === "questionsAll") {
          return {
            questionsOneAnswer: value,
            questionsManyAnswers: value,
            questionsOrder: value,
            questionsPairs: value,
            questionsShortAnswer: value,
            questionsAll: value,
          };
        }
        newState[node.name] = node.checked;

        let allAreChecked=true
        Object.entries(newState).forEach(
          ([key, value])=>{
            if(key!=='questionsAll')
            {
              if(!value)
              {
                allAreChecked=false
              }
            }
          }
        );
        newState.questionsAll=allAreChecked

        return { ...newState };
      };
     
      const [questions, dispatchQuestions] = useReducer(
        questionsReducer,
        initValue
      );
        const switchers=Object.entries(switchersData).map(
          ([name, [label, value]],i)=><Switcher key={i} label={label} value={value} name={name} onChange={dispatchQuestions} isChecked={questions[name]} />
        )
  return (
    <Stack gap="6">
             {switchers}
            </Stack>
  )
}