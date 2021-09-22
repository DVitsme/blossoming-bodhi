import { parseCookies } from 'nookies';
import axios from 'axios';

export const authCheck = async (context) => {
  const cookies = parseCookies(context);
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URI}/private-route`,
    {
      headers: {
        token: cookies.token
      }
    }
  );
  return res.data;
};

export const instructorCheck = async (context) => {
  const cookies = parseCookies(context);
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URI}/instructor-route`,
    {
      headers: {
        token: cookies.token
      }
    }
  );
  return res.data;
};
