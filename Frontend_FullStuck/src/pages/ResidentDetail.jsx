import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

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
import * as residentAPI from "../api/residentAPI";

const ResidentDetail = () => {
    const { id } = useParams();
    const [resident, setResident] = useState(null);

    const handleFetchResidentData = async () => {
        try {
            const response = await residentAPI.getResidentById(id);
            setResident(response.data);
        } catch (error) {
            console.error("Error loading resident data:", error);
        }
    };

    useEffect(() => {
        handleFetchResidentData();
    }, [id]);

    if (!resident) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-white rounded-lg text-[#362518]">
            <div className="mx-[30px] md:mx-[100px] my-[20px] text-[#362518]">
                <div className="ml-[-50px]">
                    <Back />
                </div>
                <div className="grid grid-cols-1 justify-center lg:grid-cols-2 gap-4 mt-[50px]">
                    <div>
                        {/* ส่ง residentName กับ address ไปให้ TitleSection */}
                        <TitleSection residentName={resident.residentName} address={resident.address} residentType={resident.info.residentType} />
                        <ResidentImage />
                    </div>
                    <div className="flex items-center lg:justify-end justify-start">
                        <OwnerInfoCard
                            owner={{
                                name: resident.owner?.ownerName,
                                phone: resident.owner?.ownerPhone,
                                email: resident.owner?.ownerEmail,
                                lineId: resident.owner?.ownerContactLine,
                            }}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 justify-center lg:grid-cols-2 gap-4 mt-[100px]">
                    <div>
                        <FacilitiesSection facilities={resident.facilities} />
                        <ReserveButton id={id}/>
                    </div>

                    <div className="flex justify-center lg:justify-end ">
                        <ListingCard residentName={resident.residentName} info={resident.info} />
                    </div>
                </div>

                <div className="mt-[100px]">
                    <WriteReview />
                    <Satisfact />
                </div>
                <Comments />
            </div>
        </div>
    );
};

export default ResidentDetail;
