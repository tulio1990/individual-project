import { cards } from "@/lib/constants";
import Card from "@/components/ui/dashboard/card/Card";
import Transactions from "@/components/ui/dashboard/transactions/Transactions";
import Chart from "@/components/ui/dashboard/chart/Chart";
import Rightbar from "@/components/ui/dashboard/rightbar/RightBar";

export default function Dashboard() {
  return (
    <div className="flex gap-5">
      <div className="flex-[3] flex flex-col gap-5">
        <div className="flex gap-5 justify-between">
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="flex-1">
        <Rightbar />
      </div>
    </div>
  );
}
