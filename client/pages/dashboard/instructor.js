import { authCheck, instructorCheck } from '../../utils/authCheck';

const Instructor = () => {
  return (
    <div>
      <h1>You MAde it</h1>
    </div>
  );
};

export async function getServerSideProps(context) {
  try {
    const data = await instructorCheck(context);
    console.log(data);
    if (data.activeUser) {
      return { props: {} };
    } else {
      return {
        redirect: {
          destination: '/dashboard?err=Please+Apply+to+become+a+Instructor',
          permanent: false
        },
        props: {}
      };
    }
  } catch (err) {
    return {
      redirect: {
        destination: '/dashboard?err=Please+Apply+to+become+a+Instructor',
        permanent: false
      },
      props: {}
    };
  }
}

export default Instructor;
