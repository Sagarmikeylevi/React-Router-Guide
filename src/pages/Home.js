import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  const navgateHandler = () => {
    navigate("/products");
  }
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/products">the lists of products</Link>
      </p>
      <p>
        <button onClick={navgateHandler}>Navigate</button>
      </p>
    </>
  );
};

export default Homepage;
