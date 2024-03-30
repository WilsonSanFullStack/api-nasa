"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

function start_date() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Se agrega 1 al mes ya que los meses van de 0 a 11
  const day = String(today.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}
const offsetInMinutes: LocalTimeOffset = {
  minutes: -5
};
function Meteory({ datos }: DATOS) {
  // Variable para forzar la re-renderización
  const [triggerRender, setTriggerRender] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      // Actualizar la cuenta regresiva
      // Forzar la re-renderización del componente
      setTriggerRender((prevTriggerRender) => !prevTriggerRender);
    }, 60000); // Cada 60000 milisegundos (1 minuto)
    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []);

  const getNeoData: NEO = datos;
  const neos = Object.values(getNeoData?.near_earth_objects).flatMap(
    (dateNEOs) => Object.values(dateNEOs)
  );
  neos.sort((a: NEODetails, b: NEODetails) => {
    // Extract the dates for comparison
    const dateA = a.close_approach_data[0]?.close_approach_date_full;
    const dateB = b.close_approach_data[0]?.close_approach_date_full;

    // Use Date object for proper comparison
    return new Date(dateA).getTime() - new Date(dateB).getTime();
  });

  return (
    <div className="m-2 text-center">
      <h1 className="text-2xl font-bold text-center my-4 uppercase">
        element near the earth according to today date
      </h1>
      <h1>
        the objects counted for the day {start_date()} are:
        {neos && neos.length}
      </h1>
      <div className="grid movil:grid-cols-1 laptop:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5">
        {neos &&
          neos.map((item: NEODetails) => {
            const localDate = new Date(
              new Date(
                item?.close_approach_data[0]?.close_approach_date_full
              ).getTime() + (offsetInMinutes?.minutes * 60 * 60 * 1000)
            );
            const formattedDate = localDate.toLocaleDateString("en-EN", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour12: true,
            });
            const formattedTime = localDate.toLocaleTimeString("es-ES", {
              hour12: false,
            });
            const minutesDiff = Math.floor(
              (Date.now() - localDate.getTime()) / (1000 * 60)
            );

            const color =
              minutesDiff >= 16
                ? "#ef4444" //red
                : minutesDiff >= 0 || minutesDiff >= -15
                ? "#10b981" //green
                : minutesDiff <= -15
                ? "#f59e0b" //yellow
                : "#ef4444"; // red
            const hours = Math.floor(
              (minutesDiff < 0 ? minutesDiff * -1 : minutesDiff) / 60
            );
            const minutes =
              (minutesDiff < 0 ? minutesDiff * -1 : minutesDiff) % 60;
            const isPast = minutesDiff > 0;
            const prefix = isPast ? "step" : "missing";
            const timeses = `${prefix} ${hours < 0 ? hours * -1 : hours} hour${
              hours !== -1 ? "s" : ""
            } and ${minutes < 0 ? minutes * -1 : minutes} minute${
              minutes !== -1 ? "s" : ""
            }`;
            // console.log(minutesDiff, item.name, timeses);
            return (
              <div
                key={item?.id}
                className="border border-black dark:bg-gray-700 dark:border-gray-400 w-fit m-2 p-2 bg-gray-200 rounded-xl"
              >
                {/* <h1>id: {item.id}</h1> */}
                <div className="flex justify-center items-center border border-black dark:bg-gray-700 dark:border-gray-400 m-0.5 p-0.5 rounded-lg">
                  <h1 className="uppercase">name: </h1>
                  <h2 className="mx-2">{item?.name}</h2>
                </div>
                <div className="flex justify-center items-center border border-black dark:bg-gray-700 dark:border-gray-400 m-0.5 p-0.5 rounded-lg">
                  <h1 className="uppercase">close approach date full: </h1>
                  <h2 className="mx-2">
                    {item?.close_approach_data[0]?.close_approach_date_full}
                  </h2>
                </div>
                <div
                  className="flex justify-center items-center border border-black dark:bg-gray-700 dark:border-gray-400 m-0.5 p-0.5 rounded-lg"
                  style={{ backgroundColor: color }}
                >
                  <h1 className="uppercase">
                    close approach date full local:{" "}
                  </h1>
                  <h2 className="mx-2">{`${formattedDate} ${formattedTime}`}</h2>
                </div>

                <div
                  className="flex justify-center items-center border border-black dark:bg-gray-700 dark:border-gray-400 m-0.5 p-0.5 rounded-lg"
                  style={{ backgroundColor: color }}
                >
                  <h1 className="uppercase">{timeses}</h1>
                </div>

                <Link
                  href={
                    `${item?.nasa_jpl_url}&view=VOP`
                  }
                >
                  <h1 className="text-emerald-500 cursor-pointer hover:text-amber-300 uppercase border border-black dark:bg-gray-700 dark:border-gray-400 m-0.5 p-0.5 rounded-lg">
                    view orbit click here
                  </h1>
                </Link>
                <div className="flex justify-center items-center border border-black dark:border-gray-400 m-0.5 p-0.5 rounded-lg">
                  <h1 className="uppercase">absolute magnitude h: </h1>
                  <h2 className="mx-2">{item?.absolute_magnitude_h || 0}</h2>
                </div>

                <div className="border border-black dark:border-gray-400 m-0.5 p-0.5 rounded-lg">
                  <h1 className="uppercase">estimated diameter</h1>
                  <div className="text-center border border-black dark:border-gray-400 m-0.5 p-0.5 rounded-md">
                    <h1 className="uppercase">kilometers</h1>
                    <section className="grid grid-cols-2">
                      <section className="border border-black dark:border-gray-400 m-0.5 p-0.5 rounded-md">
                        <h1>estimated diameter min</h1>
                        <h2 className="mx-2">
                          {
                            item?.estimated_diameter?.kilometers
                              ?.estimated_diameter_min
                          }
                        </h2>
                      </section>
                      <section className="border border-black dark:border-gray-400 m-0.5 p-0.5 rounded-md">
                        <h1>estimated diameter max</h1>
                        <h2 className="mx-2">
                          {
                            item?.estimated_diameter?.kilometers
                              ?.estimated_diameter_max
                          }
                        </h2>
                      </section>
                    </section>
                  </div>
                </div>

                <div className="flex justify-center items-center border border-black dark:border-gray-400 m-0.5 p-0.5 rounded-xl">
                  <h1 className="uppercase">
                    is potentially hazardous asteroid:{" "}
                  </h1>
                  <h2 className="mx-2">
                    {item?.is_potentially_hazardous_asteroid ? "YES" : "NO"}
                  </h2>
                </div>

                <div className="text-center border border-black dark:border-gray-400 m-0.5 p-0.5 rounded-xl">
                  <h1 className="uppercase">close approach data</h1>
                  <div className="grid grid-cols-2">
                    <section className="border border-black dark:border-gray-400 m-0.5 p-0.5 rounded-md">
                      <h1>close approach date</h1>
                      <div>
                        {item?.close_approach_data?.map(
                          (x: CloseApproachData) => (
                            <h2 key={x?.close_approach_date}>
                              {x?.close_approach_date}
                            </h2>
                          )
                        )}
                      </div>
                    </section>
                    <section className="border border-black dark:border-gray-400 m-0.5 p-0.5 rounded-md">
                      <h1>close approach date full</h1>
                      <div>
                        {item?.close_approach_data?.map(
                          (x: CloseApproachData) => (
                            <h2 key={x?.close_approach_date_full}>
                              {x?.close_approach_date_full}
                            </h2>
                          )
                        )}
                      </div>
                    </section>
                  </div>
                </div>

                <div className="flex justify-center items-center border border-black dark:border-gray-400 m-0.5 p-0.5 rounded-xl">
                  <h1 className="uppercase">relative velocity:</h1>
                  {item?.close_approach_data?.map((x: CloseApproachData) => (
                    <h2
                      key={x?.relative_velocity?.kilometers_per_second}
                      className="m-1"
                    >
                      {x?.relative_velocity?.kilometers_per_hour} km/h
                    </h2>
                  ))}
                </div>
                <div className="flex justify-center items-center border border-black dark:border-gray-400 m-0.5 p-0.5 rounded-xl">
                  <h1 className="uppercase">orbiting body:</h1>
                  {item?.close_approach_data?.map((x: CloseApproachData) => (
                    <h2 key={x?.orbiting_body} className="m-1">
                      {x?.orbiting_body}
                    </h2>
                  ))}
                </div>

                <div className="flex justify-center items-center border border-black dark:border-gray-400 m-0.5 p-0.5 rounded-xl">
                  <h1 className="uppercase">is sentry object: </h1>
                  <h2 className="mx-2">
                    {item?.is_sentry_object ? "YES" : "NO"}
                  </h2>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default Meteory;
