import ThemeToggle from "./components/tools/ThemeToggle";
import Meteory from "./components/Meteory";

function start_date() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Se agrega 1 al mes ya que los meses van de 0 a 11
  const day = String(today.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}
function end_date() {
  const today = new Date();
  today.setDate(today.getDate() + 7);

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}
async function getNeo() {
  try {
    const res = await fetch(
      `${
        process.env.url
      }start_date=${start_date()}&end_date=${start_date()}&api_key=${
        process.env.api_key
      }`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const getNeoData = await getNeo();
  return (
    <main>
      <ThemeToggle />
      <Meteory getNeoData={getNeoData} />
    </main>
  );
}
