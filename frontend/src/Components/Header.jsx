const Header = () => {
  return (
    <>
      <header className="flex h-[20px] w-screen border border-red-500">
        <nav className="flex space-between gap-2 border ">
          {" "}
          <input type="text" className=" border " />
          <button>Fetch & Save Deatils </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
