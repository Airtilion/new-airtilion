
import PortfolioItem from '@models/PortfolioItem';
import dbConnect from '@lib/db';

export async function POST(req) {
    try {
        await dbConnect();
        const {id} = await req.json();

        if (!id) {
            return new Response(JSON.stringify({ error: 'Nie podano id' }), { status: 400 });
        }

        const project = await PortfolioItem.findOne({ _id: id });

        if (!project) {
            return new Response(JSON.stringify({ error: 'Projekt nie został znaleziony' }), { status: 404 });
        }
        
        return new Response(JSON.stringify(project), { status: 200 });
    } catch (error) {
        console.error('Błąd pobierania:', error);
        return new Response(JSON.stringify({ error: 'Błąd serwera' }), { status: 500 });
    }
}
