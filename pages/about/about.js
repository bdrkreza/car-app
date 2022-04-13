import Image from "next/image";
import React from "react";
export default function About({ data }) {
  console.log(data);
  return (
    <div>
      {data.chassis_number_prefix?.map((carItem) =>
        carItem?.images?.map((img, index) => (
          <div key={index}>
            <div key={index}>
              <Image
                src={`/uploads/${img}`}
                alt="Picture of the author"
                width={500}
                height={500}
              />

              {/* {data?.chassis_number_prefix?.map((p) =>
                p.images.map((p) => <option key={p}>{p}</option>)
              )} */}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/cars`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
