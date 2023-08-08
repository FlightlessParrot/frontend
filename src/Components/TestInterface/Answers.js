import OnlyOneAnswer from "./OnlyOneAnswer";
import ManyAnswers from "./ManyAnswers"

export default function Answers({ answers, moreThanOne, isValid, answersController }) {
   const props= { answers, moreThanOne, isValid, answersController }
  return (
    <div>
      <strong className="bold-serif">
        {moreThanOne
          ? "Wybierz jedną lub więcej prawidłowych odpowiedzi"
          : "wybierz jedną prawidłową odpowiedź"}{" "}
      </strong>
      <div className="grid gap-4 grid-cols-2">
        {moreThanOne ? <ManyAnswers  {...props}/> : <OnlyOneAnswer {...props} />}
      </div>
    </div>
  );
}
