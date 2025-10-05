import { FaArrowRight } from "react-icons/fa";
import { FiBell, FiRepeat } from "react-icons/fi";
import { IoWalletOutline } from "react-icons/io5";
import { BsBank, BsPersonCircle } from "react-icons/bs";
import { MdOutlineMobileFriendly, MdOutlineCable } from "react-icons/md";
import { RiGamepadLine } from "react-icons/ri";
import { GiLockedChest } from "react-icons/gi";
import { AiOutlinePercentage } from "react-icons/ai";

const Default = () => {
    return (
        <div className="w-full min-h-screen bg-[#F7F8FA] pb-24 font-sans">
            {/* Header */}
            <div className="flex items-center justify-between px-4 pt-4">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gray-300 rounded-full" />
                    <p className="text-sm font-semibold">Hi, Haryomidey</p>
                </div>
                <div className="flex items-center gap-4 text-gray-600">
                    <FiRepeat className="text-xl" />
                    <FiBell className="text-xl" />
                </div>
            </div>

            {/* Balance Card */}
            <div className="mx-4 mt-4 bg-[#00B050] rounded-2xl p-4 text-white">
                <div className="flex justify-between items-center">
                    <p className="text-sm font-medium">
                        Available Balance <span className="ml-1">👁️‍🗨️</span>
                    </p>
                    <p className="text-sm underline">Transaction History</p>
                </div>

                <div className="mt-1 text-lg font-semibold tracking-wide">
                    ₦****.**
                </div>

                <div className="flex justify-between items-center mt-4">
                    <p className="text-yellow-100">★★★★★</p>
                    <button className="bg-white text-[#00B050] font-semibold px-4 py-1 rounded-full text-sm">
                        + Add Money
                    </button>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="flex justify-around mt-5 px-4">
                {[
                    { label: "To Opay", icon: <IoWalletOutline /> },
                    { label: "To Bank", icon: <BsBank /> },
                    { label: "Withdraw", icon: <FaArrowRight /> },
                ].map((item) => (
                    <div key={item.label} className="flex flex-col items-center text-center space-y-1">
                        <div className="bg-[#E6F9EE] text-[#00B050] rounded-2xl p-4 text-2xl">
                            {item.icon}
                        </div>
                        <p className="text-xs font-medium">{item.label}</p>
                    </div>
                ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-4 gap-4 px-4 mt-6">
                {[
                    { label: "Airtime", icon: <MdOutlineMobileFriendly /> },
                    { label: "Data", icon: <MdOutlineMobileFriendly />, tag: "Up to 5%" },
                    { label: "Betting", icon: <RiGamepadLine />, tag: "Up to 10%" },
                    { label: "TV", icon: <MdOutlineCable /> },
                    { label: "Safebox", icon: <GiLockedChest /> },
                    { label: "Loan", icon: <BsBank /> },
                    { label: "Refer & Earn", icon: <AiOutlinePercentage /> },
                    { label: "More", icon: <BsPersonCircle /> },
                ].map((item) => (
                    <div key={item.label} className="flex flex-col items-center relative">
                        <div className="bg-[#E6F9EE] text-[#00B050] rounded-2xl p-4 text-2xl relative">
                            {item.icon}
                            {item.tag && (
                                <span className="absolute -top-2 -right-2 bg-[#F87171] text-white text-[10px] font-semibold px-1.5 py-[1px] rounded-full">
                                    {item.tag}
                                </span>
                            )}
                        </div>
                        <p className="text-xs mt-1 font-medium">{item.label}</p>
                    </div>
                ))}
            </div>

            {/* Bottom Banner */}
            <div className="flex items-center justify-between bg-white shadow-sm rounded-2xl mx-4 mt-6 px-4 py-3">
                <div>
                    <p className="text-[#00B050] text-sm font-semibold">Up to ₦10,000</p>
                    <p className="text-gray-500 text-xs">Limited-time offer to get cashback!</p>
                </div>
                <button className="bg-[#00B050] text-white font-semibold px-4 py-1.5 rounded-full text-sm">
                    GO
                </button>
            </div>
        </div>
    );
};

export default Default;