import { useEffect, useState } from "react";
import SplashScreen from "@/components/SplashScreen";
// import Default from "@/components/Default";
import BottomNav from "@/components/BottomNav";

const Home = () => {
    const [hideSplah, setHideSplash] = useState(true);
    useEffect(() => {
        setInterval(() => {
            setHideSplash(false);
        }, 2000);
    }, []);

    return (
        <main>
            {hideSplah && <SplashScreen />}
            {/* {!hideSplah && <Default />} */}
            {!hideSplah && <BottomNav />}
        </main>
    )
}

export default Home;