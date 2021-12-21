import { Document } from 'mongoose';

export default interface Livestock extends Document {
    type: 'cow' | 'goat' | 'pig' | 'chicken' | 'sheep';
    breed?: string;
    description?: string;
    groupings: LivestockGroup[];
}

export const AnimalTypes: string[] = [
    'cow',
    'goat',
    'pig',
    'chicken',
    'sheep',
];
export type LocationReference = {
    locationRef: string;
    comment: string;
    isActive: boolean;
    startDateTime: string;
    endDateTime: string;
    tags: string[];
}
export type AnimalReference = {
    animalRef: string;
    comment: string;
    isActive: boolean;
    startDateTime: string;
    endDateTime: string;
    tags: string[];
}
export type LivestockGroup = {
    groupRef: string;
    description: string;
    locations: LocationReference[];
    animals: AnimalReference[];
    tags: string[];
}
