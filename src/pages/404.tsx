import { FaShippingFast } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="p-8 min-h-screen">
            <h3 className="w-full flex items-center justify-center gap-8 font-bold text-4xl">
                <FaShippingFast className="text-main  w-12 h-12" />
                Shippium
            </h3>
            <div className="mt-56 text-center">
                <h1 className="text-9xl md:text-[12rem] text-center font-bold text-dark mb-8">
                    404
                </h1>

                <h2 className="text-2xl font-semibold text-dark">
                    The page you were looking for doesn't exist.
                </h2>

                <div className="mt-16">
                    <Link
                        to="/"
                        className="py-4 px-8 bg-main text-white font-semibold rounded-md mx-auto hover:cursor-pointer hover:bg-dark hover:text-white"
                    >
                        Go back to dashboard
                    </Link>
                </div>
            </div>
        </div>
    );
}
