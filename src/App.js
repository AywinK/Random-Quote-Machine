import './App.css';
import TwitterIcon from '@mui/icons-material/Twitter';

function App() {
  return (
    <main id="wrapper">
      <section id="quote-box">
        <q id="text">quote here quote herequote herequote herequote herequote herequote herequote herequote here</q>
        <cite id="author">author here</cite>
        <button id="new-quote">New Quote</button>
        <a id="tweet-quote" href="twitter.com/intent/tweet"><TwitterIcon fontSize="large" /></a>
      </section>
    </main>
  );
}

export default App;
