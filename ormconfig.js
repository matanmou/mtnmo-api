"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comps_entity_1 = require("./src/comps.entity");
const iplpredict_picks_entity_1 = require("./src/iplpredict_picks.entity");
const iplpredict_teams_entity_1 = require("./src/iplpredict_teams.entity");
const matchs_entity_1 = require("./src/matchs.entity");
const players_entity_1 = require("./src/players.entity");
const playersInMatchs_entity_1 = require("./src/playersInMatchs.entity");
const playersRating_entity_1 = require("./src/playersRating.entity");
const teamsAgainst_entity_1 = require("./src/teamsAgainst.entity");
const config = {
    "type": "mysql",
    "host": "auth-db245.hstgr.io",
    "database": "u204583962_api",
    "username": "u204583962_matanmo",
    "password": "Matan1993",
    "entities": [
        teamsAgainst_entity_1.TeamsAgainst,
        matchs_entity_1.Matchs,
        playersInMatchs_entity_1.PlayersInMatchs,
        players_entity_1.Players,
        comps_entity_1.Comps,
        playersRating_entity_1.PlayersRating,
        iplpredict_picks_entity_1.IplPredictPicks,
        iplpredict_teams_entity_1.IplPredictTeams
    ],
    "synchronize": false
};
exports.default = config;
//# sourceMappingURL=ormconfig.js.map