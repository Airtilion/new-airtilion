import Opinion from "@models/Opinion";
import dbConnect from "@lib/db";

export async function POST(req) {
    try{
        await dbConnect();
        const document = await Opinion.find({})
        
        if(!document){
            return new Response(JSON.stringify({message: "Nie znaleziono danych"}), { status: 404 });
        }
        
        return new Response(JSON.stringify(document), { status: 200 });
    }
    catch(error){
        console.error('Błąd pobierania:', error);
        return new Response(JSON.stringify({ error: 'Błąd serwera' }), { status: 500 });
    }
}