
import dbConnect from '@/lib/dbConnect';


export async function POST(request: Request) {
    await dbConnect();

    const { code, language, input }: any = await request.json();

    const submissionUrl = 'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=false&fields=*';
    const submissionOptions = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': 'a4f59191c0msh2f9a0198a901827p1097eejsn469ca5aef4c6',
            'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            language_id: language,
            source_code: btoa(code),
            stdin: btoa(input)
        })
    };

    try {
        const submissionResponse = await fetch(submissionUrl, submissionOptions);
        const submissionResult = await submissionResponse.json();
        const tokenid = submissionResult.token;

       
        const datastatus = await getData(tokenid);

        return Response.json({
            success: true,
            data : datastatus
        }, { status: 200 });

    } catch (error) {
        console.error('Error in getting token:', error);
        return Response.json({
            message: "Error in getting token",
            success: false
        }, { status: 400 });
    }
}

async function getData(tokenid: any) {
    const url = `https://judge0-ce.p.rapidapi.com/submissions/${tokenid}?base64_encoded=true&fields=*`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'a4f59191c0msh2f9a0198a901827p1097eejsn469ca5aef4c6',
            'x-rapidapi-host': 'judge0-ce.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        if (result.status.id < 3) {
            
            await new Promise(resolve => setTimeout(resolve, 1000));
            return await getData(tokenid); // Recursively call to check status again
        }
        //  console.log(result)
        return result; 
    } catch (error) {
        console.error('Error in getData function:', error);
        return {
            success: false,
            message: "Error in fetching data"
        }; 
    }
}




