import { useState, useEffect } from 'react';

const quotes = [
  {
    quote: 'The mind is everything. What you think you become.',
    author: 'Buddha',
  },
  {
    quote: 'The journey of a thousand miles begins with a single step.',
    author: 'Lao Tzu',
  },
  {
    quote:
      'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.',
    author: 'Helen Keller',
  },
  {
    quote:
      "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
    author: 'Mark Twain',
  },
  {
    quote:
      'The difference between ordinary and extraordinary is that little extra.',
    author: 'Jimmy Johnson',
  },
  {
    quote:
      'It is during our darkest moments that we must focus to see the light.',
    quote: 'Aristotle',
  },
  {
    quote:
      'The only person you are destined to become is the person you decide to be.',
    quote: 'Ralph Waldo Emerson',
  },
  {
    quote:
      "You don't have to be great to start, but you have to start to be great.",
    quote: 'Zig Ziglar',
  },
  {
    quote: 'Your future is created by what you do today, not tomorrow.',
    quote: 'Robert Kiyosaki',
  },
  {
    quote:
      'The only limit to our realization of tomorrow will be our doubts of today.',
    quote: 'Franklin D. Roosevelt',
  },
  {
    quote: 'The best way to predict your future is to create it.',
    quote: 'Peter Drucker',
  },
  {
    quote: "Believe you can and you're halfway there.",
    quote: 'Theodore Roosevelt',
  },
  {
    quote: 'The only way to do great work is to love what you do.',
    quote: 'Steve Jobs',
  },
  { quote: 'If you can dream it, you can do it.', quote: 'Walt Disney' },
  { quote: 'There is no substitute for hard work.', quote: 'Thomas Edison' },
  {
    quote:
      'Our greatest glory is not in never falling, but in rising every time we fall.',
    quote: 'Nelson Mandela',
  },
  {
    quote:
      'The future belongs to those who believe in the beauty of their dreams.',
    quote: 'Eleanor Roosevelt',
  },
  {
    quote: 'Life is 10% what happens to me and 90% how I react to it.',
    quote: 'Charles R. Swindoll',
  },
  {
    quote:
      'The only person you are destined to become is the person you decide to be.',
    quote: 'Ralph Waldo Emerson',
  }, // Added a duplicate for demonstration
];

function App() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]); // Initial quote

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length); // Random index
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <>
      <div className="text_wrapper">
        <h1>"{currentQuote.quote}"</h1>
        <p>- {currentQuote.author}</p>
      </div>
      <div>
        <button onClick={handleClick}>Show Random Quote</button>
      </div>
    </>
  );
}

export default App;
