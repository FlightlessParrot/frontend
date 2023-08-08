import { redirect } from "react-router-dom";
import universalFetchSchema from "../universalFetchSchema";

export default async function createTeamAction({params, request})
{
    const response =await universalFetchSchema(request,'/team/create', 'post')
    console.log(response)
    return response ? redirect('/user/team/modify') : false;
    
}