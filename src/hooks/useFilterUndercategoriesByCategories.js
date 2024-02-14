

export default function useFilterUndercategoriesByCategories(categoriesIds, undercategories) {

    const undercategoriesFilter=(undercategory)=>{
        const ifParentExist=categoriesIds.find(category=>{
            const parents = undercategory.categories.filter((e)=>e.id===Number(category))
            return parents.length > 0
            
        });

        return ifParentExist
    }
    const filteredUndercategories=undercategories.filter(e=>undercategoriesFilter(e));
    return filteredUndercategories;

}
