/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./server/context/isAuth.ts":
/*!**********************************!*\
  !*** ./server/context/isAuth.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);



(0,dotenv__WEBPACK_IMPORTED_MODULE_1__.config)({
  path: path__WEBPACK_IMPORTED_MODULE_2___default().resolve(__dirname, "../", "../", ".env")
});
var JWT_SECRET = process.env.JWT_SECRET;

var isAuth = function isAuth(req) {
  var auth = req && req.headers && req.headers.authorization;

  if (!auth) {
    throw new Error("Access denied!");
  }

  var token = auth.split(" ")[1];

  if (!token) {
    throw new Error("Access denied!");
  }

  var decodedToken;

  try {
    var _jwt$verify = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, JWT_SECRET),
        userId = _jwt$verify.userId;

    decodedToken = userId;
  } catch (error) {
    throw new Error("Access denied!");
  }

  if (!decodedToken) {
    throw new Error("Access denied!");
  }

  return {
    userId: decodedToken
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isAuth);

/***/ }),

/***/ "./server/helpers/color.ts":
/*!*********************************!*\
  !*** ./server/helpers/color.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getColor": () => (/* binding */ getColor)
/* harmony export */ });
var getColor = function getColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

/***/ }),

/***/ "./server/models/User.ts":
/*!*******************************!*\
  !*** ./server/models/User.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

var schema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  ava: {
    type: String,
    "default": ""
  },
  color: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  role: {
    type: String,
    "default": "user",
    "enum": ["user", "admin"]
  },
  date: {
    type: Date,
    required: true
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("User", schema));

/***/ }),

/***/ "./server/models/index.ts":
/*!********************************!*\
  !*** ./server/models/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* reexport safe */ _User__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./server/models/User.ts");



/***/ }),

/***/ "./server/resolvers/index.ts":
/*!***********************************!*\
  !*** ./server/resolvers/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users */ "./server/resolvers/users.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  Query: _objectSpread({}, _users__WEBPACK_IMPORTED_MODULE_1__.Query),
  Mutation: _objectSpread({}, _users__WEBPACK_IMPORTED_MODULE_1__.Mutation)
});

/***/ }),

/***/ "./server/resolvers/users.ts":
/*!***********************************!*\
  !*** ./server/resolvers/users.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Query": () => (/* binding */ Query),
/* harmony export */   "Mutation": () => (/* binding */ Mutation)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _validation_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validation/main */ "./server/validation/main.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models */ "./server/models/index.ts");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers_color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/color */ "./server/helpers/color.ts");









(0,dotenv__WEBPACK_IMPORTED_MODULE_6__.config)({
  path: path__WEBPACK_IMPORTED_MODULE_7___default().resolve(__dirname, "../", "../", ".env")
});
var JWT_SECRET = process.env.JWT_SECRET;
var Query = {
  getUser: function getUser(_, _ref) {
    var userId = _ref.userId;

    try {
      return _models__WEBPACK_IMPORTED_MODULE_3__.User.findById(userId).select("-password");
    } catch (error) {
      throw new Error("Getting user data error: ".concat(error.message));
    }
  }
};
var Mutation = {
  loginUser: function loginUser(_, _ref2) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var _email, password, _checkIsEmpty, email, user, token;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _email = _ref2.email, password = _ref2.password;
              _context.prev = 1;
              _checkIsEmpty = (0,_validation_main__WEBPACK_IMPORTED_MODULE_2__.checkIsEmpty)({
                email: _email,
                password: password
              }), email = _checkIsEmpty.email;
              (0,_validation_main__WEBPACK_IMPORTED_MODULE_2__.checkIsEmail)({
                email: email
              });
              _context.next = 6;
              return (0,_validation_main__WEBPACK_IMPORTED_MODULE_2__.checkIfExists)({
                key: "email",
                value: _email,
                Modal: _models__WEBPACK_IMPORTED_MODULE_3__.User,
                msg: "User with this email doesn't exists!"
              });

            case 6:
              user = _context.sent;
              (0,_validation_main__WEBPACK_IMPORTED_MODULE_2__.comparePasswords)({
                password: password,
                hPass: user.password
              });
              token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_5___default().sign({
                userId: user._id
              }, JWT_SECRET);
              return _context.abrupt("return", {
                userId: user._id,
                token: token
              });

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](1);
              throw new Error(_context.t0.message);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 12]]);
    }))();
  },
  registerUser: function registerUser(_, _ref3) {
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var _firstname, _lastname, _email, password, role, _checkIsEmpty2, firstname, lastname, email, hashedPass, user, newUser, token;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _firstname = _ref3.firstname, _lastname = _ref3.lastname, _email = _ref3.email, password = _ref3.password, role = _ref3.role;
              _context2.prev = 1;
              _checkIsEmpty2 = (0,_validation_main__WEBPACK_IMPORTED_MODULE_2__.checkIsEmpty)({
                firstname: _firstname,
                lastname: _lastname,
                email: _email,
                password: password
              }), firstname = _checkIsEmpty2.firstname, lastname = _checkIsEmpty2.lastname, email = _checkIsEmpty2.email;
              (0,_validation_main__WEBPACK_IMPORTED_MODULE_2__.checkLength)({
                params: {
                  firstname: firstname,
                  lastname: lastname
                },
                max: 50
              });
              (0,_validation_main__WEBPACK_IMPORTED_MODULE_2__.checkIsEmail)({
                email: email
              });
              _context2.next = 7;
              return (0,_validation_main__WEBPACK_IMPORTED_MODULE_2__.checkIfExists)({
                key: "email",
                value: _email,
                Modal: _models__WEBPACK_IMPORTED_MODULE_3__.User,
                msg: "User with this email is already exists, choose another one!",
                isTrue: true
              });

            case 7:
              hashedPass = bcryptjs__WEBPACK_IMPORTED_MODULE_4___default().hashSync(password, bcryptjs__WEBPACK_IMPORTED_MODULE_4___default().genSaltSync(12));
              user = new _models__WEBPACK_IMPORTED_MODULE_3__.User({
                email: _email,
                firstname: _firstname,
                lastname: _lastname,
                password: hashedPass,
                role: role,
                color: (0,_helpers_color__WEBPACK_IMPORTED_MODULE_8__.getColor)(),
                date: new Date()
              });
              _context2.next = 11;
              return user.save();

            case 11:
              newUser = _context2.sent;
              token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_5___default().sign({
                userId: newUser._id
              }, JWT_SECRET);
              return _context2.abrupt("return", {
                userId: newUser.id,
                token: token
              });

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](1);
              throw new Error(_context2.t0.message);

            case 19:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 16]]);
    }))();
  }
};


