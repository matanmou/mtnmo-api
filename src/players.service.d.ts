import { Repository } from 'typeorm';
import { Players } from './players.entity';
export declare class PlayersService {
    private players;
    constructor(players: Repository<Players>);
    getAll(): Promise<Players[]>;
    findPlayer(id: number): Promise<Players>;
}
