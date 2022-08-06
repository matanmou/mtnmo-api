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
exports.MatchsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const matchs_entity_1 = require("./matchs.entity");
const playersInMatchs_entity_1 = require("./playersInMatchs.entity");
const playersRating_entity_1 = require("./playersRating.entity");
let MatchsService = class MatchsService {
    constructor(matchs, players, rating) {
        this.matchs = matchs;
        this.players = players;
        this.rating = rating;
    }
    async getAll() {
        return await this.matchs.find();
    }
    async findMatch(id) {
        return await this.matchs.findOne(id);
    }
    async getMatchPlayers(id) {
        return await this.players.query("SELECT * FROM playersinmatchs WHERE matchId = " + id);
    }
    async addRating(id, playersR) {
        for (let p of playersR) {
            let pl = await this.rating.findOne({ matchID: id, playerID: p.playerID });
            if (pl == null) {
                pl = this.rating.create({ matchID: id, playerID: p.playerID, rating: p.rating, numOfVotes: 1 });
            }
            else {
                let r = p.rating + pl.rating;
                let n = pl.numOfVotes + 1;
                pl.rating = r;
                pl.numOfVotes = n;
            }
            this.rating.save(pl);
        }
        return playersR;
    }
};
MatchsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(matchs_entity_1.Matchs)),
    __param(1, typeorm_1.InjectRepository(playersInMatchs_entity_1.PlayersInMatchs)),
    __param(2, typeorm_1.InjectRepository(playersRating_entity_1.PlayersRating)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], MatchsService);
exports.MatchsService = MatchsService;
//# sourceMappingURL=matchs.service.js.map