import CBNLogo from '@/assets/cbn-logo.png';

const SplashScreen = () => {
    return (
        <main className='bg-primary h-screen w-full flex flex-col justify-center items-center gap-6 text-center px-5'>
            <div className="bg-white h-16 sm:h-20 w-16 sm:w-20 rounded-full flex justify-center items-center">
                <div className="border-[13px] border-primary h-12 sm:h-16 w-12 sm:w-16 rounded-full flex justify-center items-center relative">

                    <div className="bg-white h-[2px] w-[15px] absolute left-[-13px] top-1/2 translate-y-[-7px]" />
                    <div className="bg-[#060685] h-[10px] w-[13px] absolute left-[-13px]" />
                    <div className="bg-white h-[2px] w-[15px] absolute left-[-13px] top-1/2 translate-y-[4px]" />

                </div>
            </div>
            <h2 className="text-[#060685] text-2xl sm:text-3xl font-semibold">We are Beyond Banking</h2>
            <div className="text-[#060685] flex items-center justify-center gap-3 text-xs sm:text-sm">
                <img src={CBNLogo} alt="" className='w-6' />
                <p>Licensed by the <b>CBN</b> and insured by the | <b className="underline">NDIC</b></p>
            </div>
        </main>
    )
}

export default SplashScreen;