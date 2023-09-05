import universalFetchSchema from "../universalFetchSchema";

export default async function getEgzamsLoader({params}) {
    const {teamId}=params

    const response= await universalFetchSchema(null, `/teams/${teamId}/egzams/show`,'get','/login',true)
    console.log(response)
    return response?.egzams ?response :{egzams:[]};
}