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
                        <img src="src/assets/icons/lapo_logo.svg" alt="lapo logo"/>
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
                            isCurrentRoute={location.pathname === item.route}
                        />
                    ))}
                </nav>


            </div>

            <div>
                <div className="py-2 px-[11px] mt-4 grid gap-2">
                    <button
                        className={`text-neutral-150 p-3 text-neutral-800 font-medium rounded-[8px] text-[12px] flex items-center gap-2 h-fit`}>
                        <span><img src={"src/assets/icons/logout-02.svg"} alt={"logout"}/> </span> Logout
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
        icon: "src/assets/icons/branches.svg",
        route: "/branches"
    },
    {
        title: "Roles",
        icon: "src/assets/icons/roles.svg",
        route: "/roles"
    },
    {
        title: "Users",
        icon: "src/assets/icons/users.svg",
        route: "/users"
    },
    {
        title: "Card Scheme",
        icon: "src/assets/icons/card_scheme.svg",
        route: "/card-scheme"
    },
    {
        title: "Card Profile",
        icon: "src/assets/icons/card_profile.svg",
        route: "/card-profile"
    },
    {
        title: "Card Request",
        icon: "src/assets/icons/card_request.svg",
        route: "/card-request"
    },
    {
        title: "Stock",
        icon: "src/assets/icons/stock.svg",
        route: "/stock"
    },
    {
        title: "Cards",
        icon: "src/assets/icons/cards.svg",
        route: "/cards"
    },
    {
        title: "Authorization List",
        icon: "src/assets/icons/auth_list.svg",
        route: "/authorization-list"
    },
    {
        title: "Authorization Queue",
        icon: "src/assets/icons/auth_queue.svg",
        route: "/authorization-queue"
    },
    {
        title: "Trail",
        icon: "src/assets/icons/trail.svg",
        route: "/trail"
    },
    {
        title: "Account",
        icon: "src/assets/icons/account.svg",
        route: "/account"
    },
]
