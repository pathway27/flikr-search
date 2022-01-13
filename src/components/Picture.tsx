import React from 'react';

import { FlikrPicture } from '../types';

const Picture = (props: any) => {

  return (
    <div className="w-full rounded">
      <img src={props.picture.media.m} alt="" />
    </div>
  );
}

export default Picture;