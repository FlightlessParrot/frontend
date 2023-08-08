import { redirect } from "react-router-dom";
import universalFetchSchema from "../universalFetchSchema"
export default async function sendFilledTestAction({params, request})
{
    const response=await universalFetchSchema(request, `/test/${params.generatedTestId}/submit`, 'post', '/login')

    return response ? redirect('/user/test/'+params.generatedTestId+'/summary'): false;
}