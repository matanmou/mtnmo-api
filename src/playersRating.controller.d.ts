import { PlayersRating } from './playersRating.entity';
import { PlayersRatingService } from './playersRating.service';
export declare class PlayersRatingController {
    private readonly ratingsService;
    constructor(ratingsService: PlayersRatingService);
    getAllPlayers(): Promise<PlayersRating[]>;
    getSpecificPlayer(id: number): Promise<PlayersRating[]>;
}
