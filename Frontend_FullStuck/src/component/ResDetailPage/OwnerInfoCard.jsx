import { FaPhone, FaEnvelope } from "react-icons/fa";
import { SiLine } from "react-icons/si";
import ownerPic from "../../image/ExOwnerPic.png"

const OwnerInfoCard = ({ owner }) => {
    const ContactItem = ({ icon, text, iconClassName, textClassName }) => (
        <div className="flex items-center space-x-4">
            <div className={iconClassName}>{icon}</div>
            <div className={textClassName}>{text}</div>
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
        <div className="w-[326px] md:w-[467px] lg:w-[455px] border-[#D9D9D9] shadow-lg overflow-hidden bg-white p-4 font-Inter">
            {/* Top Section: Profile Picture + Name + Verified */}
            <div className="flex items-center justify-center mx-6 md:mx-20 my-8 md:my-12">
                <div className="w-24 md:w-28 lg:w-32 aspect-square rounded-full overflow-hidden bg-gray-100">
                    <img
                        src={owner?.image || ownerPic}
                        alt="Profile pic"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="ml-3 md:ml-4">
                    <h2 className="text-sm md:text-lg lg:text-xl font-semibold">
                        {owner?.name || "Unknown Owner"}
                    </h2>
                    <p className="flex items-center text-blue-500 text-xs md:text-sm lg:text-base">
                        <span className="text-sm md:text-base lg:text-lg">✔</span>
                        <span className="ml-1">Verified listing</span>
                    </p>
                </div>
            </div>

            {/* Border */}
            <div className="w-full border-b border-[#BCBEC0]" />

            <div className="flex flex-col ml-[36px] my-[20px] md:ml-[123px] md:my-[56px] lg:ml-[123px] lg:my-[56px] space-y-[12px] md:space-y-[24px] lg:space-y-[24px]">
                <ContactItem
                    icon={<FaPhone />}
                    text={owner?.phone || "N/A"}
                    iconClassName="text-gray-700 text-[16px] md:text-[24px] lg:text-[32px]"
                    textClassName="text-gray-700 text-[12px] md:text-[16px] lg:text-[20px]"
                />
                <ContactItem
                    icon={<FaEnvelope />}
                    text={owner?.email || "N/A"}
                    iconClassName="text-gray-700 text-[16px] md:text-[24px] lg:text-[32px]"
                    textClassName="text-gray-700 text-[12px] md:text-[16px] lg:text-[20px]"
                />
                <ContactItem
                    icon={<SiLine />}
                    text={owner?.lineId || "N/A"}
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
