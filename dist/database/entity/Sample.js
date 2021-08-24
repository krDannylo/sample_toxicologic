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
exports.Sample = void 0;
var typeorm_1 = require("typeorm");
var Sample = /** @class */ (function () {
    function Sample() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Sample.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Sample.prototype, "codigo_amostra", void 0);
    __decorate([
        typeorm_1.Column({ type: 'float', default: 0 }),
        __metadata("design:type", Number)
    ], Sample.prototype, "Coca\u00EDna", void 0);
    __decorate([
        typeorm_1.Column({ type: 'float', default: 0 }),
        __metadata("design:type", Number)
    ], Sample.prototype, "Anfetamina", void 0);
    __decorate([
        typeorm_1.Column({ type: 'float', default: 0 }),
        __metadata("design:type", Number)
    ], Sample.prototype, "Metanfetamina", void 0);
    __decorate([
        typeorm_1.Column({ type: 'float', default: 0 }),
        __metadata("design:type", Number)
    ], Sample.prototype, "MDA", void 0);
    __decorate([
        typeorm_1.Column({ type: 'float', default: 0 }),
        __metadata("design:type", Number)
    ], Sample.prototype, "MDMA", void 0);
    __decorate([
        typeorm_1.Column({ type: 'float', default: 0 }),
        __metadata("design:type", Number)
    ], Sample.prototype, "THC", void 0);
    __decorate([
        typeorm_1.Column({ type: 'float', default: 0 }),
        __metadata("design:type", Number)
    ], Sample.prototype, "Morfina", void 0);
    __decorate([
        typeorm_1.Column({ type: 'float', default: 0 }),
        __metadata("design:type", Number)
    ], Sample.prototype, "Code\u00EDna", void 0);
    __decorate([
        typeorm_1.Column({ type: 'float', default: 0 }),
        __metadata("design:type", Number)
    ], Sample.prototype, "Hero\u00EDna", void 0);
    __decorate([
        typeorm_1.Column({ type: 'float', default: 0 }),
        __metadata("design:type", Number)
    ], Sample.prototype, "Benzoilecgonina", void 0);
    __decorate([
        typeorm_1.Column({ type: 'float', default: 0 }),
        __metadata("design:type", Number)
    ], Sample.prototype, "Cocaetileno", void 0);
    __decorate([
        typeorm_1.Column({ type: 'float', default: 0 }),
        __metadata("design:type", Number)
    ], Sample.prototype, "Norcoca\u00EDna", void 0);
    Sample = __decorate([
        typeorm_1.Entity('sample')
    ], Sample);
    return Sample;
}());
exports.Sample = Sample;
