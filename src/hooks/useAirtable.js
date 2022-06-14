import Airtable from 'airtable'

export default function useAirtable() {
    function createAirtableRecord(data) {
        var base = new Airtable({ apiKey: import.meta.env.VITE_AIRTABLE_API_KEY }).base('apprAc6HQk9NOfd3v');

        base('Teams').create([
            {
                "fields": {
                    "Full Name": "Pieter Vleminckx",
                    "Email": "pieter.vlem@gmail.com",
                    "Phone": "123123123",
                    "newsletter": true,
                    "Question or remark": "Vr"
                }
            }
        ], function (err, records) {
            if (err) {
                console.error(err);
                return;
            }
            records.forEach(function (record) {
                console.log(record.getId());
            });
        });
    }

    return {
        createAirtableRecord,
    }
}