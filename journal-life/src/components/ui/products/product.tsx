import Image from "next/image";
import Link from "next/link";

interface ProductoProps {
  id: string;
  Content: string;
}

const Product: React.FC<ProductoProps> = ({
  id,
  Content,
}) => {
  return (
    <div>
      <h3>{Content}</h3>
      {/* ************ */}
      <Link
        className="rounded px-5 py-2 bg-Kilamanjaro-950 text-silverSand-50 hover:bg-silverSand-950"
        href={`/products/${id}`}
      >
        View details
      </Link>
    </div>
  );
};

export default Product;
