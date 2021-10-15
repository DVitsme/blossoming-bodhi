import { useEffect } from 'react';
import SelectCheckOnLeft from '../../select/checkOnLeft';

import SwitchWithLabel from '../../styles/switch/switchWithLabel';

export const StepOne = ({ values, nextStep, handleChange, setValues }) => {
  const {
    courseTitle,
    description,
    price,
    category,
    uploading,
    paid,
    loading,
    imagePreview
  } = values;
  console.log(values);
  return (
    <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
          <div>
            <h1 className="text-2xl leading-6 font-medium text-gray-900">
              Create Course
            </h1>
            <p className="mt-1 text-sm text-gray-500 md:mr-12">
              This is the beginning steps toward creating your course. Please
              fill out the course name as well as other details. If you ever
              want to go revist what you have done. You can click the "Back
              button" or edit the course at any time after publishing.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                htmlFor="course-title"
                className="block text-sm font-medium text-gray-700"
              >
                Course Title
              </label>
              <div className="mt-1 rounded-md shadow-sm flex">
                <input
                  type="text"
                  name="courseTitle"
                  id="course-title"
                  className="focus:ring-indigo-500 focus:border-indigo-500 flex-grow block w-full min-w-0 rounded-md sm:text-sm border-gray-300"
                  value={courseTitle}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-span-3 sm:col-span-2">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <div className="mt-1 rounded-md shadow-sm flex">
                <input
                  type="text"
                  name="category"
                  id="category"
                  className="focus:ring-indigo-500 focus:border-indigo-500 flex-grow block w-full min-w-0 rounded-md sm:text-sm border-gray-300"
                  value={category}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-span-3">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                About
              </label>
              <div className="mt-1">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                  placeholder="you@example.com"
                  value={description}
                  onChange={handleChange}
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Brief description for your profile. URLs are hyperlinked.
              </p>
            </div>

            <div className="col-span-3">
              <SwitchWithLabel
                activeBody="Paid Course"
                inActiveBody="Free Course"
                enabled={paid}
                setEnabled={() => handleChange('paid')}
              />
              {paid && (
                <div className="mt-3">
                  <SelectCheckOnLeft
                    arr={data}
                    title={'Course Price'}
                    values={values}
                    setValues={setValues}
                  />
                </div>
              )}
            </div>

            <div className="col-span-3">
              <label className="block text-sm font-medium text-gray-700">
                Cover photo
              </label>
              <div className="mt-1 border-2 border-gray-300 border-dashed rounded-md px-6 pt-5 pb-6 flex justify-center">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            onClick={nextStep}
            className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const data = [1.99, 2.99, 3.99, 4.99, 5.99, 6.99, 7.99, 9.99];
