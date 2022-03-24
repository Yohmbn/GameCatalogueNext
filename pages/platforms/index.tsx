import { GetServerSideProps } from "next";
import Link from "next/link";
import { Layout } from "../../components/Layout";


export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("http://videogame-api.fly.dev/platforms");
  const data = await response.json();
  const platforms = await JSON.parse(JSON.stringify(data));

  return {
    props: {
      platforms: platforms.results,
    },
  };
};

const PlatformsLists: React.FC<{ platforms: any }> = ({ platforms }) => {
  return (
    <Layout>
      <div className="container">
          {platforms.map(
            (element: {
              id: string;
              name: string;
              category: string;
              summary: string;
            }) => {
              return (
                  <>
                  <Link
                  href={`http://videogame-api.fly.dev/games/platforms/${element.id}`}>
                </Link>
                </>


              );
            }
          )}

      </div>
    </Layout>
  );
};
export default PlatformsLists;
