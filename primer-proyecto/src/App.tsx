import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter";
import { MiPrimerComponent } from "./components/MiPrimerComponent/MiPrimerComponent";
import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect";
import { FormComponent } from "./components/FormComponent/FormComponent";
import { AppProduct } from "./components/AppProduct/AppProduct";

export const App = () => {
  return (
    <div>
      <AppProduct />
    </div>
    // <div style={{ display: "flex", flexDirection: "column", gap: "2" }}>
    //   <MiPrimerComponent text="Título" color="red" fontSize={4} />
    //   <ComponentCounter />
    //   <ComponentUseEffect />
    //   <FormComponent />
    // </div>
  );
};
