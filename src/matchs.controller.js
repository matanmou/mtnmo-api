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
exports.MatchsController = void 0;
const common_1 = require("@nestjs/common");
const matchs_service_1 = require("./matchs.service");
let MatchsController = class MatchsController {
    constructor(matchsService) {
        this.matchsService = matchsService;
    }
    getAllMatchs() {
        return this.matchsService.getAll();
    }
    getSpecificMatch(id) {
        const team = this.matchsService.findMatch(id);
        return team;
    }
    getPlayers(id) {
        const players = this.matchsService.getMatchPlayers(id);
        return players;
    }
    updateRating(id, players) {
        const plrs = this.matchsService.addRating(id, players);
        return plrs;
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MatchsController.prototype, "getAllMatchs", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MatchsController.prototype, "getSpecificMatch", null);
__decorate([
    common_1.Get('players/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MatchsController.prototype, "getPlayers", null);
__decorate([
    common_1.Patch('ratings/:id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Array]),
    __metadata("design:returntype", Promise)
], MatchsController.prototype, "updateRating", null);
MatchsController = __decorate([
    common_1.Controller('matchs'),
    __metadata("design:paramtypes", [matchs_service_1.MatchsService])
], MatchsController);
exports.MatchsController = MatchsController;
//# sourceMappingURL=matchs.controller.js.map