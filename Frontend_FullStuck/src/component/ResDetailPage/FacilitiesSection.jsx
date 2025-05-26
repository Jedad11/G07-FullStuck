import {
  IconAirConditioning, IconBed, IconDeviceTvOld, IconWifi, IconFridge, IconSwimming,
  IconPaw, IconCarGarage, IconDeviceCctv, IconUserShield, IconWashMachine, IconElevator,
  IconDesk, IconBarbell, IconCooker, IconBath
} from '@tabler/icons-react';

const allFacilities = [
  { key: "air_conditioner", icon: IconAirConditioning, label: "Air Conditioner" },
  { key: "furnished", icon: IconBed, label: "Furnished" },
  { key: "television", icon: IconDeviceTvOld, label: "Television" },
  { key: "water_heater", icon: IconBath, label: "Water Heater" },
  { key: "wifi", icon: IconWifi, label: "In-room WIFI" },
  { key: "refrigerator", icon: IconFridge, label: "Refrigerator" },
  { key: "pool", icon: IconSwimming, label: "Pool" },
  { key: "pets", icon: IconPaw, label: "Pets" },
  { key: "parking", icon: IconCarGarage, label: "Parking" },
  { key: "cctv", icon: IconDeviceCctv, label: "CCTV" },
  { key: "security", icon: IconUserShield, label: "Security" },
  { key: "laundry", icon: IconWashMachine, label: "Laundry" },
  { key: "lift", icon: IconElevator, label: "Lift" },
  { key: "desk", icon: IconDesk, label: "Desk" },
  { key: "fitness", icon: IconBarbell, label: "Fitness" },
  { key: "kitchen_stove", icon: IconCooker, label: "Kitchen Stove" }
];

const keyMapping = {
  aircon: "air_conditioner",
  furnished: "furnished",
  television: "television",
  waterHeater: "water_heater",
  internet: "wifi",
  refrigerator: "refrigerator",
  pool: "pool",
  pets: "pets",
  parking: "parking",
  cctv: "cctv",
  security: "security",
  laundry: "laundry",
  lift: "lift",
  desk: "desk",
  fitness: "fitness",
  kitchenStove: "kitchen_stove",
};

const normalizeFacilities = (rawFacilities) => {
  const normalized = {};
  for (const [backendKey, value] of Object.entries(rawFacilities)) {
    const frontendKey = keyMapping[backendKey];
    if (frontendKey) {
      normalized[frontendKey] = value;
    }
  }
  return normalized;
};

//const backendFacilities = [
//  "air_conditioner", "parking", "furnished", "cctv",
//  "security", "laundry", "wifi", "lift", "refrigerator", "desk", "pool", "pets"
//];

const FacilitiesSection = ({ facilities }) => {
  const normalizedFacilities = normalizeFacilities(facilities || {});

  return (
    <div className="mb-[36px]">
      <h1 className="font-semibold text-[24px] md:text-[32px] lg:text-[48px] mb-8">Facilities</h1>
      <div className="grid grid-cols-2 gap-10">
        {/* Left Column */}
        <div className="flex flex-col space-y-[38px]">
          {allFacilities.slice(0, 8).map(({ key, icon: Icon, label }) => {
            const isAvailable = normalizedFacilities[key] === true;
            return (
              <div key={key} className="flex items-center space-x-6">
                <Icon size={28} className={isAvailable ? "text-black" : "text-gray-300"} />
                <span className={isAvailable ? "text-black" : "text-gray-300"}>
                  {label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-[38px]">
          {allFacilities.slice(8).map(({ key, icon: Icon, label }) => {
            const isAvailable = normalizedFacilities[key] === true;
            return (
              <div key={key} className="flex items-center space-x-6">
                <Icon size={28} className={isAvailable ? "text-black" : "text-gray-300"} />
                <span className={isAvailable ? "text-black" : "text-gray-300"}>
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};



export default FacilitiesSection;