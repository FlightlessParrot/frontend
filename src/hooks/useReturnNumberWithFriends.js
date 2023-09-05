export default function useReturnNumberWithFriends({numbersArray, currentNumber, howManyFriends}) {
    const sideFriends=Math.round(howManyFriends/2)
    const currentNumberWithFriends=numbersArray.filter(e=>(e>=currentNumber-sideFriends && e<=currentNumber+sideFriends))
    
 
    //Check if number of friends is correct and add the one that we need
    if(currentNumberWithFriends.length < howManyFriends+1 && numbersArray.length>howManyFriends)
    {
       if(currentNumber >sideFriends)
       {
        let i=currentNumber-sideFriends-1
        do{
           currentNumberWithFriends.unshift(numbersArray[i]);
            i--
        }while(currentNumberWithFriends.length < howManyFriends+1 )
       }else{
        let i=currentNumber+sideFriends+1
        do{
           currentNumberWithFriends.push(numbersArray[i]);
            i++
        }while(currentNumberWithFriends.length < howManyFriends+1 )
       }
    }
    
  
    return currentNumberWithFriends
}