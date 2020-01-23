// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';
import express from 'express';

export type ParsedRequest = {
  firebaseServer?: any; // or any other type
} & express.Request;

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  dob?: Date;
}

export interface Commitment {
  id: string;
  userId: string;
  listingId: string;
  dateSigned: Date;
}

export interface Listing {
  id: string;
  title: string;
  totalPrice: number;
  estimatedConstructionTime: number;
  description: string;
  authorId: string;
  prospectus: string;
  images: string[];
}

export interface Bid {
  id: string;
  businessId: string;
  listingId: string;
  dateSigned: Date;
}
