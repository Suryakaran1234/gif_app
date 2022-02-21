import axios from 'axios';
import { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;

const Random = () => {
  const [gif, setGif] = useState('');

  const fetchGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);

    const imageSrc = data.data.images.downsized_large.url;
    setGif(imageSrc);
    console.log(gif);
  };
  useEffect(() => {
    fetchGif();
  }, []);

  const handleClick = () => {
    fetchGif();
  };

  return (
    <div className='container'>
      <h1>Random GIF🖼️</h1>
      <img src={gif} alt='Random GIF' width='500' height='500' />
      <button onClick={handleClick}>Click For New Gif</button>
    </div>
  );
};

export default Random;
