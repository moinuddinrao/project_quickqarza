import styles from "../style";
import { business1 } from "../assets";

const Integrations = () => (
    <section id="products">
        <div className={`${styles.flexCenter} flex-col relative mt-20`}>
            <h2 className={`text-center mt-10 ${styles.heading2}`}>
                Boost Your Business
            </h2>

            <div className={`flex md:flex-row flex-col gap-10 ${styles.paddingY} relative`}>
                <div className="absolute z-[0] w-[100%] h-[100%] -top-20 -left-20 bg-gradient " />
                <div className={`flex-1 ${styles.flexCenter} relative`}>
                    <div className="absolute z-[0] w-[150%] h-[150%] bg-gradient " />
                    <img src={business1} alt="Integration 1" />
                </div>

                <div className={`flex-1 ${styles.flexStart} flex-col relative`}>
                    <h3 className={`${styles.heading3}`}>
                        QuickQarza Business Loans
                    </h3>
                    <p className={`${styles.paragraph} sm:mt-10 mt-5`}>
                        Explore our business loan options designed to fuel your entrepreneurial journey. Whether you need startup capital, expansion funds, or support for operational expenses, QuickQarza Business Loans are tailored to meet your unique business needs.
                    </p>

                    <ul className="list-disc list-inside mt-5">
                        <li className={`${styles.paragraph}`}>
                            <span className="font-semibold">Loan Amount:</span> Up to PKR 2,000,000
                        </li>
                        <li className={`${styles.paragraph}`}>
                            <span className="font-semibold">Loan Tenure:</span> Up to 12 months
                        </li>
                        <li className={`${styles.paragraph}`}>
                            <span className="font-semibold">Markup Rate:</span> 1.5% per month
                        </li>
                        <li className={`${styles.paragraph}`}>
                            <span className="font-semibold">Processing Fee:</span> 2% of the loan amount
                        </li>
                    </ul>

                    <p className={`${styles.paragraph} mt-5`}>
                        You can get a business loan from QuickQarza if you have a business account with us. If you don&apos;t have an account, you can open one now. Grow your business with financial confidence.
                    </p>

                    <div className="rounded-full btn sm:py-3 sm:px-6 py-2 px-4 sm:mt-10 mt-5">
                        <a href="#more" className="text-black font-montserrat font-medium md:text-[20px] sm:text-[18px] text-[16px]">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Integrations;