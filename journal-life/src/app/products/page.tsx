"use client";
import { useState, useEffect } from "react";
import Product from "@/components/ui/products/product";
import { fetchJournals } from "@/lib/data";

interface ProductoData {
  id: string;
  Content: string;
}

const ProductosPage: React.FC = () => {
  const [productos, setProductos] = useState<ProductoData[]>([]);
  const [filtroNombre, setFiltroNombre] = useState<string>("");

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const JournalData: ProductoData[] = await fetchJournals();
        setProductos(JournalData);
      } catch (error: any) {
        console.error("Error to fetch the products", error.message);
      }
    };

    obtenerProductos();
  }, []);

  const handleFiltroChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiltroNombre(event.target.value);
  };

  const productosFiltrados = productos.filter((producto) =>
    producto.id.toLowerCase().includes(filtroNombre.toLowerCase())
  );

  return (
    <div className="bg-silverSand-50 mt-[75px] pb-[75px]">
      <div className="min-h-screen max-w-7xl m-auto p-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-Kilamanjaro-950">Journal</h1>
        </header>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {productosFiltrados.map((producto) => (
            <Product key={producto.id} {...producto} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductosPage;
