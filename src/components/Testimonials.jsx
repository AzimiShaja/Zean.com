import testimonials from "./Testi";
import { BsQuote } from "react-icons/bs";
export default function Testimonials() {
  return (
    <div className="py-10 flex items-center justify-center bg-gray-50">
      <div className="lg:w-9/12 flex items-center  flex-col gap-10 py-10 rounded-lg px-10">
        <div className="max-w-fit border-b-4 py-2 border-red rounded-sm">
          <h1 className="text-4xl max-lg:text-3xl uppercase font-open font-bold text-center">
            What Clients say about us?
          </h1>
        </div>
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-10  mt-20">
          {testimonials.map((testimonial) => {
            return (
              <div className="flex flex-col gap-5  shadow-red shadow-md p-5  bg-white justify-between rounded-b-xl rounded-tr-xl">
                <BsQuote className="text-5xl text-red relative bottom-10" />
                <p className="font-light font-roboto text-justify">
                  {testimonial.review}
                </p>
                <div className="flex items-center gap-5">
                  <img
                    className="rounded-full h-20 w-20 object-cover"
                    src={testimonial.img}
                    alt=""
                  />
                  <div>
                    <p className="text-lg font-bold font-open">
                      {testimonial.name}
                    </p>
                    <p className="font-light font-roboto text-sm">
                      {testimonial.field}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
