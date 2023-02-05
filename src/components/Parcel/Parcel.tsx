import { useAppDispatch } from "../../hooks/hooks";
import { openRightbar } from "../../features/rightbar/rightbar-slice";

interface ParcelProps {
    name: string;
    address: string;
    receipient: {
        name: string;
        email: string;
        phone: string;
    };
}

export default function Parcel() {
    const dispatch = useAppDispatch();

    return (
        <div
            className="group hover:bg-slate-50 hover:cursor-pointer lg:grid lg:grid-cols-parcels items-start gap-2 border-b py-4 px-6 rounded-2xl mb-3"
            onClick={() => dispatch(openRightbar())}
        >
            <h2 className="text-xl font-bold text-dark ">
                Name of the product
            </h2>

            <h2 className="my-2">
                1872 Thompson Drive, Somewhere in this world!
            </h2>

            <div className="my-2 mb-4">
                <h2 className="font-semibold text-dark">
                    <span className="text-gray-500">Recipient:</span>
                    <span>John Doe</span>
                </h2>

                <h2 className="font-semibold text-dark my-1">
                    <span className="text-gray-500">Email:</span>{" "}
                    <span>johndoe@mail.com</span>
                </h2>

                <h2 className="font-semibold text-dark">
                    <span className="text-gray-500">Phone:</span>
                    <span>+012 345 679</span>
                </h2>
            </div>

            <button className="w-full bg-main py-3 text-white rounded-full font-semibold hover:cursor-pointer hover:shadow-md my-auto">
                Deliver
            </button>
        </div>
    );
}
