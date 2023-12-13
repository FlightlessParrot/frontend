import React from 'react'

export default function useFilterUndercategoriesByCategories(categoriesIds, undercategories) {

    const undercategoriesFilter=(undercategory)=>{
        const ifParentExist=categoriesIds.find(category=>Number(category)===undercategory.category_id);

        return ifParentExist
    }
    const filteredUndercategories=undercategories.filter(e=>undercategoriesFilter(e));
    return filteredUndercategories;

}
