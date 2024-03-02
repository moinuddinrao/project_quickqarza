import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section id="aboutUs" className={`${styles.flexStart} sm:flex-row flex-col flex-wrap gap-10 sm:mb-20 mb-16`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`w-full flex-1 flex flex-col justify-start items-start sm:my-10 my-5 relative`} >
        <div className="absolute z-[0] w-[150%] h-[150%] -bottom-2 -right-2 bg-gradient" />
        <h3 className={`${styles.heading3}`}>
          {stat.title}
        </h3>
        <hr className="line sm:mt-5 mt-3" />
        <p className={`${styles.paragraph} sm:mt-5 mt-3`} >
          {stat.description}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;