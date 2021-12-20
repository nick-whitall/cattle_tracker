import { Schema, model } from 'mongoose';
import User from '@/resources/user/user.interface';

const CattleSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export default model<User>('Cattle', CattleSchema);
