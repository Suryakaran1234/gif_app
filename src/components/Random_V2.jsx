import useGif from '../hooks/useGif';

const Tag = () => {
  const { gif, fetchGif } = useGif();

  return (
    <div className='container'>
      <h1>Random GIF🖼️</h1>
      <img src={gif} alt='Random GIF' width='500' height='500' />
      <button onClick={fetchGif}>Click For New Gif</button>
    </div>
  );
};

export default Tag;
