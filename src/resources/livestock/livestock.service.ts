import Livestock from './livestock.interface';
import LivestockModel from './livestock.model';

class LivestockService {
    private livestock = LivestockModel;

    /**
     * Create a new post
     */
    public async create(livestockToCreate: Livestock): Promise<Livestock> {
        try {
            const post = await this.livestock.create(livestockToCreate);

            return post;
        } catch (error) {
            throw new Error('Unable to create post');
        }
    }

    public async get(name: string): Promise<Livestock> {
        try {
            const livestock = await this.livestock.findOne({ name });

            if (livestock) {
                return livestock as Livestock;
            }
            throw new Error('Not found');
        } catch (error) {
            throw new Error('Unable to create post');
        }
    }
}

export default LivestockService;
