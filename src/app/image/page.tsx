import Image from "next/image";

async function getImage() {
  try {
    const res = await fetch(
      `${process.env.urlImage}&api_key=${process.env.api_key}`,
      { cache: "no-store" }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
export default async function page() {
  const data: IMAGE = await getImage();
  return (
    <div className="mt-12">
      <h1 className="uppercase font-bold text-4xl text-center">
        Imagen del dia
      </h1>
      <div className="flex justify-center items-center">
        <h1 className="uppercase mx-2 font-bold">date:</h1>
        <h2>{data.date}</h2>
      </div>
      <div>
        <h1 className="text-center font-bold text-2xl">{data.title}</h1>
      </div>
      <div className="m-2 text-justify">
        <p>{data.explanation}</p>
      </div>
      <div className="m-2">
        <Image src={data.hdurl} alt={data.media_type} width={1920} height={1280} />
      </div>
    </div>
  );
}