/***/ }),

/***/ "./server/typeDefs.ts":
/*!****************************!*\
  !*** ./server/typeDefs.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "@babel/runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_1__);


var _templateObject;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,apollo_server_express__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  type User {\n    _id: String!\n    email: String!\n    ava: String\n    color: String!\n    firstname: String!\n    lastname: String!\n    role: String!\n    date: String!\n  }\n  type Auth {\n    userId: String\n    token: String\n  }\n  type Query {\n    getUser(userId: String!): User!\n  }\n  type Mutation {\n    loginUser(email: String!, password: String!): Auth!\n    registerUser(\n      firstname: String!\n      lastname: String!\n      email: String!\n      password: String!\n      role: String\n    ): Auth!\n  }\n"]))));

/***/ }),

/***/ "./server/validation/main.ts":
/*!***********************************!*\
  !*** ./server/validation/main.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Validation": () => (/* binding */ Validation),
/* harmony export */   "checkIsEmpty": () => (/* binding */ checkIsEmpty),
/* harmony export */   "checkIsEmail": () => (/* binding */ checkIsEmail),
/* harmony export */   "checkLength": () => (/* binding */ checkLength),
/* harmony export */   "checkIfExists": () => (/* binding */ checkIfExists),
/* harmony export */   "comparePasswords": () => (/* binding */ comparePasswords)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_5__);






