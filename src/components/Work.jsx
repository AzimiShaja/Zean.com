import works from "./Works";
import { useState, useEffect } from "react";
export default function Work() {
  const [transition, setTransition] = useState(false);
  function hanldeScroll() {
    let windowScrollTop = window.scrollY;
    if (windowScrollTop > 1200) {
      setTransition(true);
    } else {
      setTransition(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", hanldeScroll);
    return () => {
      window.removeEventListener("scroll", hanldeScroll);
    };
  });

  return (
    <>
      <div
        className={`${
          transition ? "translate" : "not-translate"
        } py-10 flex items-center justify-center`}
      >
        <div className="lg:w-9/12 flex items-center  flex-col gap-10 py-10 rounded-lg px-10">
          <div className="max-w-fit border-b-4 py-2 border-red rounded-sm">
            <h1 className="text-4xl uppercase font-open font-bold">
              our works
            </h1>
          </div>
          <div className="grid grid-cols-1  gap-20 mt-20">
            {works.map((work) => {
              return (
                <div
                  className={`flex ${work.flex} gap-10 max-md:flex-col items-center`}
                >
                  <div className="max-w-sm">
                    <img className="rounded-lg" src={work.work_img} />
                  </div>
                  <div className="flex flex-col gap-5 max-md:gap-10 items-start max-w-lg max-md:items-center">
                    <h1 className="text-3xl font-bold font-open">
                      {work.title}
                    </h1>
                    <p className="font-light font-roboto max-md:text-center">
                      {work.description}
                    </p>
                    <div className=" flex items-center gap-10">
                      <img
                        className="rounded-full w-32 object-contain h-32 border shadow-lg"
                        src={work.pfp}
                        alt=""
                      />
                      <div className="flex flex-col gap-2">
                        <p className="font-bold text-xl">{work.name}</p>
                        <p className="font-light font-roboto tracking-widest">
                          zean.com
                        </p>
                      </div>
                    </div>
                    <button className="py-2 border px-4 rounded-lg border-red font-open hover:bg-red duration-300 hover:text-white max-md:w-full">
                      View portfolio
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
