import { useEffect, useState } from 'react';

function Manufacturers(){
    const [apiData, setApiData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        async function getData(){
            setIsLoading(true);
            let url = process.env.googleSheetsApiUrl + process.env.dataSheetId + '?includeGridData=true&key=' + process.env.apiKey;
            //console.log('Url: ' + url);
            const jsonData = await fetch(url)
                .then((res) => {return res.json()})
                .catch((err) => console.warn(err));

            //console.log(jsonData);
            let items = [];
            jsonData.sheets.map((sheet) => {  
                const title = sheet.properties.title;
                const rowData = sheet.data[0].rowData.map((row) => {  
                    if(row && row.values){
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
            setIsLoading(false);
            //console.log('Data loaded.');
            //console.log(items);

        };
        return getData();
    }, []);

    return (
        <div>
            <p>{!isLoading && <ul>{apiData.map((item) => (<li>{item.category + ' - ' + item.name + ' - ' + item.web}</li>))}</ul>}</p>
            <p>{isLoading && <h3>Loading...</h3>}</p>
        </div>
    )
};

export default Manufacturers;