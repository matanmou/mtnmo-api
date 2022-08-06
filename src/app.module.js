"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ormconfig_1 = require("../ormconfig");
const teamsAgainst_controller_1 = require("./teamsAgainst.controller");
const teamsAgainst_service_1 = require("./teamsAgainst.service");
const teamsAgainst_entity_1 = require("./teamsAgainst.entity");
const iplpredict_picks_entity_1 = require("./iplpredict_picks.entity");
const iplpredict_teams_entity_1 = require("./iplpredict_teams.entity");
const iplpredict_picks_controller_1 = require("./iplpredict_picks.controller");
const iplpredict_picks_service_1 = require("./iplpredict_picks.service");
const iplpredict_teams_service_1 = require("./iplpredict_teams.service");
const iplpredict_teams_controller_1 = require("./iplpredict_teams.controller");
const matchs_entity_1 = require("./matchs.entity");
const matchs_controller_1 = require("./matchs.controller");
const matchs_service_1 = require("./matchs.service");
const players_entity_1 = require("./players.entity");
const players_controller_1 = require("./players.controller");
const players_service_1 = require("./players.service");
const comps_entity_1 = require("./comps.entity");
const comps_controller_1 = require("./comps.controller");
const comps_service_1 = require("./comps.service");
const playersInMatchs_entity_1 = require("./playersInMatchs.entity");
const playersRating_entity_1 = require("./playersRating.entity");
const playersRating_controller_1 = require("./playersRating.controller");
const playersRating_service_1 = require("./playersRating.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(ormconfig_1.default),
            typeorm_1.TypeOrmModule.forFeature([
                teamsAgainst_entity_1.TeamsAgainst,
                matchs_entity_1.Matchs,
                playersInMatchs_entity_1.PlayersInMatchs,
                players_entity_1.Players,
                comps_entity_1.Comps,
                playersRating_entity_1.PlayersRating,
                iplpredict_picks_entity_1.IplPredictPicks,
                iplpredict_teams_entity_1.IplPredictTeams
            ])
        ],
        controllers: [
            teamsAgainst_controller_1.TeamAgainstController,
            iplpredict_picks_controller_1.IplPredictPicksController,
            iplpredict_teams_controller_1.IplPredictTeamsController,
            matchs_controller_1.MatchsController,
            comps_controller_1.CompsController,
            players_controller_1.PlayersController,
            playersRating_controller_1.PlayersRatingController
        ],
        providers: [
            teamsAgainst_service_1.TeamsAgainstService,
            iplpredict_picks_service_1.IplPredictPicksService,
            iplpredict_teams_service_1.IplPredictTeamstService,
            matchs_service_1.MatchsService,
            players_service_1.PlayersService,
            comps_service_1.CompsService,
            playersRating_service_1.PlayersRatingService
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map