import { Document } from 'mongoose';

export default interface Livestock extends Document {
    name: string;
}
