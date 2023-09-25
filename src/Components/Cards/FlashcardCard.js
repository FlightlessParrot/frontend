import { Button, Divider } from "@chakra-ui/react";

export default function FlashcardCard({ question, answer, path, onClick }) {

  return (
    
    <div className={"flex flex-col w-80 p-4 rounded-md relative top-0 gap-8  bg-sea"}>
      <img className=" h-2/5 object-contain" src={process.env.REACT_APP_BACKEND + path} alt='zdjęcie dołączone do fiszki'/>
      <div className="">
        <b className="bold-serif ">Pytanie</b>
        <Divider />
        <p>{question}</p>
      </div>
      <div className=" ">
        <b className="bold-serif">Odpowiedź</b>
        <Divider />
        <p dangerouslySetInnerHTML={{__html: answer}}></p>
      </div>

      <div className=" flex justify-center items-center">
        <Button colorScheme="red" onClick={onClick}>
          USUŃ
        </Button>
      </div>
    </div>
  );
}
