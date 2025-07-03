import { cookies } from 'next/headers';

export function getLangFromCookie() {
  const cookie = cookies().get('lang')?.value;
  return cookie === 'en' ? 'en' : 'pl';
}
