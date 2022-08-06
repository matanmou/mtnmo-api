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
exports.PlayersInMatchs = void 0;
const typeorm_1 = require("typeorm");
let PlayersInMatchs = class PlayersInMatchs {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PlayersInMatchs.prototype, "MatchId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PlayersInMatchs.prototype, "p1ID", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PlayersInMatchs.prototype, "p2ID", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PlayersInMatchs.prototype, "p3ID", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PlayersInMatchs.prototype, "p4ID", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PlayersInMatchs.prototype, "p5ID", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PlayersInMatchs.prototype, "p6ID", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PlayersInMatchs.prototype, "p7ID", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PlayersInMatchs.prototype, "p8ID", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PlayersInMatchs.prototype, "p9ID", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PlayersInMatchs.prototype, "p10ID", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PlayersInMatchs.prototype, "p11ID", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PlayersInMatchs.prototype, "p12ID", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PlayersInMatchs.prototype, "p13ID", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PlayersInMatchs.prototype, "p14ID", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PlayersInMatchs.prototype, "p15ID", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PlayersInMatchs.prototype, "p16ID", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PlayersInMatchs.prototype, "coachID", void 0);
PlayersInMatchs = __decorate([
    typeorm_1.Entity("playersInMatchs")
], PlayersInMatchs);
exports.PlayersInMatchs = PlayersInMatchs;
//# sourceMappingURL=playersInMatchs.entity.js.map