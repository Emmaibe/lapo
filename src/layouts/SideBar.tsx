import {useLocation, useNavigate} from "react-router-dom";

export const SideBar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    console.log(location.pathname);

    return (
        <section className="max-[870px]:hidden w-[230px] h-dvh flex flex-col justify-between sticky top-0 bg-neutral-100 border-r border-neutral-400">
            <div>
                <div className="p-3">
                    <figure className="p-3">
                        <img src="https://res.cloudinary.com/dpfqbb9pl/image/upload/v1741219842/elements_m8f9u8.svg" alt="lapo logo"/>
                    </figure>
                </div>

                <nav className="py-2 px-[11px] flex flex-col overflow-y-scroll sticky h-[calc(100vh-170px)]">
                    <button
                        onClick={() => navigate("/")}
                        className={`text-neutral-150 p-3 ${location.pathname === "/" ? "text-secondary-active bg-neutral-200 border border-neutral-300" : "text-neutral-900/50"} font-medium rounded-[8px] text-[12px] flex items-center gap-2 h-fit`}>
                        <span><img src={"src/assets/icons/elements.svg"} alt={"home"}/> </span> Dashboard
                    </button>

                    <h3 className="text-neutral-900/50 text-[8.5px] px-[28px] my-4">MAIN MENU</h3>


                    {navItems.map((item) => (
                        <NavButtons
                            key={item.title}
                            {...item}
                            isCurrentRoute={false}
                        />
                    ))}
                </nav>


            </div>

            <div>
                <div className="py-2 px-[11px] mt-4 grid gap-2">
                    <button
                        className={`text-neutral-150 p-3 text-neutral-800 font-medium rounded-[8px] text-[12px] flex items-center gap-2 h-fit`}>
                        <span><img src={"https://res.cloudinary.com/dpfqbb9pl/image/upload/v1741219845/logout-02_ooxqou.svg"} alt={"logout"}/> </span> Logout
                    </button>
                </div>
            </div>
        </section>
    )
}

const NavButtons = ({title, icon, route, isCurrentRoute}: {
    title: string,
    icon: string | undefined,
    route: string,
    isCurrentRoute: boolean
}) => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(route)}
            className={`text-neutral-150 p-3 ${isCurrentRoute ? "text-secondary-active bg-neutral-200 border border-neutral-300" : "text-neutral-900/50"} font-medium rounded-[8px] text-[12px] flex items-center gap-2 h-fit`}>
            <span><img src={icon} alt={title}/> </span> {title}
        </button>
    )
}

const navItems = [
    {
        title: "Branches",
        icon: "https://res.cloudinary.com/dpfqbb9pl/image/upload/v1741219842/branches_acwkhn.svg",
        route: "/"
    },
    {
        title: "Roles",
        icon: "https://res.cloudinary.com/dpfqbb9pl/image/upload/v1741219847/roles_inpqca.svg",
        route: "/"
    },
    {
        title: "Users",
        icon: "https://res.cloudinary.com/dpfqbb9pl/image/upload/v1741219840/users_aieyqi.svg",
        route: "/"
    },
    {
        title: "Card Scheme",
        icon: "https://res.cloudinary.com/dpfqbb9pl/image/upload/v1741219840/card_scheme_w3jllt.svg",
        route: "/"
    },
    {
        title: "Card Profile",
        icon: "https://res.cloudinary.com/dpfqbb9pl/image/upload/v1741219842/card_profile_dpg9hg.svg",
        route: "/"
    },
    {
        title: "Card Request",
        icon: "https://res.cloudinary.com/dpfqbb9pl/image/upload/v1741219838/card_request_udvgen.svg",
        route: "/"
    },
    {
        title: "Stock",
        icon: "https://res.cloudinary.com/dpfqbb9pl/image/upload/v1741219838/stock_jufokw.svg",
        route: "/"
    },
    {
        title: "Cards",
        icon: "https://res.cloudinary.com/dpfqbb9pl/image/upload/v1741219838/cards_t37n0l.svg",
        route: "/"
    },
    {
        title: "Authorization List",
        icon: "https://res.cloudinary.com/dpfqbb9pl/image/upload/v1741219844/auth_list_vqte3c.svg",
        route: "/"
    },
    {
        title: "Authorization Queue",
        icon: "https://res.cloudinary.com/dpfqbb9pl/image/upload/v1741219845/auth_queue_hjguxh.svg",
        route: "/"
    },
    {
        title: "Trail",
        icon: "https://res.cloudinary.com/dpfqbb9pl/image/upload/v1741219840/trail_vcurh3.svg",
        route: "/"
    },
    {
        title: "Account",
        icon: "https://res.cloudinary.com/dpfqbb9pl/image/upload/v1741219843/account_agjfcg.svg",
        route: "/"
    },
]
