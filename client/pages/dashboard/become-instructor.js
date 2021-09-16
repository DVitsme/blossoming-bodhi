import { useContext, useState } from 'react';
import { Context } from '../../context';
import { authCheck } from '../../utils/authCheck';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { axiosAuth } from '../../actions/axios';

export default function BecomeInstructor() {
  const [loading, setLoading] = useState(false);
  const { state } = useContext(Context);

  const becomeInstructor = async () => {
    try {
      setLoading(true);
      const data = await axiosAuth.post('/make-instructor');
      console.log(data);
    } catch (err) {
      console.log(err);
      toast.error('Stripe Failed. Try again');
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="max-w-2xl mx-auto px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
                <span className="capitalize">
                  Come teach with us! <br />
                </span>
                <span className="font-bold">
                  Become an instructor and change lives — including your own
                </span>
              </h2>
              <p className="mt-4 text-gray-500">
                At the beginning at least, but then we realized we could make a
                lot more money if we kinda stopped caring about that. Our new
                strategy is to write a bunch of things that look really good in
                the headlines, then clarify in the small print but hope people
                don't actually read it.
              </p>
              <a
                onClick={() => becomeInstructor()}
                className="inline-flex mt-5 items-center justify-center px-5 py-3 border-none text-base bg-blue-500 font-medium rounded-md text-white hover:bg-blue-700 hover:text-white"
              >
                Become a teacher
              </a>
            </div>
            <div className="aspect-w-3 aspect-h-2 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/images/gifs/yoga/peace_and_calm.gif"
                alt=""
                className="object-center object-cover"
              />
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                  <img className="w-16 h-16" src={incentive.imageSrc} alt="" />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-medium text-gray-900">
                    {incentive.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const data = await authCheck(context);
    if (data.activeUser) {
      return { props: {} };
    }
  } catch (err) {
    console.log(err);
    return {
      redirect: {
        destination: '/signin?err=Please+login+to+continue',
        permanent: false
      },
      props: {}
    };
  }
}
const incentives = [
  {
    name: 'Teach your way',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
    description:
      'Publish the course you want, in the way you want, and always have of control your own content.'
  },
  {
    name: 'Inspire Learners',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
    description:
      'Teach what you know and help learners explore their interests, gain new skills, and advance their careers.'
  },
  {
    name: 'Get Rewarded',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
    description:
      'Expand your professional network, build your expertise, and earn money on each paid enrollment.'
  }
];
