
const HomeIconActive = () => {
    return (
        <div className="h-6 sm:h-8 w-6 sm:w-8 rounded-full flex justify-center items-center border-2 border-[#d9d9d9]">
            <div className="border-3 border-[#d9d9d9] w-4 h-4 rounded-full relative">
                <div className="absolute h-[1px] w-3 top-1/2 translate-y-[-2px] -left-1/2 bg-white" />
                <div className="absolute h-[1px] w-3 top-1/2 translate-y-[2px] -left-1/2 bg-white" />
            </div>
        </div>
    )
}

export default HomeIconActive;