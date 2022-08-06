import { HttpException } from '@nestjs/common';
import { TeamsAgainstService } from './teamsAgainst.service';
import { TeamsAgainst } from './teamsAgainst.entity';
export declare class TeamAgainstController {
    private readonly teamsAgainstService;
    constructor(teamsAgainstService: TeamsAgainstService);
    getAllTeams(): Promise<TeamsAgainst[]>;
    getSpecificTeam(id: number): Promise<TeamsAgainst>;
    createTeam(name: string): Promise<TeamsAgainst>;
    updateTeamName(id: number, name: string): Promise<TeamsAgainst>;
    deleteTeam(id: number): Promise<HttpException>;
}
