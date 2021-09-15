import ContentPreview from './contentPreview';
import DashboardNav from './dashboardNav';

const MainCenter = ({ section, tabs, questions }) => {
  if (section === 'Classes') return <Classes />;
  if (section === 'Products') return <Products />;
  if (section === 'Workshops') return <Workshops />;
  if (section === 'Communities') return <Communities />;
  return <Home tabs={tabs} questions={questions} />;
};

const Home = ({ tabs, questions }) => {
  return (
    <main className="lg:col-span-9 xl:col-span-6">
      <DashboardNav tabs={tabs} />
      <ContentPreview questions={questions} />
    </main>
  );
};
const Classes = () => {
  return (
    <main className="lg:col-span-9 xl:col-span-6">
      <h1>Im the Classes</h1>
    </main>
  );
};
const Products = () => {
  return (
    <main className="lg:col-span-9 xl:col-span-6">
      <h1>Im the products</h1>
    </main>
  );
};
const Workshops = () => {
  return (
    <main className="lg:col-span-9 xl:col-span-6">
      <h1>Im the Workshops</h1>
    </main>
  );
};
const Communities = () => {
  return (
    <main className="lg:col-span-9 xl:col-span-6">
      <h1>Im the Communities</h1>
    </main>
  );
};

export default MainCenter;
