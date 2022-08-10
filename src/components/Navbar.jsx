const Navbar = () => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="https://github.com/birkan-dogan/rest-countries"
          target="_blank"
        >
          <img
            src="https://avatars.githubusercontent.com/u/101419153?v=4"
            alt=""
            width={30}
            height={30}
            className="d-inline-block align-text-top nav-img"
          />
          rest countries
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
