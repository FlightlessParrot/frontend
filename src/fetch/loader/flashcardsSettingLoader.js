import universalFetchSchema from "../universalFetchSchema"

export default async function flashcardsSettingLoader() {

    const response= await universalFetchSchema(null,'/flashcards/categories/undercategories','get','/login',true)
    
    return response?.categories ? response : {categories:[], undercategories: []}
}