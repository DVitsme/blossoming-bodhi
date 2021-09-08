import { parseCookies } from 'nookies';
import axios from 'axios';

const Dashboard = () => {
  return (
    <div>
      <h1>Im the dashboard page</h1>
    </div>
  );
};

export async function getServerSideProps(context) {
  try {
    const cookies = parseCookies(context);
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URI}/private-route`,
      {
        headers: {
          token: cookies.token
        }
      }
    );
    console.log('private route props', res.data);
  } catch (err) {
    console.log('dashboard build err:', err);
  }
  return {
    props: {}
  };
}

export default Dashboard;
