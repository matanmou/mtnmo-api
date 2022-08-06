import { Repository } from 'typeorm';
import { Matchs } from './matchs.entity';
import { PlayerRatingInfo } from './player_rating_info';
import { PlayersInMatchs } from './playersInMatchs.entity';
import { PlayersRating } from './playersRating.entity';
export declare class MatchsService {
    private matchs;
    private players;
    private rating;
    constructor(matchs: Repository<Matchs>, players: Repository<PlayersInMatchs>, rating: Repository<PlayersRating>);
    getAll(): Promise<Matchs[]>;
    findMatch(id: number): Promise<Matchs>;
    getMatchPlayers(id: number): Promise<PlayersInMatchs>;
    addRating(id: number, playersR: PlayerRatingInfo[]): Promise<PlayerRatingInfo[]>;
}
