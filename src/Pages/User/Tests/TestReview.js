import { Link, useLoaderData, useOutletContext } from "react-router-dom";
import CheckAnswer from "../../../Components/Answers/CheckAnswer";
import NumberSquare from "../../../Components/Squares/NumberSquare";
import { squaresColors as colors } from "../../../Data/colors";
import { Box, Button, Divider, Flex, Stack } from "@chakra-ui/react";
import Square from "../../../Components/Squares/Square";
import Pager from "../../../Components/Pager/Pager";
export default function TestReview() {
  const loaderData = useLoaderData();
  const data = useOutletContext();
  const reviewData = {
    answers: data.answers,
    qas: data.qas,
    wasAnswersCorrect: loaderData.correct,
    colorSquares: (squares) =>
      squares.map((e, i) => ({
        ...e,
        color: colors[i],
      })),
  };
  console.log(reviewData)
  const answers = reviewData.qas.map(({ question, answers, squares }) => {
    let answer = null;

    const getUserAnswerArray = Object.entries(reviewData.answers).filter(
      ([key, value]) => Number(key) === question.id
    );
    const userAnswer = getUserAnswerArray.map(([key, value]) => value)[0];
    if(question.type==='open')
    {
      return null
    }
    if(userAnswer)
    {
      if(question.type==='short-answer')
      {
        answer=<p key={getUserAnswerArray[0][0]}>{userAnswer}</p>
      }
      if (question.type==='one-answer' || question.type==='many-answers' ) {
        const answersId = Object.entries(userAnswer).filter(([key, value]) =>
          Boolean(value)
        );

        const foundAnswers = answers.filter((e) => {
          let returnValue = false;
          answersId.forEach(([id, value]) => {
            if (e.id === Number(id)) {
              returnValue = true;
            }
          });
          return returnValue;
        });
        answer = foundAnswers.map((e) => <p key={e.id}>{e.answer}</p>);
   
        if (question.type === "order") {
          const elements = Object.entries(userAnswer).map(([key, value]) => {
            const elementData = reviewData
              .colorSquares(squares)
              .filter((e) => e.id === Number(key));

            if (elementData[0]) {
              elementData[0].number = value;

              return (
                <NumberSquare
                  key={key}
                  element={elementData[0]}
                  rounded
                ></NumberSquare>
              );
            } else return null;
          });
          answer = (
            <Flex wrap={"wrap"} key={question.id} gap={[2, 4, 8]}>
              {elements}
            </Flex>
          );
        }
        if (question.type === "pairs") {
          const elements = userAnswer.map(([firstId, secondId]) => {
            const colorfullSquares = reviewData.colorSquares(squares);
            const first = colorfullSquares.filter(
              (e) => e.id === Number(firstId)
            );
            const second = colorfullSquares.filter(
              (e) => e.id === Number(secondId)
            );

            return (
              first[0] &&
              second[0] && (
                <Box key={first[0].id} className="my-20">
                  <Flex gap={[2, 4, 8]}>
                    <Square element={first[0]} color={first[0].color} rounded />
                    <Square
                      element={second[0]}
                      color={second[0].color}
                      rounded
                    />
                  </Flex>

                  <Divider />
                </Box>
              )
            );
          });
          answer = elements;
        }
      }
    }

    return (
      <CheckAnswer
        key={question.id}
        question={question}
        correct={reviewData.wasAnswersCorrect[question.id]}
        generatedTest={data.generatedTest}
      >
        {answer}
      </CheckAnswer>
    );
  });

  return (
    <Stack>
      <Link to={`/user/test/${loaderData.testId}/summary`}>
      <Button
        position="fixed"
        top="10px"
        right={"10px"}
        m={2}
        colorScheme="whiteAlpha"
      >
        
          Przejdź do podsumowania
       
      </Button> 
      </Link>
      <Box h="30px"></Box>
      <Pager blocks={answers} howManyPerPage={5}></Pager>
    </Stack>
  );
}
