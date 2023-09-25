import universalFetchSchema from "../universalFetchSchema"

export default async function sendMailAction({request}) {

    const response = await universalFetchSchema(request,'/news/send','post','/',true)

  return response?.newsletter ? response : {error: true}
}