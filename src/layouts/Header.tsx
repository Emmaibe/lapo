import {LuSearch} from "react-icons/lu";

export const Header = () => {

    return (
        <header className="h-[48px] border-b border-neutral-400 flex justify-between items-center w-full sticky top-0 z-[50] bg-neutral-100 py-2 px-5">
            <div className="flex items-center gap-3">
                <img
                    src={"src/assets/icons/home-03.svg"}
                    alt={"home"}
                />
                <h3 className="text-[12px] text-black font-medium">Dashboard</h3>
            </div>
            <div
                className="flex h-full items-center justify-end gap-6">
                <div className="relative">
                <LuSearch className="absolute top-[8px] left-3 text-black"/>
                    <input
                        type="search"
                        placeholder="Search"
                        className="w-full bg-neutral-350 h-[32px] pl-10 rounded-full text-black text-[11.76px] placeholder:text-neutral-450 border-2 border-orange focus:outline-none focus:ring-2 focus:ring-orange"
                    />
                </div>

                <div className="relative">
                    <img
                        src={"src/assets/icons/bell-01.svg"}
                        alt={"notifications"}
                    />
                </div>

                <div className="relative">
                    <div className="bg-[#F2F4F7] p-1 rounded-full">
                        <img
                            src={"src/assets/icons/user-01.svg"}
                            alt={"notifications"}
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}
