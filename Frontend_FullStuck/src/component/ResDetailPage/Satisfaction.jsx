const getColor = (value) => {
  if (value >= 3.5) return "#4CAF50"; // green
  if (value >= 2.5) return "#FFC107"; // yellow
  return "#F44336"; // red
};

const Satisfact = ({ ratings = {} }) => {
  const satisfactionData = [
    { label: "Cleanliness", value: ratings.cleanliness ?? 0 },
    { label: "Location", value: ratings.location ?? 0 },
    { label: "Service", value: ratings.service ?? 0 },
    { label: "Facilities", value: ratings.facilities ?? 0 },
  ];

  return (
    <div className="mt-[100px]">
      <h1 className="font-semibold text-[30px] md:text-[36px] lg:text-[48px]">Satisfaction :</h1>
      <div className="grid grid-cols-1 justify-center lg:grid-cols-2 gap-x-20 gap-y-10 text-[20px] md:text-[24px] lg:text-[24px] font-medium mt-[50px]">
        {satisfactionData.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between">
              <span>{item.label}</span>
              <span>{item.value.toFixed(1)}</span>
            </div>
            <div className="w-full h-3 bg-gray-300 rounded-full mt-2">
              <div
                className="h-3 rounded-full"
                style={{
                  width: `${(item.value / 5) * 100}%`,
                  backgroundColor: getColor(item.value),
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Satisfact;