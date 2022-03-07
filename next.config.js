module.exports = {
    reactStrictMode: true,
    env: {
        googleSheetsApiUrl: 'https://sheets.googleapis.com/v4/spreadsheets/',
        dataSheetId: '1m5dh0da_Ljcf3CoQW5mwwtB9jHSrNpgYtGeX9KpTUB0',
        clientId: '',
        clientSecrete: '',
        apiKey: 'AIzaSyBW1F1PM2l2ZR9SDOAAhcKa22qH83a3jdA',
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/textile',
                permanent: true,
            },
        ];
    },
};
