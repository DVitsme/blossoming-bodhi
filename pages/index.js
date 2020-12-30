import firebase from "@/lib/firebase";

import { useForm } from "react-hook-form";
import xw from "xwind";
import Link from "next/link";

import ButtonReact from "../components/ButtonReact";
import ButtonStyled from "../components/ButtonStyled";

import { createTest } from "@/lib/db";
import NavigationContainer from "@/components/nav/Index.component";

const firestore = firebase.firestore();

// <div css={xw`grid justify-center items-center h-screen space-y-20`}>
//   <div css={xw`space-y-20`}>
//     <ButtonReact>@emotion/react</ButtonReact>
//     <ButtonStyled>@emotion/styled</ButtonStyled>
//   </div>
// </div>
const Index = ({ data }) => {
  return (
    <div css={xw`container mx-auto text-blue-500`}>
      <NavigationContainer />
      <Link href="/register">
        <a css={xw`m-11 underline cursor-pointer`}>To Register</a>
      </Link>
      <h1>Nothing Here</h1>
      {data.map((email, index) => (
        <div key={index}>
          <p>{email.email}</p>
          <p>{email.password}</p>
        </div>
      ))}
    </div>
  );
};
export const getStaticProps = async (ctx) => {
  let getAllData = [];
  const res = await firestore.collection("users").get();
  res.forEach((doc) => {
    getAllData.push(doc.data());
  });
  return {
    props: {
      data: getAllData,
    },
  };
};
export default Index;
