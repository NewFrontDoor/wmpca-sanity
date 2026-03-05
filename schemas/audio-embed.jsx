import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { defineField, defineType } from 'sanity'; 

const Preview = ({value}) => {
  const {url} = value;
  if (url) {
      return <ReactAudioPlayer src={url} autoPlay controls
    />
  }

  return <div>Audio preview not available for this URL</div>;
};

export const audioEmbedType = defineType({
  name: 'audioEmbed',
  type: 'object',
  title: 'Audio Embed',
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'Audio URL'
    })
  ],
  preview: {
    select: {
      url: 'url'
    },
    component: Preview
  }
});