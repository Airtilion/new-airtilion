import Clients from "@models/Client";
import dbConnect from "@lib/db";

export async function POST(req) {
    try{
        await connectToDB();
        const { id } = await req.json();
        const document = await Clients.findOne({_id: id})
        
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