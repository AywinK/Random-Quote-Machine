import './App.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState({});
  const [randomSeed, setRandomSeed] = useState(Math.random());

  useEffect(() => {
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
      .then(res => res.json())
      .then((data) => {
        console.log("fetch");
        console.log(data.quotes[Math.floor(data.quotes.length * randomSeed)]);
        setData(data.quotes[Math.floor(data.quotes.length * randomSeed)]);
      });
  }, [randomSeed]);

  const handleClick = () => {
    setRandomSeed(Math.random());
  }


  return (
    <main id="wrapper">
      <section id="quote-box">
        <q id="text">{data.quote}</q>
        <cite id="author">{data.author}</cite>
        <button id="new-quote" onClick={handleClick}>New Quote</button>
        <a id="tweet-quote" href="twitter.com/intent/tweet"><TwitterIcon fontSize="large" /></a>
      </section>
    </main>
  );
}

export default App;
