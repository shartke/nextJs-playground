import { Button } from "@mui/material";

const TestPage = (props:any) => {
  return <div>
     {JSON.stringify(props)}
  </div>;
};
export async function getStaticProps(context: any) {
  const res = await fetch(`http://localhost:3000/api/feature`);
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
export default TestPage;
