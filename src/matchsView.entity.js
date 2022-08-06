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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchsView = void 0;
const typeorm_1 = require("typeorm");
const matchs_entity_1 = require("./matchs.entity");
const teamsAgainst_entity_1 = require("./teamsAgainst.entity");
let MatchsView = class MatchsView {
};
__decorate([
    typeorm_1.ViewColumn(),
    __metadata("design:type", Number)
], MatchsView.prototype, "id", void 0);
__decorate([
    typeorm_1.ViewColumn(),
    __metadata("design:type", Number)
], MatchsView.prototype, "against", void 0);
__decorate([
    typeorm_1.ViewColumn(),
    __metadata("design:type", Number)
], MatchsView.prototype, "comp", void 0);
__decorate([
    typeorm_1.ViewColumn(),
    __metadata("design:type", String)
], MatchsView.prototype, "round", void 0);
__decorate([
    typeorm_1.ViewColumn(),
    __metadata("design:type", Number)
], MatchsView.prototype, "homeScore", void 0);
__decorate([
    typeorm_1.ViewColumn(),
    __metadata("design:type", Number)
], MatchsView.prototype, "awayScore", void 0);
__decorate([
    typeorm_1.ViewColumn(),
    __metadata("design:type", Boolean)
], MatchsView.prototype, "homeMatch", void 0);
__decorate([
    typeorm_1.ViewColumn(),
    __metadata("design:type", String)
], MatchsView.prototype, "date", void 0);
__decorate([
    typeorm_1.ViewColumn(),
    __metadata("design:type", Boolean)
], MatchsView.prototype, "isPlayed", void 0);
__decorate([
    typeorm_1.ViewColumn(),
    __metadata("design:type", String)
], MatchsView.prototype, "YTLink", void 0);
MatchsView = __decorate([
    typeorm_1.ViewEntity({
        expression: (connection) => connection.createQueryBuilder()
            .select("matchs.id", "id")
            .addSelect("matchs.comp", "comp")
            .addSelect("matchs.comp", "comp")
            .addSelect("matchs.comp", "comp")
            .addSelect("matchs.comp", "comp")
            .addSelect("category.name", "categoryName")
            .from(matchs_entity_1.Matchs, "matchs")
            .leftJoin(teamsAgainst_entity_1.TeamsAgainst, "category", "category.id = post.categoryId")
    })
], MatchsView);
exports.MatchsView = MatchsView;
//# sourceMappingURL=matchsView.entity.js.map