import Meteory from "../components/Meteory";
import { revalidatePath } from "next/cache";

//function for start date para encontrar el dia actual
function start_date() {
  // buscamos la fecha actual
  const today = new Date();
  // buscamos el año actual
  const year = today.getFullYear();
  // buscamos el mes actual
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Se agrega 1 al mes ya que los meses van de 0 a 11
  // buscamos el dia actual
  const day = String(today.getDate()).padStart(2, "0");
// formatiamos la fehca en string
  const formattedDate = `${year}-${month}-${day}`;
  // return de la fecha formatiada
  return formattedDate;
}
// funcion para encontrar el dia final siete dias despues del dia inicial en start_date
// function end_date() {
  // buscamos la fecha actual mas 7 dias despues de start_date()
//   const today = new Date();
//   today.setDate(today.getDate() + 7);
// formatiamos el año
//   const year = today.getFullYear();
// formatiamos el mes
//   const month = String(today.getMonth() + 1).padStart(2, "0");
// fromatiamos el dia
//   const day = String(today.getDate()).padStart(2, "0");
// formatiamos la fecha completa
//   const formattedDate = `${year}-${month}-${day}`;
// returnamos la fecha completa
//   return formattedDate;
// }
// declaracion de la funcion asincrona getNeo() que se encarga de traer la data de la api.nada.gov
async function getNeo() {
  try {
    const res = await fetch(
      `${
        process.env.urlObjects
      }start_date=${start_date()}&end_date=${start_date()}&api_key=${
        process.env.api_key
      }`,
      { cache: "no-store" }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
// declaracion del componente funcional 
export default async function page() {
  // ejecucuon de getNeo()
  const data = await getNeo();
  // // buscamos la fecha actual 
  // const date1 = new Date(
  //   data.near_earth_objects[
  //     start_date()
  //   ][0].close_approach_data[0].close_approach_date
  // );
  // // Obtener la fecha actual en UTC
  // const currentDateUTC = new Date();
  // // Convertir la fecha actual a UTC y obtener solo la fecha (sin horas ni minutos)
  // const currentDayUTC = new Date(currentDateUTC).toISOString().slice(0, 10);
  // // Obtener el día de date1 en formato UTC
  // const dayDate1 = date1.toISOString().slice(0, 10);
  // // Comparar si los días son iguales
  // const sameDay = currentDayUTC === dayDate1;
  // // if para revalidar la ruta objects
  // if (!sameDay) {
  //   console.log("me ejec");
  //   revalidatePath("/objects");
  // }

  return (
    <main className="mt-12">
      <Meteory datos={data} />
    </main>
  );
}
