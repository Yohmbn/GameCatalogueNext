import { GetServerSideProps } from "next";
import { platform } from "os";
import { Layout } from "../../components/Layout";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const PlatformId = context.params.platform;

  const response = await fetch(`http://videogame-api.fly.dev/platforms/${PlatformId}`);
  const data = await response.json();
  const platform = await JSON.parse(JSON.stringify(data));

  return {
    props: {
      platform: platform,
    },
  };
};

const ShowPlatform: React.FC<{ platform: any }> = ({ platform }) => {
  return (

      <div>{platform.name}</div>

  );
};
export default ShowPlatform;
