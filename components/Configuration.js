import { useEffect, useState } from 'react';

function Configuration(){
    const [apiData, setApiData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    
    useEffect(() => {
        async function getData(){
            setIsLoading(true);
            console.log('Url: ' + process.env.testApiUrl);
            const movies = await fetch(process.env.testApiUrl).then((res) => {return res.json()});
            console.log(movies.results[0].title);

            setApiData(movies);
            setIsLoading(false); 
        };

        return getData();
    }, []);
    

    /*use sample data until we get access to the google sheets api
    useEffect(() => {
        console.log('Loading data.'); 
        function getData() {
            console.log('Loading data....');
            if(dataIsLoaded){
                return;
            }
            console.log('Loading data.......');
            const sampleData = JSON.parse(process.env.sampleData2);
            let items = [];
            sampleData.sheets.map((sheet) => {  
                const title = sheet.properties.title;
                const rowData = sheet.data[0].rowData.map((row) => {  
                    if(row.values !== null){
                        return {
                            category: title,
                            name: row.values[0].userEnteredValue.stringValue,
                            web: row.values[1].userEnteredValue.stringValue
                        };
                    };
                });
                items.push(...rowData);
            });
            setApiData(items);
            setDataIsLoaded(true); 
            console.log(items);
            return getData(); 
        };
    }, []);
    */

    return (
        <div>
            <p>{!isLoading && apiData.results[0].title}</p>
            <p>{isLoading && <h3>Loading...</h3>}</p>
        </div>
    )
}

export default Configuration;