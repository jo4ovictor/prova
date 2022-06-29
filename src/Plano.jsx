import "./Plano.css";
function Plano( {titulo,preco, usuarios, projetos} ) {
    return(
        <div className="plano-conteiner">
            <h3 className="plano-titulo">{titulo}</h3>
                <h4 className="plano-preco">{preco}</h4>
            <p className="plano-info">{usuarios}</p>
            <p className="plano-info">{projetos}</p>
            <button>New Order</button>
        </div>
    );
}
export default Plano;