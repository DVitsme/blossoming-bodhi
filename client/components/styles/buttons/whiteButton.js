export const whiteButtonGrayText = ({ body }) => {
  return (
    <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
      {body}
    </a>
  );
};

export const whiteButtonGrayTextBlackBorder = ({ body }) => {
  return (
    <a className="inline-flex items-center justify-center px-5 py-3 border border-black text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
      {body}
    </a>
  );
};
