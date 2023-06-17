import {  useReducer, useState } from "react";
import { UserAndPassword } from "../../Components/Forms/UserAndPassword";
import { QuestLoginLayout } from "../../Components/Layouts/QuestLoginLayout";
import { UserData } from "../../Components/Forms/UserData";
import { Form, useActionData } from "react-router-dom";
import {
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  Checkbox,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import DefaultFieldsInstruction from "../../Components/Forms/DefaultFieldsInstruction";
import MyAlert from "../../Components/Alerts/MyAlert";
import { alertRegisterData } from "../../Data/AlertData";


export const Register = () => {
  const actionData = useActionData();

  const initValue = {
    nip: "",
    postalCode: "",
  };
  const reducer = (state, action) => {
 
    const id = action.target.id;
    let value = action.target.value;

    while (!value.match(/^[0-9\-]*$/) && value.length > 0) {
      const newValue = value.slice(0, -1);

      value = newValue;
    }

    const newState = state;
    newState[id] = value;

    return { ...newState };
  };
 

  const [state, dispatch] = useReducer(reducer, initValue);
  const [wasPostTouched, touchPost] = useState(false);
  const [agree, setAgreement] = useState(false);
  const [wasButtonClicked, clickButton] = useState(false);
  const [error, setError] = useState(false);
  const {isOpen, onOpen, onClose}=useDisclosure()
  const contactData = [
    { title: "Imię i nazwisko lub nazwa firmy", name: "name" },
    { title: "Adres", name: "adress" },
    { title: "Miasto", name: "city", width: "200px", w: "220px" },
  ];
  
  
  return (
    <QuestLoginLayout>
      
      <div className="bg-odra  p-8 rounded-md w-11/12 md:w-[800px]">
        {actionData && <MyAlert isOpen={isOpen} onClose={onClose} {...alertRegisterData.positive} />}
      {actionData===false && <MyAlert isOpen={isOpen} onClose={onClose} {...alertRegisterData.negative} />}
        <Form
          method="post"
          onSubmit={(e) => error && e.preventDefault() && console.log("ojo")}
        >
          <h1 className="lead">Załóż konto</h1>
          <UserAndPassword setError={setError} />
          <div className="m-10 mt-32 flex flex-wrap gap-8">
            <UserData {...contactData[0]} />
            <FormControl>
              <FormLabel htmlFor="nip">NIP*</FormLabel>
              <Input
                id="nip"
                maxW={"400px"}
                placeholder="000-000-00-00"
                onChange={dispatch}
                value={state.nip}
                name="nip"
                project="project"
                maxLength={30}
              />{" "}
            </FormControl>
            <UserData {...contactData[1]} />
            <FormControl
              as="div"
              w="150px"
              isInvalid={wasPostTouched && state.postalCode === ""}
            >
              <FormLabel htmlFor="postalCode">Kod pocztowy</FormLabel>
              <Input
                id="postalCode"
                placeholder="00-000"
                w={"100px"}
                maxLength={6}
                required
                onChange={dispatch}
                onBlur={() => touchPost(true)}
                value={state.postalCode}
                name="postal_code"
                project="project"
              />
              <FormErrorMessage role="error">
                Nie zpominaj o kodzie pocztowym!
              </FormErrorMessage>{" "}
            </FormControl>
            <UserData {...contactData[2]} />
          </div>
          <FormControl
            as="div"
            isInvalid={wasButtonClicked && !agree}
            className="m-11"
          >
            <Flex gap={2}>
              <Checkbox
                required
                name="user-agree"
                checked={agree}
                onChange={(e) => setAgreement(e.target.checked)}
                aria-label="wyrażam zgodę na obowiązywanie regulaminu"
              />{" "}
              <p>
                Akceptuję{" "}
                <a href="" className="classic-link">
                  Regulamin
                </a>{" "}
                i zobowiązuje do jego przestrzegania
              </p>
            </Flex>
            <FormErrorMessage role="error">
              Musisz zaakceptować regulamin, żeby założyć konto!
            </FormErrorMessage>{" "}
          </FormControl>
          <Flex justify={"flex-end"}>
            <button
              className="action-button"
              onClick={(e) => {
                clickButton(true);
                onOpen();
                window.scroll(0,0)
              

              }}
            >
              Zakładam konto
            </button>
          </Flex>{" "}
          <DefaultFieldsInstruction />
        </Form>
      </div>
    </QuestLoginLayout>
  );
};
