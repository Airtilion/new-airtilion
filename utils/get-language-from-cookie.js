import { cookies } from 'next/headers';

export async function getLangFromCookie() {
  const cookieStore = cookies();
  const lang = cookieStore.get('lang')?.value;
  return lang === 'en' ? 'en' : 'pl';
}
