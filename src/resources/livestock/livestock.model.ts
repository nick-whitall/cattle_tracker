import { Schema, model } from 'mongoose';
import Livestock from './livestock.interface';

const LivestockSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export default model<Livestock>('Livestock', LivestockSchema);
