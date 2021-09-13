import {
  FireIcon,
  HomeIcon,
  TrendingUpIcon,
  UserGroupIcon
} from '@heroicons/react/outline';

import SideBarNav from '../../components/dashboard/sidebarNav/index';
import MainCenter from '../../components/dashboard/main/index';
import Events from '../../components/dashboard/events/index';

import { authCheck } from '../../utils/authCheck';

const Dashboard = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <div className="py-10">
        <div className="max-w-full mx-auto sm:px-6 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
          <SideBarNav navigation={navigation} communities={communities} />
          <MainCenter tabs={tabs} questions={questions} />
          <Events trendingPosts={trendingPosts} whoToFollow={whoToFollow} />
        </div>
      </div>
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

const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: true },
  { name: 'Popular', href: '#', icon: FireIcon, current: false },
  { name: 'Communities', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Trending', href: '#', icon: TrendingUpIcon, current: false }
];

const communities = [
  { name: 'Movies', href: '#' },
  { name: 'Food', href: '#' },
  { name: 'Sports', href: '#' },
  { name: 'Animals', href: '#' },
  { name: 'Science', href: '#' },
  { name: 'Dinosaurs', href: '#' },
  { name: 'Talents', href: '#' },
  { name: 'Gaming', href: '#' }
];
const tabs = [
  { name: 'Recent', href: '#', current: true },
  { name: 'Most Liked', href: '#', current: false },
  { name: 'Most Answers', href: '#', current: false }
];
const questions = [
  {
    id: '81614',
    likes: '29',
    replies: '11',
    views: '2.7k',
    author: {
      name: 'Dries Vincent',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#'
    },
    date: 'December 9 at 11:43 AM',
    datetime: '2020-12-09T11:43:00',
    href: '#',
    title: 'What would you have done differently if you ran Jurassic Park?',
    body: `
      <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
      <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
    `
  }
  // More questions...
];
const whoToFollow = [
  {
    name: 'Leonard Krasner',
    handle: 'leonardkrasner',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
  // More people...
];
const trendingPosts = [
  {
    id: 1,
    user: {
      name: 'Floyd Miles',
      imageUrl:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    body: 'What books do you have on your bookshelf just to look smarter than you actually are?',
    comments: 291
  }
  // More posts...
];
