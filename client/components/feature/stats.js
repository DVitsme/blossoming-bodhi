import Link from 'next/link';
import { ExternalLinkIcon } from '@heroicons/react/outline';

const AboutStats = () => {
  return (
    <div className="relative bg-gray-900">
      <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <img
              className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
              src="/images/dawn/chair_yoga_being_silly_cropped.jpg"
              alt="People working on laptops"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <h2 className="text-sm font-semibold tracking-wide uppercase">
            <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
              A Bit About Me
            </span>
          </h2>
          <p className="mt-3 text-3xl font-extrabold text-white">
            Hi! My name is Dawn Valentine, and I'm here to help you create space
            in your life
          </p>
          <p className="mt-5 text-lg text-gray-300">
            A little about me, I am an honest to goodness book nerd who loves a
            good story, fantastic tea, and my yoga mat. My yoga journey began a
            few decades ago starting with Iyengar, then moving into other
            practices like ashtanga, bikram, and many more. As my pratice grew,
            so did I. I felt less stress, managed my fears, and could stayed
            present. I found my self-confidence.{' '}
            <span className="font-bold">
              My goal is to use the tools of these pratices to help you create
              your own path into a better quality of life.
            </span>
          </p>
          <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            {metrics.map((item) => (
              <p key={item.id}>
                <span className="block text-2xl font-bold text-white">
                  {item.stat}
                </span>
                <span className="mt-1 block text-base text-gray-300">
                  <span className="font-medium text-white">
                    {item.emphasis}
                  </span>{' '}
                  {item.rest}
                </span>
              </p>
            ))}
          </div>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <Link href="/about/about-dawn">
                <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                  Read a bit more
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStats;

const metrics = [
  {
    id: 1,
    stat: '500hrs',
    emphasis: 'Companies',
    rest: 'Over 500hrs spent teaching students'
  },
  {
    id: 2,
    stat: '25K+',
    emphasis: 'Countries around the globe',
    rest: 'lacus nibh integer quis.'
  },
  {
    id: 3,
    stat: '98%',
    emphasis: 'Customer satisfaction',
    rest: 'laoreet amet lacus nibh integer quis.'
  },
  {
    id: 4,
    stat: '12M+',
    emphasis: 'Issues resolved',
    rest: 'lacus nibh integer quis.'
  }
];
