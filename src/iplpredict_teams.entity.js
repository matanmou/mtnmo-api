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
exports.IplPredictTeams = void 0;
const typeorm_1 = require("typeorm");
let IplPredictTeams = class IplPredictTeams {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], IplPredictTeams.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], IplPredictTeams.prototype, "teamName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], IplPredictTeams.prototype, "pColor", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], IplPredictTeams.prototype, "sColor", void 0);
IplPredictTeams = __decorate([
    typeorm_1.Entity("iplpredict_teams")
], IplPredictTeams);
exports.IplPredictTeams = IplPredictTeams;
//# sourceMappingURL=iplpredict_teams.entity.js.map