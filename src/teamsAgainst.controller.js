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
exports.TeamAgainstController = void 0;
const common_1 = require("@nestjs/common");
const teamsAgainst_service_1 = require("./teamsAgainst.service");
let TeamAgainstController = class TeamAgainstController {
    constructor(teamsAgainstService) {
        this.teamsAgainstService = teamsAgainstService;
    }
    getAllTeams() {
        return this.teamsAgainstService.getAll();
    }
    getSpecificTeam(id) {
        const team = this.teamsAgainstService.findTeam(id);
        return team;
    }
    createTeam(name) {
        const team = this.teamsAgainstService.addTeam(name);
        return team;
    }
    updateTeamName(id, name) {
        const team = this.teamsAgainstService.changeTeamName(id, name);
        return team;
    }
    async deleteTeam(id) {
        await this.teamsAgainstService.deleteTeam(id);
        return new common_1.HttpException("The Team was deleted!", 200);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TeamAgainstController.prototype, "getAllTeams", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TeamAgainstController.prototype, "getSpecificTeam", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeamAgainstController.prototype, "createTeam", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], TeamAgainstController.prototype, "updateTeamName", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TeamAgainstController.prototype, "deleteTeam", null);
TeamAgainstController = __decorate([
    common_1.Controller('teams'),
    __metadata("design:paramtypes", [teamsAgainst_service_1.TeamsAgainstService])
], TeamAgainstController);
exports.TeamAgainstController = TeamAgainstController;
//# sourceMappingURL=teamsAgainst.controller.js.map