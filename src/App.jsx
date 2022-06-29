import Plano from "./Plano";
import "./App.css";
function App() {
  const planos = [
    {
      title: "Start",
      price: "Free",
      qnt_users: "1 User",
      qnt_projects: "1 Project" 
    },
    {
      title: "Basic ",
      price: "$ 19.99",
      qnt_users: "5 Users",
      qnt_projects: "20 Projects" 
    },
    {
      title: "Expert",
      price: "$ 129.99",
      qnt_users: "Unlimited Users",
      qnt_projects: "Unlimited Projects" 
    },
  ];

  return(
    <div className="pai">
        { planos.map( (plano) => {
          return <Plano 
                        titulo={plano.title}
                        preco={plano.price}
                        usuarios={plano.qnt_users}
                        projetos={plano.qnt_projects}
                  />
        } ) }

    </div>
  );
}

export default App;