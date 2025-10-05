import { useState } from "react";
import { BarChart3 } from "lucide-react";
import { FaRegCreditCard, FaUserCircle } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import HomeIconActive from "@/icons/HomeIconActive";
import HomeIconInActive from "@/icons/HomeIconInactive";

const BottomNav = () => {
    const [active, setActive] = useState("Home");

    const navItems = [
        { name: "Home", iconActive: <HomeIconActive />, iconInactive: <HomeIconInActive /> },
        { name: "Rewards", iconActive: <IoDiamondOutline className="text-[#00B050] text-2xl" />, iconInactive: <IoDiamondOutline className="text-gray-400 text-2xl" /> },
        { name: "Finance", iconActive: <BarChart3 className="text-[#00B050] w-6 h-6" />, iconInactive: <BarChart3 className="text-gray-400 w-6 h-6" /> },
        { name: "Cards", iconActive: <FaRegCreditCard className="text-[#00B050] text-2xl" />, iconInactive: <FaRegCreditCard className="text-gray-400 text-2xl" /> },
        { name: "Me", iconActive: <FaUserCircle className="text-[#00B050] text-2xl" />, iconInactive: <FaUserCircle className="text-gray-400 text-2xl" /> },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-2">
            {navItems.map((item) => (
                <button
                    key={item.name}
                    onClick={() => setActive(item.name)}
                    className="flex flex-col items-center justify-center space-y-1 focus:outline-none cursor-pointer"
                >
                    {active === item.name ? item.iconActive : item.iconInactive}
                    <span
                        className={`text-xs ${
                            active === item.name ? "text-[#00B050] font-medium" : "text-gray-400"
                        }`}
                    >
                        {item.name}
                    </span>
                </button>
            ))}
        </div>
    );
};

export default BottomNav;