import { useEffect, useState } from "react";
import Quote from "./Quote.js";

function QuoteList() {
  const [myQuotes, setMyQuotes] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getMyQuotes() {
      const response = await fetch("https://dummyjson.com/quotes");
      const data = await response.json();

      setMyQuotes(data.quotes);
      setIsLoading(false);
    }
    getMyQuotes();
  }, []);

  const quoteJSX = myQuotes.map((quote, index) => {
    return <Quote key={index} {...quote} />;
  });

  return <div>{isLoading ? "loading" : quoteJSX}</div>;
}

export default QuoteList;
