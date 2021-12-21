import { Schema, model } from 'mongoose';
import Livestock, { AnimalTypes } from './livestock.interface';



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
