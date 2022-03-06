import { useEffect, useState } from 'react';

import Accordion from './Accordion';

import accordionStyles from '../../styles/Accordion.module.scss';

function ManufacturerData() {
    const [apiData, setApiData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        async function getData() {
            let url =
                process.env.googleSheetsApiUrl +
                process.env.dataSheetId +
                '?includeGridData=true&key=' +
                process.env.apiKey;
            const jsonData = await fetch(url)
                .then((res) => {
                    return res.json();
                })
                .catch((err) => console.warn(err));

            let items = [];
            let cats = [];
            jsonData.sheets.map((sheet) => {
                const title = sheet.properties.title;
                const rowData = sheet.data[0].rowData.map((row) => {
                    if (row && row.values) {
                        return {
                            category: title,
                            name: row.values[0].userEnteredValue.stringValue,
                            web: row.values[1].userEnteredValue.stringValue,
                        };
                    }
                });
                items.push(...rowData);
            });

            items.map((x) => cats.push(x.category));

            let categories = cats.filter((a, b) => {
                return cats.indexOf(a) === b;
            });

            setApiData(items);
            setCategoryData(categories);
        }
        return getData();
    }, []);

    return (
        <main className={`${accordionStyles['accordion-section']}`}>
            <div className={`${accordionStyles['accordion-container']}`}>
                {categoryData.map((j, i) => (
                    <Accordion
                        apiData={apiData}
                        categories={categoryData}
                        i={i}
                        key={i}
                    />
                ))}
            </div>
        </main>
    );
}

export default ManufacturerData;
