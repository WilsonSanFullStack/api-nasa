"use client";

interface NEO {
  links: {
    self: string;
    next: string;
    prev: string;
  };
  element_count: number;
  near_earth_objects: {
    [date: string]: NEOsByDate;
  };
}

interface NEOsByDate {
  [id: string]: NEODetails;
}
interface CloseApproachData {
  close_approach_date: string;
  close_approach_date_full: string;
  epoch_date_close_approach: number;
  relative_velocity: {
    kilometers_per_second: number;
    kilometers_per_hour: number;
  };
  miss_distance: {
    kilometers: number;
    lunar_distances: number;
  };
  orbiting_body: string;
}
interface NEODetails {
  id: string;
  name: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  estimated_diameter: {
    kilometers: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
  };
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: [CloseApproachData];
  is_sentry_object: boolean;
}
interface PROPS {
  getNeoData: NEO;
}

function start_date() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Se agrega 1 al mes ya que los meses van de 0 a 11
  const day = String(today.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}
function Meteory(props: PROPS) {
  const getNeoData: NEO = props.getNeoData;
  const neos = Object.values(getNeoData.near_earth_objects).flatMap(
    (dateNEOs) => Object.values(dateNEOs)
  );
  console.log(neos);
 
  return (
    <div className="m-2 text-center">
      <h1 className="text-2xl font-bold text-center my-4 uppercase">Elementos cercanos a la tierra segun la fecha de hoy</h1>
      <h1>
        Los elementos contados para el dia {start_date()} son:{" "}
        {getNeoData && getNeoData.element_count}
      </h1>
      <div className="grid movil:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-9">
        {neos &&
          neos.map((item:NEODetails) => {
            return (
              <div key={item.id} className="border w-fit m-2 p-2">
                {/* <h1>id: {item.id}</h1> */}
                <h1>nombre: {item.name}</h1>
                <h1>magnitud: {item.absolute_magnitude_h}</h1>
                <h1>diametro estimado en km</h1>

                <h1>
                  min:{" "}
                  {item.estimated_diameter.kilometers.estimated_diameter_min}
                </h1>
                <h1>
                  max:{" "}
                  {item.estimated_diameter.kilometers.estimated_diameter_max}
                </h1>
                <h1>
                  representa peligro para la tierra:{" "}
                  {item.is_potentially_hazardous_asteroid ? "Si" : "No"}
                </h1>
                <div>
                  fecha de aproximacion cercana:{" "}
                  {item.close_approach_data.map((x: CloseApproachData) => (
                    <h1 key={x.close_approach_date}>{x.close_approach_date}</h1>
                  ))}
                </div>
                <div>
                  fecha y hora de aproximacion cercana:{" "}
                  {item.close_approach_data.map((x: CloseApproachData) => (
                    <h1 key={x.close_approach_date_full}>{x.close_approach_date_full}</h1>
                  ))}
                </div>
                <div>
                  velocidad relativa:{" "}
                  {item.close_approach_data.map((x: CloseApproachData) => (
                    <h1 key={x.relative_velocity.kilometers_per_second}>
                      {x.relative_velocity.kilometers_per_hour} km/h
                    </h1>
                  ))}
                </div>
                <div>
                cuerpo en órbita:{" "}
                  {item.close_approach_data.map((x: CloseApproachData) => (
                    <h1 key={x.orbiting_body}>
                      {x.orbiting_body}
                    </h1>
                  ))}

                </div>
                <h1>objeto centinela: {item.is_sentry_object? 'Si' : 'No'}</h1>
              </div>
            );
          })}
          
      </div>
    </div>
  );
}
export default Meteory;
