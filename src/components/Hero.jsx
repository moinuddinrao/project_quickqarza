import styles from "../style";
import { hero } from "../assets";

const Hero = () => {
    return (
        <section
            id="home"
            className={`flex md:flex-row flex-col gap-10 ${styles.paddingY}`}
        >
            <div className={`flex-1 ${styles.flexStart} flex-col relative`}>
                <div className="absolute z-[0] w-[100%] h-[100%] -top-20 -left-20 bg-gradient " />
                <h1 className={`${styles.heading1} sm:mr-10 mr-0`}>
                    Your Trusted Partner in Financial Solutions
                </h1>

                <p className={`${styles.paragraph} mt-5`}>
                    At QuickQarza, we understand that life&apos;s financial journey can present unexpected challenges. That&apos;s why we are here to provide you with hassle-free and tailored loan solutions. QuickQarza is committed to making your financial goals a reality.
                </p>

                <div className="rounded-full btn sm:py-3 sm:px-6 py-2 px-4 mt-5">
                    <a href="#demo" className="text-white font-montserrat font-medium md:text-[20px] sm:text-[18px] text-[16px]">
                        Request Demo
                    </a>
                </div>
            </div>

            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 sm:my-5 my-10 relative`}>
                <div className="absolute z-[0] w-[100%] h-[100%] bg-gradient " />
                <img src={hero} alt="hero" />
            </div>
        </section>
    );
};

export default Hero;