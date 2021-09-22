import Loader from 'react-loader-spinner';

const Loading = ({ height, width, color = '#00BFFF' }) => {
  return (
    <div className="w-full flex justify-center py-2 px-4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ">
      <Loader type="TailSpin" color={color} height={height} width={width} />
    </div>
  );
};

export default Loading;
