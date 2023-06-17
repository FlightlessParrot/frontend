import getCSRFToken from "../../cookies/getCSRFToken";
export default async function verifyEmailLoader({params, request})
{
    
    const token = await getCSRFToken();
    let status= {
        description: '',
        isPositive: false,
        status: 'error'
    }
    try {
      const url = process.env.REACT_APP_BACKEND + `/verify-email/${params.id}/${params.hash}`;
      const response = await fetch(url, {
        method: "get",
        credentials: "include",
        headers: { "X-XSRF-TOKEN": token, 'Accept': "application/json" },
      });
      switch(response.status)
      {
        case 204: 
        status={
            description: 'Udało się uwierzytelnić adres email.',
            isPositive: true,
            status: 'success'
        }
        break;
      
      case 409:
      
        status={
            description: 'Adres e-mail został już uwierzytelniony.',
            isPositive: true,
            status: 'warning'
        }
        break;
        default:
            status={
                description: 'Wystąpił błąd. Nie udało się uwierzytelnić adresu e-mail.',
                isPositive: false,
                status: 'error'
            }
            break;
      }
      
      return  response.status >=300 && response.status < 400 ? response : status;
    } catch (e) {
      console.log(e);
      return false;
    }
}