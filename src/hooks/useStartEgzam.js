import universalFetchSchema from '../fetch/universalFetchSchema'

export default function useStartEgzam() {
 
    async function startEgzam( egzamId, setBoolResponse)
    {
        const response = await universalFetchSchema(null,`/egzams/${egzamId}/start`,'put', '/login',false)
        setBoolResponse(response)

    }

    return  (teamId, egzamid, setBoolResponse)=>startEgzam(teamId, egzamid, setBoolResponse)
}