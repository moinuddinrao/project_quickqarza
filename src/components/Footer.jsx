import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <hr className="line w-full sm:mb-28 mb-10" />
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full ${styles.paddingX}`}>
            <div className="flex-[1] flex flex-col justify-start mr-10 relative gap-5">
                <div className="absolute z-[0] w-[100%] h-[200%] bg-gradient" />
                <img src={logo} alt="quickqarza" className="w-[300px] object-contain" />
                <div className="flex flex-row md:mt-0 mt-6">
                    {socialMedia.map((social, index) => (
                        <img
                            key={social.id}
                            src={social.icon}
                            alt={social.id}
                            className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                                }`}
                            onClick={() => window.open(social.link)}
                        />
                    ))}
                </div>
                <p className="font-montserrat font-normal text-dimWhite">
                    © 2023 QuickQarza, Inc. All Rights Reserved.
                </p>
            </div>

            <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 relative">
                <div className="absolute z-[0] w-[100%] h-[250%] bg-gradient" />
                {footerLinks.map((footerlink) => (
                    <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
                        <h4 className="font-montserrat font-medium text-[18px] leading-[27px] text-white">
                            {footerlink.title}
                        </h4>
                        <ul className="list-none mt-3">
                            {footerlink.links.map((link, index) => (
                                <li
                                    key={link.name}
                                    className={`font-montserrat font-normal text-[16px] leading-[24px] text-dimWhite cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                                        }`}
                                >
                                    {link.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Footer;