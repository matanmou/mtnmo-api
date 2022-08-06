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
exports.Matchs = void 0;
const typeorm_1 = require("typeorm");
let Matchs = class Matchs {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Matchs.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Matchs.prototype, "against", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Matchs.prototype, "comp", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Matchs.prototype, "round", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Matchs.prototype, "homeScore", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Matchs.prototype, "awayScore", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Matchs.prototype, "isHomeMatch", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Matchs.prototype, "date", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Matchs.prototype, "isPlayed", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Matchs.prototype, "YTLink", void 0);
Matchs = __decorate([
    typeorm_1.Entity("matchs")
], Matchs);
exports.Matchs = Matchs;
//# sourceMappingURL=matchs.entity.js.map