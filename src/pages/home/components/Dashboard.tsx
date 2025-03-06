import {IoIosArrowForward} from "react-icons/io";
import {HiArrowUpRight} from "react-icons/hi2";
import {CgArrowsExpandRight} from "react-icons/cg";
import {ChartAreaComponent} from "../../../components/ChartAreaInteractive.tsx";
import {BarChartComponent} from "../../../components/BarChartInteractive.tsx";
import {PieChartComponent} from "../../../components/PieChartInteractice.tsx";

const Dashboard = () => {
    return (
        <section>
            <div className="text-neutral-800 flex justify-between items-start gap-3 max-sm:flex-col">
                <div className="space-y-2">
                    <h2 className="text-lg font-bold">
                        Hi Nazeer, what would you like to do today?
                    </h2>
                    <p className="font-medium text-xs">
                        Last login: <span className="font-normal">26/11/2024  14:39:58</span>
                    </p>
                </div>

                <div className="flex-center gap-2 border border-neutral-450 rounded-[4px] py-2 px-4">
                    <div className="flex-center gap-1">
                        <img
                            src={"https://res.cloudinary.com/dpfqbb9pl/image/upload/v1741219840/calendar_spcwfe.svg"}
                            alt={"calendar"}
                        />
                        <p className="text-[11px] font-medium">Today</p>
                    </div>

                    <div className="text-[11px] font-normal">
                        11 Nov 2024
                    </div>
                </div>
            </div>

            <div className="w-full bg-neutral-100 rounded-[10px] border border-neutral-450 p-3 mt-3">
                <h3 className="font-medium text-[16px]">Your Quick Access</h3>

                <div className="mt-3 flex-between flex-wrap gap-2">
                    <QuickAccess
                        icon={"https://res.cloudinary.com/dpfqbb9pl/image/upload/v1741219846/manage_card_e8skli.svg"}
                        title={"Manage a Card"}
                    />
                    <QuickAccess
                        icon={"https://res.cloudinary.com/dpfqbb9pl/image/upload/v1741219844/instant_card_hz4ykv.svg"}
                        title={"Issue Instant Card"}
                    />
                    <QuickAccess
                        icon={"https://res.cloudinary.com/dpfqbb9pl/image/upload/v1741219847/personalize_card_evxprw.svg"}
                        title={"Issue Personalized Card"}
                    />
                    <QuickAccess
                        icon={"https://res.cloudinary.com/dpfqbb9pl/image/upload/v1741219847/review_card_furxo3.svg"}
                        title={"Review Card Requests"}
                    />
                </div>
            </div>

            <div className="flex items-center gap-2 my-3">
                <h2 className="text-lg font-bold">
                    Analytics
                </h2>

                <div className="border-t border-neutral-450 flex-grow"/>
            </div>

            <div className="mt-3 flex-between flex-wrap gap-2">
                <div className="bg-neutral-100 rounded-[10px] p-3 flex-grow space-y-2 border border-neutral-450">
                    <div className="font-medium text-sm text-neutral-900/50 space-y-1">
                        <img src="https://res.cloudinary.com/dpfqbb9pl/image/upload/v1741219838/credit-card-check_zzxoh4.svg"/>
                        <h5>Total Active Cards</h5>
                    </div>
                    <div className="flex-between gap-2">
                        <div className="font-bold text-[24px] text-neutral-800 max-sm:text-xl">
                            26,478
                        </div>
                        <div className="flex items-center gap-2">
                            <div
                                className="flex items-center gap-1.5 rounded-[4px] text-secondary-growth bg-secondary-growth_background px-2 py-1 text-[12px] font-medium">
                                <HiArrowUpRight/>
                                <p>+9%</p>
                            </div>
                            <p className="text-xs font-normal text-neutral-800/50">this month</p>
                        </div>
                    </div>
                </div>

                <div className="bg-neutral-100 rounded-[10px] p-3 flex-grow space-y-2 border border-neutral-450">
                    <div className="font-medium text-sm text-neutral-900/50 space-y-1">
                        <img src="https://res.cloudinary.com/dpfqbb9pl/image/upload/v1741219840/credit-card-edit_aacavs.svg"/>
                        <h5>Total Personalized Cards</h5>
                    </div>
                    <div className="flex-between gap-2">
                        <div className="font-bold text-[24px] text-neutral-800 max-sm:text-xl">
                            15,703
                        </div>
                        <div className="flex items-center gap-2">
                            <div
                                className="flex items-center gap-1.5 rounded-[4px] text-secondary-growth bg-secondary-growth_background px-2 py-1 text-[12px] font-medium">
                                <HiArrowUpRight/>
                                <p>8.5%</p>
                            </div>
                            <p className="text-xs font-normal text-neutral-800/50">this month</p>
                        </div>
                    </div>
                </div>

                <div className="bg-neutral-100 rounded-[10px] p-3 flex-grow space-y-2 border border-neutral-450">
                    <div className="font-medium text-sm text-neutral-900/50 space-y-1">
                        <img src="https://res.cloudinary.com/dpfqbb9pl/image/upload/v1741219844/bank-note-01_ujmxmf.svg"/>
                        <h5>Today&apos;s Revenue</h5>
                    </div>
                    <div className="flex-between gap-2">
                        <div className="font-bold text-[24px] text-neutral-800 max-sm:text-xl">
                            ₦9.3M
                        </div>
                        <div className="flex items-center gap-2">
                            <div
                                className="flex items-center gap-1.5 rounded-[4px] text-secondary-growth bg-secondary-growth_background px-2 py-1 text-[12px] font-medium">
                                <HiArrowUpRight/>
                                <p>+6%</p>
                            </div>
                            <p className="text-xs font-normal text-neutral-800/50">vs yesterday</p>
                        </div>
                    </div>
                </div>

                <div className="bg-neutral-100 rounded-[10px] p-3 flex-grow space-y-2 border border-neutral-450">
                    <div className="font-medium text-sm text-neutral-900/50 space-y-1">
                        <img src="https://res.cloudinary.com/dpfqbb9pl/image/upload/v1741219844/hourglass-03_m3xgno.svg"/>
                        <h5>Pending Requests</h5>
                    </div>
                    <div className="flex-between gap-2">
                        <div className="font-bold text-[24px] text-neutral-800 max-sm:text-xl">
                            38
                        </div>
                        <div className="flex items-center gap-1.5">
                            <img src="https://res.cloudinary.com/dpfqbb9pl/image/upload/v1741219844/alert-circle_hxjgxi.svg"/>
                            <p className="text-xs font-normal text-secondary-pending">Requires attention</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="w-full grid grid-cols-2 max-[1210px]:grid-cols-1 gap-2.5 mt-3">
                <BarChartComponent/>
                <div
                    className="bg-neutral-100 rounded-[12px] p-5 max-sm:p-3 flex-grow space-y-4 border border-neutral-450">
                    <div className="w-full flex-between">
                        <h3 className="text-lg font-medium max-sm:text-base">Recent Card Requests</h3>
                        <CgArrowsExpandRight color="#DEDEDF" className="text-neutral-450"/>
                    </div>

                    <div>
                        <div className="w-full grid grid-cols-5 bg-secondary-background py-3 border border-neutral-450">
                            <p className="text-sm max-sm:text-xs text-center font-medium text-neutral-900/50">Branch</p>
                            <p className="text-sm max-sm:text-xs text-center font-medium text-neutral-900/50">Card
                                Type</p>
                            <p className="text-sm max-sm:text-xs text-center font-medium text-neutral-900/50">Quantity</p>
                            <p className="text-sm max-sm:text-xs text-center font-medium text-neutral-900/50">Status</p>
                            <p className="text-sm max-sm:text-xs text-center font-medium text-neutral-900/50">Action</p>
                        </div>

                        <div className="w-full grid grid-cols-5 py-2 border-b border-neutral-450">
                            <p className="text-sm max-sm:text-xs text-center font-medium py-1 text-neutral-900/50">Corporate</p>
                            <p className="text-sm max-sm:text-xs text-center font-medium py-1 text-neutral-900/50">Instant</p>
                            <p className="text-sm max-sm:text-xs text-center font-medium py-1 text-neutral-900/50">10</p>
                            <p className="text-sm max-sm:text-xs text-center font-medium text-secondary-growth">
                                <div
                                    className="border border-secondary-growth bg-secondary-growth_background rounded-full w-fit mx-auto px-2 py-1 max-sm:text-[9px] max-sm:px-1 max-sm:py-0">
                                    Ready
                                </div>
                            </p>
                            <p className="text-sm max-sm:text-xs text-center font-bold py-1 text-secondary-active">View</p>
                        </div>

                        <div className="w-full grid grid-cols-5 py-3 border-b border-neutral-450">
                            <p className="text-sm max-sm:text-xs text-center flex-grow py-1 font-medium text-neutral-900/50">Corporate</p>
                            <p className="text-sm max-sm:text-xs text-center flex-grow py-1 font-medium text-neutral-900/50">Personalized</p>
                            <p className="text-sm max-sm:text-xs text-center flex-grow py-1 font-medium text-neutral-900/50">10</p>
                            <p className="text-sm max-sm:text-xs text-center font-medium text-secondary-pending">
                                <div
                                    className="border border-secondary-pending bg-secondary-pending_background rounded-full w-fit mx-auto px-2 py-1 max-sm:text-[9px] max-sm:px-1 max-sm:py-0">
                                    In Progress
                                </div>
                            </p>
                            <p className="text-sm max-sm:text-xs text-center flex-grow py-1 font-bold text-secondary-active">View</p>
                        </div>

                        <div className="w-full grid grid-cols-5 py-3 border-b border-neutral-450">
                            <p className="text-sm max-sm:text-xs text-center flex-grow py-1 font-medium text-neutral-900/50">Corporate</p>
                            <p className="text-sm max-sm:text-xs text-center flex-grow py-1 font-medium text-neutral-900/50">Personalized</p>
                            <p className="text-sm max-sm:text-xs text-center flex-grow py-1 font-medium text-neutral-900/50">10</p>
                            <p className="text-sm max-sm:text-xs text-center font-medium text-secondary-active">
                                <div
                                    className="border border-secondary-active bg-secondary-active_background rounded-full w-fit mx-auto px-2 py-1 max-sm:text-[9px] max-sm:px-1 max-sm:py-0">
                                    Acknowledged
                                </div>
                            </p>
                            <p className="text-sm max-sm:text-xs text-center flex-grow py-1 font-bold text-secondary-active">View</p>
                        </div>

                        <div className="w-full grid grid-cols-5 py-3">
                            <p className="text-sm max-sm:text-xs text-center flex-grow py-1 font-medium text-neutral-900/50">Corporate</p>
                            <p className="text-sm max-sm:text-xs text-center flex-grow py-1 font-medium text-neutral-900/50">Instant</p>
                            <p className="text-sm max-sm:text-xs text-center flex-grow py-1 font-medium text-neutral-900/50">10</p>
                            <p className="text-sm max-sm:text-xs text-center font-medium text-gray-700">
                                <div
                                    className="border border-gray-700 bg-gray-200 rounded-full w-fit mx-auto px-2 py-1 max-sm:text-[9px] max-sm:px-1 max-sm:py-0">
                                    Pending
                                </div>
                            </p>
                            <p className="text-sm max-sm:text-xs text-center flex-grow py-1 font-bold text-secondary-active">View</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full grid grid-cols-2 max-lg:grid-cols-1 gap-2.5 mt-3">
                <ChartAreaComponent/>
                <PieChartComponent/>
            </section>
        </section>
    );
};

export default Dashboard;

const QuickAccess = ({icon, title}: {
    icon: string,
    title: string,
}) => (
    <div
        className="bg-secondary-background rounded-[4px] flex flex-grow items-center gap-3.5 py-2 px-4">
        <img src={icon} alt={title}/>
        <p className="text-[14px] font-medium">{title}</p>
        <IoIosArrowForward className="text-neutral-450 relative right-2"/>
    </div>
);
