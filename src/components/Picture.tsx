import React from 'react';

import { FlikrPicture } from '../types';

interface PictureProps {
  picture: FlikrPicture,
  setSearchQuery: any
}

const Picture = (props: PictureProps) => {
  const picture: FlikrPicture = props.picture
  const tags: string[] = picture.tags.split(' ').slice(0, 5)

  return (
    <div className="rounded overflow-hidden shadow-lg">
      <img className="mx-auto max-h-40 fade-in-image" src={picture.media.m} alt="" />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <a href={picture.link} target="_blank" rel="noreferrer">
            See Full Image
          </a>
        </div>
        <p className="text-gray-700 text-base">
          {picture.author}
        </p>
        <p className="text-gray-600 text-base">
          {new Date(picture.date_taken).toLocaleDateString()}
        </p>
      </div>
      <div className="px-6 pt-2 pb-2">
        {tags.map((tag) => {
          return (
            <span
              key={tag}
              onClick={() => {
                window.scroll({top: 0, behavior: 'smooth'});
                props.setSearchQuery(tag);
              }}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer" 
            >
              #{tag}
            </span>
          )
        })}
      </div>
    </div>
  );
}

export default Picture;