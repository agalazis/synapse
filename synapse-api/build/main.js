require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("inversify");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__annotations__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environment_services__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__interfaces__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__module__ = __webpack_require__(40);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__server__ = __webpack_require__(16);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__(2);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__constants__["a"]; });
/* unused harmony reexport interfaces */
/* unused harmony reexport environmentServices */
/* unused harmony reexport util */
/* unused harmony reexport annotations */










/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tags__ = __webpack_require__(35);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__(15);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__types__["a"]; });




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__messaging_service__ = __webpack_require__(53);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__messaging_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__promotion_service__ = __webpack_require__(54);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__promotion_service__["a"]; });




/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const TYPES = {
    MessagingService: Symbol.for('MessagingService'),
    PromotionService: Symbol.for('PromotionService')
};
/* harmony export (immutable) */ __webpack_exports__["a"] = TYPES;



/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("http-errors");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("inversify-express-utils");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__promotions__ = __webpack_require__(24);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__promotions__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tags__ = __webpack_require__(8);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types__ = __webpack_require__(4);
/* unused harmony namespace reexport */





/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const TAGS = {
    SMSPromotionController: Symbol.for('SMSPromotionController'),
};
/* harmony export (immutable) */ __webpack_exports__["a"] = TAGS;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sms_promotion_controller__ = __webpack_require__(25);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__sms_promotion_controller__["a"]; });



/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_environment_service__ = __webpack_require__(28);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_environment_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__twilio_environment_service__ = __webpack_require__(29);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__twilio_environment_service__["a"]; });




/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("convict");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const appEnvironmentSchema = {
    id: {
        default: 8080,
        doc: 'The port of the api',
        env: 'APP_ID',
        format: 'port',
    },
    env: {
        default: "development",
        doc: "The applicaton environment.",
        env: "NODE_ENV",
        format: ["production", "development", "test"],
    },
    logLevel: {
        default: '',
        doc: 'The swagger spec path of the api',
        env: 'APP_LOG_LEVEL',
        format: String,
    },
    port: {
        default: 8080,
        doc: 'The port of the api',
        env: 'APP_PORT',
        format: 'port',
    },
    sessionSecret: {
        default: '',
        doc: 'The session secret of the api',
        env: 'APP_SESSION_SECRET',
        format: String,
    },
    swaggerSpecPath: {
        default: '',
        doc: 'The swagger spec path of the api',
        env: 'APP_SWAGGER_SPEC_PATH',
        format: String,
    },
    requestSizeLimit: {
        default: '',
        doc: 'The swagger spec path of the api',
        env: 'APP_REQUEST_SIZE_LIMIT',
        format: String,
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = appEnvironmentSchema;



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__twilio__ = __webpack_require__(37);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__logger__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__twilio__; });





/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const TYPES = {
    Logger: Symbol.for('Logger'),
    AppEnvironmentService: Symbol.for('AppEnvironmentService'),
    TwilioEnvironmentService: Symbol.for('TwilioEnvironmentService'),
    Swagger: Symbol.for('Swagger'),
    MessagePublisher: Symbol.for('MessagePublisher'),
    InversifyExpressSwaggerServer: Symbol.for('InversifyExpressSwaggerServer'),
    HttpErrorService: Symbol.for('HttpErrorService')
};
/* harmony export (immutable) */ __webpack_exports__["a"] = TYPES;



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InversifyExpressSwaggerServer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_body_parser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cookie_parser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_inversify__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_inversify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_inversify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_inversify_express_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_inversify_express_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_inversify_express_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_inversify_logger_middleware__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_inversify_logger_middleware___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_inversify_logger_middleware__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_os__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_os___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_os__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_path__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants_types__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









