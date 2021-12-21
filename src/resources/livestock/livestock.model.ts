import { Schema, model } from 'mongoose';
import Livestock from './livestock.interface';

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
export interface ILivestock {
    type: 'cow' | 'goat' | 'pig' | 'chicken' | 'sheep';
    breed?: string;
    description?: string;
    groupings: LivestockGroup[];
}



const LivestockSchema = new Schema(
    {
        type: {
            type: String,
            enum: AnimalTypes,
            required: true,
        },
        breed: {
            type: String,
            required: false,
        },
        description: {
            type: String,
            required: false,
        },
        groupings: {
            type: Array,
            required: true,
            groupRef: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: false
            },
            locations: {
                type: Array,
                required: false,
                locationRef: {
                    type: String,
                    required: true
                },
                comment: {
                    type: String,
                    required: false
                },
                isActive: {
                    type: Boolean,
                    required: true
                },
                startDateTime: {
                    type: String,
                    required: false
                },
                endDateTime: {
                    type: String,
                    required: false
                },
                tags: {
                    type: Array,
                    required: true
                }
            },
            animals: {
                type: Array,
                required: false,
                animalRef: {
                    type: String,
                    required: true
                },
                comment: {
                    type: String,
                    required: false
                },
                isActive: {
                    type: Boolean,
                    required: true
                },
                startDateTime: {
                    type: String,
                    required: false
                },
                endDateTime: {
                    type: String,
                    required: false
                },
                tags: {
                    type: Array,
                    required: true
                }
            },
            tags: {
                type: Array,
                required: true
            }
        }

    },
    { timestamps: true }
);

export default model<Livestock>('Livestock', LivestockSchema);
