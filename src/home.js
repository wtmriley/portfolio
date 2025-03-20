import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="scrolling-wrapper">
      <Link to="/project/1" className="card">
        <h2>Project 1</h2>
      </Link>
      <Link to="/project/2" className="card">
        <h2>Project 2</h2>
      </Link>
    </div>
  );
}

export default Home;