import { useState } from 'react';

export function HamburgerMenu() {
  // useState permite guardar si el menú está abierto o cerrado y su valor inicial es (false), es decir, cerrado
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    //Al hacer clic alterna open entre true y false.
    setOpen(!open);
  };

  return (
    <div className='menu-container'>
      {/* Icono tipo hamburguesa */}
      <button className="hamburger" onClick={handleClick}>
        <div className={`bar ${open ? "bar1-open" : ""}`}></div>
        <div className={`bar ${open ? "bar2-open" : ""}`}></div>
        <div className={`bar ${open ? "bar3-open" : ""}`}></div>
      </button>

      {/* Menu lateral */}
      <nav className={`side-menu ${open ? "open" : ""}`}>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Proyectos</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </div>
  )
};