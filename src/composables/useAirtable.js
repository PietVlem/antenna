import { ref } from 'vue'
import Airtable from 'airtable'

export default function useAirtable() {
    const creatingRecord = ref(false)

    function createAirtableRecord(data) {
        creatingRecord.value = true

        const base = new Airtable({ apiKey: import.meta.env.VITE_AIRTABLE_API_KEY }).base('apprAc6HQk9NOfd3v');
        const payload = {
            "Full Name": data['contact-first-name'] + ' ' + data['contact-name'],
            "Email": data['contact-email'] || '',
            "Phone": data['contact-phone'] || '',
            "newsletter": data['contact-newsletter'] ? true : false,
            "Question or remark": data['contact-question'] || '',
        }

        setTimeout(() => {
            base('Teams').create([
                {
                    "fields": payload
                }
            ], (err, records) => {
                if (err) {
                    console.error(err);
                    return;
                }
                // records.forEach(function (record) {
                //     console.log(record.getId());
                // });
                creatingRecord.value = false
            });
        }, "5000")
    }

    return {
        creatingRecord,
        createAirtableRecord,
    }
}