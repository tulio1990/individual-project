import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className="">
      <div className="bg-silverSand-900 py-5 px-6 rounded-lg mb-5 relative">
        <div className="flex flex-col gap-6">
          <span className="font-bold">🔥 Available Now</span>
          <h3>
            How to use the new version of the admin dashboard?
          </h3>
          <span className="text-silverSand-50 font-medium text-sm">Takes 4 minutes to learn</span>
          <p className="text-silverSand-50 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="p-2 flex items-center gap-[10px] max-w-max bg-Kilamanjaro-950 text-silverSand-50 border-none rounded-md cursor-pointer">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className="bg-silverSand-900 py-5 px-6 rounded-lg mb-5 relative">
        <div className="flex flex-col gap-6">
          <span className="font-bold">🚀 Coming Soon</span>
          <h3>
            New server actions are available, partial pre-rendering is coming
            up!
          </h3>
          <span className="text-silverSand-50 font-medium text-sm">Boost your productivity</span>
          <p className="text-silverSand-50 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="p-2 flex items-center gap-[10px] max-w-max bg-Kilamanjaro-950 text-silverSand-50 border-none rounded-md cursor-pointer">
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;