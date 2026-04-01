const RightCardContent = ({ intro = "No intro provided", tag = "No tag" }) => {
  return (
    <div>
      <p className="mb-10 text-white">{intro}</p>
      <div>
        <button className="bg-blue-400 text-white font-bold px-7 py-3 rounded-full">
          {tag}
        </button>
      </div>
    </div>
  );
};

export default RightCardContent;
