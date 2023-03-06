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
exports.deleteCita = void 0;
const models_1 = require("../../models");
const deleteCita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cita = yield models_1.Cita.findByPk(id);
    if (!cita) {
        return res.status(404).json({
            msg: "No existe un cita con el id " + id,
        });
    }
    yield cita.update({ estado: false });
    // await cita.destroy();
    res.json(cita);
});
exports.deleteCita = deleteCita;
//# sourceMappingURL=deleteCita.js.map