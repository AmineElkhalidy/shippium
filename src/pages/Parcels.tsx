import { AiOutlineSearch } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { FiSliders } from "react-icons/fi";
import Parcel from "../components/Parcel/Parcel";

export default function Parcels() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-dark mb-16">Parcels</h1>

            <div className="flex items-center  mb-6 justify-between">
                <div className="flex items-center gap-4">
                    <button className=" h-12 rounded-md px-6 gap-12 bg-main text-white flex justify-between items-center hover:bg-dark hover:text-white hover:cursor-pointer">
                        <p className="font-semibold">Create shipment</p>
                        <BsPlusLg />
                    </button>
                    <h5 className="font-semibold">Total Parcels: 368</h5>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex relative">
                        <input
                            type="text"
                            placeholder="Search by #ID"
                            className="border px-4 py-2 rounded-md w-80"
                        />
                        <AiOutlineSearch className="w-6 h-5 absolute right-3 top-1/2 -translate-y-1/2 hover:cursor-pointer" />
                    </div>
                    <FiSliders className="w-10 h-10 border border-main px-2 py-1 rounded-md hover:bg-dark hover:border-dark hover:text-white hover:cursor-pointer" />
                </div>
            </div>

            <div className="lg:grid lg:grid-cols-parcels items-start gap-2  bg-slate-100  p-6 rounded-md">
                <h2 className="text-xl font-bold text-dark ">Parcel ID #</h2>

                <h2 className="text-xl font-bold text-dark ">
                    Receipient Address
                </h2>
                <h2 className="text-xl font-bold text-dark ">
                    Receipient Info
                </h2>
                <h2 className="text-xl font-bold text-dark ">Options</h2>
            </div>
            <Parcel />
            <Parcel />
            <Parcel />
            <Parcel />
            <Parcel />
            <Parcel />
        </div>
    );
}
