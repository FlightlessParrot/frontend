export default function useImageEditor() {
    
    const editor=(fileName, availableExtensions)=>{
 
        const splitString=fileName.split('.')
        const extension=splitString[splitString.length-1]
        let validate=false
        availableExtensions.forEach(element => {
            if(element===extension)
            {
                validate=true
            }
        });
        return validate
    }

  return (fileName, availableExtensions)=>editor(fileName, availableExtensions)
}