var Validation = /*#__PURE__*/function () {
  function Validation(value) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Validation);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "value", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "msg", void 0);

    this.value = value;
    this.msg = "";
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Validation, [{
    key: "makeMsg",
    value: function makeMsg(msg) {
      this.msg += " ".concat(msg);
      this.msg = this.msg.trim();
    }
  }, {
    key: "isEmpty",
    value: function isEmpty(args) {
      if (!this.value.trim()) {
        this.makeMsg(args && args.msg || "This field cannot be empty!");
      }

      return this;
    }
  }, {
    key: "isEmail",
    value: function isEmail(args) {
      var patern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

      if (!this.value.match(patern)) {
        this.makeMsg(args && args.msg || "Email is not correct!");
      }

      return this;
    }
  }, {
    key: "isMin",
    value: function isMin(args) {
      if (this.value.length < args.min) {
        this.makeMsg(args && args.msg || "This field must be longer than ".concat(args.min, " characters!"));
      }

      return this;
    }
  }, {
    key: "isMax",
    value: function isMax(args) {
      if (this.value.length > args.max) {
        this.makeMsg(args && args.msg || "This field must be less than ".concat(args.max, " characters!"));
      }

      return this;
    }
  }]);

  return Validation;
}();
var checkIsEmpty = function checkIsEmpty(params) {
  var isError = false;
  var validated = {};
  Object.keys(params).forEach(function (key) {
    validated[key] = new Validation(params[key]).isEmpty();

    if (validated[key].msg.length && !isError) {
      isError = true;
    }
  });

  if (isError) {
    throw new Error(JSON.stringify(validated));
  }

  return validated;
};
var checkIsEmail = function checkIsEmail(param) {
  var _param;

  if (param.email instanceof Validation) {
    _param = param.email.isEmail();
  } else {
    _param = new Validation(param.email).isEmail();
  }

  if (_param.msg.length) {
    throw new Error(JSON.stringify({
      email: _param
    }));
  }

  return _param;
};
var checkLength = function checkLength(_ref) {
  var params = _ref.params,
      min = _ref.min,
      max = _ref.max;
  var isError = false;
  var validated = {};
  Object.keys(params).forEach(function (key) {
    if (params[key] instanceof Validation) {
      if (min && max) {
        validated[key] = params[key].isMin({
          min: min
        }).isMax({
          max: max
        });
      } else if (min) {
        validated[key] = params[key].isMin({
          min: min
        });
      } else if (max) {
        validated[key] = params[key].isMax({
          max: max
        });
      }
    } else {
      validated[key] = new Validation(params[key]);

      if (min && max) {
        validated[key] = validated[key].isMin({
          min: min
        }).isMax({
          max: max
        });
      } else if (min) {
        validated[key] = validated[key].isMin({
          min: min
        });
      } else if (max) {
        validated[key] = validated[key].isMax({
          max: max
        });
      }
    }

    if (validated[key].msg.length && !isError) {
      isError = true;
    }
  });

  if (isError) {
    throw new Error(JSON.stringify(validated));
  }

  return validated;
};
var checkIfExists = /*#__PURE__*/function () {
  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(_ref2) {
    var key, value, Modal, msg, isTrue, record;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            key = _ref2.key, value = _ref2.value, Modal = _ref2.Modal, msg = _ref2.msg, isTrue = _ref2.isTrue;
            _context.next = 3;
            return Modal.findOne(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()({}, key, value));

          case 3:
            record = _context.sent;

            if (!(record && isTrue && Object.keys(record).length)) {
              _context.next = 6;
              break;
            }

            throw new Error(JSON.stringify(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()({}, key, {
              msg: msg,
              value: value
            })));

          case 6:
            return _context.abrupt("return", record);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function checkIfExists(_x) {
    return _ref3.apply(this, arguments);
  };
}();
var comparePasswords = function comparePasswords(_ref4) {
  var password = _ref4.password,
      hPass = _ref4.hPass;
  var isValidPassword = bcryptjs__WEBPACK_IMPORTED_MODULE_5___default().compareSync(password, hPass);

  if (!isValidPassword) {
    throw new Error(JSON.stringify({
      password: {
        msg: "Password is wrong, try another one!",
        value: password
      }
    }));
  }
};

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");;

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/classCallCheck");;

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/createClass");;

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/defineProperty");;

/***/ }),

/***/ "@babel/runtime/helpers/taggedTemplateLiteral":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/taggedTemplateLiteral" ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");;

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/regenerator");;

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("apollo-server-express");;

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");;

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");;

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");;

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./server/index.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _typeDefs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./typeDefs */ "./server/typeDefs.ts");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resolvers */ "./server/resolvers/index.ts");
/* harmony import */ var _context_isAuth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./context/isAuth */ "./server/context/isAuth.ts");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_10__);











(0,dotenv__WEBPACK_IMPORTED_MODULE_6__.config)({
  path: path__WEBPACK_IMPORTED_MODULE_4___default().resolve(__dirname, "../", ".env")
});
var _process$env = process.env,
    PORT = _process$env.PORT,
    MONGO_USER = _process$env.MONGO_USER,
    MONGO_PASS = _process$env.MONGO_PASS,
    MONGO_DB = _process$env.MONGO_DB,
    NODE_ENV = "development";
var isDev = NODE_ENV === "development";

_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
  var app, server;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          app = express__WEBPACK_IMPORTED_MODULE_2___default()();
          app.use(cors__WEBPACK_IMPORTED_MODULE_10___default()());
          _context.next = 5;
          return mongoose__WEBPACK_IMPORTED_MODULE_5___default().connect("mongodb+srv://".concat(MONGO_USER, ":").concat(MONGO_PASS, "@cluster0.osxef.mongodb.net/").concat(MONGO_DB, "?retryWrites=true&w=majority"), {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
          }, function () {
            return console.log("MongoDB started successfully!");
          });

        case 5:
          server = new apollo_server_express__WEBPACK_IMPORTED_MODULE_3__.ApolloServer({
            resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_8__.default,
            typeDefs: _typeDefs__WEBPACK_IMPORTED_MODULE_7__.default,
            playground: isDev,
            context: function context(_ref2) {
              var req = _ref2.req,
                  res = _ref2.res;
              return {
                req: req,
                res: res,
                isAuth: function isAuth() {
                  return (0,_context_isAuth__WEBPACK_IMPORTED_MODULE_9__.default)(req);
                }
              };
            }
          });
          server.applyMiddleware({
            app: app
          });

          if (!isDev) {
            app.use(express__WEBPACK_IMPORTED_MODULE_2___default().static(path__WEBPACK_IMPORTED_MODULE_4___default().join(__dirname, "../", "client")));
            app.get("/*", function (req, res) {
              res.sendFile(path__WEBPACK_IMPORTED_MODULE_4___default().join(__dirname, "../", "client", "index.html"));
            });
          }

          app.listen(PORT, function () {
            return console.log("Server started on port: ".concat(PORT));
          });
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.error("Server error: ".concat(_context.t0.message));

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[0, 11]]);
}))();
})();

/******/ })()
;
//# sourceMappingURL=server.js.map