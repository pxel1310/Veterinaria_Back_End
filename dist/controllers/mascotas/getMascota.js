"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMascota = void 0;
const models_1 = require("../../models");
const getMascota = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const mascota = yield models_1.Mascota.findByPk(id);
    if (mascota) {
        res.json(mascota);
    }
    else {
        res.status(404).json({
            msg: `No existe un mascota con el id ${id}`,
        });
    }
});
exports.getMascota = getMascota;
//# sourceMappingURL=getMascota.js.map