import React from 'react';
import { FaStar} from 'react-icons/fa';

const Produk = (props) => {
    return (
                <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
                <div className="rounded bg-green-200 w-full p-5">
                <div className="text-slate-900">
        <img className="w-96 h-32 object-cover"src={props.image}/>
        <h2 className="text-base text-left font-medium pt-1">{props.title}</h2> 
        <p className="text-xs text-left font-normal pb-0.5 text-slate-600">{props.description}</p>
        <div className="flex pt-1">
        <img className="w-10 h-10 object-cover" src={props.avatar}/>
        <div className="pl-3.5">
        <p className="text-sm font-medium">{props.name}</p>
        <p className="text-sm italic font-normal">{props.departemen}</p>
        </div>
        </div>
        <div className=" flex pt-3.5 justify-between">
        <p className="flex">
            {[...Array(props.bintang)].map(star => {
            return(
                <label>
                    <FaStar className="cursor-pointer text-orange-500" />
                    </label>
            )
        })}
            </p>
        <p className="underline cursor-pointer text-slate-600">{props.range}</p>
        <p className="text-green-400 text-xl font-bold cursor-pointer">Rp.{props.harga}</p>

        </div>
       
        
                </div>
                </div>
                </div>
    );
}

export default Produk;