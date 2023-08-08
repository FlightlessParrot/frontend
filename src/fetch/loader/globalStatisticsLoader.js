import universalFetchSchema from "../universalFetchSchema";

export default async function globalStatisticsLoader()
{
    const response = await universalFetchSchema(null, '/statistics/global','get','/login', true);

    return response;
    
}