
export function getApiData(apiUrl){
    
    const retVal;
    console.log('ApiService::getApiData - ' + apiUrl);

    try{
        retVal = async () => {
        console.log('async function call starting...');
         const response = await fetch(apiUrl); 

        if(!response.ok){
            throw new Error('Something when wrong!');  
        }

        const data = await response.json();
        console.log(data);
        return data; 
    };

    } catch(error){
        //setError(error.message); 
    }

    return retVal;
}

export default getApiData;