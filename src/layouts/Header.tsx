import {LuSearch} from "react-icons/lu";

export const Header = () => {

    return (
        <header className="h-[48px] border-b border-neutral-400 flex justify-between items-center w-full sticky top-0 z-[50] bg-neutral-100 py-2 px-5">
            <div className="flex items-center gap-3">
                <img
                    src={"https://res.cloudinary.com/dpfqbb9pl/image/upload/v1741219842/home-03_zgonbs.svg"}
                    alt={"home"}
                />
                <h3 className="text-[12px] text-black font-medium">Dashboard</h3>
            </div>
            <div
                className="flex h-full items-center justify-end gap-6">
                <div className="relative max-sm:hidden">
                    <LuSearch className="absolute top-[8px] left-3 text-black"/>
                    <input
                        type="search"
                        placeholder="Search"
                        className="w-full bg-neutral-350 h-[32px] pl-10 rounded-full text-black text-[11.76px] placeholder:text-neutral-450 border-2 border-neutral-450 focus:outline-none focus:ring-2 focus:ring-orange"
                    />
                </div>

                <div className="relative">
                    <img
                        src={"https://res.cloudinary.com/dpfqbb9pl/image/upload/v1741219842/bell-01_yocvpu.svg"}
                        alt={"notifications"}
                    />
                </div>

                <div className="relative">
                    <div className="bg-[#F2F4F7] p-1 rounded-full">
                        <img
                            src={"https://res.cloudinary.com/dpfqbb9pl/image/upload/v1741219840/user-01_klptdg.svg"}
                            alt={"notifications"}
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}
