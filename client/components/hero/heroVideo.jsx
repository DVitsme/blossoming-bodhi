import { useEffect, useRef } from 'react';
import {
  AnnotationIcon,
  ChatAlt2Icon,
  InboxIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/outline';

export default function HeroVideo() {
  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div>
        {/* Hero card */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <video
                  ref={videoRef}
                  className="h-full w-full object-cover"
                  controls={false}
                  loop
                  muted
                >
                  <source src="/videos/stock/yan-krukov.mp4" type="video/mp4" />
                  {/* IF the browser doesnt support vidoes it should fall back to this image */}
                  <img
                    src="/images/peopleDoingYoga/ginny-rose-stewart.jpg"
                    alt="People working on laptops"
                  />
                  {/* IF the browser doesnt support vidoes it should fall back to this image */}
                </video>

                <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-48 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">Welcome To</span>
                  <span className="block text-indigo-200">
                    Blossoming Bodhi
                  </span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                    >
                      Get started
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                    >
                      Live demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo cloud */}
        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
              Just a few of our favorite partners in our local area
            </p>
            <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <a href="https://breathingdeeply.com/">
                  <img
                    className="h-16"
                    src="/images/partners/cropped-Breathing-Deeply-Header-Logo.png"
                    alt="Breathing Deeply Logo"
                  />
                </a>
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <a href="https://www.justiceandrecovery.org/">
                  <img
                    className="h-16"
                    src="/images/partners/Justice_and_Recovery_Advocates_Inc.png"
                    alt="Justice And Recovery logo"
                  />
                </a>
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <a href="https://www.therestorativecenter.org/">
                  <img
                    className="h-16"
                    src="/images/partners/trc_shortlogo+copy.png"
                    alt="The Restorative Center logo"
                  />
                </a>
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                <a href="https://thereedcenter.org/">
                  <img
                    className="h-16"
                    src="/images/partners/REEDlogo_black.png"
                    alt="The Reed Center logo"
                  />
                </a>
              </div>
              <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                <a href="https://y12sr.com/">
                  <img
                    className="h-16"
                    src="/images/partners/y12sr-logov2.png"
                    alt="y12sr logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const solutions = [
  {
    name: 'Inbox',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: InboxIcon
  },
  {
    name: 'Messaging',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: AnnotationIcon
  },
  {
    name: 'Live Chat',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ChatAlt2Icon
  },
  {
    name: 'Knowledge Base',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: QuestionMarkCircleIcon
  }
];
const navigation = [
  { name: 'Pricing', href: '#' },
  { name: 'Partners', href: '#' },
  { name: 'Company', href: '#' }
];
