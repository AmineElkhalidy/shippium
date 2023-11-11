import { TbPackage } from "react-icons/tb";
import { Link, redirect } from "react-router-dom";

//comps
import DelayedDelivery from "../components/dashlets/DelayedDelivery";
import UserMenu from "../components/Layout/User/UserMenu";

export default function Dashboad() {
    redirect("/login");
    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-dark mb-16">Overview</h1>
                <UserMenu />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex justify-between items-center p-6 bg-slate-100 rounded-md">
                    <div>
                        <h3 className="text-dark">New packages</h3>
                        <h1 className="text-3xl text-dark font-bold">222</h1>
                    </div>
                    <TbPackage className="w-16 h-16 bg-gray-200 p-3 rounded-full text-main" />
                </div>

                <div className="flex justify-between items-center p-6 bg-slate-100 rounded-md">
                    <div>
                        <h3 className="text-dark">New packages</h3>
                        <h1 className="text-3xl text-dark font-bold">222</h1>
                    </div>
                    <TbPackage className="w-16 h-16 bg-gray-200 p-3 rounded-full text-main" />
                </div>
                <div className="flex justify-between items-center p-6 bg-slate-100 rounded-md">
                    <div>
                        <h3 className="text-dark">New packages</h3>
                        <h1 className="text-3xl text-dark font-bold">222</h1>
                    </div>
                    <TbPackage className="w-16 h-16 bg-gray-200 p-3 rounded-full text-main" />
                </div>
                <div className="flex justify-between items-center p-6 bg-slate-100 rounded-md">
                    <div>
                        <h3 className="text-dark">New packages</h3>
                        <h1 className="text-3xl text-dark font-bold">222</h1>
                    </div>
                    <TbPackage className="w-16 h-16 bg-gray-200 p-3 rounded-full text-main" />
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-4 mt-8">
                <div className="border border-slate-200 rounded-md">
                    <div className="bg-slate-100 p-6 ">
                        <div className="flex justify-between items-center">
                            <h3 className="text-dark font-semibold">
                                Delayed packages
                            </h3>
                            <Link to="/parcels/delayed">
                                <p className="text-blue-400">Show all</p>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-dashlet gap-2 p-6 border-b">
                            <h5 className="font-semibold text-dark">
                                Destination
                            </h5>
                            <h5 className="font-semibold text-dark">Truck</h5>
                            <h5 className="font-semibold text-dark">
                                Time arrive
                            </h5>
                            <h5 className="font-semibold text-dark">
                                Time delay
                            </h5>
                        </div>

                        <DelayedDelivery />
                        <DelayedDelivery />
                        <DelayedDelivery />
                        <DelayedDelivery />
                        <DelayedDelivery />
                    </div>
                </div>
                <div className="border border-slate-200 rounded-md">
                    <div className="bg-slate-100 p-6 ">
                        <div className="flex justify-between items-center">
                            <h3 className="text-dark font-semibold">
                                Delayed packages
                            </h3>
                            <Link to="/parcels/delayed">
                                <p className="text-blue-400">Show all</p>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-dashlet gap-2 p-6 border-b">
                            <h5 className="font-semibold text-dark">
                                Destination
                            </h5>
                            <h5 className="font-semibold text-dark">Truck</h5>
                            <h5 className="font-semibold text-dark">
                                Time arrive
                            </h5>
                            <h5 className="font-semibold text-dark">
                                Time delay
                            </h5>
                        </div>

                        <DelayedDelivery />
                        <DelayedDelivery />
                        <DelayedDelivery />
                        <DelayedDelivery />
                        <DelayedDelivery />
                    </div>
                </div>
                <div className="border border-slate-200 rounded-md">
                    <div className="bg-slate-100 p-6 ">
                        <div className="flex justify-between items-center">
                            <h3 className="text-dark font-semibold">
                                Delayed packages
                            </h3>
                            <Link to="/parcels/delayed">
                                <p className="text-blue-400">Show all</p>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-dashlet gap-2 p-6 border-b">
                            <h5 className="font-semibold text-dark">
                                Destination
                            </h5>
                            <h5 className="font-semibold text-dark">Truck</h5>
                            <h5 className="font-semibold text-dark">
                                Time arrive
                            </h5>
                            <h5 className="font-semibold text-dark">
                                Time delay
                            </h5>
                        </div>

                        <DelayedDelivery />
                        <DelayedDelivery />
                        <DelayedDelivery />
                        <DelayedDelivery />
                        <DelayedDelivery />
                    </div>
                </div>
                <div className="border border-slate-200 rounded-md">
                    <div className="bg-slate-100 p-6 ">
                        <div className="flex justify-between items-center">
                            <h3 className="text-dark font-semibold">
                                Delayed packages
                            </h3>
                            <Link to="/parcels/delayed">
                                <p className="text-blue-400">Show all</p>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-dashlet gap-2 p-6 border-b">
                            <h5 className="font-semibold text-dark">
                                Destination
                            </h5>
                            <h5 className="font-semibold text-dark">Truck</h5>
                            <h5 className="font-semibold text-dark">
                                Time arrive
                            </h5>
                            <h5 className="font-semibold text-dark">
                                Time delay
                            </h5>
                        </div>

                        <DelayedDelivery />
                        <DelayedDelivery />
                        <DelayedDelivery />
                        <DelayedDelivery />
                        <DelayedDelivery />
                    </div>
                </div>
            </div>
        </div>
    );
}
