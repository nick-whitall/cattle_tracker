import { Document } from 'mongoose';

export default interface Cattle extends Document {
    name: string;
}
