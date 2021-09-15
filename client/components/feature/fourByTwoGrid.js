/* This example requires Tailwind CSS v2.0+ */
import {
  ChatAltIcon,
  DocumentReportIcon,
  HeartIcon,
  InboxIcon,
  PencilAltIcon,
  ReplyIcon,
  TrashIcon,
  UsersIcon
} from '@heroicons/react/outline';

export default function FourByTwoGrid() {
  return (
    <div className="bg-gradient-to-r from-purple-800 to-indigo-700">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white tracking-tight capitalize">
          Our goal is to help you create space in your life
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-indigo-200">
          At Blossoming Bodhi we belive that that yoga is for every body, and
          that with the right tailored pratice you can overcome your challenges
          and achive any goal. Below are some of the pratices we offer and
          conditions we support.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name}>
              <div>
                <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                  <feature.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-white">
                  {feature.name}
                </h3>
                <p className="mt-2 text-base text-indigo-200">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    name: 'Developmental Practice',
    description:
      'Developing a yoga practice either for beginners or for people who have been in and out of yoga studios can be a challenge.',
    icon: InboxIcon
  },
  {
    name: 'Partner Practice',
    description:
      'Yoga with a partner offers a wonderful opportunity to deepen a connection with each other. I use yoga as a pathway to reignite the feeling of lightness and play with a partner.',
    icon: UsersIcon
  },
  {
    name: 'Sustaining Practice',
    description:
      'Sustaining Practice is for practitioners who are seeking to transform their practice or for those who want to explore the full scope of their yoga practice.',
    icon: TrashIcon
  },
  {
    name: 'Therapeutic Practice',
    description:
      'While yoga is inherently a healing process, there are times we need specific types of attention to support our bodies in a very intentional way.',
    icon: PencilAltIcon
  },
  {
    name: 'Addiction',
    description:
      'Sessions with me are designed to aid in recovery by increasing skills in stress reduction and relaxation and managing symptoms ',
    icon: DocumentReportIcon
  },
  {
    name: 'Grief',
    description:
      'In sessions with me, we begin with the physical and emotional symptoms of grief – such as anxiety, depression, insomnia, and rumination.',
    icon: ReplyIcon
  },
  {
    name: 'Interpersonal Violence | Sexual Assault',
    description:
      '. Yoga provides a safe and tangible approach for people to explore their healing internally and uncovers layers of pain hidden in the body',
    icon: ChatAltIcon
  },
  {
    name: 'Persistent Health Issues',
    description:
      ' Examples of these dis-eases are asthma, chronic fatigue, diabetes, hypertension, Inflammatory bowel disease and Lyme disease. While we cannot cure these conditions, yoga can reduce some if not all of the symptoms.',
    icon: HeartIcon
  }
];
