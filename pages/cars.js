import { useEffect, useState } from "react";
import Card from "../components/carUpload/Card";

export default function Car() {
  const [items, setItems] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [formData, setFormData] = useState([]);
  const handleOnChange = (e) => {
    e.preventDefault();
    let key = e?.target.value;
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSearchKey(key);
  };
  console.log(formData);
  useEffect(() => {
    fetch(`https://car-app.vercel.app/api/cars/${searchKey}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [searchKey]);

  return (
    <div className="container m-auto lg:px-32 sm:px-2">
      <Card handleOnChange={handleOnChange} data={items} />
    </div>
  );
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://car-app.vercel.app/api/cars`);
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }
