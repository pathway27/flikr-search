import fetchJsonp from 'fetch-jsonp';
import { FlikrPicture } from '../types';

const flikrURL = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json'

interface FlikrResponse {
  items: Array<FlikrPicture>
}

export const fetchFlikrPictures = async (
  searchQuery : any = '')
: Promise<any> => {
  const response = await fetchJsonp(
    `${flikrURL}&tags=${searchQuery}`,
    {jsonpCallback: 'jsoncallback'}
  )
  const parsed: FlikrResponse = await response.json();

  return parsed.items
}