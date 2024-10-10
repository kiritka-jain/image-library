import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Images(props) {
  const [itemData, setItemData] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchAllImages = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
        setItemData(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchAllImages();
  }, []);

  useEffect(() => {
    const displayImages = () => {
      const filteredImages = itemData.filter((item) => item.albumId === props.albumId);
      setImages(filteredImages);
    };

    displayImages();
  }, [props.albumId, itemData]);

  return (
    <ImageList sx={{ width: 1200, height: 700 }} cols={1} rowHeight={200}>
      {images.map((image) => (
        <ImageListItem key={image.id}>
          <img
            srcSet={`${image.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${image.thumbnailUrl}?w=164&h=164&fit=crop&auto=format`}
            alt={image.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
