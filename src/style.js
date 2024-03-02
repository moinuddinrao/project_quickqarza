const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading1:
    "font-montserrat font-normal md:text-[56px] md:leading-[72px] sm:text-[40px] sm:leading-[48px] text-[36px] leading-[40px] text-white w-full",
  heading2:
    "font-montserrat font-normal md:text-[48px] md:leading-[50px] sm:text-[44px] sm:leading-[48px] text-[32px] leading-[36px] text-white w-full",
  heading3:
    "font-montserrat font-normal md:text-[28px] md:leading-[32px] sm:text-[24px] sm:leading-[28px] text-[20px] leading-[24px] text-white w-full",
  paragraph:
    "font-montserrat md:text-[20px] md:leading-[30px] sm:text-[18px] sm:leading-[24px] text-[16px] leading-[20px] text-dimWhite",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  flexEnd: "flex justify-center items-end",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
