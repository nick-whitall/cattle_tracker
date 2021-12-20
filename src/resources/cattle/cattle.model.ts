import { Schema, model } from 'mongoose';
import Cattle from './cattle.interface';

const CattleSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export default model<Cattle>('Cattle', CattleSchema);
