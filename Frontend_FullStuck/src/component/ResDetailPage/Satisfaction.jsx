
const satisfactionData = [
    { label: "Cleanliness", value: 5.0 },
    { label: "Location", value: 3.0 },
    { label: "Service", value: 4.5 },
    { label: "Facilities", value: 4.0 },
  ];
  
  const Satisfact = () => {
    return (
      <div className="mt-[100px]">
        <h1 className="font-semibold text-[30px] md:text-[36px] lg:text-[48px]">Satisfaction :</h1>
        <div className="grid grid-cols-1 justify-center lg:grid-cols-2 gap-x-20 gap-y-10 text-[20px] md:text-[24px] lg:text-[24px] font-medium mt-[50px]">
          {satisfactionData.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between">
                <span>{item.label}</span>
                <span>{item.value}</span>
              </div>
              <div className="w-full h-3 bg-gray-300 rounded-full mt-2">
                <div
                  className="h-3 bg-green-500 rounded-full"
                  style={{ width: `${(item.value / 5) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Satisfact;
  