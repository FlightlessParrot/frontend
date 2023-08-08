import { redirect } from "react-router-dom";
import universalFetchSchema from "../universalFetchSchema";

export default async function summaryLoader({params})
{
const response = await universalFetchSchema(null,`/generated-tests/${params.generatedTestId}/summary`, 'get','/login', true);

return response==false ? redirect(`/user/tests`): response
}