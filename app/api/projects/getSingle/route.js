import PortfolioItem from '@models/PortfolioItem';
import NewClient from '@models/Client';
import dbConnect from '@lib/db';

export async function POST(req) {
  try {
    await dbConnect();
    const { id } = await req.json();

    if (!id) {
      return new Response(
        JSON.stringify({ error: 'Nie podano id' }),
        { status: 400 }
      );
    }

    // Pobierz projekt
    const project = await PortfolioItem.findOne({ _id: id });

    if (!project) {
      return new Response(
        JSON.stringify({ error: 'Projekt nie został znaleziony' }),
        { status: 404 }
      );
    }

    // Pobierz dane klienta na podstawie pola Client
    const clientId = project.Client;
    let clientData = null;

    if (clientId) {
      clientData = await NewClient.findOne({ _id: clientId });
    }

    // Przygotuj obiekt odpowiedzi
    const responsePayload = {
      ...project.toObject(),
      ClientData: clientData
    };

    return new Response(
      JSON.stringify(responsePayload),
      { status: 200 }
    );
  } catch (error) {
    console.error('Błąd pobierania:', error);
    return new Response(
      JSON.stringify({ error: 'Błąd serwera' }),
      { status: 500 }
    );
  }
}
