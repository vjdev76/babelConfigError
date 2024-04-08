const newMessage = {
  message: "Hola Mundo",
  title: "Dardo",
};

// const Saludo = () => {
//   return (
//     <h1>Hola desde funcion!!!</h1>
//   )
// }
import PropTypes from 'prop-types'; // sirve para definir el tipo de props

export const FirstApp = ({ title, subTitle, name }) => {
  // console.log(props.title)

  return (
    <>
      <h1>{title}</h1>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

//propTypes NO PropTypes

// el proptypes title tiene que ser un string
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
}

// definimos nuestros default props

FirstApp.defaultProps = {
  name: 'Dardo Leguizamon',
  subTitle: 'No hay subtitulo',
  title: 'No hay titulo'
}