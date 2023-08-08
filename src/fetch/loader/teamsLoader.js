import universalFetchSchema from "../universalFetchSchema";

export default async function teamsLoader({params}) {

const response = await universalFetchSchema(null,`/teams/show`,'get','/login', true)

return Array.isArray(response) ? response : false

}