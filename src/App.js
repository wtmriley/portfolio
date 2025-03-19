import { useEffect } from "react";
import './App.css';

function App() {
  useEffect(() => {
    const container = document.querySelector(".scroll-container");
    if (!container) return;

    let scrollingHorizontally = true;

    const handleScroll = (event) => {
      if (scrollingHorizontally) {
        container.scrollBy({
          left: event.deltaY < 0 ? -70 : 70,
          behavior: "smooth",
        });
        event.preventDefault();
        }
      };
    container.addEventListener("wheel", handleScroll, { passive: false });

    return () => container.removeEventListener("wheel", handleScroll);
  }, []);
    
  return (
    <div>
      <h1 className="title">Riley's Portfolio</h1>

      <div className="scrolling-wrapper">
        <div className="card">
          <h2>Elevator Pitch</h2>
        </div>
        <div className="card">
          <h2>Joah Brown</h2>
        </div>
        <div className="card">
          <h2>Flashcards</h2>               
        </div>
        <div className="card">
          <h2>Graphic design</h2>
        </div>
        <div className="card">
          <h2>Card</h2>
        </div>
        <div className="card">
          <h2>Card</h2>
        </div>
        <div className="card">
          <h2>Card</h2>
        </div>
        <div className="card">
          <h2>Card</h2>
        </div>
        <div className="card">
          <h2>Card</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
