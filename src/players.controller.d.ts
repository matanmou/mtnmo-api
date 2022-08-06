import { Players } from './players.entity';
import { PlayersService } from './players.service';
export declare class PlayersController {
    private readonly playersService;
    constructor(playersService: PlayersService);
    getAllPlayers(): Promise<Players[]>;
    getSpecificPlayer(id: number): Promise<Players>;
}
