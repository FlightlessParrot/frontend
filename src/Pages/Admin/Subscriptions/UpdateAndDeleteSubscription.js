
import { Button, Stack, Center } from "@chakra-ui/react";
import EditSubscription from "../../../Components/Subscriptions/EditSubscription";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import universalFetchSchema from "../../../fetch/universalFetchSchema";
import useShowToast from "../../../hooks/useShowToast";
import ImageForm from "../../../Components/Image/ImageForm"
import { useRef, useState } from "react";
import getCSRFToken from "../../../cookies/getCSRFToken";
export default function UpdateAndDeleteSubscription() {
  const loaderData = useLoaderData()
  const { subscription } = useParams()
  const navigate = useNavigate()
  const toast = useShowToast()
  const clickHandler = async () => {
    const response = await universalFetchSchema(null, '/subscription/' + subscription + '/delete', 'delete')
    if (response) {
      toast({
        title: 'Usunięto subskrypcję',
        status: 'success'
      })
    } else {
      toast({
        title: 'Nie udało się usunąć subskrypcji',
        status: 'error'
      })
    }
    navigate('../')
  }
  const [check, setCheck] = useState(false);
  const imageRef = useRef(null)
  const photoSubmiter = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const value = new FormData(e.target);
    const token = await getCSRFToken();
    try {


      const response = await fetch(process.env.REACT_APP_BACKEND + '/subscription/' + loaderData.subscription.id + '/photo', {
        method: 'post',
        credentials: "include",
        headers: { "X-XSRF-TOKEN": token, 'Accept': "application/json" },
        body: value
      });
      if (response.ok) {

        toast({
          title: 'Dodano zdjęcie',
          status: 'success'
        })
      }
      else {
        throw new Error()
      }

    } catch (e) {
      toast({
        title: 'Nie udało się dodać zdjęcia',
        status: 'error'
      })
    }

  }
  return (
    <Stack>
      <h3 className="lead text-xl my-12 mt-16">Modyfikujesz subskrypcję: {loaderData.subscription.name}</h3>
      <EditSubscription />
      <form onSubmit={photoSubmiter} encType="multipart/form-data">
        <ImageForm check={check} setCheck={setCheck} fileRef={imageRef} />
        <button className="action-button">Dodaj zdjęcie</button>
      </form>
      <Center><Button colorScheme="red" onClick={clickHandler}>Usuń subskrypcję</Button></Center>
    </Stack>
  )
}