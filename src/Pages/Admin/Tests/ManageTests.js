import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Stack,
  Wrap,
} from "@chakra-ui/react";
import Title from "../../../Components/Title";
import {
  Form,
  Outlet,
  useActionData,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import useFormController from "../../../hooks/useFormController";
import ImageForm from "../../../Components/Image/ImageForm";
import PresentImage from "../../../Components/Image/PresentImage";
import useShowToast from "../../../hooks/useShowToast";
import SearchBar from "../../../Components/SearchBars/SearchBar";
import getCSRFToken from "../../../cookies/getCSRFToken";
import { TestIconWithButton } from "../../../Components/TestIcon";
import universalFetchSchema from "../../../fetch/universalFetchSchema";
export default function ManageTests() {
  const loaderData = useLoaderData();
  const tests = loaderData.tests.map((e) => (
    <option value={e.id} key={e.id}>
      {e.name}
    </option>
  ));
  const subscriptions = loaderData.subscriptions.map((e) => (
    <option value={e.id} key={e.id}>
      {e.name}
    </option>
  ));
  const [response, setResponse] = useState([]);
  const [testId, setTestId] = useState("");
  const [removeTestId, setRemoveTestId] = useState(null);
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);
  const initValue = {
    name: {
      value: "",
      blur: false,
    },
    subscription: {
      value: "",
      blur: false,
    },
  };
  const fileRef = useRef(null);
  let actionData = useActionData();
  const toast = useShowToast();
  const [fileKey, setFileKey] = useState(0);

  const [state, dispatch] = useFormController(initValue);
  const [search, setSearch] = useState("");
  const jsxRemoveTests = response.map((e) => (
    <TestIconWithButton
      key={e.id}
      TestIconDataObject={e}
      onClick={(s) => setRemoveTestId(e.id)}
      buttonText={"Usuń"}
      color={"red"}
    />
  ));
  useEffect(() => {
    if (removeTestId) {
      const remover = async () => {
        const response = await universalFetchSchema(
          null,
          `/test/${removeTestId}/remove`,
          "delete"
        );
        if (response) {
          toast({
            title: "Usunięto pakiet",
            description: "Udało się usunąć pakiet",
            status: "success",
          });
        } else {
          toast({
            title: "Błąd",
            description: "Nie udało się usunąć pakietu",
            status: "error",
          });
        }
      };
      remover();
      setRemoveTestId(null);
      setResponse([]);
    }
  }, [removeTestId, toast.setRemoveTestId, setTestId]);
  useEffect(() => {
    const bringThem = async () => {
      const response = await fetch(
        process.env.REACT_APP_BACKEND + "/tests/general/show?search=" + search,
        {
          method: "get",
          credentials: "include",
          headers: {
            "X-XSRF-TOKEN": getCSRFToken(),
            Accept: "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setResponse(data.tests);
      }
    };
    bringThem();
  }, [search, setResponse]);
  useEffect(() => {
    if (testId) {
      navigate("settings/" + testId);
    }
  }, [navigate, testId]);
  useEffect(() => {
    if (actionData === true) {
      toast({
        title: "Sukces",
        description: "Udało się dodać pakiet.",
        status: "success",
      });
      dispatch("reset");
      setFileKey((s) => s + 1);
      setCheck(false);
      navigate("./");
    }
    if (actionData === false) {
      toast({
        title: "Błąd",
        description: "Nie udało się dodać pakietu.",
        status: "error",
      });
    }
  }, [actionData, toast, dispatch, setFileKey, setCheck]);
  return (
    <Box>
      <Title title="Zarządzaj testami" />
      <Stack padding={[2, 4, 4, 8, 16]} spacing={40}>
        <Form method="post" encType="multipart/form-data" key={fileKey}>
          <h2 className="lead block my-12">Utwórz nowy pakiet</h2>
          <Stack spacing={"30px"}>
            <FormControl
              isInvalid={
                state.subscription.blur && state.subscription.value != null
              }
            >
              <FormLabel>
                Wybierz subskrypcję, dla której ma zostać utworzony pakiet.
              </FormLabel>
              <Select
                required
                value={state.subscription.value}
                onChange={dispatch}
                onBlur={dispatch}
                placeholder="Wybierz subskrypcję"
                name="subscription"
              >
                {subscriptions}
              </Select>
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={state.name.blur && state.name.value === ""}>
              <FormLabel>Nazwa pakietu</FormLabel>
              <Input
                required
                name="name"
                onBlur={dispatch}
                value={state.name.value}
                onChange={dispatch}
              />
              <FormErrorMessage>Nadaj nazwę pakietu.</FormErrorMessage>
            </FormControl>
            <ImageForm fileRef={fileRef} check={check} setCheck={setCheck} />
            <PresentImage fileRef={fileRef} />

            <Flex justify={"end"}>
              <button className="action-button">Utwórz Pakiet</button>
            </Flex>
          </Stack>
        </Form>
        <Stack marginY={[6, 8, 16]} spacing={"60px"}>
          <h2 className="lead block my-8">Usuń pakiet</h2>
          <SearchBar
            labelText={"Usuń pakiet"}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            name="search"
          />
          <Wrap spacing={"25px"}>{jsxRemoveTests}</Wrap>
        </Stack>
        <Box>
          <h2 className="lead block my-12">Modyfikuj istniejący pakiet</h2>
          <Select
            placeholder="Wybierz pakiet"
            value={testId}
            onChange={(e) => setTestId(e.target.value)}
          >
            {tests}
          </Select>
        </Box>

        <Outlet />
      </Stack>
    </Box>
  );
}
