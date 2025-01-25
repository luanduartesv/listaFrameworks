import "./Nav.css";

export function Header() {
  return (
    <nav className="nav">
      <div className="nav-container">
        <a href="#" className="nav-logo">
          Frameworks
        </a>
        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="http://localhost:3000/form" className="nav-link">
              Adicionar Framework
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
