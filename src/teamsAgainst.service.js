"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamsAgainstService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const teamsAgainst_entity_1 = require("./teamsAgainst.entity");
let TeamsAgainstService = class TeamsAgainstService {
    constructor(teams) {
        this.teams = teams;
    }
    getAll() {
        return this.teams.find();
    }
    addTeam(name) {
        const newTeam = this.teams.create({ name });
        return this.teams.save(newTeam);
    }
    async changeTeamName(id, name) {
        const team = await this.findTeam(id);
        team.name = name;
        return this.teams.save(team);
    }
    async deleteTeam(id) {
        const team = await this.findTeam(id);
        this.teams.remove(team);
    }
    async findTeam(id) {
        try {
            const team = await this.teams.findOneOrFail(id);
            return team;
        }
        catch (err) {
            throw new common_1.NotFoundException("There is no Team with that ID number");
        }
    }
};
TeamsAgainstService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(teamsAgainst_entity_1.TeamsAgainst)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TeamsAgainstService);
exports.TeamsAgainstService = TeamsAgainstService;
//# sourceMappingURL=teamsAgainst.service.js.map