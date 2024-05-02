import LogoEtipiLight from "@assets/logo-etipi-light.png";
import LogoGovPI from "@assets/logo-gov-pi.webp";
import logoEtipiDark from "@assets/logo-etipi-dark.png";
import LogoGovLight from "@assets/logo-pi-light.webp";

export default function Header() {
  return (
    <div className="fixed z-50 mb-10 top-0 right-0 w-full h-20 max-md:h-32 bg-white dark:bg-dark justify-between items-center flex flex-col shadow-md dark:shadow-xl  max-sm:gap-5 ">
      <div className=" sm:w-full sm:h-full items-center flex flex-wrap max-sm:flex-col gap-10 max-sm:gap-2 px-3 max-sm:p-2">
        <img
          src={LogoGovPI}
          alt="Logo do GOV PI"
          className="object-contain dark:hidden"
          loading="lazy"
          width={"100px"}
          height={"100px"}
        />
        <img
          src={LogoGovLight}
          alt="Logo do GOV PI"
          className="object-contain  dark:block hidden -mr-6"
          loading="lazy"
          width={"120px"}
          height={"120px"}
        />
        <h1 className="md:text-xl text-center lg:text-2xl text-dark max-sm:mt-4 dark:text-light max-sm:text-base">
          Secretaria de Administração do Piauí - SEAD
        </h1>
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
