import "./index.css";

const Header = () => (
  <>
    <div className="header">
      <h1>ACO</h1>
      <ul className="mid-text">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Support</li>
      </ul>
      <button type="button">Signin</button>
    </div>
    <div className="mobile-view">
      <h1>ACO</h1>
      <button type="button" className="mobile-btn">
        CLick
      </button>
    </div>
  </>
);

export default Header;
