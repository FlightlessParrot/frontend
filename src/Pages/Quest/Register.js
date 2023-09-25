import { useState } from "react";
import { UserAndPassword } from "../../Components/Forms/UserAndPassword";
import { QuestLoginLayout } from "../../Components/Layouts/QuestLoginLayout";

import { Form, useActionData } from "react-router-dom";
import {
  FormControl,
  FormErrorMessage,
  Checkbox,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import DefaultFieldsInstruction from "../../Components/Forms/DefaultFieldsInstruction";
import MyAlert from "../../Components/Alerts/MyAlert";
import { alertRegisterData } from "../../Data/alertData";

import UserContactCields from "../../Components/Forms/UserContactFields";

 const Register = () => {
  const actionData = useActionData();

  const [agree, setAgreement] = useState(false);
  const [wasButtonClicked, clickButton] = useState(false);
  const [error, setError] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <QuestLoginLayout>
      <div className="bg-odra  p-8 rounded-md w-11/12 md:w-[800px]">
        {actionData && (
          <MyAlert
            isOpen={isOpen}
            onClose={onClose}
            {...alertRegisterData.positive}
          />
        )}
        {actionData === false && (
          <MyAlert
            isOpen={isOpen}
            onClose={onClose}
            {...alertRegisterData.negative}
          />
        )}
        <Form
          method="post"
          onSubmit={(e) => error && e.preventDefault() && console.log("ojo")}
        >
          <h1 className="lead">Załóż konto</h1>
          <UserAndPassword setError={setError} />
          <UserContactCields readOnly={false} />
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
                window.scroll(0, 0);
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
export {Register as default}