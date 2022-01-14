import React, { useEffect, useState } from 'react';
import fetchJsonp from 'fetch-jsonp';
import {DebounceInput} from 'react-debounce-input';

import './App.css';

import { FlikrPicture } from './types';
import Picture from './components/Picture';

const flikrURL = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json'

function App() {
  const [pictures, setPictures] = useState([])
  const [searchQuery, setSearchQuery] = useState('puppy')

  useEffect(() => {
    const getPictures = async () => {
      let feed = await (await fetchJsonp(`${flikrURL}&tags=${searchQuery}`, {jsonpCallback: 'jsoncallback'})).json()
      setPictures(feed.items)
    }

    getPictures()
  }, [searchQuery])

  return (
    <div className="App">
      <div className="bg-gray-100 flex justify-center flex-col">
        <h1 className="text-5xl text-black">Flikr Finder</h1>

        <DebounceInput
          className="m-3 p-1 text-center"
          placeholder="Search Flickr Photos"
          debounceTimeout={300}
          onChange={e => setSearchQuery(e.target.value)}
          value={searchQuery}
        />

        <div className="p-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {pictures.map((picture: FlikrPicture, i) => <Picture picture={picture} setSearchQuery={setSearchQuery} />)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
