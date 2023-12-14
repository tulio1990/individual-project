import { MdSupervisedUserCircle } from "react-icons/md";

const Card = ({ item } : {item: any}) => {
  return (
    <div className="bg-kumera-600 p-5 rounded-xl flex gap-5 cursor-pointer w-full hover:bg-Kilamanjaro-900">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-3">
        <span className="">{item.title}</span>
        <span className="text-xl font-bold">{item.number}</span>
        <span className="text-sm font-semibold">
          <span className={item.change > 0 ? 'text-silverSand-400' : 'text-twine-200'}  >
            {item.change}%
          </span>{" "}
          {item.change > 0 ? "more" : "less"} than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;