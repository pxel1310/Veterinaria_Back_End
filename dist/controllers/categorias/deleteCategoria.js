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
exports.deleteCategoria = void 0;
const models_1 = require("../../models");
const deleteCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const categoria = yield models_1.Categoria.findByPk(id);
    if (!categoria) {
        return res.status(404).json({
            msg: "No existe una categoria con el id " + id,
        });
    }
    yield categoria.update({ estado: false });
    // await usuario.destroy();
    res.json(categoria);
});
exports.deleteCategoria = deleteCategoria;
//# sourceMappingURL=deleteCategoria.js.map