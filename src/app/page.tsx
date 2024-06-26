// importacion de components utilizados en un componente de server
import Pie from "./components/tools/Pie";
// declaracion de la funcion de componente asyncrona y exportacion de la misma 
export default async function Home() {
  // retornamos la funcion para hacer el renderizado de las propiedades y componentes de la misma
  // aqui encontramos descripcion de todo lo que encontramos en la pagina 
  return (
    <main className="mt-12 h-max mb-24">
      <h1 className="text-center text-4xl uppercase font-bold">
        observation center wasr
      </h1>
      <p className="text-center mx-44 font-semibold text-lg movil:mx-8">
        Using NASA Api-Rest, this page was created with the idea of providing
        information in real time (what NASA informs us) for all those people who
        love astonomy or who have their telescopes and are thinking of entering
        this world. or simply those curious about nearby objects or photographs.
      </p>
      <div>
        <h2 className="text-center text-2xl uppercase font-bold mt-4">
          what you will find here
        </h2>
        <h3 className="text-center text-xl uppercase font-bold mt-4">
          list of objects that orbit the earth or are near the earth
        </h3>
        <p className="text-center mx-44 movil:mx-8">
          list of near-earth objects that NASA has under constant monitring.
        </p>
        <h4 className="text-center text-lg uppercase font-bold mt-4">
          may have information such as:
        </h4>
        <section className="flex justify-center items-center m-4">
          <ul className="list-inside">
            <li className="list-decimal">name</li>
            <li className="list-decimal">date full and time utc</li>
            <li className="list-decimal">date full and time local</li>
            <li className="list-decimal">
              how much time passes or how much time has passed
            </li>
            <li className="list-decimal">link for view orbit</li>
            <li className="list-decimal">abosulute magnitude h</li>
            <li className="list-decimal">estimated diameter in kilometers</li>
            <li className="list-decimal">is potentially hazardous asteroid</li>
            <li className="list-decimal">relative velocity</li>
            <li className="list-decimal">orbitting body</li>
            <li className="list-decimal">is sentry object</li>
          </ul>
        </section>
        <h3 className="text-center font-bold text-2xl uppercase">
          Astronomy Picture of the day
        </h3>
        <p className="text-center mx-44 movil:mx-8">
          Discover the cosmos Each day a different image or photograph of our
          fascinating universe id featured, along with a brief explenation
          written by a professional astronomer.
        </p>
      </div>
      <Pie />
    </main>
  );
}
