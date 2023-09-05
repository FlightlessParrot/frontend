

import SearchTest from "../../../Components/SearchBars/SearchTest";
import Title from "../../../Components/Title";


import { useState } from "react";
import TestIcon from "../../../Components/TestIcon";
import AddOrDeleteQuestion from "../../../Components/ModifyQuestions/AddOrDeleteQuestion";
import { Box } from "@chakra-ui/react";


export default function QuestionsSettings()
{
    const [chosenTest, setChosenTest]=useState(null)
    return(
        <>
        <Title title='Zarządzaj pytaniami' /> 
        <div className="p-4">
        <i>Możesz zarzadzać tylko pytaniami z własnych testów. 
        Jesli chcesz zmodyfikować pytania w zakupionym pakiecie możesz to zrobić
         tworząc własny test na jego bazie 
        (zakładka testy), a nastepnie zmodyfikować tak utworzony test.</i>
        <Box padding={[2,4,4,8,16]}>
        <h2 className="lead">Wybór testu</h2>
        <SearchTest choseTestHandler={setChosenTest} buttonText={'Wybierz'} custom='true'/>
        {chosenTest && <>
        <h2 className="lead mt-10">Wybrany test</h2>
        <div className="mb-16 mt-4">
        <TestIcon {...chosenTest} onClick={()=>setChosenTest(null)}/>
        </div>
        
        <AddOrDeleteQuestion add={true} testId={chosenTest.id} />
        <AddOrDeleteQuestion add={false} testId={chosenTest.id} /></>}
        </Box></div>
        </>
    )

}