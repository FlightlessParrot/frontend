import {
  FormControl,
  FormLabel,
  
  Select,
  Switch,
  Flex,
  Stack,
  Box,
  useBoolean,
} from "@chakra-ui/react";
import { TestUserLayout } from "../../../Components/Layouts/UserLayout";
import Title from "../../../Components/Title";

import { useReducer } from "react";
import { Form, useLoaderData } from "react-router-dom";

export default function CreateTestInstance() {
  const loaderData = useLoaderData();
  const initValue = {
    questionsCorrect: true,
    questionsFalse: true,
    questionsNone: true,
    questionsAll: true,
  };
  const questionsReducer = (state, action) => {
    const node = action.target;
    const value = node.checked;

    const newState = { ...state };
    if (node.name === "questionsAll") {
      return {
        questionsCorrect: value,
        questionsFalse: value,
        questionsNone: value,
        questionsAll: value,
      };
    }
    newState[node.name] = node.checked;

    return { ...newState };
  };
  const makeQuestionNumbers = () => {
    const y = [];
    for (let x = 20; x <= 150; x += 10) {
      y.push(
        <option value={x} key={x}>
          {x}
        </option>
      );
    }
    return y;
  };
  const [questions, dispatchQuestions] = useReducer(
    questionsReducer,
    initValue
  );
  const [customTests, setCustomTests] = useBoolean();

  const makeTestOptions = () => {
    let prefix = "standart_";
    const mapHandler = (element) => {
      return (
        <option value={prefix + element.id} key={prefix + element.id}>
          {element.name}
        </option>
      );
    };
    const standartTests = loaderData.standart.map(mapHandler);
    prefix = "custom_";
    const custom = customTests ? loaderData.custom.map(mapHandler) : [];
    const tests=standartTests.concat(custom);
    return tests;
  };
  return (
    <TestUserLayout>
      <Form method="post">
        <Title title="Rozpocznij test" newClass="mt-8" />
        <div className="p-10 ">
          <h3 className="bold-serif m-16">Ustawienia ogólne</h3>

          <FormControl display={"flex"} gap="1.2rem" marginY={"1.5rem"}>
            <Switch isChecked={customTests} onChange={setCustomTests.toggle} />
            <FormLabel>Własne testy</FormLabel>
          </FormControl>
          <FormControl>
            <FormLabel>Pakiet</FormLabel>
            <Select name="testId" placeholder="Wybierz pakiet" maxW={"600px"}>
              {makeTestOptions()}
            </Select>
          </FormControl>
        </div>
        <div className="p-10">
          <h3 className="inline-block bold-serif m-16">
            Ustawienia szczególne
          </h3>
          <Flex alignItems="start" justifyContent="space-between">
            <FormControl as={Box} maxW="fit-content">
              <FormLabel>Ilość pytań</FormLabel>
              <Select name="questionsNumber" placeholder="10" maxW={"150px"}>
                {makeQuestionNumbers()}
              </Select>
            </FormControl>
            <Stack gap="6">
              <FormControl display={"flex"} gap="6">
                <Switch
                  name="questionsAll"
                  onChange={dispatchQuestions}
                  isChecked={questions.questionsAll}
                />
                <FormLabel>Wszystkie pytania</FormLabel>
              </FormControl>
              <FormControl display={"flex"} gap="6">
                <Switch
                  name={"questionsCorrect"}
                  onChange={dispatchQuestions}
                  isChecked={questions.questionsCorrect}
                />
                <FormLabel>pytania poprawne rozwiązane</FormLabel>
              </FormControl>
              <FormControl display={"flex"} gap="6">
                <Switch
                  name={"questionsFalse"}
                  onChange={dispatchQuestions}
                  isChecked={questions.questionsFalse}
                />
                <FormLabel>pytania błędne rozwiązane</FormLabel>
              </FormControl>
              <FormControl display={"flex"} gap="6">
                <Switch
                  name="questionsNone"
                  onChange={dispatchQuestions}
                  isChecked={questions.questionsNone}
                />
                <FormLabel>pytania nierozwiązane</FormLabel>
              </FormControl>
            </Stack>
            <FormControl
              as={Box}
              w={"fit-content"}
              name="egzam"
              display={"flex"}
              gap="6"
            >
              <Switch />
              <FormLabel>Tryb egzaminu</FormLabel>
            </FormControl>
          </Flex>
        </div>
        <button className="action-button">Zaczynam Test</button>
      </Form>
    </TestUserLayout>
  );
}
