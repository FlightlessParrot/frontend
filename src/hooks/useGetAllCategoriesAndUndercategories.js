import { useCallback } from "react";
import universalFetchSchema from "../fetch/universalFetchSchema"

export default  function useGetAllCategoriesAndUndercategories() {
    const sendRequest=useCallback(
         async () =>await universalFetchSchema(null,'/categories/all/undercategories/all','get','',true),[]
    );

  return sendRequest;
}