import TitleSection from "../component/ResDetailPage/TitleSection";
import ResidentImage from "../component/ResDetailPage/ResidentImage";
import ReserveButton from "../component/ResDetailPage/ReserveButton";
import OwnerInfoCard from "../component/ResDetailPage/ownerInfoCard";
import FacilitiesSection from "../component/ResDetailPage/FacilitiesSection";
import ListingCard from "../component/ResDetailPage/ListingInfo";
import WriteReview from "../component/ResDetailPage/WriteReview";
import Satisfact from "../component/ResDetailPage/Satisfaction";
import Back from "../component/Back";
import Comments from "../component/ResDetailPage/Comment";

const ResidentDetail = () => {
    return (
        
            <div className="bg-white rounded-lg text-[#362518]">
                <div className="mx-[30px] md:mx-[100px] my-[20px] text-[#362518]">
                    <div className="ml-[-50px] "><Back/></div>
                        <div className="grid grid-cols-1 justify-center lg:grid-cols-2 gap-4 mt-[50px]">
                            <div >
                                <TitleSection />
                                <ResidentImage />
                            </div>
                            <div  className="flex items-center lg:justify-end justify-start" >
                                <OwnerInfoCard />
                            </div>    
                                
                        </div>

                        <div className="grid grid-cols-1 justify-center lg:grid-cols-2 gap-4 mt-[100px]">
                            <div>
                                <FacilitiesSection />
                                <ReserveButton />
                            </div>
                                
                            <div  className="flex justify-center lg:justify-end " >
                                <ListingCard/>
                            </div>
                        </div>

                        <div className="mt-[100px]">
                            <WriteReview/>
                            <Satisfact/>    
                        </div>
                        <Comments/>

                </div>
            </div>
    );
};

export default ResidentDetail;
