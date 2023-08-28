import img from "/src/assets/hero.png";
export default function Hero() {
  return (
    <>
      <div className=" flex h-screen justify-evenly max-lg:flex-col items-center py-20  bg-hero bg-center bg-cover ">
        {/**================== */}
        <div className=" text-white flex max-md:items-center flex-col items-start gap-5 max-w-lg px-8">
          <h1 className="uppercase max-lg:text-4xl lg:text-5xl font-kanit max-md:text-center">
            We Create Modern & Minimal Websites
          </h1>
          <p className="text-sm lg:text-md font-light opacity-60 max-md:text-center ">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <button className="bg-red py-2 border border-red rounded-lg px-4 text-center font-poppins hover:bg-transparent duration-300  max-md:w-full">
            Start Project
          </button>
        </div>
        {/**================== */}
        <div className="flex items-center gap-5 flex-col ">
          <div className="flex border-r-4 rounded-sm px-2 border-red gap-2 text-white items-center justify-center">
            <h1>440</h1>
          </div>
          <h1 className="text-gray-400 text-md">
            More than a hundred success projects
          </h1>
        </div>
      </div>
    </>
  );
}
