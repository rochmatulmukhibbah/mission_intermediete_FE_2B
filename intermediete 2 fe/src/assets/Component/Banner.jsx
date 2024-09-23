const Banner = (props) => {
    return (
        <div className="flex justify-center items-center w-full h-4/5 bg-cyan-50">
        <div className='bg-[url("bg.jpg")] h-80 w-5/6 bg-cover object-center'>
        <h1 className="text-green-200 pt-4 font-bold font-sans text-center text-3xl sm:text-2xl sm:font-semibold md:text-3xl md:font-bold">{props.judulbanner}</h1>
        <p className="font-medium pt-4 text-white text-2xl text-center sm:text-xl sm:font-normal md:text-2xl">{props.titlebanner}</p>
        <div className="w-auto pt-10 flex justify-center">
        <button className="bg-green-300 w-80 h-8 rounded">{props.tombol}</button>
        </div>
        </div>
        </div>

    );
}

export default Banner;