import { Header } from "./Header/Header";
import { FormProduct } from "./FormProduct/FormProduct";
import { useState } from "react";
import { ListProducts } from "./ListProducts/ListProducts";

interface ItemProduct {
  nombre: string;
  imagen: string;
  precio: number;
}

export const AppProduct = () => {
  const [products, setProducts] = useState<ItemProduct[]>([]);
  console.log(products);
  const handleAddProduct = (newItem: ItemProduct) => {
    setProducts((prev) => [...prev, newItem]);
  };

  return (
    <div>
      <Header />
      <h2 className="text-center">Agregar nuevo producto</h2>
      <FormProduct handleAddProduct={handleAddProduct} />
      <h2 className="text-center">Productos</h2>
      {products.length > 0 ? (
        <ListProducts arrItems={products} />
      ) : (
        <h3 className="text-center">Aún no se han cargado productos</h3>
      )}
    </div>
  );
};
