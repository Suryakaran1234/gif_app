import axios from 'axios';
import { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;

const Tag = () => {
  const [tag, setTag] = useState('dogs');
  const [gif, setGif] = useState('');

  const fetchGif = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url);

    const imageSrc = data.data.images.downsized_large.url;
    setGif(imageSrc);
    console.log(gif);
  };
  useEffect(() => {
    fetchGif(tag);
  }, [tag]);

  const handleClick = () => {
    fetchGif(tag);
  };

  return (
    <div className='container'>
      <h1>Random {tag} GIF🖼️</h1>
      <img src={gif} alt='Random GIF' width='500' height='500'/>
      <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={handleClick}>Click For New Gif</button>
    </div>
  );
};

export default Tag;
