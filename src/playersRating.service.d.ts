import { Repository } from 'typeorm';
import { PlayersRating } from './playersRating.entity';
export declare class PlayersRatingService {
    private ratings;
    constructor(ratings: Repository<PlayersRating>);
    getAll(): Promise<PlayersRating[]>;
    findRatings(id: number): Promise<PlayersRating[]>;
}
