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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var bcrypt = require('bcrypt');
var db = require('../config/db.config');
function createInitialUser() {
    return __awaiter(this, void 0, void 0, function () {
        function _0x22af() { var _0x1a9f05 = ['20469955tQUBBj', 'rima2025', '12176owkXBY', '2293940yGuwTE', '1795faCjLj', '871000VAyJjF', '3907047BsHALJ', '744JurtQk', '5831xdFLNo', 'rima@2025', '30JUAJxt', '18DWhMXa', '54617Baeeto']; _0x22af = function () { return _0x1a9f05; }; return _0x22af(); }
        function _0x3b0f(_0x23e99a, _0x118bda) { var _0x22af03 = _0x22af(); return _0x3b0f = function (_0x3b0f4b, _0x12c3a4) { _0x3b0f4b = _0x3b0f4b - 0x14e; var _0xbc207e = _0x22af03[_0x3b0f4b]; return _0xbc207e; }, _0x3b0f(_0x23e99a, _0x118bda); }
        var _0x1c7180, username, password, saltRounds, hashedPassword, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    _0x1c7180 = _0x3b0f;
                    (function (_0x2bd1e3, _0x268934) { var _0x309cb6 = _0x3b0f, _0xce8dff = _0x2bd1e3(); while (!![]) {
                        try {
                            var _0x2a51fe = parseInt(_0x309cb6(0x155)) / 0x1 * (-parseInt(_0x309cb6(0x153)) / 0x2) + parseInt(_0x309cb6(0x14f)) / 0x3 + parseInt(_0x309cb6(0x14e)) / 0x4 + parseInt(_0x309cb6(0x15a)) / 0x5 * (parseInt(_0x309cb6(0x150)) / 0x6) + parseInt(_0x309cb6(0x151)) / 0x7 * (-parseInt(_0x309cb6(0x158)) / 0x8) + -parseInt(_0x309cb6(0x154)) / 0x9 * (parseInt(_0x309cb6(0x159)) / 0xa) + parseInt(_0x309cb6(0x156)) / 0xb;
                            if (_0x2a51fe === _0x268934)
                                break;
                            else
                                _0xce8dff['push'](_0xce8dff['shift']());
                        }
                        catch (_0xd728f) {
                            _0xce8dff['push'](_0xce8dff['shift']());
                        }
                    } }(_0x22af, 0xd6c23));
                    username = _0x1c7180(0x157), password = _0x1c7180(0x152);
                    saltRounds = 10;
                    return [4 /*yield*/, bcrypt.hash(password, saltRounds)];
                case 1:
                    hashedPassword = _a.sent();
                    // Insertar usuario
                    return [4 /*yield*/, db.execute('INSERT INTO zcusuarios (nomUser, password) VALUES (?, ?)', [username, hashedPassword])];
                case 2:
                    // Insertar usuario
                    _a.sent();
                    console.log('Usuario creado exitosamente');
                    process.exit(0);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('Error al crear usuario:', error_1);
                    process.exit(1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
createInitialUser();
