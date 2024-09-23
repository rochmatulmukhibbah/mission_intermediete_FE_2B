import React from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between w-full items-center pr-5 h-45px bg-cyan-50">
           <span><img src="Type=Type5.png"/>
           </span>
           <div className="">
      <button className="dropdown-button text-xl text-black hover:text-rose-500 duration-400" onClick={toggleDropdown}>
        Kategori
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">List course</a>
          </li>
        </ul>
      )}
    </div>
    </div>
  );
};

export default DropdownMenu;