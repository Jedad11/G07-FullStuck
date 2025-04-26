import { FaPhone, FaEnvelope } from "react-icons/fa";
import { SiLine } from "react-icons/si";

const OwnerInfoCard = () => {
    const ContactItem = ({ icon, text, iconClassName, textClassName }) => (
        <div className="flex items-center space-x-4">
          <div className={iconClassName}>
            {icon}
          </div>
          <div className={textClassName}>
            {text}
          </div>
        </div>
    );
      

    const WarningNotice = () => (
        <div className="flex items-center justify-center font-semibold lg:text-[18px] md:text-[18px] text-[8px] text-[#FF3D00] lg:my-[21px] lg:mx-[55px] my-[5px] mx-[20px] md:my-[21px] md:mx-[55px] ">
            <p>
                Beware of scammers tricking you into transferring money or transferring money to the wrong account!
            </p>
        </div>
    );

    return (
        <div className="w-[326px]  md:w-[467px]  lg:w-[455px]  border-[#D9D9D9] shadow-lg overflow-hidden bg-white p-4 font-Inter">

            {/* Top Section: Profile Picture + Name + Verified */}
            <div className="flex items-center mx-[40px] md:mx-[100px] my-[40px] md:my-[65px]">
            <div className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] lg:w-[70px] lg:h-[70px] rounded-full overflow-hidden flex items-center justify-center">
                <img
                src="src/image/ExOwnerPic.png"
                className="w-full h-full object-cover"
                alt="Profile pic"
                />
            </div>

            <div className="ml-3 md:ml-4">
                <h2 className="text-[12px] md:text-[18px] lg:text-[24px] font-semibold">
                Chotima Eamchareon
                </h2>
                <p className="flex items-center text-blue-500 text-[8px] md:text-[12px] lg:text-[18px]">
                <span className="text-[10px] md:text-[14px] lg:text-[20px]">✔</span>
                <span className="ml-1">Verified listing</span>
                </p>
            </div>
            </div>


            {/* Border */}
            <div className="w-full border-b border-[#BCBEC0]" />

            <div className="flex flex-col ml-[36px] my-[20px] md:ml-[123px] md:my-[56px] lg:ml-[123px] lg:my-[56px] space-y-[12px] md:space-y-[24px] lg:space-y-[24px]">
                <ContactItem
                    icon={<FaPhone />}
                    text="000-000-000"
                    iconClassName="text-gray-700 text-[16px] md:text-[24px] lg:text-[32px]"
                    textClassName="text-gray-700 text-[12px] md:text-[16px] lg:text-[20px]"
                />
                <ContactItem
                    icon={<FaEnvelope />}
                    text="username@gmail.com"
                    iconClassName="text-gray-700 text-[16px] md:text-[24px] lg:text-[32px]"
                    textClassName="text-gray-700 text-[12px] md:text-[16px] lg:text-[20px]"
                />
                <ContactItem
                    icon={<SiLine />}
                    text="phernutju"
                    iconClassName="text-gray-700 text-[16px] md:text-[24px] lg:text-[32px]"
                    textClassName="text-gray-700 text-[12px] md:text-[16px] lg:text-[20px]"
                />
                </div>

            {/* Border */}
            <div className="w-full border-b border-[#BCBEC0] mb-[21px]" />

            {/* Caution */}
            <WarningNotice />
        </div>
    );
};

export default OwnerInfoCard;
