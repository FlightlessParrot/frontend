
import universalFetchSchema from "../universalFetchSchema"

export default async function createTestLoader({params})
{
   const response = await universalFetchSchema(null,'/tests/find','post','/login', true);

return Array.isArray(response) ?response : [];
}