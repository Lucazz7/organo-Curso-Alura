import './CampoTexto.css';

const CampoTexto = (props) => {

    const placeHolderModificar = `${props.placeholder}...`


    const aoDigitar = (evento) => {
      props.aoAlterado(evento.target.value);
    }
    
  return (
    <div className="campo-texto">
        <label>
          {props.label}
        </label>
      <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={placeHolderModificar}/>
    </div>
  );
}

export default CampoTexto;