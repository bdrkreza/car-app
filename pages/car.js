import SkeletonCard from "../components/skeletonCard";
import Card from "../components/userCard/Card";

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://car-app.vercel.app/api/car`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default function Car({ data }) {
  console.log(data);
  return <div>{data ? <Card /> : <SkeletonCard />}</div>;
}
