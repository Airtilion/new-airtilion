import { getDictionary } from '@utils/getDictionary';

export default async function NotFound({ searchParams }) {
  // Sprawdź, czy searchParams jest Promise, i awaituj, jeśli tak
  const params = searchParams instanceof Promise ? await searchParams : searchParams;
  const lang = params?.lang || 'pl'; // Bezpieczne uzyskanie lang z domyślną wartością 'pl'
  const file = await getDictionary(lang, 'notFound');
  const dictionary = file || {}; // Domyślny pusty obiekt

  return (
    <div>
      <h1>{dictionary.title || '404 - Page Not Found'}</h1>
      <p>{dictionary.content || 'The page you are looking for does not exist.'}</p>
    </div>
  );
}