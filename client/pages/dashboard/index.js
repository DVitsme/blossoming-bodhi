import { authCheck } from '../../utils/authCheck';

const Dashboard = () => {
  return (
    <div>
      <h1>Im the dashboard page</h1>
    </div>
  );
};

export async function getServerSideProps(context) {
  try {
    const data = await authCheck(context);
    if (data.activeUser) {
      return { props: {} };
    }
  } catch (err) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false
      },
      props: {}
    };
  }
}

export default Dashboard;
