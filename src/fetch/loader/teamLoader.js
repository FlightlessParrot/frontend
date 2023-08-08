import universalFetchSchema from "../universalFetchSchema";

export default async function teamLoader({params}) {

const response = await universalFetchSchema(null,`/teams/${params.team}/view`,'get','/login', true)
let finalResponse={'team': null, 'members': []}
if(response?.team && response?.members)
{
for(const member of response.members)
{
   delete member.created_at
delete member.updated_at
delete member.pivot 
delete member.email_verified_at
delete member.role
}

console.log(response)
finalResponse=response
} 
return  finalResponse

}