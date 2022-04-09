import SkeletonCard from "../components/skeletonCard";
import Card from "../components/userCard/Card";

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://car-app.vercel.app/api/cars`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default function Car({ data }) {
  return (
    <div className="container m-auto lg:px-32 sm:px-2">
      {data ? <Card /> : <SkeletonCard />}
    </div>
  );
}