let InversifyExpressSwaggerServer = class InversifyExpressSwaggerServer {
    constructor(appEnvironmentService, swagger, logger) {
        this.appEnvironmentService = appEnvironmentService;
        this.swagger = swagger;
        this.logger = logger;
    }
    init(container) {
        const env = this.appEnvironmentService.get('env');
        if (env === 'development') {
            const logger = Object(__WEBPACK_IMPORTED_MODULE_5_inversify_logger_middleware__["makeLoggerMiddleware"])();
            container.applyMiddleware(logger);
        }
        this.server = new __WEBPACK_IMPORTED_MODULE_4_inversify_express_utils__["InversifyExpressServer"](container, null, {
            rootPath: '/api',
        });
        return this;
    }
    registerMiddleware() {
        this.server.setConfig((app) => {
            const root = __WEBPACK_IMPORTED_MODULE_7_path__["normalize"](__dirname + '/../..');
            app.set('appPath', root + 'client');
            app.use(__WEBPACK_IMPORTED_MODULE_0_body_parser__["json"]());
            app.use(__WEBPACK_IMPORTED_MODULE_0_body_parser__["urlencoded"]({ extended: true }));
            app.use(__WEBPACK_IMPORTED_MODULE_1_cookie_parser__(process.env.SESSION_SECRET));
            app.use(__WEBPACK_IMPORTED_MODULE_2_express__["static"](`${root}/public`));
            this.swaggerify(app);
        });
        this.server.setErrorConfig((app) => {
            this.registerErrorHandlers(app);
        });
        return this;
    }
    listen() {
        const port = this.appEnvironmentService.get('port');
        const welcome = (port) => () => this.logger.info(`up and running in ${"production" ||
            'development'} @: ${__WEBPACK_IMPORTED_MODULE_6_os__["hostname"]()} on port: ${port}}`);
        this.server.build().listen(port, welcome(port));
        return this;
    }
    swaggerify(app) {
        const { sessionSecret, swaggerSpecPath, requestSizeLimit, } = this.appEnvironmentService.getProperties();
        return this.swagger.swaggerify(app, {
            sessionSecret,
            swaggerSpecPath,
            requestSizeLimit,
        });
    }
    registerErrorHandlers(app) {
        return this.swagger.registerErrorHandlers(app);
    }
    get server() {
        if (!this._server) {
            throw new Error('Server not initialized!');
        }
        return this._server;
    }
    set server(server) {
        if (this._server) {
            throw new Error('Server already initialized!');
        }
        this._server = server;
    }
};
InversifyExpressSwaggerServer = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3_inversify__["injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_3_inversify__["inject"])(__WEBPACK_IMPORTED_MODULE_8__constants_types__["a" /* TYPES */].AppEnvironmentService)),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_3_inversify__["inject"])(__WEBPACK_IMPORTED_MODULE_8__constants_types__["a" /* TYPES */].Swagger)),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_3_inversify__["inject"])(__WEBPACK_IMPORTED_MODULE_8__constants_types__["a" /* TYPES */].Logger)),
    __metadata("design:paramtypes", [Object, Object, Object])
], InversifyExpressSwaggerServer);


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "server/common"))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_env__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reflect_metadata__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reflect_metadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reflect_metadata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_inversify__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_inversify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_inversify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common__ = __webpack_require__(1);





const container = new __WEBPACK_IMPORTED_MODULE_2_inversify__["Container"]();
container.load(__WEBPACK_IMPORTED_MODULE_3__api__["a" /* apiModule */], __WEBPACK_IMPORTED_MODULE_4__common__["b" /* commonModule */]);
/* harmony default export */ __webpack_exports__["default"] = (container.get(__WEBPACK_IMPORTED_MODULE_4__common__["a" /* TYPES */].InversifyExpressSwaggerServer)
    .init(container)
    .registerMiddleware()
    .listen());


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dotenv__);

__WEBPACK_IMPORTED_MODULE_0_dotenv__["config"]();


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("reflect-metadata");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(7);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers__ = __webpack_require__(9);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(3);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module__ = __webpack_require__(57);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__module__["a"]; });






/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const PROMOTIONS = {
    AM: 'Good morning! Your promocode is AM123',
    PM: 'Hello! Your promocode is PM456',
};
/* harmony export (immutable) */ __webpack_exports__["a"] = PROMOTIONS;



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMSPromotionController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inversify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_inversify_express_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_inversify_express_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_inversify_express_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_awesome_phonenumber__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_awesome_phonenumber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_awesome_phonenumber__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








