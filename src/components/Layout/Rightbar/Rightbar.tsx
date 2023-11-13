//icons
import { AiFillCloseCircle } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

//store
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { closeRightbar } from "../../../features/rightbar/rightbar-slice";

//comps
import Map from "./Map";

export default function Rightbar() {
  const { isOpen } = useAppSelector((state) => state.rightbar);
  const dispatch = useAppDispatch();

  return (
    <div
      className={`transition-all fixed z-50 top-0 flex flex-col justify-between min-h-screen bottom-0 w-[30rem] md:w-[40rem] bg-slate-50 p-8 ${
        isOpen ? "right-0" : "-right-full"
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-dark font-bold text-3xl">Parcel Details</h2>
        <AiFillCloseCircle
          onClick={() => dispatch(closeRightbar())}
          className={`w-6 h-6 p-1 bg-dark text-white rounded-full flex items-center justify-center  hover:cursor-pointer shadow-md ${
            true ? "" : "rotate-180 absolute -right-3"
          }`}
        />
      </div>

      <div className="mt-4 flex-grow">
        <Map />

        <div className="flex items-center gap-2 mt-4">
          <MdLocationOn className="w-6 h-6 text-main" />
          <h2 className="my-2 font-semibold">
            1872 Thompson Drive, Somewhere in this world!
          </h2>
        </div>

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
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => dispatch(closeRightbar())}
          className="rounded-lg border border-gray-600 text-gray-600 font-semibold w-full py-2 hover:bg-gray-600 hover:cursor-pointer hover:text-white hover:shadow-md"
        >
          Cancel
        </button>
        <button className="rounded-lg bg-main  text-white font-semibold w-full py-2 hover:bg-green-800 hover:cursor-pointer hover:text-white hover:shadow-md">
          Confirm
        </button>
      </div>
    </div>
  );
}
