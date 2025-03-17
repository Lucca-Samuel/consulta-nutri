const ResultsCard = ({ title, data }) => (
  <div className="ml-4 mt-3 flex flex-col flex-wrap items-center justify-center md:flex-row">
    <p className="text-orange w-full text-center text-3xl font-bold">{title}</p>
    {data.map((item) => (
      <div
        key={item.label}
        className="bg-verde m-2 flex h-16 w-auto max-w-[200px] flex-col items-center justify-center rounded-3xl p-2"
      >
        <span className="text-[10px] font-bold text-white">{item.label}:</span>
        <span className="text-lg font-semibold text-white">{item.value}</span>
      </div>
    ))}
  </div>
);

export default ResultsCard;