let SMSPromotionController = class SMSPromotionController {
    constructor(messagingService, promotionService, httpErrorService) {
        this.messagingService = messagingService;
        this.promotionService = promotionService;
        this.httpErrorService = httpErrorService;
    }
    create(//422
        phoneNumber, satisfyAgeRestriction, acceptTermsOfUse, next) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('here');
            const pn = new __WEBPACK_IMPORTED_MODULE_6_awesome_phonenumber___default.a(phoneNumber);
            if (!pn.isMobile()) {
                // find one accepts only valid strings, no need for constants 
                // thanks to its signature. <3TS
                return next(this.httpErrorService.findOne('CANNOT_PROCESS_PHONE_NUMBER'));
            }
            if (!satisfyAgeRestriction) {
                return next(this.httpErrorService.findOne('AGE_RESTRICTION_NOT_SATISFIED'));
            }
            if (!acceptTermsOfUse) {
                return next(this.httpErrorService.findOne('TERMS_OF_USE_NOT_ACCEPTED'));
            }
            return this.promotionService.findCurrent().then((promo) => this.messagingService
                .create(promo, phoneNumber)
                .then(({ sid, dateCreated, dateUpdated, dateSent, to, status }) => ({ sid, dateCreated, dateUpdated, dateSent, to, status }))).catch(e => next(e));
        });
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5_inversify_express_utils__["httpPost"])('/'),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_5_inversify_express_utils__["requestBody"])('phoneNumber')),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_5_inversify_express_utils__["requestBody"])('satisfyAgeRestriction')),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_5_inversify_express_utils__["requestBody"])('acceptTermsOfUse')),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_5_inversify_express_utils__["next"])()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean, Boolean, Function]),
    __metadata("design:returntype", Promise)
], SMSPromotionController.prototype, "create", null);
SMSPromotionController = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5_inversify_express_utils__["controller"])('/sms-promotion'),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_1_inversify__["inject"])(__WEBPACK_IMPORTED_MODULE_2__constants_types__["a" /* TYPES */].MessagingService)),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_1_inversify__["inject"])(__WEBPACK_IMPORTED_MODULE_2__constants_types__["a" /* TYPES */].PromotionService)),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_1_inversify__["inject"])(__WEBPACK_IMPORTED_MODULE_3__common__["a" /* TYPES */].HttpErrorService)),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services__["a" /* MessagingService */],
        __WEBPACK_IMPORTED_MODULE_4__services__["b" /* PromotionService */], Object])
], SMSPromotionController);



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__throws_http_error__ = __webpack_require__(27);
/* unused harmony reexport namespace */



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export throwsHttpError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_http_errors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_http_errors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_http_errors__);

function throwsHttpError(constructor) {
    Object.defineProperty(constructor.prototype, 'createHtttpError', {
        // tslint:disable-next-line:object-literal-shorthand
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_0_http_errors__;
        },
        enumerable: true,
        configurable: true,
    });
    return constructor;
}


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_convict__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_convict___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_convict__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schemas_app_environment_schema__ = __webpack_require__(13);


const appEnvironmentService = __WEBPACK_IMPORTED_MODULE_0_convict__(__WEBPACK_IMPORTED_MODULE_1__schemas_app_environment_schema__["a" /* appEnvironmentSchema */]);
/* harmony export (immutable) */ __webpack_exports__["a"] = appEnvironmentService;



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_convict__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_convict___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_convict__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schemas__ = __webpack_require__(30);


const twilioEnvironmentService = __WEBPACK_IMPORTED_MODULE_0_convict__(__WEBPACK_IMPORTED_MODULE_1__schemas__["a" /* twilioEnvironmentSchema */]);
/* harmony export (immutable) */ __webpack_exports__["a"] = twilioEnvironmentService;



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_environment_schema__ = __webpack_require__(13);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__twilio_environment_schema__ = __webpack_require__(31);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__twilio_environment_schema__["a"]; });




