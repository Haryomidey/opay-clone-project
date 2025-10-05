import { useState } from "react";
import { IoWalletOutline, IoShieldCheckmarkSharp } from "react-icons/io5";
import { BsBank } from "react-icons/bs";
import { RiArrowRightUpLine, RiGamepadLine, RiMedalFill } from "react-icons/ri";
import { MdPhoneAndroid, MdOutlineTv, MdChevronRight } from "react-icons/md";
import { GiLockedChest } from "react-icons/gi";
import { FaWifi } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { AiOutlineGift, AiOutlineEye, AiOutlineEyeInvisible, AiOutlineScan } from "react-icons/ai";
import { FiMoreHorizontal, FiBell } from "react-icons/fi";
import { SlEarphonesAlt } from "react-icons/sl";

const HomeScreen = () => {
    const [showBalance, setShowBalance] = useState(false);
    const balance = 66039430.78;

    const formatCurrency = (amount: number) =>
        amount.toLocaleString("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 2 });

    return (
        <div className="w-full min-h-screen bg-[#F7F8FA] pb-28 font-sans">
            <div className="flex items-center justify-between px-4 pt-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center relative">
                        <RiMedalFill className="absolute bottom-0 -right-1 text-[#e9ca1c]" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-800">Hi, Haryomidey</p>
                     </div>
                </div>

                <div className="flex items-center text-gray-700 gap-2">
                    <button aria-label="notifications" className="p-2 rounded-full hover:bg-gray-100 relative">
                        <SlEarphonesAlt className="w-5 h-5" />
                        <span className="absolute right-[-10px] top-0 text-[9px] px-2 py-[1px] rounded-2xl font-bold bg-[#fddbe0] text-[#f84764]">HELP</span>
                    </button>
                    <button aria-label="notifications" className="p-2 rounded-full hover:bg-gray-100">
                        <AiOutlineScan className="w-5 h-5" />
                    </button>
                    <button aria-label="notifications" className="p-2 rounded-full hover:bg-gray-100">
                        <FiBell className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="mx-4 mt-4 bg-[#00B050] rounded-2xl p-4 text-white shadow-sm">
                <div className="flex justify-between items-start">
                    <div>
                        <div className="flex items-center gap-1">
                            <IoShieldCheckmarkSharp />
                            <p className="text-sm font-medium">Available Balance</p>
                            <button
                                onClick={() => setShowBalance((s) => !s)}
                                className="rounded-full flex items-center justify-center"
                                aria-label={showBalance ? "Hide balance" : "Show balance"}
                            >
                                {showBalance ? (
                                    <AiOutlineEye className="w-4 h-4 text-white" />
                                ) : (
                                    <AiOutlineEyeInvisible className="w-4 h-4 text-white" />
                                )}
                            </button>
                        </div>

                        <div className="mt-2 text-xl font-semibold tracking-wide flex items-center">
                            <p>{showBalance ? formatCurrency(balance) : "****"}</p>
                            <MdChevronRight className={`${showBalance ? '' : '-mt-1'}`} />
                        </div>

                    </div>

                    <div className="flex flex-col items-end gap-2">
                        <button className="text-white text-xs opacity-90 flex items-center">Transaction History <MdChevronRight className="text-xl" /></button>
                        <button className="bg-white text-[#00B050] font-semibold px-3 py-2 rounded-full text-sm">
                            + Add Money
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex justify-between mt-5 px-4">
                {[
                    { label: "To Opay", icon: <IoWalletOutline className="w-6 h-6" /> },
                    { label: "To Bank", icon: <BsBank className="w-6 h-6" /> },
                    { label: "Withdraw", icon: <RiArrowRightUpLine className="w-6 h-6" /> },
                ].map((item) => (
                    <div key={item.label} className="flex-1 px-1 first:px-0 last:px-0">
                        <div className="flex flex-col items-center">
                            <div className="bg-white rounded-2xl p-3 shadow-sm w-16 h-16 flex items-center justify-center">
                                <div className="text-[#00B050]">
                                    {item.icon}
                                </div>
                            </div>
                            <p className="text-[12px] mt-2 text-center text-gray-700 font-medium">{item.label}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-4 gap-3 px-4 mt-6">
                {[
                    { label: "Airtime", icon: <MdPhoneAndroid className="w-5 h-5" /> },
                    { label: "Data", icon: <FaWifi className="w-5 h-5" />, badge: "Up to 5%" },
                    { label: "Betting", icon: <RiGamepadLine className="w-5 h-5" />, badge: "Up to 10%" },
                    { label: "TV", icon: <MdOutlineTv className="w-5 h-5" /> },
                    { label: "Safebox", icon: <GiLockedChest className="w-5 h-5" /> },
                    { label: "Loan", icon: <FaUniversity className="w-5 h-5" /> },
                    { label: "Refer & Earn", icon: <AiOutlineGift className="w-5 h-5" /> },
                    { label: "More", icon: <FiMoreHorizontal className="w-5 h-5" /> },
                ].map((item) => (
                    <div key={item.label} className="flex flex-col items-center relative">
                        <div className="bg-white rounded-2xl p-3 w-14 h-14 flex items-center justify-center shadow-sm">
                            <div className="text-[#00B050]">
                                {item.icon}
                            </div>

                            {item.badge && (
                                <span className="absolute -top-1 -right-1 bg-[#FF6B6B] text-white text-[10px] font-semibold px-1.5 py-[2px] rounded-full">
                                    {item.badge}
                                </span>
                            )}
                        </div>
                        <p className="text-[11px] mt-2 text-center text-gray-700">{item.label}</p>
                    </div>
                ))}
            </div>

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

export default HomeScreen;