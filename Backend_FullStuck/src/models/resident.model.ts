import { db } from "../index.ts";

export interface ResidentCreateInput {
  residentName: string;
  info?: {
    residentType: string;
    building: string;
    roomType: string;
    electricFee: number;
    waterFee: number;
    rentalPrice: number;
  };
  facilities?: {
    aircon?: boolean;
    furnished?: boolean;
    television?: boolean;
    waterHeater?: boolean;
    inRoomBathroom?: boolean;
    refrigerator?: boolean;
    pool?: boolean;
    parking?: boolean;
    security?: boolean;
    fitness?: boolean;
    internet?: boolean;
  };
  owner?: {
    ownerName: string;
    ownerPhone: string;
    ownerEmail: string;
    ownerContactLine?: string;
  };
  address?: {
    houseNumber: string;
    street: string;
    subDistrict: string;
    district: string;
    province: string;
    postalCode: string;
  };
}

export interface ResidentUpdateInput {
  residentName?: string;
  info?: {
    residentType?: string;
    building?: string;
    roomType?: string;
    electricFee?: number;
    waterFee?: number;
  };
  facilities?: {
    aircon?: boolean;
    furnished?: boolean;
    television?: boolean;
    waterHeater?: boolean;
    inRoomBathroom?: boolean;
    refrigerator?: boolean;
    pool?: boolean;
    parking?: boolean;
    security?: boolean;
    fitness?: boolean;
    internet?: boolean;
  };
  owner?: {
    ownerName?: string;
    ownerPhone?: string;
    ownerEmail?: string;
    ownerContactLine?: string;
  };
  address?: {
    houseNumber?: string;
    street?: string;
    subDistrict?: string;
    district?: string;
    province?: string;
    postalCode?: string;
  };
}

export interface Resident {
  id: number;
  residentName: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ResidentWithRelations extends Resident {
  info: any;
  facilities: any;
  owner: any;
  address: any;
  bookings: any[];
  reviews: any[];
}

export const residentModel = {
  // Create a new resident with related data
  createResident: async (data: ResidentCreateInput) => {
    const { residentName, info, facilities, owner, address } = data;

    return db.resident.create({
      data: {
        residentName,
        info: info ? {
          create: info
        } : undefined,
        facilities: facilities ? {
          create: facilities
        } : undefined,
        owner: owner ? {
          create: owner
        } : undefined,
        address: address ? {
          create: address
        } : undefined,
      },
      include: {
        info: true,
        facilities: true,
        owner: true,
        address: true,
      },
    });
  },

  // Get all residents with related data
  getAllResidents: async () => {
    return db.resident.findMany({
      include: {
        info: true,
        facilities: true,
        owner: true,
        address: true,
      },
    });
  },

  // Get resident by ID with related data
  getResidentById: async (id: number) => {
    return db.resident.findUnique({
      where: { id },
      include: {
        info: true,
        facilities: true,
        owner: true,
        address: true,
        bookings: true,
        reviews: true,
      },
    });
  },

  // Update resident and related data
  updateResident: async (id: number, data: ResidentUpdateInput) => {
    const { residentName, info, facilities, owner, address } = data;

    return db.resident.update({
      where: { id },
      data: {
        residentName: residentName,
        info: info ? {
          update: info
        } : undefined,
        facilities: facilities ? {
          update: facilities
        } : undefined,
        owner: owner ? {
          update: owner
        } : undefined,
        address: address ? {
          update: address
        } : undefined,
      },
      include: {
        info: true,
        facilities: true,
        owner: true,
        address: true,
      },
    });
  },

  // Delete resident and cascaded related data
  deleteResident: async (id: number) => {
    return db.resident.delete({
      where: { id },
    });
  },

  ResidentCard: async (id: number) => {
    return db.resident.findUnique({
      where:{
        id:id
      },
      select: {
        residentName: true,
        info: {
          select: {
            rentalPrice: true,
            roomType: true
          }
        }
      }
    })
  }
};