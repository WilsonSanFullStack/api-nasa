import Meteory from "../components/Meteory";
import { revalidatePath } from 'next/cache'

//function for start date
function start_date() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Se agrega 1 al mes ya que los meses van de 0 a 11
  const day = String(today.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}
// function end_date() {
//   const today = new Date();
//   today.setDate(today.getDate() + 7);

//   const year = today.getFullYear();
//   const month = String(today.getMonth() + 1).padStart(2, "0");
//   const day = String(today.getDate()).padStart(2, "0");

//   const formattedDate = `${year}-${month}-${day}`;
//   return formattedDate;
// }
async function getNeo() {
  try {
    const res = await fetch(
      `${
        process.env.url
      }start_date=${start_date()}&end_date=${start_date()}&api_key=${
        process.env.api_key
      }`,
      {
        next: {
          tags: [
            `${
              process.env.url
            }start_date=${start_date()}&end_date=${start_date()}&api_key=${
              process.env.api_key
            }`,
          ],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
export default async function page() {
  const data = await getNeo();
  const date1 = new Date(data.near_earth_objects[start_date()][0].close_approach_data[0].close_approach_date)
  // Obtener la fecha actual en UTC
  const currentDateUTC = new Date('2024-03-30');
  // Convertir la fecha actual a UTC y obtener solo la fecha (sin horas ni minutos)
  const currentDayUTC = new Date(currentDateUTC).toISOString().slice(0, 10);
  // Obtener el día de date1 en formato UTC
  const dayDate1 = date1.toISOString().slice(0, 10);
  // Comparar si los días son iguales
  const sameDay = currentDayUTC === dayDate1;
  // if para revalidar la ruta objects
  if (!sameDay) {
    console.log('me ejecuto')
  revalidatePath('/objects')
  }


  return (
    <main className="mt-12">
      <Meteory datos={data} />
    </main>
  );
}
