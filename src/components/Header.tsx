import LogoEtipiLight from "@assets/logo-etipi-light.png";
import LogoGovPI from "@assets/logo-gov-pi.webp";
import logoEtipiDark from "@assets/logo-etipi-dark.png";
import LogoGovLight from "@assets/logo-pi-light.webp";

export default function Header() {
  return (
    <div className="fixed z-50 mb-10 top-0 right-0 w-full h-20 max-md:h-28 bg-white dark:bg-dark justify-between items-center flex flex-col shadow-md dark:shadow-xl  max-sm:gap-5 ">
      <div className="justify-between sm:w-full sm:h-full items-center flex flex-wrap max-sm:flex-col  px-3">
        <div className="flex gap-5 justify-between items-center">
          <img
            src={logoEtipiDark}
            alt="Logo do GOV PI"
            className=" object-contain dark:hidden"
            loading="lazy"
            width={"100px"}
            height={"100px"}
          />
          <img
            src={LogoEtipiLight}
            alt="Logo do GOV PI"
            className=" object-contain dark:block hidden"
            loading="lazy"
            width={"100px"}
            height={"100px"}
          />
          <img
            src={LogoGovPI}
            alt="Logo do GOV PI"
            className=" object-contain dark:hidden max-sm:block sm:hidden"
            loading="lazy"
            width={"100px"}
            height={"100px"}
          />
          <img
            src={LogoGovLight}
            alt="Logo do GOV PI"
            className=" object-contain hidden max-sm:dark:block -mr-6"
            loading="lazy"
            width={"120px"}
            height={"120px"}
          />
        </div>
        <h1 className="md:text-xl lg:text-2xl text-dark max-sm:mt-4 dark:text-light max-sm:text-base">
          Secretaria de Administração do Piauí - SEAD
        </h1>
        <img
          src={LogoGovPI}
          alt="Logo do GOV PI"
          className="max-sm:hidden object-contain dark:hidden"
          loading="lazy"
          width={"100px"}
          height={"100px"}
        />
        <img
          src={LogoGovLight}
          alt="Logo do GOV PI"
          className=" object-contain dark:sm:block hidden -mr-6"
          loading="lazy"
          width={"120px"}
          height={"120px"}
        />
      </div>
      <div className="flex w-full absolute bottom-0">
        <span className="bg-blue-900 w-full h-2"></span>
        <span className="bg-yellow-500 w-full h-2"></span>
        <span className="bg-red-500 w-full h-2"></span>
        <span className="bg-green-800 w-full h-2"></span>
      </div>
    </div>
  );
}
