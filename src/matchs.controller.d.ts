import { MatchsService } from './matchs.service';
import { Matchs } from './matchs.entity';
import { PlayersInMatchs } from './playersInMatchs.entity';
import { PlayerRatingInfo } from './player_rating_info';
export declare class MatchsController {
    private readonly matchsService;
    constructor(matchsService: MatchsService);
    getAllMatchs(): Promise<Matchs[]>;
    getSpecificMatch(id: number): Promise<Matchs>;
    getPlayers(id: number): Promise<PlayersInMatchs>;
    updateRating(id: number, players: PlayerRatingInfo[]): Promise<PlayerRatingInfo[]>;
}
