import { db } from "../index.ts";

export const searchResident = async (residentName: string) => {
    const allResidents = await db.resident.findMany({
        include: {
            info: true,
            facilities: true,
            address: true,
            reviews: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    const lowerKeyword = residentName.toLowerCase();

    const filtered = allResidents.filter((res) =>
        res.residentName.toLowerCase().includes(lowerKeyword)
    );

    return filtered;
};
