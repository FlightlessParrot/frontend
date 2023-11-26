import { Box, useSteps, Flex, Button, useBoolean } from "@chakra-ui/react";
import MyStepper from "../Stepper/MySteppper";
import useCategoriesReducer from "../../hooks/useCategoriesReducer";
import ChooseType from "./ChooseType";
import { useEffect, useRef, useState } from "react";
import WriteQuestion from "./WriteQuestion.js";
import WriteAnswers from "./WriteAnswers/WriteAnswers";
import LastPage from "./LastPage";
import useCreateQuestion from "../../hooks/useCreateQuestion";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";


export default function CreateQuestion() {
  const steps = [
    { title: "Pierwszy", description: "Wybierz rodzaj pytania" },
    { title: "Drugi", description: "Stwórz pytanie" },
    { title: "Trzeci", description: "Dodaj odpowiedzi" },
  ];
  const { testId } = useParams();
  const loaderData=useLoaderData()
  const navigate=useNavigate();
  const sendData = useCreateQuestion();
  const { activeStep, setActiveStep, goToNext, goToPrevious } = useSteps({
    index: 0,
    count: steps.length,
  });
  const [categoryState, categoryDispatch] = useCategoriesReducer();
  const [type, setType] = useState("one-answer");
  const [answers, setAnswers] = useState(null);
  const [explanation, setExplanation] = useState("");
  const [question, setQuestion] = useState("");
  const [send, setSend] = useBoolean();
  const [isSuccessfull, setIsSuccesfull] = useState(false);
  const [key, setKey] = useState(0);
  const [controler, setControler]=useState({writeAnswers:true, oneAnswer:true, manyAnswers:true, order:true, pairs:true})
  const fileRef = useRef(null);

  console.log(loaderData)
 
  useEffect(
    ()=>{
      if(loaderData.question)
      {
        setType(loaderData.question.type)
        setQuestion(loaderData.question.question)
        setExplanation(loaderData.question.explanation)
        categoryDispatch({newState:{
          categories:  loaderData.question.categories.length ? loaderData.question.categories : [],
          undercategories: loaderData.question.undercategories.length ? loaderData.question.undercategories : []
      }
      })

      }
    },[loaderData, setType, setQuestion, setExplanation, categoryDispatch]
  )
  useEffect(() => {
    if (send) {
      const method =loaderData?.question ? 'put': 'post'
      const questionData = {
        question: question,
        type: type,
        categories: categoryState["categories"],
        undercategories: categoryState["undercategories"],
        explanation: explanation === "" ? null : explanation,
        _method: method
      };
     
      
      sendData(testId, questionData, answers, setIsSuccesfull, fileRef, method, loaderData.question.id);
      setSend.off();
      loaderData?.question && navigate('/user/admin/tests');
    }
  }, [
    send,
    setSend,
    sendData,
    answers,
    testId,
    categoryState,
    explanation,
    question,
    type,
    fileRef,
    setIsSuccesfull,
    loaderData
  ]);

  useEffect(() => {
    if (isSuccessfull) {
      setKey((s) => s + 1);
      setAnswers(null);
      setExplanation("");
      setQuestion("");
      setActiveStep(0);
      setIsSuccesfull(false);
    }
  }, [
    setKey,
    isSuccessfull,
    setAnswers,
    setExplanation,
    setQuestion,
    setActiveStep,
    setIsSuccesfull,
  ]);

  return (
    <Box key={key}>
      <h2 className="lead">Dodaj pytanie do pakietu</h2>
      <MyStepper activeStep={activeStep} steps={steps} />
      <Box padding={[4, 8]}>
        {activeStep === 0 && (
          <ChooseType
            categoryState={categoryState}
            categoryDispatch={categoryDispatch}
            typeValue={type}
            onTypeChange={(e) => setType(e.target.value)}
          />
        )}
        <div className={activeStep !== 1 ? "hidden" : "visible"}>
          <WriteQuestion
            value={question}
            fileRef={fileRef}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        {activeStep === 2 && (
          <WriteAnswers  type={type} setAnswers={setAnswers} controler={controler} setControler={setControler} />
        )}
        {activeStep === 3 && (
          <LastPage
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            setSendData={setSend}
          />
        )}
      </Box>
      <Flex justify={"space-around"}>
        <Button onClick={goToPrevious} colorScheme="whiteAlpha">
          Poprzedni krok
        </Button>
        <Button onClick={goToNext} colorScheme="whiteAlpha">
          Następny krok
        </Button>
      </Flex>
    </Box>
  );
}