/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const twilioEnvironmentSchema = {
    accountSid: {
        default: '',
        doc: 'The sid that can be found on twilio console',
        env: 'TWILIO_ACCOUNT_SID',
        format: String,
    },
    authToken: {
        default: '',
        doc: 'Your twilio auth token',
        env: 'TWILIO_AUTH_TOKEN',
        format: String,
    },
    twilioPhoneNumber: {
        default: '',
        doc: 'Your twilio phone number',
        env: 'TWILIO_PHONE_NUMBER',
        format: String,
    },
};
/* harmony export (immutable) */ __webpack_exports__["a"] = twilioEnvironmentSchema;



/***/ }),
/* 32 */
/***/ (function(module, exports) {



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_logger__ = __webpack_require__(34);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AppLogger", function() { return __WEBPACK_IMPORTED_MODULE_0__app_logger__["a"]; });



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppLogger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inversify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pino__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pino___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pino__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



let AppLogger = class AppLogger {
    constructor(appEnvironmentService) {
        this.initLogger(appEnvironmentService.get('id'), appEnvironmentService.get('logLevel'));
    }
    initLogger(name, level) {
        this.logger = __WEBPACK_IMPORTED_MODULE_2_pino__({ name, level });
    }
    getLogger() {
        return this.logger;
    }
    info(...message) {
        const UUID = this.getUUID();
        this.logger.info(Object.assign({ UUID }, message));
    }
    debug(...message) {
        const UUID = this.getUUID();
        this.logger.debug(Object.assign({ UUID }, message));
    }
    error(...message) {
        const UUID = this.getUUID();
        this.logger.error(Object.assign({ UUID }, message));
    }
    logAPITraceOut(req, res, message) {
        const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        const responseTime = res.getHeader('x-response-time');
        const status = res.status;
        const uuid = this.getUUID();
        if (message !== undefined) {
            this.logger.info({ uuid, fullUrl, status, responseTime, message });
        }
        else {
            this.logger.info({ uuid, fullUrl, status, responseTime });
        }
    }
    logAPITrace(req, res, statusCode, message) {
        const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        const responseTime = res.getHeader('x-response-time');
        const uuid = this.getUUID();
        if (message !== undefined) {
            this.logger.info({ uuid, fullUrl, statusCode, responseTime, message });
        }
        else {
            this.logger.info({ uuid, fullUrl, statusCode, responseTime });
        }
    }
    setUUID(uuid) {
        this.uuid = uuid;
    }
    getUUID() {
        return this.uuid;
    }
};
AppLogger = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_inversify__["injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0_inversify__["inject"])(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* TYPES */].AppEnvironmentService)),
    __metadata("design:paramtypes", [Object])
], AppLogger);



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const TAGS = {
    Logger: Symbol.for('Logger'),
};
/* unused harmony export TAGS */



/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("pino");

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__message_publisher__ = __webpack_require__(38);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MessagePublisher", function() { return __WEBPACK_IMPORTED_MODULE_0__message_publisher__["a"]; });



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePublisher; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_twilio__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_twilio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_twilio__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_inversify__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_inversify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_inversify__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let MessagePublisher = class MessagePublisher {
    constructor(twilioEnvironmentService) {
        this.twilioEnvironmentService = twilioEnvironmentService;
        this.messageDefaults = {};
        const { accountSid, authToken, twilioPhoneNumber } = twilioEnvironmentService.getProperties();
        if (twilioPhoneNumber) {
            this.messageDefaults = { from: twilioPhoneNumber };
        }
        this.twilio = __WEBPACK_IMPORTED_MODULE_0_twilio__(accountSid, authToken);
    }
    get messages() {
        return this.twilio.messages;
    }
    composeMessage(message) {
        return Object.assign({}, this.messageDefaults, message);
    }
    create(msg) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = this.composeMessage(msg);
            return this.messages.create(message).then((result) => {
                const { sid, accountSid, dateCreated, dateUpdated, dateSent, to, from, body, status } = result;
                return {
                    sid,
                    accountSid,
                    dateCreated,
                    dateUpdated,
                    dateSent,
                    to,
                    from,
                    body,
                    status
                };
            });
        });
    }
};
MessagePublisher = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_inversify__["injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_2_inversify__["inject"])(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* TYPES */].TwilioEnvironmentService)),
    __metadata("design:paramtypes", [Object])
], MessagePublisher);



