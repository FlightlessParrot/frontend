import universalFetchSchema from "../universalFetchSchema"

export default async function createDiscountCodeAction({request}) {

    const response = await universalFetchSchema(request,'/discount-codes/create','post','/',true);

  return response?.discountCode ? response : {error: true} 
}