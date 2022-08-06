import { Repository } from 'typeorm';
import { TeamsAgainst } from './teamsAgainst.entity';
export declare class TeamsAgainstService {
    private teams;
    constructor(teams: Repository<TeamsAgainst>);
    getAll(): Promise<TeamsAgainst[]>;
    addTeam(name: string): Promise<TeamsAgainst>;
    changeTeamName(id: number, name: string): Promise<TeamsAgainst>;
    deleteTeam(id: number): Promise<void>;
    findTeam(id: number): Promise<TeamsAgainst>;
}
