import PortfolioItem from '@models/PortfolioItem';
import dbConnect from '@lib/db';

export async function POST(req) {
  try {
    await dbConnect();

    let limit = 6;
    let offset = 0;

    try {
      const body = await req.json();
      limit = parseInt(body.limit, 10) || limit;
      offset = parseInt(body.offset, 10) || offset;
    } catch (e) {
      console.warn('Brak/niepoprawne body, używam domyślnych limit/offset');
    }

    const items = await PortfolioItem
      .find({})
      .sort({ createdAt: -1 })
      .skip(offset)
      .limit(limit)
      .select('Name Description Logo SmallBackground Client')
      .lean();

    if (!items || items.length === 0) {
      return new Response(
        JSON.stringify({ items: [], hasMore: false }),
        { status: 200 }
      );
    }

    const totalCount = await PortfolioItem.countDocuments();
    const hasMore = offset + items.length < totalCount;

    // Zamiana _id na id
    const mappedItems = items.map(item => ({
      id: item._id.toString(),
      Name: item.Name,
      Description: item.Description,
      Logo: item.Logo,
      SmallBackground: item.SmallBackground,
      ClientId: item.Client
    }));

    return new Response(
      JSON.stringify({ items: mappedItems, hasMore }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Błąd w API:', error);
    return new Response(
      JSON.stringify({ error: 'Błąd serwera' }),
      { status: 500 }
    );
  }
}
