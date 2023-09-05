
import { Button, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import universalFetchSchema from "../../fetch/universalFetchSchema";
export default function Notyfication({name, description, type, notyficationable_id }) {
  const navigate=useNavigate()
  return (
    <div>
    <div className="flex p-4 my-8 flex-col md:flex-row hover:bg-sea rounded-lg gap-2 md:gap-8 items-center">
 
        <div className=" my-8">
            <b className="lead mb-6 block">
                {name}
            </b>
            <p>
                {description}
            </p>
        </div>
       {type==='openQuestionToCheck' && <Button className="shrink-0" colorScheme="whiteAlpha"><Link to={`/user/check/tests/${notyficationable_id}/open-questions`}>Oceń pytania</Link></Button>}
       {type==='egzamAvailable' && <Button className="shrink-0" colorScheme="red" onClick={(e)=>{e.preventDefault();egzamAvailableClickHandler(navigate, notyficationable_id)}}>Rozpocznij egzamin</Button>}
    </div>
    <Divider />
    </div>
  )
}

async function egzamAvailableClickHandler(navigate, notyficationable_id)
{
  const response=await universalFetchSchema(null,`/egzams/${notyficationable_id}/generate`,'post','/login',true )

  response?.test && navigate(`/user/test/${response.test}`);
}