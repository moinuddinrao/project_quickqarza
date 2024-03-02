import styles from "../style";
import { whyUs } from "../assets";
import { business } from "../constants";

const Business = () => (
    <section id="whyUs">
        <div className={`${styles.flexCenter} flex-col relative`}>
            <div className="absolute z-[0] w-[150%] h-[150%] bg-gradient" />
            <h2 className={`text-center my-10 ${styles.heading1}`}>
                Why Choose QuickQarza
            </h2>

            <div className={`flex md:flex-row flex-col gap-10 ${styles.paddingY} relative`}>
                <div className="absolute z-[0] w-[100%] h-[100%] -top-20 -left-20 bg-gradient " />
                <div className={`flex-1 ${styles.flexStart} flex-col relative`}>
                    {business.map((stat) => (
                        <div key={stat.id} className={`w-full flex-1 flex flex-col justify-start items-start sm:my-5 my-3 relative`} >
                            <h3 className={`${styles.heading3}`}>
                                {stat.title}
                            </h3>
                            <p className={`${styles.paragraph} sm:mt-5 mt-3`} >
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className={`flex-1 ${styles.flexCenter} relative`}>
                    <div className="absolute z-[0] w-[150%] h-[150%] bg-gradient " />
                    <img src={whyUs} alt="Why Us" />
                </div>
            </div>

            <p className={`${styles.heading3} text-center max-w-[1200px] mt-10`}>
                Apply Today and Experience <span className="font-semibold text-red">Financial Freedom</span> with QuickQarza.
            </p>
            <div className="rounded-full btn sm:py-3 sm:px-6 py-2 px-4 sm:mt-10 mt-5">
                <a href="#more" className="text-black font-montserrat font-medium md:text-[20px] sm:text-[18px] text-[16px]">Learn More</a>
            </div>
        </div>
    </section>
);

export default Business;