import styles from "../style";
import { logoIcon } from "../assets";

const CTA = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} flex-col text-center lg:px-80 sm:px-0`}>
        <div className="absolute z-[0] w-[100%] h-[100%] bg-gradient" />
        <div className="my-5 lg:top-20 w-[20%]">
            <img src={logoIcon} alt="Logo Icon" className="w-[100%]" />
        </div >
        <h2 className={styles.heading2}>Ready to Transform Your Financial Journey?</h2>

        <p className={`${styles.paragraph} sm:mt-5 mt-3`}>
            Take the next step towards achieving your financial goals with QuickQarza. Contact us today or book a demo to explore how QuickQarza can empower your finances.
        </p>
        <div className="rounded-full btn sm:py-3 sm:px-6 py-2 px-4 sm:mt-10 mt-5">
            <a href="#demo" className="text-black font-montserrat font-medium md:text-[20px] sm:text-[18px] text-[16px]">Book a demo</a>
        </div>
    </section>
);

export default CTA;