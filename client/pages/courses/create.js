import {
  CreditCardIcon,
  KeyIcon,
  UserCircleIcon,
  UserGroupIcon,
  ViewGridAddIcon
} from '@heroicons/react/outline';
import { useState } from 'react';
import CreateCourseForm from '../../components/forms/createCourseForm';
import { classNames } from '../../utils/classNames';

const Create = () => {
  const [values, setValues] = useState({
    name: '',
    description: '',
    price: '999',
    uploading: false,
    paid: true,
    loading: false,
    imagePreview: ''
  });

  const [step, setStep] = useState(0);

  const handleStepChange = (index) => {
    // if(index < step)
    setStep(index);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleImage = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div className="bg-gray-200 pb-10">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-5 container mx-auto pt-5">
        <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
          <nav className="space-y-1">
            {navigation.map((item, index) => (
              <p
                key={item.name}
                onClick={() => handleStepChange(index)}
                className={classNames(
                  index === step
                    ? 'bg-gray-50 text-indigo-700'
                    : 'text-gray-900',
                  'group rounded-md px-3 py-2 flex items-center text-sm font-medium cursor-pointer'
                )}
                aria-current={index === step ? 'page' : undefined}
              >
                <item.icon
                  className={classNames(
                    index === step
                      ? 'text-indigo-500 group-hover:text-indigo-500'
                      : 'text-gray-400 group-hover:text-gray-500',
                    'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                  )}
                  aria-hidden="true"
                />
                <span className="truncate">{item.name}</span>
              </p>
            ))}
          </nav>
        </aside>
        <CreateCourseForm
          step={step}
          setStep={setStep}
          handleSubmit={handleSubmit}
          handleImage={handleImage}
          handleChange={handleChange}
          values={values}
          setValues={setValues}
        />
      </div>
    </div>
  );
};

export default Create;

const navigation = [
  { name: 'Get Started', href: '#', icon: UserCircleIcon, current: true },
  { name: 'Password', href: '#', icon: KeyIcon, current: false },
  { name: 'Plan & Billing', href: '#', icon: CreditCardIcon, current: false }
];