/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("twilio");

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inversify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environment_services__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__server__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swagger__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util__ = __webpack_require__(14);







// const getLogger = ({container}:inversifyInterfaces.Context)=>{
//   const appEnvironmentService = container.get(TYPES.AppEnvironmentService) as IEnvironmentService<IAppEnvironment>
//   return Logger.getOrCreate(appEnvironmentService);
// }
const commonModule = new __WEBPACK_IMPORTED_MODULE_0_inversify__["ContainerModule"]((bind, unbind, isBound, rebind) => {
    bind(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* TYPES */].TwilioEnvironmentService).toConstantValue(__WEBPACK_IMPORTED_MODULE_2__environment_services__["b" /* twilioEnvironmentService */]);
    bind(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* TYPES */].AppEnvironmentService).toConstantValue(__WEBPACK_IMPORTED_MODULE_2__environment_services__["a" /* appEnvironmentService */]);
    bind(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* TYPES */].InversifyExpressSwaggerServer)
        .to(__WEBPACK_IMPORTED_MODULE_3__server__["a" /* InversifyExpressSwaggerServer */])
        .inSingletonScope();
    bind(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* TYPES */].MessagePublisher)
        .to(__WEBPACK_IMPORTED_MODULE_6__util__["b" /* Twilio */].MessagePublisher)
        .inSingletonScope();
    bind(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* TYPES */].Logger)
        .to(__WEBPACK_IMPORTED_MODULE_6__util__["a" /* Logger */].AppLogger)
        .inSingletonScope();
    bind(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* TYPES */].HttpErrorService)
        .to(__WEBPACK_IMPORTED_MODULE_4__services__["a" /* HttpErrorService */])
        .inSingletonScope();
    bind(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* TYPES */].Swagger).toConstantValue(__WEBPACK_IMPORTED_MODULE_5__swagger__["a" /* Swagger */]);
});
/* harmony export (immutable) */ __webpack_exports__["a"] = commonModule;



/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("inversify-logger-middleware");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_error_service__ = __webpack_require__(46);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__http_error_service__["a"]; });



/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpErrorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_http_errors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_http_errors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_http_errors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_inversify__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_inversify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_inversify__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let HttpErrorService = class HttpErrorService {
    constructor() {
        this.httpErrors = new Map();
        this.init();
    }
    setError(errorKey, value) {
        this.httpErrors.set(errorKey, value);
    }
    getError(errorKey) {
        return this.httpErrors.get(errorKey);
    }
    init() {
        for (let errorKey in __WEBPACK_IMPORTED_MODULE_1__config__["a" /* HTTP_ERRORS */]) {
            if (__WEBPACK_IMPORTED_MODULE_1__config__["a" /* HTTP_ERRORS */].hasOwnProperty(errorKey)) {
                const { code, message } = __WEBPACK_IMPORTED_MODULE_1__config__["a" /* HTTP_ERRORS */][errorKey];
                this.httpErrors.set(errorKey, __WEBPACK_IMPORTED_MODULE_0_http_errors__(code, message));
            }
        }
    }
    findOne(errorKey) {
        return this.getError(errorKey);
    }
};
HttpErrorService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_inversify__["injectable"])(),
    __metadata("design:paramtypes", [])
], HttpErrorService);



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_error_defintion__ = __webpack_require__(48);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__http_error_defintion__["a"]; });



/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const HTTP_ERRORS = {
    CANNOT_PROCESS_PHONE_NUMBER: {
        code: 422,
        message: 'Cannot process the provided phone number. Please make  sure it\'s an international mobile phone numbers.'
    },
    AGE_RESTRICTION_NOT_SATISFIED: {
        code: 451,
        message: 'Age restriction not staisfied.'
    },
    TERMS_OF_USE_NOT_ACCEPTED: {
        code: 451,
        message: 'Terms of use not accepted.'
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = HTTP_ERRORS;



/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__swagger__ = __webpack_require__(50);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__swagger__["a"]; });



