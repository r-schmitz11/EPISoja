function Site() {
  return (
    <nav className="bg-sky-100 p-3 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-sky-500 font-bold text-4xl">EPISoja</a>
        <ul className="flex space-x-4">
          <li><a href="#" className=" text-sky-400 hover:text-pink-500 hover:border border-solid border-pink-500 p-1 rounded-lg">Gab</a></li>
          <li><a href="#" className=" text-sky-400 hover:text-pink-500 hover:border border-solid border-pink-500 p-1 rounded-lg">Romain</a></li>
          <li><a href="#" className=" text-sky-400 hover:text-pink-500 hover:border border-solid border-pink-500 p-1 rounded-lg">Galerie</a></li>
          <li><a href="#" className=" text-sky-400 hover:text-pink-500 hover:border border-solid border-pink-500 p-1 rounded-lg">Messages</a></li>
          <li><a href="#" className=" text-sky-400 hover:text-pink-500 hover:border border-solid border-pink-500 p-1 rounded-lg">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Site;