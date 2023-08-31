import { topPicks } from "../data/data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const TopPicks = () => {
  return (
    <>
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
        Our favorite picks:
      </h1>
      <div className="hidden lg:flex max-w[1520px] m-auto py-2 px-2 ">
        <Splide
          options={{ perPage: 4, gap: "0.5rem", drag: "free", arrows: false }}
        >
          {topPicks.map((items) => {
            return (
              // KeyProp should be declared at the top-level
              <SplideSlide key={items.id}>
                <div className="rounded-3xl relative">
                  <div className="absolute w-full h-full bg-black/50 rounded-3xl text-white text-center">
                    <p className="px-2 font-bold text-2xl pt-4">
                      {items.title}
                    </p>
                    <p className="px-2">{items.price}</p>
                    <button className="border-dotted border-white text-white mx-2 absolute bottom-4 font-bold">
                      Add to Card
                    </button>
                  </div>
                  <img
                    className="h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300"
                    src={items.img}
                    alt={items.title}
                  />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </>
  );
};
export default TopPicks;