/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swagger_express_middleware__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swagger_express_middleware___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_swagger_express_middleware__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_http_errors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_http_errors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_http_errors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_http_errors_express__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_http_errors_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_http_errors_express__);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class Swagger {
    static swaggerify(app, middlewareConfig) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                __WEBPACK_IMPORTED_MODULE_0_swagger_express_middleware__(__WEBPACK_IMPORTED_MODULE_1_path__["join"](__dirname, 'Api.yaml'), app, function (err, middleware) {
                    // Enable Express' case-sensitive and strict options
                    // (so "/entities", "/Entities", and "/Entities/" are all different)
                    app.enable('case sensitive routing');
                    app.enable('strict routing');
                    app.use(middleware.metadata());
                    app.use(middleware.files(app, {
                        apiPath: middlewareConfig.swaggerSpecPath,
                    }));
                    app.use(middleware.parseRequest({
                        // Configure the cookie parser to use secure cookies
                        cookie: {
                            secret: middlewareConfig.sessionSecret
                        },
                        // Don't allow JSON content over 100kb (default is 1mb)
                        json: {
                            limit: middlewareConfig.requestSizeLimit
                        }
                    }));
                    // These two middleware don't have any options (yet)
                    app.use(middleware.CORS(), middleware.validateRequest());
                    resolve(app);
                });
            });
        });
    }
    static registerErrorHandlers(app) {
        // converts any error to valid http error
        app.use(function (err, req, res, next) {
            if (err.statusCode && err.message) {
                return next(err);
            }
            if (err.status && err.message) {
                return next(__WEBPACK_IMPORTED_MODULE_2_http_errors__(err.status, err.message));
            }
            return next(__WEBPACK_IMPORTED_MODULE_2_http_errors__(500, 'Internal Server Error'));
        });
        app.use(__WEBPACK_IMPORTED_MODULE_3_http_errors_express___default()());
    }
    constructor() { }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Swagger;


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "server/common/swagger"))

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("swagger-express-middleware");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("http-errors-express");

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inversify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let MessagingService = class MessagingService {
    constructor(message) {
        this.message = message;
    }
    create(msg, telephoneNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.message.create({
                body: msg,
                to: telephoneNumber,
            });
        });
    }
};
MessagingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_inversify__["injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0_inversify__["inject"])(__WEBPACK_IMPORTED_MODULE_1__common__["a" /* TYPES */].MessagePublisher)),
    __metadata("design:paramtypes", [Object])
], MessagingService);



/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inversify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let PromotionService = class PromotionService {
    findCurrent() {
        return __awaiter(this, void 0, void 0, function* () {
            // returning promise to future-proof the 
            // interface of the service since promotions
            // could come from db
            return new Promise((resolve, reject) => {
                const timeKey = __WEBPACK_IMPORTED_MODULE_2_moment__().format('A');
                resolve(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* PROMOTIONS */][timeKey]);
            });
        });
    }
};
PromotionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_inversify__["injectable"])()
], PromotionService);



/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("awesome-phonenumber");

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inversify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify_express_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify_express_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inversify_express_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_tags__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controllers__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__(3);







const apiModule = new __WEBPACK_IMPORTED_MODULE_0_inversify__["ContainerModule"]((bind, unbind, isBound, rebind) => {
    bind(__WEBPACK_IMPORTED_MODULE_1_inversify_express_utils__["TYPE"].Controller)
        .to(__WEBPACK_IMPORTED_MODULE_4__controllers__["a" /* SMSPromotionController */])
        .whenTargetNamed(__WEBPACK_IMPORTED_MODULE_2__constants_tags__["a" /* TAGS */].SMSPromotionController);
    bind(__WEBPACK_IMPORTED_MODULE_3__constants_types__["a" /* TYPES */].MessagingService).to(__WEBPACK_IMPORTED_MODULE_5__services__["a" /* MessagingService */]);
    bind(__WEBPACK_IMPORTED_MODULE_3__constants_types__["a" /* TYPES */].PromotionService).to(__WEBPACK_IMPORTED_MODULE_5__services__["b" /* PromotionService */]);
});
/* harmony export (immutable) */ __webpack_exports__["a"] = apiModule;



/***/ })
/******/ ]);
//# sourceMappingURL=main.map