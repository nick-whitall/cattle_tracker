import UserModel from '@/resources/user/user.model';
import token from '@/utils/token';
import Cattle from './cattle.interface';
import cattleModel from './cattle.model';

class CattleService {
    private cattle = cattleModel;

    /**
     * Create a new post
     */
    public async create(name: string): Promise<Cattle> {
        try {
            const post = await this.cattle.create({ name });

            return post;
        } catch (error) {
            throw new Error('Unable to create post');
        }
    }

    public async get(name: string): Promise<Cattle> {
        try {
            const cattle = await this.cattle.findOne({name});

            if (cattle) {
                return cattle as Cattle;
            }
            throw new Error('Not found');
        } catch (error) {
            throw new Error('Unable to create post');
        }
    }
}

export default CattleService;
