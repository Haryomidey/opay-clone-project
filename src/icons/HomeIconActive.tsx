
const HomeIconActive = () => {
    return (
        <div className="h-6 sm:h-8 w-6 sm:w-8 rounded-full flex justify-center items-center bg-primary">
            <div className="border-3 border-white w-4 h-4 rounded-full relative">
                <div className="absolute h-[1px] w-3 top-1/2 translate-y-[-2px] -left-1/2 bg-primary" />
                <div className="absolute h-[1px] w-3 top-1/2 translate-y-[2px] -left-1/2 bg-primary" />
            </div>
        </div>
    )
}

export default HomeIconActive;