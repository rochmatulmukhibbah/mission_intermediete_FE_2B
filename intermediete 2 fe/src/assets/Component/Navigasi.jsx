const Navigasi = () => {
    return (
        <div className="h-11 flex bg-slate-300 pl-28 w-full sm:pl-14 sm:items-center md:pl-16">
           <button className="text-xl text-black rounded-md w-28 h-8 hover:bg-green-400 hover:text-rose-500 duration-400 sm:text-base" >Semua Produk</button>
           <button className="text-xl text-black rounded-md w-28 h-8 hover:bg-green-400 hover:text-rose-500 duration-400 sm:text-base" >Pemasaran</button>
           <button className="text-xl text-black rounded-md w-16 h-8 hover:bg-green-400 hover:text-rose-500 duration-400 sm:text-base" >Desain</button>
           <button className="text-xl text-black rounded-md w-36 h-8 hover:bg-green-400 hover:text-rose-500 duration-400 sm:text-base" >Pengembangan Diri</button>
           <button className="text-xl text-black rounded-md w-14 h-8 hover:bg-green-400 hover:text-rose-500 duration-400 sm:text-base" >Bisnis</button>

        </div>
    );
}

export default Navigasi;