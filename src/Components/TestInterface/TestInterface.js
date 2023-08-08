import { useState } from "react";
import Title from "../Title";
import Answers from "./Answers";
import MakeOrder from "./MakeOrder";
import MakePairs from "./MakePairs";
export default function TestInterface({
  questionPack,
  answersController,
  currentQuestion,
}) {
  const [valid, setValid] = useState(false);

  const answers = (questionPack, answersController) => {
    const data = {
      isValid: setValid,
      answersController: answersController,
      answers: questionPack.answers,
      squares: questionPack.squares,
      key: questionPack.question.id,
    };

    switch (questionPack.question.type) {
      case "one-answer":
        return <Answers {...data} />;
      case "many-answers":
        return <Answers {...data} moreThanOne />;
      case "order":
        return <MakeOrder {...data} />;
      case "pairs":
        return <MakePairs {...data} />;
      default:
        <p className="text-red-500 bold">WYSTĄPIŁ BŁĄD</p>;
    }
  };
  function clickHandler(event) {
    event.preventDefault();
    valid && answersController("forward");
  }
  return (
    <>
      <Title title={`Pytanie numer ${currentQuestion + 1}`} />
      <div className="p-4 my-6">
        <div className="flex justify-center">
          <img
            className="object-contain"
            src={questionPack.question.path}
            alt=""
          />
        </div>
        <p className="sans-serif p-2 my-6 md:my-12">{questionPack.question.question}</p>
        {answers(questionPack, answersController)}
      </div>
      <div className="flex justify-end p-4">
        {valid ? (
          <button onClick={clickHandler} className="action-button">
            Dalej
          </button>
        ) : (
          <p className="bg-red-500 p-2">
            {" "}
            Odpowiedz na pytanie, aby przejść dalej
          </p>
        )}
      </div>
    </>
  );
}
