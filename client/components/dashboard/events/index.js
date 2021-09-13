import { ChatAltIcon, PlusSmIcon } from '@heroicons/react/solid';

const Events = ({ trendingPosts, whoToFollow }) => {
  return (
    <aside className="hidden xl:block xl:col-span-4">
      <div className="sticky top-4 space-y-4">
        <section aria-labelledby="who-to-follow-heading">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h2
                id="who-to-follow-heading"
                className="text-base font-medium text-gray-900"
              >
                Who to follow
              </h2>
              <div className="mt-6 flow-root">
                <ul role="list" className="-my-4 divide-y divide-gray-200">
                  {whoToFollow.map((user) => (
                    <li
                      key={user.handle}
                      className="flex items-center py-4 space-x-3"
                    >
                      <div className="flex-shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          <a href={user.href}>{user.name}</a>
                        </p>
                        <p className="text-sm text-gray-500">
                          <a href={user.href}>{'@' + user.handle}</a>
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <button
                          type="button"
                          className="inline-flex items-center px-3 py-0.5 rounded-full bg-rose-50 text-sm font-medium text-rose-700 hover:bg-rose-100"
                        >
                          <PlusSmIcon
                            className="-ml-1 mr-0.5 h-5 w-5 text-rose-400"
                            aria-hidden="true"
                          />
                          <span>Follow</span>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  View all
                </a>
              </div>
            </div>
          </div>
        </section>
        <section aria-labelledby="trending-heading">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h2
                id="trending-heading"
                className="text-base font-medium text-gray-900"
              >
                Trending
              </h2>
              <div className="mt-6 flow-root">
                <ul role="list" className="-my-4 divide-y divide-gray-200">
                  {trendingPosts.map((post) => (
                    <li key={post.id} className="flex py-4 space-x-3">
                      <div className="flex-shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src={post.user.imageUrl}
                          alt={post.user.name}
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm text-gray-800">{post.body}</p>
                        <div className="mt-2 flex">
                          <span className="inline-flex items-center text-sm">
                            <button
                              type="button"
                              className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                            >
                              <ChatAltIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                              <span className="font-medium text-gray-900">
                                {post.comments}
                              </span>
                            </button>
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  View all
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </aside>
  );
};

export default Events;
