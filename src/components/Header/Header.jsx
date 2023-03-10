import "./header.scss";

const Header = () => {
  return (
    <div className="container header-container">
      <div className="flex justify-between align-center header-section">
        <p className="uppercase p15 name">Pavel Bulaienko</p>
        <div className="flex align-center menu-list">
          <a href="#projects-section" className="menu-item">
            <p className="uppercase p15">Projects</p>
          </a>
          <a href="#about-me-section" className="menu-item">
            <p className="uppercase p15">About</p>
          </a>
          <a href="#contact-me-section" className="menu-item">
            <p className="uppercase p15">Contacts</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
