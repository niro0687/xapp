"use strict";

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function XUserListComponent(_ref) {
  var dataComplet = _ref.dataComplet,
    select = _ref.select,
    name = _ref.name,
    id = _ref.id,
    imgSrc = _ref.imgSrc,
    className = _ref.className,
    center = _ref.center,
    style = _ref.style;
  var getElementCenter = center ? " x-center " : " ";
  var classNameFinal = "x-pointer x-profile-item " + getElementCenter + className;
  var click = function click() {
    select(dataComplet);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classNameFinal,
    onClick: function onClick() {
      return select(dataComplet);
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(XUserProfilePicture, {
    name: name,
    imageURL: imgSrc,
    fontSize: 15,
    width: 50
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "xfowebo"
  }, name), /*#__PURE__*/React.createElement("p", {
    className: "xfosi11 xmato2"
  }, id)));
}
var FAKE_CONV_ID = 1;
function XCreateGroupConvComponent(_ref2) {
  var users = _ref2.users,
    getName = _ref2.getName,
    close = _ref2.close,
<<<<<<< HEAD
    created = _ref2.created;
=======
    created = _ref2.created,
    token = _ref2.token,
    projectID = _ref2.projectID;
>>>>>>> 5b71127 (xapp-24.12.15)
  var _React$useState = React.useState(""),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    name = _React$useState2[0],
    setName = _React$useState2[1];
  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    load = _React$useState4[0],
    setLoad = _React$useState4[1];
  var handleChange = function handleChange(val) {
    setName(val);
  };
  var createButtonStyle = {
    width: "250px",
    height: '50px'
  };
  var fieldStyle = {
    width: "85%"
  };
  var _React$useState5 = React.useState([]),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    selectedUsers = _React$useState6[0],
    setSelectedUsers = _React$useState6[1];

  // Fonction qui gère la sélection d'un utilisateur
  var handleUserClick = function handleUserClick(user) {
    if (selectedUsers.some(function (u) {
      return u.id === user.id;
    })) {
      // Si l'utilisateur est déjà sélectionné, on le retire
      setSelectedUsers(selectedUsers.filter(function (u) {
        return u.id !== user.id;
      }));
    } else {
      // Sinon, on l'ajoute à la liste des utilisateurs sélectionnés
      setSelectedUsers([].concat(_toConsumableArray(selectedUsers), [user]));
    }
  };
  var create = function create() {
    setLoad(true);
    request();
  };
  var request = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
<<<<<<< HEAD
      var date, newConv;
=======
      var date, url, newConv, to_send, form, req;
>>>>>>> 5b71127 (xapp-24.12.15)
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            date = new Date().toISOString();
<<<<<<< HEAD
=======
            url = '/create_group_chat/';
>>>>>>> 5b71127 (xapp-24.12.15)
            newConv = {
              id: "conv-id-".concat(Date.now()),
              lastMessage: null,
              type: 'group',
              empty: true,
              name: name,
              datetime: date,
              photo: null
            };
<<<<<<< HEAD
            setTimeout(function () {
              created(newConv);
              setLoad(false);
              setName("");
              setSelectedUsers([]);
            }, 1000);
          case 3:
=======
            to_send = {
              csrfmiddlewaretoken: token.csrfmiddlewaretoken,
              project_id: projectID,
              users: selectedUsers.map(function (u) {
                return u.id;
              }),
              name: name
            };
            form = __.getFormData(to_send);
            _context.next = 7;
            return __.layoutRequest.post(url, form, 'json');
          case 7:
            req = _context.sent;
            if (req.isSuccess) {
              created(req.data);
              setLoad(false);
              setName("");
              setSelectedUsers([]);
            } else {
              __.xAlert('Connection erreur', 'Verifier votre connection et re-éssayez plus tard.', 'danger');
            }
          case 9:
>>>>>>> 5b71127 (xapp-24.12.15)
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function request() {
      return _ref3.apply(this, arguments);
    };
  }();
  var disabled = React.useMemo(function () {
    if (selectedUsers.length > 1 && name.trim().length >= 2) {
      return false;
    }
    return true;
  }, [name, selectedUsers]);
  var antiBug = function antiBug(l) {};
  return /*#__PURE__*/React.createElement("div", {
    className: "x-create-group-conv-box x-pa-to_20 x-pa-bo_20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-block-create-group xdifl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-define-name xwi50per"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi30 xmabo10 xlihe4 xfowebo xmale20"
  }, "Cr\xE9er une ", /*#__PURE__*/React.createElement("br", null), "groupe de ", /*#__PURE__*/React.createElement("br", null), "conversation"), /*#__PURE__*/React.createElement(XField, {
    value: name,
    center: true,
    style: fieldStyle,
    onChange: handleChange
  }, "Nom du groupe")), /*#__PURE__*/React.createElement("div", {
    className: "x-select-user-to-add-in-group xwi50per"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi15 xfowebo xmabo5"
  }, "Select more than one user"), /*#__PURE__*/React.createElement("p", {
    className: "x-low-emphasis xfosi12 xfowebo xmabo20"
  }, selectedUsers.length, " users selected"), /*#__PURE__*/React.createElement("div", {
    className: "xhe200 xovau"
  }, users.map(function (user) {
    return /*#__PURE__*/React.createElement("div", {
      key: user.id,
      onClick: function onClick() {
        return handleUserClick(user);
      },
      style: {
        borderRadius: "10px",
        marginRight: "20px",
        backgroundColor: selectedUsers.some(function (u) {
          return u.id === user.id;
        }) ? '#3E93FF' : 'white'
      }
    }, /*#__PURE__*/React.createElement(XUserList, {
      name: getName(user),
      id: user.email,
      dataComplet: user,
      imgSrc: user.photo,
      select: antiBug
    }));
  })))), /*#__PURE__*/React.createElement("div", {
    className: "x-btn-cancel-or-create xhe50 xwi90per x-center xdigr xmato20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-child-center",
    onClick: close
  }, /*#__PURE__*/React.createElement("button", {
    className: "xfowebo"
  }, "Annuler")), /*#__PURE__*/React.createElement(XButtonLoadable, {
    br: 30,
    center: true,
    style: createButtonStyle,
    disabled: disabled,
    onClickFunc: create,
    load: load
  }, "Cr\xE9er")));
}
var XCreateGroupConv = React.memo(XCreateGroupConvComponent);
var XUserList = React.memo(XUserListComponent);
function XCreateConversationComponent(_ref4) {
  var style = _ref4.style,
    className = _ref4.className,
    onClick = _ref4.onClick;
  var cl = "x-pointer x-create-conv " + className;
  return /*#__PURE__*/React.createElement("div", {
    className: cl,
    style: style,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-pen"
  }));
}
var XCreateConversation = React.memo(XCreateConversationComponent);
XCreateConversation.defaultProps = {
  className: "",
  style: {}
};
function XDisplayUserToCreateConversationComponent(_ref5) {
  var userSug = _ref5.userSug,
    getName = _ref5.getName,
    onSelectUser = _ref5.onSelectUser,
    createGroupClick = _ref5.createGroupClick,
    close = _ref5.close;
  var searchStyle = {
    width: "90%"
  };
  var _React$useState7 = React.useState(''),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    value = _React$useState8[0],
    setValue = _React$useState8[1];
  var change = function change(val) {
    setValue(val);
  };
  var getContent = function () {
    if (userSug.length == 0) {
      return /*#__PURE__*/React.createElement("p", {
        className: "xfosi12 xmato50 xtealce x-low-emphasis"
      }, "Vous avez d\xE9ja les conversation avec tous les membres.");
    } else {
      var data = [];
      userSug.forEach(function (user) {
        var name = (user.lastName + " " + user.firstName).toLowerCase();
        var val = value.trim().toLowerCase();
        if (name.indexOf(val) != -1) {
          data.push(user);
        }
      });
      if (data.length == 0) {
        return /*#__PURE__*/React.createElement("p", {
          className: "xfosi12 xmato50 xtealce x-low-emphasis"
        }, "Pas trouv\xE9 '", value, "'");
      } else {
        return /*#__PURE__*/React.createElement("div", {
          className: "xmale10"
        }, data.map(function (user, key) {
          return /*#__PURE__*/React.createElement(XUserList, {
            key: key,
            dataComplet: user,
            name: getName(user),
            id: user.email,
            select: onSelectUser,
            imgSrc: user.photo
          });
        }));
      }
    }
  }();
  return /*#__PURE__*/React.createElement(XPopupBox, {
    type: "close-only",
    close: close
  }, /*#__PURE__*/React.createElement(XSearch, {
    className: "x-center xmato10",
    value: value,
    onChange: change,
    style: searchStyle
  }), /*#__PURE__*/React.createElement("div", {
    onClick: createGroupClick,
    className: "xdigr x-center x-create-conv-group xalitce xmato20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-child-center x-black-01 x-circle-50"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-users"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "xfowebo"
  }, "Create groupe"))), /*#__PURE__*/React.createElement("p", {
    className: "xmale20 xmato20 xfowebo"
  }, "Users"), getContent);
}
var XDisplayUserToCreateConversation = React.memo(XDisplayUserToCreateConversationComponent);
function XStartConvBoxComponent(_ref6) {
  var url = _ref6.url,
    placeholder = _ref6.placeholder,
    close = _ref6.close,
    title = _ref6.title,
    token = _ref6.token,
    user = _ref6.user,
    style = _ref6.style,
    getConversationJustCreated = _ref6.getConversationJustCreated;
  var _React$useState9 = React.useState(true),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    disabled = _React$useState10[0],
    setDisabled = _React$useState10[1];
  var _React$useState11 = React.useState('none'),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    sendingStatus = _React$useState12[0],
    setSendingStatus = _React$useState12[1];
  var _React$useState13 = React.useState(false),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    loading = _React$useState14[0],
    setLoading = _React$useState14[1];
  var _React$useState15 = React.useState(false),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    disabledInput = _React$useState16[0],
    setDisabledInput = _React$useState16[1];
  var _React$useState17 = React.useState(''),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    value = _React$useState18[0],
    setValue = _React$useState18[1];
  var statusContent = React.useMemo(function () {
    if (sendingStatus == 'none') {
      return null;
    } else if (sendingStatus == 'error') {
      var message = "";
      if (navigator.onLine) {
        message = "Server error";
      } else {
        message = "Server error or try your connection";
      }
      return /*#__PURE__*/React.createElement("span", {
        className: "x-text-danger xmato7 xfosi11 xfowebo xmabo5"
      }, message);
    } else if (sendingStatus == 'sent') {
      return /*#__PURE__*/React.createElement("span", {
        className: "x-text-success xmato7 xfosi11 xfowebo xmabo5"
      }, "Sent");
    }
  }, [sendingStatus]);
  var handleChange = function handleChange(e) {
    setValue(e.target.value);
    setSendingStatus('none');
    if (e.target.value.trim().length == 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };
  var request = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
<<<<<<< HEAD
      var date, data, formData, getToken, req, newConv;
=======
      var date, data, formData, getToken, req;
>>>>>>> 5b71127 (xapp-24.12.15)
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            date = new Date();
            data = {
              message: value.trim(),
<<<<<<< HEAD
              datetime: date.toString()
=======
              datetime: date.toString(),
              timestamp: Date.now().toString()
>>>>>>> 5b71127 (xapp-24.12.15)
            };
            formData = new FormData();
            if (!(typeof token == 'function')) {
              _context2.next = 7;
              break;
            }
            getToken = token();
            _context2.next = 12;
            break;
          case 7:
            if (!(_typeof(token) == 'object')) {
              _context2.next = 11;
              break;
            }
            getToken = token;
            _context2.next = 12;
            break;
          case 11:
            throw new Error('token must be a function which returns an object or an object');
          case 12:
            Object.entries(getToken).forEach(function (_ref8) {
              var _ref9 = _slicedToArray(_ref8, 2),
                key = _ref9[0],
                value = _ref9[1];
              formData.append(key, value);
            });
            Object.entries(data).forEach(function (_ref10) {
              var _ref11 = _slicedToArray(_ref10, 2),
                key = _ref11[0],
                value = _ref11[1];
              formData.append(key, value);
            });
            _context2.next = 16;
            return __.layoutRequest.post(url, formData, 'json');
          case 16:
            req = _context2.sent;
            if (req.isSuccess) {
              setSendingStatus('sent');
<<<<<<< HEAD
            } else {
              // setSendingStatus('error');
              newConv = {
                id: "conv-id-".concat(new Date()),
                type: 'private',
                lastMessage: {
                  id: "message-id-".concat(new Date()),
                  isMyMessage: true,
                  text: value,
                  status: 'sent',
                  datetime: new Date().toISOString()
                },
                user: {
                  id: user.realID,
                  email: user.id,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  photo: user.photo
                }
              };
              getConversationJustCreated(newConv);
              setValue('');
              setSendingStatus('sent');
=======
              setValue('');
              getConversationJustCreated();
>>>>>>> 5b71127 (xapp-24.12.15)
            }
            setLoading(false);
            setDisabledInput(false);
            setDisabled(false);
          case 21:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function request() {
      return _ref7.apply(this, arguments);
    };
  }();
  var send = function send(e) {
    setDisabledInput(true);
    setDisabled(false);
    setSendingStatus('none');
    setLoading(true);
    request();
  };
  var buttonStyle = {
    width: '100%'
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "xpore x-start-conv x-shadow",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    onClick: close,
    className: "x-square-40 xdifl xjucoce xalitce xpoab close-start-conv"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-times"
  })), /*#__PURE__*/React.createElement("p", {
    className: "xfosi22 xfowebo"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "xdifl xalitce xmato15"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-profile-pic x-square-60 xmari15"
  }, /*#__PURE__*/React.createElement(XUserProfilePicture, {
    name: user.name,
    imageURL: user.photo,
    fontSize: 20,
    width: 60
  })), /*#__PURE__*/React.createElement("div", {
    className: "user-inf"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfowebo xfosi17"
  }, user.name), /*#__PURE__*/React.createElement("p", {
    className: "xfosi11 xmato7 x-low-emphasis xfowebo"
  }, user.id))), /*#__PURE__*/React.createElement("textarea", {
    disabled: disabledInput,
    onChange: handleChange,
    value: value,
    placeholder: placeholder,
    className: "xwi100per xmato20 xfowebo"
  }), /*#__PURE__*/React.createElement("span", {
    className: "li  xhe1 xwi100per xmato5 xmabo5"
  }), statusContent, /*#__PURE__*/React.createElement(XButtonLoadable, {
    br: 30,
    load: loading,
    className: "xmato20",
    onClickFunc: send,
    center: true,
    style: buttonStyle,
    disabled: disabled
  }, "Send"));
}
var XStartConvBox = React.memo(XStartConvBoxComponent);
XStartConvBox.defaultProps = {
  url: '',
  style: {},
  token: {},
  placeholder: 'Start with some words...',
  title: 'Start a conversation with'
};
XStartConvBox.propTypes = {
  user: PropTypes.object.isRequired,
  title: PropTypes.string,
  style: PropTypes.object,
  token: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  placeholder: PropTypes.string,
  url: PropTypes.string
};
function XConversationList(_ref12) {
  var data = _ref12.data,
    getName = _ref12.getName,
    open = _ref12.open,
<<<<<<< HEAD
    createConvClick = _ref12.createConvClick;
=======
    createConvClick = _ref12.createConvClick,
    createConvURL = _ref12.createConvURL;
>>>>>>> 5b71127 (xapp-24.12.15)
  var listClassName = "xpore xwi100per xhe100per";
  var searchStyle = {
    width: "90%"
  };
  var _React$useState19 = React.useState(""),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    search = _React$useState20[0],
    setSearch = _React$useState20[1];
  var handleSearch = function handleSearch(e) {
    setSearch(e);
  };
  var convStyle = {
    top: "140px",
    bottom: "0px",
    overflow: "auto",
    zIndex: "1"
  };
  var createConv = {
    zIndex: "2"
  };
  var convOption = function convOption(dataComp) {
    op.current.style.bottom = "0px";
    black.current.style.display = "block";
    console.log(dataComp);
  };
  var black = React.useRef(null);
  var op = React.useRef(null);
  var closeOp = function closeOp() {
    black.current.style.display = "none";
    op.current.style.bottom = "-200px";
  };
  return /*#__PURE__*/React.createElement("div", {
    className: listClassName
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-pt-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "xdifl xalitce xjucoce xmabo10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-square-50 xdifl xjucoce xalitce"
  }, /*#__PURE__*/React.createElement("i", {
    className: "far fa-comments xfosi20"
  })), /*#__PURE__*/React.createElement("div", {
    className: "xwi75per"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "xfowebo xfosi16 xtealce"
  }, "Chats"), /*#__PURE__*/React.createElement("p", {
    className: "xfosi9 xtealce x-conv-status"
  }, "Vous avez ", data.length, " conversation", data.length > 1 ? 's' : '')), /*#__PURE__*/React.createElement("div", {
    className: "x-square-50 xdifl xjucoce xalitce"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-ellipsis-v xfosi20"
  }))), /*#__PURE__*/React.createElement(XSearch, {
    center: true,
    bd: 30,
    value: search,
    placeholder: "Search Conversation",
    onChange: handleSearch,
    style: searchStyle
  })), /*#__PURE__*/React.createElement("div", {
    className: "xpoab xwi100per",
    style: convStyle
<<<<<<< HEAD
  }, data.map(function (conv, key) {
    return /*#__PURE__*/React.createElement(XConversation, {
      key: key,
=======
  }, data.map(function (conv) {
    return /*#__PURE__*/React.createElement(XConversation, {
      key: conv.crypted_id,
>>>>>>> 5b71127 (xapp-24.12.15)
      open: open,
      rightClick: convOption,
      empty: conv.empty,
      dataComplete: conv,
      lastMessage: conv.lastMessage,
      img: conv.type == "private" ? conv.user.photo : conv.photo,
      name: getName(conv)
    });
  })), /*#__PURE__*/React.createElement(XCreateConversation, {
    style: createConv,
<<<<<<< HEAD
=======
    url: createConvURL,
>>>>>>> 5b71127 (xapp-24.12.15)
    onClick: createConvClick
  }), /*#__PURE__*/React.createElement("div", {
    onClick: closeOp,
    className: "x-bo-ra_10 black-this-conv x-black-01",
    ref: black
  }), /*#__PURE__*/React.createElement("div", {
    ref: op,
    className: "conv-right-option xpoab x-bo-ra_10 xwi100per x-le_0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "each-conv-option x-center xalitce xhe55 xdigr xwi90per x-pointer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-child-center x-square-40"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-eye-slash xfosi22"
  })), /*#__PURE__*/React.createElement("div", {
    className: ""
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi12 xfowebo"
  }, "Marquer comme non lue"))), /*#__PURE__*/React.createElement("div", {
    className: "each-conv-option x-center xalitce xhe55 xdigr xwi90per x-pointer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-child-center x-square-40"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-trash-alt xfosi22"
  })), /*#__PURE__*/React.createElement("div", {
    className: ""
  }, /*#__PURE__*/React.createElement("p", {
    className: "x-text-danger xfosi12 xfowebo"
  }, "Supprimer le conversation"))), /*#__PURE__*/React.createElement("div", {
    onClick: closeOp,
    className: "each-conv-option x-center xalitce xhe55 xdigr xwi90per x-pointer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-child-center x-square-40"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-times xfosi22"
  })), /*#__PURE__*/React.createElement("div", {
    className: ""
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi12 xfowebo"
  }, "Fermer")))));
}
XConversationHeader.defaultProps = {
  style: {}
};
XConversationHeader.propTypes = {
  style: PropTypes.object
};
function XConversationHeader(_ref13) {
  var close = _ref13.close,
    data = _ref13.data;
  var headerClass = "x-conversation-header";
  var statusClass = function () {
    return "status " + data.status.toLowerCase();
  }();
  return /*#__PURE__*/React.createElement("div", {
    className: headerClass
  }, /*#__PURE__*/React.createElement("div", {
    className: "info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-pointer x-close-chat show",
    onClick: close
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-chevron-left"
  })), /*#__PURE__*/React.createElement("div", {
    className: "user"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pic"
  }, /*#__PURE__*/React.createElement(XUserProfilePicture, {
    width: 47,
    name: data.name,
    fontSize: 15,
    imageURL: data.img
  })), /*#__PURE__*/React.createElement("div", {
    className: "data"
  }, /*#__PURE__*/React.createElement("p", {
    className: "name"
  }, data.name), /*#__PURE__*/React.createElement("span", {
    className: statusClass
  }, data.status)))), /*#__PURE__*/React.createElement("div", {
    className: "option"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-pointer search each-option"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-search"
  })), /*#__PURE__*/React.createElement("div", {
    className: "x-pointer close-chat each-option hide"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-times"
  })), /*#__PURE__*/React.createElement("div", {
    className: "x-pointer other-option each-option"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-ellipsis-v"
  }))));
}
XConversationHeader.defaultProps = {
  data: {}
};
XConversationHeader.propTypes = {
  data: PropTypes.object
};
function XMessageForm(_ref14) {
  var style = _ref14.style,
    className = _ref14.className,
    value = _ref14.value,
    onSubmit = _ref14.onSubmit,
    onTextChange = _ref14.onTextChange,
    onFileChange = _ref14.onFileChange,
    onSpeechChange = _ref14.onSpeechChange,
    onVideoChange = _ref14.onVideoChange,
    onPhotoChange = _ref14.onPhotoChange;
  var messageFormClass = "x-message-form" + " " + className;
  var image = React.useRef(null);
  var file = React.useRef(null);
  var speech = React.useRef(null);
  var video = React.useRef(null);
  var field = React.useRef(null);
  var form = React.useRef(null);
  var mother = React.useRef(null);
<<<<<<< HEAD
=======
  var buttonSendText = React.useRef(null);
>>>>>>> 5b71127 (xapp-24.12.15)
  var handleImageChange = function handleImageChange(e) {
    onPhotoChange(image.current.files[0]);
  };
  var handleVideoChange = function handleVideoChange(e) {
    onVideoChange(video.current.files[0]);
  };
  var handleSpeechChange = function handleSpeechChange(e) {
    onSpeechChange(speech.current.files[0]);
  };
  var handleFileChange = function handleFileChange(e) {
    onFileChange(file.current.files[0]);
  };
  var resetForm = function resetForm() {
    field.current.style.height = "15px";
    field.current.style.width = "65%";
    form.current.style.width = "70%";
    var insertFiles = mother.current.querySelectorAll(".insert-file");
    for (var i = 0; i < insertFiles.length; i++) {
      if (i != 0) {
        insertFiles[i].style.width = "30px";
      }
    }
    field.current.focus();
  };
  var handleSubmit = function handleSubmit(e) {
    onSubmit(e);
    resetForm();
  };
  var imageClick = function imageClick(e) {
    image.current.click();
  };
  var videoClick = function videoClick(e) {
    video.current.click();
  };
  var fileClick = function fileClick(e) {
    file.current.click();
  };
  var speechClick = function speechClick(e) {
    speech.current.click();
  };
<<<<<<< HEAD
=======
  var keyup = function keyup(e) {
    if (e.keyCode === 13) {
      buttonSendText.current.click();
    }
  };
>>>>>>> 5b71127 (xapp-24.12.15)
  return /*#__PURE__*/React.createElement("div", {
    className: messageFormClass,
    style: style,
    ref: mother
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-pointer insert-file xhe50 xwi30",
    onClick: fileClick
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-plus-circle"
  }), /*#__PURE__*/React.createElement("input", {
    type: "file",
    ref: file,
    onChange: handleFileChange
  })), /*#__PURE__*/React.createElement("div", {
    className: "x-pointer insert-file xhe50 xwi30",
    onClick: imageClick
  }, /*#__PURE__*/React.createElement("i", {
    className: "far fa-image"
  }), /*#__PURE__*/React.createElement("input", {
    type: "file",
    ref: image,
    accept: ".jpg, .JPG, .png, .PNG, .jpeg, .JPEG, .gif",
    onChange: handleImageChange
  })), /*#__PURE__*/React.createElement("div", {
    className: "x-pointer insert-file xhe50 xwi30",
    onClick: videoClick
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-video"
  }), /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: ".mp4, .MOV, .avi",
    onChange: handleVideoChange,
    ref: video
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    ref: form
  }, /*#__PURE__*/React.createElement("textarea", {
    placeholder: "Text a message",
<<<<<<< HEAD
=======
    onKeyUp: keyup,
>>>>>>> 5b71127 (xapp-24.12.15)
    ref: field,
    onChange: onTextChange,
    value: value,
    className: "xlihe3"
  }), /*#__PURE__*/React.createElement("div", {
    className: "emoji xhe50 xwi30"
  }, /*#__PURE__*/React.createElement("i", {
    className: "far fa-smile"
  })), /*#__PURE__*/React.createElement("div", {
    className: "x-pointer x-btn-submit xhe50 xwi30"
  }, /*#__PURE__*/React.createElement("input", {
    type: "file",
    className: "hide-input",
    ref: speech,
    accept: ".mp3, .m4a",
    onChange: handleSpeechChange
  }), value.length > 0 ? /*#__PURE__*/React.createElement("button", {
<<<<<<< HEAD
    type: "submit"
=======
    type: "submit",
    ref: buttonSendText
>>>>>>> 5b71127 (xapp-24.12.15)
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-paper-plane"
  })) : /*#__PURE__*/React.createElement("i", {
    className: "fa fa-microphone",
    onClick: speechClick
  }))));
}
XMessageForm.defaultProps = {
  style: {},
  className: "",
  value: ""
};
XMessageForm.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.string,
  onTextChange: PropTypes.func,
  onFileChange: PropTypes.func,
  onPhotoChange: PropTypes.func,
  onVideoChange: PropTypes.func,
  onSpeechChange: PropTypes.func
};
XUserList.defaultProps = {
  style: {},
  center: true,
  className: " "
};
XUserList.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  center: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  imgSrc: PropTypes.string
};
function XConversation(_ref15) {
  var img = _ref15.img,
    name = _ref15.name,
    empty = _ref15.empty,
    rightClick = _ref15.rightClick,
    lastMessage = _ref15.lastMessage,
    open = _ref15.open,
    dataComplete = _ref15.dataComplete;
  var getDT = function getDT() {
    if (empty) {
      return "";
    } else {
      return __.getFormatTimeDifference(lastMessage.datetime);
    }
  };
  var timeDiff = function timeDiff() {
    return getDT();
  };
  var getMessage = function () {
    var owner = "";
    if (empty) {
      return "[No messages]";
    } else {
      if (lastMessage.isMyMessage) {
        owner = "You";
      } else {
        owner = name;
      }
      if (lastMessage.text && lastMessage.audio == undefined && lastMessage.video == undefined && lastMessage.file == undefined && lastMessage.image == undefined) {
        if (lastMessage.isMyMessage) {
          return owner + ": " + __.getShortText(lastMessage.text, 40);
        } else {
          return __.getShortText(lastMessage.text, 40);
        }
      } else if (lastMessage.text == undefined && lastMessage.audio && lastMessage.video == undefined && lastMessage.file == undefined && lastMessage.image == undefined) {
        return owner + " sent a audio";
      } else if (lastMessage.text == undefined && lastMessage.audio == undefined && lastMessage.video && lastMessage.file == undefined && lastMessage.image == undefined) {
        return owner + " sent a video";
      } else if (lastMessage.text == undefined && lastMessage.audio == undefined && lastMessage.video == undefined && lastMessage.file && lastMessage.image == undefined) {
        return owner + " sent a file";
      } else if (lastMessage.text == undefined && lastMessage.audio == undefined && lastMessage.video == undefined && lastMessage.file == undefined && lastMessage.image) {
        return owner + " sent a photo";
      }
    }
  }();
  var messageNew = function () {
    if (empty) {
      return null;
    } else {
      if (!lastMessage.isMyMessage) {
        if (lastMessage.status == "delivered" || lastMessage.status == "sent") {
          return /*#__PURE__*/React.createElement("span", {
            className: "notified"
          });
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
  }();
  var messageClass = function () {
    var base = "last-message ";
    if (empty) {
      base = base + "text x-fo-st_it";
    } else {
      if (lastMessage.text) {
        base = base + "text";
      } else {
        base = base + "file";
      }
    }
    return base;
  }();
  var notify = function () {
    if (empty) {
      return " seen";
    } else {
      if (!lastMessage.isMyMessage) {
        if (lastMessage.status == "seen") {
          return " seen";
        } else {
          return " new";
        }
      }
    }
    return " seen";
  }();
<<<<<<< HEAD
  React.useEffect(function () {
    setTimeout(function () {}, 30000);
  }, []);
=======
>>>>>>> 5b71127 (xapp-24.12.15)
  var click = function click() {
    open(dataComplete);
  };
  var contextMenu = function contextMenu(e) {
    e.preventDefault();
    rightClick(dataComplete);
  };
  var conversationClassName = "x-pointer x-conversation" + notify;
  return /*#__PURE__*/React.createElement("div", {
    onClick: click,
    onContextMenu: contextMenu,
    className: conversationClassName
  }, /*#__PURE__*/React.createElement("div", {
    className: "pic"
  }, /*#__PURE__*/React.createElement(XUserProfilePicture, {
    name: name,
    imageURL: img,
    width: 47,
    fontSize: 13
  })), /*#__PURE__*/React.createElement("div", {
    className: "data"
  }, /*#__PURE__*/React.createElement("p", {
    className: "name"
  }, name), /*#__PURE__*/React.createElement("p", {
    className: messageClass
  }, getMessage)), /*#__PURE__*/React.createElement("div", {
    className: "time"
  }, /*#__PURE__*/React.createElement("p", null, timeDiff()), messageNew));
}
XConversation.propTypes = {
  lastMessage: PropTypes.object
};
function XMessageComponent(_ref16) {
  var message = _ref16.message,
    onSent = _ref16.onSent,
    token = _ref16.token,
    sendingUrl = _ref16.sendingUrl,
<<<<<<< HEAD
    option = _ref16.option;
=======
    option = _ref16.option,
    projectID = _ref16.projectID,
    visual = _ref16.visual;
>>>>>>> 5b71127 (xapp-24.12.15)
  var messageContent = function () {
    if (message.text && message.video == undefined && message.audio == undefined && message.file == undefined && message.image == undefined) {
      return /*#__PURE__*/React.createElement(XTextMessage, {
        message: message,
        onSent: onSent,
<<<<<<< HEAD
=======
        projectID: projectID,
>>>>>>> 5b71127 (xapp-24.12.15)
        option: option,
        token: token,
        sendingUrl: sendingUrl
      });
    } else if (message.text == undefined && message.video && message.audio == undefined && message.file == undefined && message.image == undefined) {
      return /*#__PURE__*/React.createElement(XVideoMessage, {
        message: message,
        option: option,
<<<<<<< HEAD
        onSent: onSent,
=======
        projectID: projectID,
        onSent: onSent,
        visual: visual,
>>>>>>> 5b71127 (xapp-24.12.15)
        token: token,
        sendingUrl: sendingUrl
      });
    } else if (message.text == undefined && message.video == undefined && message.audio && message.file == undefined && message.image == undefined) {
      return /*#__PURE__*/React.createElement(XAudioMessage, {
        message: message,
        option: option,
        onSent: onSent,
<<<<<<< HEAD
=======
        projectID: projectID,
>>>>>>> 5b71127 (xapp-24.12.15)
        token: token,
        sendingUrl: sendingUrl
      });
    } else if (message.text == undefined && message.video == undefined && message.audio == undefined && message.file && message.image == undefined) {
      return /*#__PURE__*/React.createElement(XFileMessage, {
        message: message,
        option: option,
        onSent: onSent,
<<<<<<< HEAD
=======
        projectID: projectID,
>>>>>>> 5b71127 (xapp-24.12.15)
        token: token,
        sendingUrl: sendingUrl
      });
    } else if (message.text == undefined && message.video == undefined && message.audio == undefined && message.file == undefined && message.image) {
      return /*#__PURE__*/React.createElement(XImageMessage, {
        message: message,
        option: option,
        onSent: onSent,
<<<<<<< HEAD
=======
        visual: visual,
        projectID: projectID,
>>>>>>> 5b71127 (xapp-24.12.15)
        sendingUrl: sendingUrl,
        token: token
      });
    }
  }();
  return messageContent;
}
var XMessage = React.memo(XMessageComponent);
XMessage.defaultProps = {
  message: {},
  token: {},
  sendingUrl: ''
};
XMessage.propTypes = {
  sendingUrl: PropTypes.string,
  message: PropTypes.object,
  onSent: PropTypes.func,
  token: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};
function XTextMessageComponent(_ref17) {
  var message = _ref17.message,
    onSent = _ref17.onSent,
    token = _ref17.token,
    sendingUrl = _ref17.sendingUrl,
<<<<<<< HEAD
    option = _ref17.option;
=======
    option = _ref17.option,
    projectID = _ref17.projectID;
>>>>>>> 5b71127 (xapp-24.12.15)
  var _React$useState21 = React.useState(false),
    _React$useState22 = _slicedToArray(_React$useState21, 2),
    serverError = _React$useState22[0],
    setServerError = _React$useState22[1];
  var _React$useState23 = React.useState(__.getFormatTimeDifference(message.datetime)),
    _React$useState24 = _slicedToArray(_React$useState23, 2),
    time = _React$useState24[0],
    setTime = _React$useState24[1];
  var position = function () {
    var a = message.isMyMessage ? " x-right-position " : " x-left-position ";
    return a;
  }();
  var send = React.useCallback(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var message_data, formData, getToken, response;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          setServerError(false);
          message_data = {
<<<<<<< HEAD
            datetime: message.datetime,
            text: message.text
=======
            type: 'text',
            datetime: message.datetime,
            text: message.text,
            projectID: projectID,
            timestamp: Date.now().toString()
>>>>>>> 5b71127 (xapp-24.12.15)
          };
          formData = new FormData();
          if (!(typeof token == 'function')) {
            _context3.next = 7;
            break;
          }
          getToken = token();
          _context3.next = 12;
          break;
        case 7:
          if (!(_typeof(token) == 'object')) {
            _context3.next = 11;
            break;
          }
          getToken = token;
          _context3.next = 12;
          break;
        case 11:
          throw new Error('token must be a function which returns an object or an object');
        case 12:
          Object.entries(getToken).forEach(function (_ref19) {
            var _ref20 = _slicedToArray(_ref19, 2),
              key = _ref20[0],
              value = _ref20[1];
            formData.append(key, value);
          });
          Object.entries(message_data).forEach(function (_ref21) {
            var _ref22 = _slicedToArray(_ref21, 2),
              key = _ref22[0],
              value = _ref22[1];
            formData.append(key, value);
          });
          _context3.next = 16;
          return __.layoutRequest.post(sendingUrl, formData, 'json');
        case 16:
          response = _context3.sent;
<<<<<<< HEAD
          setTimeout(function () {
            if (!response.isSuccess) {
              // setServerError(true);
              onSent(message.id, message);
            } else {
              onSent(message.id, message);
            }
          }, 200);
=======
          if (response.isSuccess) {
            onSent(message.id, response.data);
          } else {
            setServerError(true);
          }
>>>>>>> 5b71127 (xapp-24.12.15)
        case 18:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  })), []);
  React.useEffect(function () {
    if (message.status == "sending" && !serverError) {
      send();
    }
  }, []);
  var profile = function () {
    if (message.isMyMessage) {
      return null;
    } else {
      return /*#__PURE__*/React.createElement("div", {
        className: "x-pic"
      }, /*#__PURE__*/React.createElement(XUserProfilePicture, {
        imageURL: message.user.photo,
        width: 43,
        name: message.user.lastName,
        fontSize: 13
      }));
    }
  }();
  var getIcon = function () {
    var cl = "";
    if (serverError) {
      cl = "fa fa-exclamation-circle error";
    } else {
      if (message.status == "sending") {
        cl = "far fa-clock";
      } else if (message.status == "sent") {
        cl = "fa fa-check sent";
      } else if (message.status == "delivered") {
        cl = "fa fa-check-double sent";
      } else if (message.status == "seen") {
        cl = "fa fa-check-double seen";
      }
    }
    return /*#__PURE__*/React.createElement("i", {
      className: cl
    });
  }();
  var getMessageStatus = function () {
    if (message.status == "sending") {
      return " sending";
    } else {
      return "";
    }
  }();
  var getTiming = function () {
    if (serverError) {
      return "Error";
    } else {
      if (message.status == "sending") {
        return "...";
      } else {
        return time;
      }
    }
  }();
  var timeClassName = function () {
    if (serverError) {
      return "error";
    } else {
      return "";
    }
  }();
  var messageOption = function messageOption(e) {
<<<<<<< HEAD
    ;
    e.preventDefault();
    option();
=======
    e.preventDefault();
    option(message);
>>>>>>> 5b71127 (xapp-24.12.15)
  };
  var messageClick = function () {
    if (serverError) {
      return send;
    }
  }();
  var messageClassName = "x-message " + position + getMessageStatus;
  var getTime = React.useEffect(function () {
    var timer = setInterval(function () {
      if (message.status != "sending") {
        setTime(__.getFormatTimeDifference(message.datetime));
      }
    }, 60000);
  }, []);
  var getMessageScanned = function getMessageScanned(text) {
    return __.convertText(text);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: messageClassName,
    onContextMenu: messageOption,
    id: message.id,
    onClick: messageClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-message-container"
  }, profile, /*#__PURE__*/React.createElement("div", {
    className: "x-message-data text"
  }, /*#__PURE__*/React.createElement("p", {
    className: "words xlihe3",
    dangerouslySetInnerHTML: {
      __html: getMessageScanned(message.text)
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "time"
  }, /*#__PURE__*/React.createElement("span", {
    className: timeClassName
  }, getTiming), message.isMyMessage ? getIcon : null))));
}
var XTextMessage = React.memo(XTextMessageComponent);
XTextMessage.defaultProps = {
  message: {},
  token: {}
};
XTextMessage.propTypes = {
  onSent: PropTypes.func,
  sendingUrl: PropTypes.string,
  message: PropTypes.object,
  token: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};
function XVideoMessageComponent(_ref23) {
  var message = _ref23.message,
    onSent = _ref23.onSent,
    token = _ref23.token,
<<<<<<< HEAD
    sendingUrl = _ref23.sendingUrl;
=======
    sendingUrl = _ref23.sendingUrl,
    option = _ref23.option,
    projectID = _ref23.projectID;
>>>>>>> 5b71127 (xapp-24.12.15)
  var _React$useState25 = React.useState(false),
    _React$useState26 = _slicedToArray(_React$useState25, 2),
    serverError = _React$useState26[0],
    setServerError = _React$useState26[1];
  var _React$useState27 = React.useState(__.getFormatTimeDifference(message.datetime)),
    _React$useState28 = _slicedToArray(_React$useState27, 2),
    time = _React$useState28[0],
    setTime = _React$useState28[1];
  var position = function () {
    var a = message.isMyMessage ? " x-right-position " : " x-left-position ";
    return a;
  }();
  var send = React.useCallback(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var message_data, formData, getToken, response;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          setServerError(false);
          message_data = {
            datetime: message.datetime,
            video: message.video,
            size: message.video.size,
<<<<<<< HEAD
            humanSize: message.size
=======
            humanSize: message.size,
            projectID: projectID,
            timestamp: Date.now().toString(),
            type: 'video'
>>>>>>> 5b71127 (xapp-24.12.15)
          };
          formData = new FormData();
          if (!(typeof token == 'function')) {
            _context4.next = 7;
            break;
          }
          getToken = token();
          _context4.next = 12;
          break;
        case 7:
          if (!(_typeof(token) == 'object')) {
            _context4.next = 11;
            break;
          }
          getToken = token;
          _context4.next = 12;
          break;
        case 11:
          throw new Error('token must be a function which returns an object or an object');
        case 12:
          Object.entries(getToken).forEach(function (_ref25) {
            var _ref26 = _slicedToArray(_ref25, 2),
              key = _ref26[0],
              value = _ref26[1];
            formData.append(key, value);
          });
          Object.entries(message_data).forEach(function (_ref27) {
            var _ref28 = _slicedToArray(_ref27, 2),
              key = _ref28[0],
              value = _ref28[1];
            formData.append(key, value);
          });
          _context4.next = 16;
          return __.layoutRequest.post(sendingUrl, formData, "json", uploading);
        case 16:
          response = _context4.sent;
<<<<<<< HEAD
          setTimeout(function () {
            if (!response.isSuccess) {
              // setServerError(true);
              onSent(message.id, message);
            } else {
              onSent(message.id, message);
            }
          }, 200);
=======
          if (response.isSuccess) {
            onSent(message.id, response.data);
          } else {
            setServerError(true);
          }
>>>>>>> 5b71127 (xapp-24.12.15)
        case 18:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  })), []);
  React.useEffect(function () {
    if (message.status == "sending" && !serverError) {
      send();
    }
  }, []);
  var uploadData = React.useRef(null);
  var uploading = function uploading(loaded, total, percentage) {
    var data = __.byteToHuman(loaded) + "/" + __.byteToHuman(total) + " | " + percentage + "%";
    uploadData.current.innerHTML = data;
  };
  var profile = function () {
    if (message.isMyMessage) {
      return null;
    } else {
      return /*#__PURE__*/React.createElement("div", {
        className: "x-pic"
      }, /*#__PURE__*/React.createElement(XUserProfilePicture, {
        imageURL: message.user.photo,
        width: 43,
        name: message.user.lastName,
        fontSize: 13
      }));
    }
  }();
  var getIcon = function () {
    var cl = "";
    if (serverError) {
      cl = "fa fa-exclamation-circle error";
    } else {
      if (message.status == "sending") {
        cl = "fa fa-upload";
      } else if (message.status == "sent") {
        cl = "fa fa-check sent";
      } else if (message.status == "delivered") {
        cl = "fa fa-check-double sent";
      } else if (message.status == "seen") {
        cl = "fa fa-check-double seen";
      }
    }
    return /*#__PURE__*/React.createElement("i", {
      className: cl
    });
  }();
  var timeClassName = function () {
    if (serverError) {
      return "error";
    } else {
      return "";
    }
  }();
  var getMessageStatus = function () {
    if (message.status == "sending") {
      return " sending";
    } else {
      return "";
    }
  }();
<<<<<<< HEAD
  var messageOption = function messageOption() {
    // message option
=======
  var messageOption = function messageOption(e) {
    e.preventDefault();
    option(message);
>>>>>>> 5b71127 (xapp-24.12.15)
  };
  var getTiming = function () {
    if (serverError) {
      return "Error";
    } else {
      if (message.status == "sending") {
        return "...";
      } else {
        return time;
      }
    }
  }();
  var messageClick = function () {
    if (serverError) {
      return send;
    }
  }();
  var messageClassName = "x-message " + position + getMessageStatus;
  var getTime = React.useEffect(function () {
    var timer = setInterval(function () {
      if (message.status == "sending") {
        setTime(__.getFormatTimeDifference(message.datetime));
      }
    }, 60000);
  }, []);
  var canplay = function () {
    if (message.status != "sending") {
      return " can-play";
    } else {
      return "";
    }
  }();
  var iconPlay = "icon-play" + canplay;
  return /*#__PURE__*/React.createElement("div", {
    className: messageClassName,
    onContextMenu: messageOption,
<<<<<<< HEAD
    id: message.id,
=======
    id: 'vid' + message.id,
>>>>>>> 5b71127 (xapp-24.12.15)
    onClick: messageClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-message-container"
  }, profile, /*#__PURE__*/React.createElement("div", {
    className: "x-message-data video"
  }, /*#__PURE__*/React.createElement("div", {
    className: "video-data"
  }, /*#__PURE__*/React.createElement("video", {
<<<<<<< HEAD
    src: message.status == "sending" ? "" : URL.createObjectURL(message.video),
=======
    src: message.status == "sending" ? "" : message.video,
>>>>>>> 5b71127 (xapp-24.12.15)
    preload: "metadata",
    poster: "video-poster.jpg",
    onPlay: onPlayVideo,
    onLoadedMetadata: onVideoLoadedMetadata,
    onTimeUpdate: onVideoTimeUpdated,
<<<<<<< HEAD
    target: message.id,
=======
    target: 'vid' + message.id,
>>>>>>> 5b71127 (xapp-24.12.15)
    onEnded: onEndVideo
  }), /*#__PURE__*/React.createElement("div", {
    className: "video-controls show"
  }, /*#__PURE__*/React.createElement("div", {
    className: "play-pause-video"
  }, /*#__PURE__*/React.createElement("div", {
    className: iconPlay,
<<<<<<< HEAD
    target: message.id
=======
    target: 'vid' + message.id
>>>>>>> 5b71127 (xapp-24.12.15)
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-play"
  })), /*#__PURE__*/React.createElement("div", {
    className: "video-timer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "video-line"
  }, /*#__PURE__*/React.createElement("div", {
    className: "video-progress"
  })), /*#__PURE__*/React.createElement("span", {
    className: "time-progress"
  }, "0:00"), /*#__PURE__*/React.createElement("span", {
    className: "time-total"
  }, "-:--")), /*#__PURE__*/React.createElement("div", {
    className: "video-title"
  }, /*#__PURE__*/React.createElement("p", {
    className: "title"
  }, "[Video]"), /*#__PURE__*/React.createElement("span", {
    className: "video-size"
  }, message.size ? message.size : null))))), /*#__PURE__*/React.createElement("div", {
    className: "time"
  }, /*#__PURE__*/React.createElement("span", {
    className: timeClassName,
    ref: uploadData
  }, getTiming), message.isMyMessage ? getIcon : null))));
}
var XVideoMessage = React.memo(XVideoMessageComponent);
XVideoMessage.defaultProps = {
  message: {},
  token: {}
};
XVideoMessage.propTypes = {
  onSent: PropTypes.func,
  sendingUrl: PropTypes.string,
  message: PropTypes.object,
  token: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};
function XAudioMessageComponent(_ref29) {
  var message = _ref29.message,
    onSent = _ref29.onSent,
    token = _ref29.token,
<<<<<<< HEAD
    sendingUrl = _ref29.sendingUrl;
=======
    sendingUrl = _ref29.sendingUrl,
    option = _ref29.option,
    projectID = _ref29.projectID;
>>>>>>> 5b71127 (xapp-24.12.15)
  var _React$useState29 = React.useState(false),
    _React$useState30 = _slicedToArray(_React$useState29, 2),
    serverError = _React$useState30[0],
    setServerError = _React$useState30[1];
  var _React$useState31 = React.useState(__.getFormatTimeDifference(message.datetime)),
    _React$useState32 = _slicedToArray(_React$useState31, 2),
    time = _React$useState32[0],
    setTime = _React$useState32[1];
  var position = function () {
    var a = message.isMyMessage ? " x-right-position " : " x-left-position ";
    return a;
  }();
  var send = React.useCallback(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var message_data, formData, getToken, response;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          setServerError(false);
          message_data = {
            datetime: message.datetime,
            audio: message.audio,
            size: message.audio.size,
<<<<<<< HEAD
            humanSize: message.size
=======
            humanSize: message.size,
            projectID: projectID,
            type: 'audio',
            timestamp: Date.now().toString()
>>>>>>> 5b71127 (xapp-24.12.15)
          };
          formData = new FormData();
          if (!(typeof token == 'function')) {
            _context5.next = 7;
            break;
          }
          getToken = token();
          _context5.next = 12;
          break;
        case 7:
          if (!(_typeof(token) == 'object')) {
            _context5.next = 11;
            break;
          }
          getToken = token;
          _context5.next = 12;
          break;
        case 11:
          throw new Error('token must be a function which returns an object or an object');
        case 12:
          Object.entries(getToken).forEach(function (_ref31) {
            var _ref32 = _slicedToArray(_ref31, 2),
              key = _ref32[0],
              value = _ref32[1];
            formData.append(key, value);
          });
          Object.entries(message_data).forEach(function (_ref33) {
            var _ref34 = _slicedToArray(_ref33, 2),
              key = _ref34[0],
              value = _ref34[1];
            formData.append(key, value);
          });
          _context5.next = 16;
          return __.layoutRequest.post(sendingUrl, formData, 'json', uploading);
        case 16:
          response = _context5.sent;
<<<<<<< HEAD
          setTimeout(function () {
            if (!response.isSuccess) {
              // setServerError(true);
              onSent(message.id, message);
            } else {
              onSent(message.id, message);
            }
          }, 200);
=======
          if (response.isSuccess) {
            onSent(message.id, response.data);
          } else {
            setServerError(true);
          }
>>>>>>> 5b71127 (xapp-24.12.15)
        case 18:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  })), []);
  React.useEffect(function () {
    if (message.status == "sending" && !serverError) {
      send();
    }
  }, []);
  var uploadData = React.useRef(null);
  var uploading = function uploading(loaded, total, percentage) {
    uploadData.current.innerHTML = __.byteToHuman(loaded) + "/" + __.byteToHuman(total) + " | " + percentage + "%";
  };
  var profile = function () {
    if (message.isMyMessage) {
      return null;
    } else {
      return /*#__PURE__*/React.createElement("div", {
        className: "x-pic"
      }, /*#__PURE__*/React.createElement(XUserProfilePicture, {
        imageURL: message.user.photo,
        width: 43,
        name: message.user.lastName,
        fontSize: 13
      }));
    }
  }();
  var getIcon = function () {
    var cl = "";
    if (serverError) {
      cl = "fa fa-exclamation-circle error";
    } else {
      if (message.status == "sending") {
        cl = "fa fa-upload";
      } else if (message.status == "sent") {
        cl = "fa fa-check sent";
      } else if (message.status == "delivered") {
        cl = "fa fa-check-double sent";
      } else if (message.status == "seen") {
        cl = "fa fa-check-double seen";
      }
    }
    return /*#__PURE__*/React.createElement("i", {
      className: cl
    });
  }();
  var getMessageStatus = function () {
    if (message.status == "sending") {
      return " sending";
    } else {
      return "";
    }
  }();
  var getTiming = function () {
    if (serverError) {
      return "Error";
    } else {
      if (message.status == "sending") {
        return "...";
      } else {
        return time;
      }
    }
  }();
  var timeClassName = function () {
    if (serverError) {
      return "error";
    } else {
      return "";
    }
  }();
<<<<<<< HEAD
  var messageOption = function messageOption() {
    // messag option 
=======
  var messageOption = function messageOption(e) {
    e.preventDefault();
    option(message);
>>>>>>> 5b71127 (xapp-24.12.15)
  };
  var messageClick = function () {
    if (serverError) {
      return send;
    }
  }();
  var messageClassName = "x-message " + position + getMessageStatus;
  var getTime = React.useEffect(function () {
    var timer = setInterval(function () {
      if (message.status == "sending") {
        setTime(__.getFormatTimeDifference(message.datetime));
      }
    }, 60000);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: messageClassName,
    onContextMenu: messageOption,
<<<<<<< HEAD
    id: message.id,
=======
    id: 'aud' + message.id,
>>>>>>> 5b71127 (xapp-24.12.15)
    onClick: messageClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-message-container"
  }, profile, /*#__PURE__*/React.createElement("div", {
    className: "x-message-data speech"
  }, /*#__PURE__*/React.createElement("div", {
    className: "speech-data"
  }, /*#__PURE__*/React.createElement("div", {
    className: message.status == "sending" ? "play-pause" : "play-pause can-play",
<<<<<<< HEAD
    target: message.id
=======
    target: 'aud' + message.id
>>>>>>> 5b71127 (xapp-24.12.15)
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-play"
  })), /*#__PURE__*/React.createElement("div", {
    className: "waves"
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress-model"
  }), /*#__PURE__*/React.createElement("div", {
    className: "waves-contents"
<<<<<<< HEAD
  }, /*#__PURE__*/React.createElement("span", {
    className: "waves-1 audio-waves"
  }, /*#__PURE__*/React.createElement("span", {
    className: "audio-progress"
  })), /*#__PURE__*/React.createElement("span", {
    className: "waves-2 audio-waves"
  }, /*#__PURE__*/React.createElement("span", {
    className: "audio-progress"
  })), /*#__PURE__*/React.createElement("span", {
    className: "waves-3 audio-waves"
  }, /*#__PURE__*/React.createElement("span", {
    className: "audio-progress"
  })), /*#__PURE__*/React.createElement("span", {
    className: "waves-4 audio-waves"
  }, /*#__PURE__*/React.createElement("span", {
    className: "audio-progress"
  })), /*#__PURE__*/React.createElement("span", {
    className: "waves-5 audio-waves"
  }, /*#__PURE__*/React.createElement("span", {
    className: "audio-progress"
  })), /*#__PURE__*/React.createElement("span", {
    className: "waves-6 audio-waves"
  }, /*#__PURE__*/React.createElement("span", {
    className: "audio-progress"
  })), /*#__PURE__*/React.createElement("span", {
    className: "waves-7 audio-waves"
  }, /*#__PURE__*/React.createElement("span", {
    className: "audio-progress"
  })), /*#__PURE__*/React.createElement("span", {
    className: "waves-8 audio-waves"
  }, /*#__PURE__*/React.createElement("span", {
    className: "audio-progress"
  })), /*#__PURE__*/React.createElement("span", {
    className: "waves-9 audio-waves"
  }, /*#__PURE__*/React.createElement("span", {
    className: "audio-progress"
  })), /*#__PURE__*/React.createElement("span", {
    className: "waves-10 audio-waves"
  }, /*#__PURE__*/React.createElement("span", {
    className: "audio-progress"
  })), /*#__PURE__*/React.createElement("span", {
    className: "waves-11 audio-waves"
  }, /*#__PURE__*/React.createElement("span", {
    className: "audio-progress"
  })), /*#__PURE__*/React.createElement("span", {
    className: "waves-12 audio-waves"
  }, /*#__PURE__*/React.createElement("span", {
    className: "audio-progress"
  })), /*#__PURE__*/React.createElement("span", {
    className: "waves-13 audio-waves"
  }, /*#__PURE__*/React.createElement("span", {
    className: "audio-progress"
  })), /*#__PURE__*/React.createElement("span", {
    className: "waves-14 audio-waves"
  }, /*#__PURE__*/React.createElement("span", {
    className: "audio-progress"
  })), /*#__PURE__*/React.createElement("span", {
    className: "waves-15 audio-waves"
  }, /*#__PURE__*/React.createElement("span", {
    className: "audio-progress"
  })), /*#__PURE__*/React.createElement("span", {
    className: "waves-16 audio-waves"
  }, /*#__PURE__*/React.createElement("span", {
    className: "audio-progress"
  })), /*#__PURE__*/React.createElement("span", {
    className: "waves-17 audio-waves"
  }, /*#__PURE__*/React.createElement("span", {
    className: "audio-progress"
  })), /*#__PURE__*/React.createElement("span", {
    className: "waves-18 audio-waves"
  }, /*#__PURE__*/React.createElement("span", {
    className: "audio-progress"
  })), /*#__PURE__*/React.createElement("span", {
    className: "waves-19 audio-waves"
  }, /*#__PURE__*/React.createElement("span", {
    className: "audio-progress"
  }))))), /*#__PURE__*/React.createElement("audio", {
    src: message.status == "sending" ? "" : URL.createObjectURL(message.audio),
    onPlay: onPlayAudio,
    onLoadedMetadata: onAudioLoadedMetadata,
    target: message.id,
=======
  }, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map(function (number, key) {
    return /*#__PURE__*/React.createElement("span", {
      className: "waves-" + number + " audio-waves",
      key: key
    }, /*#__PURE__*/React.createElement("span", {
      className: "audio-progress"
    }));
  })))), /*#__PURE__*/React.createElement("audio", {
    src: message.status == "sending" ? "" : message.audio,
    onPlay: onPlayAudio,
    onLoadedMetadata: onAudioLoadedMetadata,
    target: 'aud' + message.id,
>>>>>>> 5b71127 (xapp-24.12.15)
    onEnded: onEndAudio,
    onTimeUpdate: onAudioTimeUpdated
  }), /*#__PURE__*/React.createElement("div", {
    className: "timer"
  }, message.size ? /*#__PURE__*/React.createElement("span", {
    className: "audio-size"
  }, message.size) : null, /*#__PURE__*/React.createElement("span", {
    className: "current-time"
  }, "0:00"), /*#__PURE__*/React.createElement("span", {
    className: "audio-duration"
  }, "-:--")), /*#__PURE__*/React.createElement("div", {
    className: "time"
  }, /*#__PURE__*/React.createElement("span", {
    className: timeClassName,
    ref: uploadData
  }, getTiming), message.isMyMessage ? getIcon : null))));
}
var XAudioMessage = React.memo(XAudioMessageComponent);
XAudioMessage.defaultProps = {
  message: {},
  token: {}
};
XAudioMessage.propTypes = {
  onSent: PropTypes.func,
  sendingUrl: PropTypes.string,
  message: PropTypes.object,
  token: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};
function XFileMessageComponent(_ref35) {
  var message = _ref35.message,
    onSent = _ref35.onSent,
    token = _ref35.token,
<<<<<<< HEAD
    sendingUrl = _ref35.sendingUrl;
=======
    sendingUrl = _ref35.sendingUrl,
    option = _ref35.option,
    projectID = _ref35.projectID;
>>>>>>> 5b71127 (xapp-24.12.15)
  var _React$useState33 = React.useState(false),
    _React$useState34 = _slicedToArray(_React$useState33, 2),
    serverError = _React$useState34[0],
    setServerError = _React$useState34[1];
  var _React$useState35 = React.useState(__.getFormatTimeDifference(message.datetime)),
    _React$useState36 = _slicedToArray(_React$useState35, 2),
    time = _React$useState36[0],
    setTime = _React$useState36[1];
  var position = function () {
    var a = message.isMyMessage ? " x-right-position " : " x-left-position ";
    return a;
  }();
  var send = React.useCallback(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var ext, type, message_data, formData, getToken, response;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          setServerError(false);
          ext = __.getFileExtension(message.file.name);
          type = null;
          if (XSettings.filesFormats.indexOf(ext) != -1) {
            type = XSettings.fileFormatToName[ext];
          } else {
            type = "File";
          }
          message_data = {
            datetime: message.datetime,
            file: message.file,
<<<<<<< HEAD
            size: message.file.size,
            humanSize: message.size,
            extension: ext,
=======
            projectID: projectID,
            size: message.file.size,
            humanSize: message.size,
            extension: ext,
            timestamp: Date.now().toString(),
            type: 'file',
>>>>>>> 5b71127 (xapp-24.12.15)
            fileType: type.toLowerCase()
          };
          formData = new FormData();
          if (!(typeof token == 'function')) {
            _context6.next = 10;
            break;
          }
          getToken = token();
          _context6.next = 15;
          break;
        case 10:
          if (!(_typeof(token) == 'object')) {
            _context6.next = 14;
            break;
          }
          getToken = token;
          _context6.next = 15;
          break;
        case 14:
          throw new Error('token must be a function which returns an object or an object');
        case 15:
          Object.entries(getToken).forEach(function (_ref37) {
            var _ref38 = _slicedToArray(_ref37, 2),
              key = _ref38[0],
              value = _ref38[1];
            formData.append(key, value);
          });
          Object.entries(message_data).forEach(function (_ref39) {
            var _ref40 = _slicedToArray(_ref39, 2),
              key = _ref40[0],
              value = _ref40[1];
            formData.append(key, value);
          });
          _context6.next = 19;
          return __.layoutRequest.post(sendingUrl, formData, 'json', uploading);
        case 19:
          response = _context6.sent;
<<<<<<< HEAD
          setTimeout(function () {
            if (!response.isSuccess) {
              // setServerError(true);
              onSent(message.id, message);
            } else {
              onSent(message.id, message);
            }
          }, 200);
=======
          if (response.isSuccess) {
            onSent(message.id, response.data);
          } else {
            setServerError(true);
          }
>>>>>>> 5b71127 (xapp-24.12.15)
        case 21:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  })), []);
  React.useEffect(function () {
    if (message.status == "sending" && !serverError) {
      send();
    }
  }, []);
  var uploadData = React.useRef(null);
  var uploading = function uploading(loaded, total, percentage) {
    uploadData.current.innerHTML = __.byteToHuman(loaded) + "/" + __.byteToHuman(total) + " | " + percentage + "%";
  };
  var profile = function () {
    if (message.isMyMessage) {
      return null;
    } else {
      return /*#__PURE__*/React.createElement("div", {
        className: "x-pic"
      }, /*#__PURE__*/React.createElement(XUserProfilePicture, {
        imageURL: message.user.photo,
        width: 43,
        name: message.user.lastName,
        fontSize: 13
      }));
    }
  }();
  var getFileName = function () {
    var filename = message.status == "sending" ? message.file.name : message.file;
    filename = __.getFileExtension(filename);
    if (XSettings.filesFormats.indexOf(filename) != -1) {
      return XSettings.fileFormatToName[filename];
    } else {
      return 'File';
    }
  }();
  var getFileIcon = function () {
    var filename = message.status == "sending" ? message.file.name : message.file;
    filename = __.getFileExtension(filename);
    if (XSettings.filesFormats.indexOf(filename) != -1) {
      return XSettings.fileFormatToIcon[filename];
    } else {
      return 'fa fa-file-alt';
    }
  }();
  var getIcon = function () {
    var cl = "";
    if (serverError) {
      cl = "fa fa-exclamation-circle error";
    } else {
      if (message.status == "sending") {
        cl = "fa fa-upload";
      } else if (message.status == "sent") {
        cl = "fa fa-check sent";
      } else if (message.status == "delivered") {
        cl = "fa fa-check-double sent";
      } else if (message.status == "seen") {
        cl = "fa fa-check-double seen";
      }
    }
    return /*#__PURE__*/React.createElement("i", {
      className: cl
    });
  }();
  var getMessageStatus = function () {
    if (message.status == "sending") {
      return " sending";
    } else {
      return "";
    }
  }();
<<<<<<< HEAD
  var messageOption = function messageOption() {
    // message option
=======
  var messageOption = function messageOption(e) {
    e.preventDefault();
    option(message);
>>>>>>> 5b71127 (xapp-24.12.15)
  };
  var messageClick = function () {
    if (serverError) {
      return send;
    }
  }();
  var getTiming = function () {
    if (serverError) {
      return "Error";
    } else {
      if (message.status == "sending") {
        return "...";
      } else {
        return time;
      }
    }
  }();
  var timeClassName = function () {
    if (serverError) {
      return "error";
    } else {
      return "";
    }
  }();
  var messageClassName = "x-message " + position + getMessageStatus;
  var getTime = React.useEffect(function () {
    var timer = setInterval(function () {
      if (message.status == "sending") {
        setTime(__.getFormatTimeDifference(message.datetime));
      }
    }, 60000);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: messageClassName,
    onContextMenu: messageOption,
    id: message.id,
    onClick: messageClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-message-container"
  }, profile, /*#__PURE__*/React.createElement("div", {
    className: "x-message-data other-file"
  }, /*#__PURE__*/React.createElement("div", {
    className: "file-data"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon-file"
  }, /*#__PURE__*/React.createElement("i", {
    className: getFileIcon
  })), /*#__PURE__*/React.createElement("div", {
    className: "file-detail"
<<<<<<< HEAD
  }, /*#__PURE__*/React.createElement("p", null, message.file.name), /*#__PURE__*/React.createElement("p", null, getFileName, message.size ? " | " + message.size : null))), /*#__PURE__*/React.createElement("div", {
=======
  }, /*#__PURE__*/React.createElement("p", null, message.status == 'sending' ? message.file.name : message.file), /*#__PURE__*/React.createElement("p", null, getFileName, message.size ? " | " + message.size : null))), /*#__PURE__*/React.createElement("div", {
>>>>>>> 5b71127 (xapp-24.12.15)
    className: "time"
  }, /*#__PURE__*/React.createElement("span", {
    className: timeClassName,
    ref: uploadData
  }, getTiming), message.isMyMessage ? getIcon : null))));
}
var XFileMessage = React.memo(XFileMessageComponent);
XFileMessage.defaultProps = {
  token: {},
  message: {}
};
XFileMessage.propTypes = {
  message: PropTypes.object,
  sendingUrl: PropTypes.string,
  onSent: PropTypes.func,
  token: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};
function XImageMessageComponent(_ref41) {
  var message = _ref41.message,
    onSent = _ref41.onSent,
    token = _ref41.token,
<<<<<<< HEAD
    sendingUrl = _ref41.sendingUrl;
=======
    sendingUrl = _ref41.sendingUrl,
    option = _ref41.option,
    projectID = _ref41.projectID,
    visual = _ref41.visual;
>>>>>>> 5b71127 (xapp-24.12.15)
  var _React$useState37 = React.useState(false),
    _React$useState38 = _slicedToArray(_React$useState37, 2),
    serverError = _React$useState38[0],
    setServerError = _React$useState38[1];
  var _React$useState39 = React.useState(__.getFormatTimeDifference(message.datetime)),
    _React$useState40 = _slicedToArray(_React$useState39, 2),
    time = _React$useState40[0],
    setTime = _React$useState40[1];
  var position = function () {
    var a = message.isMyMessage ? " x-right-position " : " x-left-position ";
    return a;
  }();
  var send = React.useCallback(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    var message_data, formData, getToken, response;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          setServerError(false);
          message_data = {
            datetime: message.datetime,
<<<<<<< HEAD
=======
            timestamp: Date.now().toString(),
            type: 'image',
            projectID: projectID,
>>>>>>> 5b71127 (xapp-24.12.15)
            image: message.image,
            size: message.image.size,
            humanSize: message.size
          };
          formData = new FormData();
          if (!(typeof token == 'function')) {
            _context7.next = 7;
            break;
          }
          getToken = token();
          _context7.next = 12;
          break;
        case 7:
          if (!(_typeof(token) == 'object')) {
            _context7.next = 11;
            break;
          }
          getToken = token;
          _context7.next = 12;
          break;
        case 11:
          throw new Error('token must be a function which returns an object or an object');
        case 12:
          Object.entries(getToken).forEach(function (_ref43) {
            var _ref44 = _slicedToArray(_ref43, 2),
              key = _ref44[0],
              value = _ref44[1];
            formData.append(key, value);
          });
          Object.entries(message_data).forEach(function (_ref45) {
            var _ref46 = _slicedToArray(_ref45, 2),
              key = _ref46[0],
              value = _ref46[1];
            formData.append(key, value);
          });
          _context7.next = 16;
          return __.layoutRequest.post(sendingUrl, formData, 'json', uploading);
        case 16:
          response = _context7.sent;
<<<<<<< HEAD
          setTimeout(function () {
            if (!response.isSuccess) {
              // setServerError(true);
              onSent(message.id, message);
            } else {
              onSent(message.id, message);
            }
          }, 200);
=======
          if (response.isSuccess) {
            console.log(response.data);
            onSent(message.id, response.data);
          } else {
            setServerError(true);
          }
>>>>>>> 5b71127 (xapp-24.12.15)
        case 18:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  })), []);
  React.useEffect(function () {
    if (message.status == "sending" && !serverError) {
      send();
    }
  }, []);
  var uploadData = React.useRef(null);
  var uploading = function uploading(loaded, total, percentage) {
    uploadData.current.innerHTML = __.byteToHuman(loaded) + "/" + __.byteToHuman(total) + " | " + percentage + "%";
  };
  var profile = function () {
    if (message.isMyMessage) {
      return null;
    } else {
      return /*#__PURE__*/React.createElement("div", {
        className: "x-pic"
      }, /*#__PURE__*/React.createElement("img", {
        src: message.img
      }));
    }
  }();
  var getIcon = function () {
    var cl = "";
    if (serverError) {
      cl = "fa fa-exclamation-circle error";
    } else {
      if (message.status == "sending") {
        cl = "fa fa-upoload";
      } else if (message.status == "sent") {
        cl = "fa fa-check sent";
      } else if (message.status == "delivered") {
        cl = "fa fa-check-double sent";
      } else if (message.status == "seen") {
        cl = "fa fa-check-double seen";
      }
    }
    return /*#__PURE__*/React.createElement("i", {
      className: cl
    });
  }();
  var getMessageStatus = function () {
    if (message.status == "sending") {
      return " sending";
    } else {
      return "";
    }
  }();
  var getTiming = function () {
    if (serverError) {
      return "Error";
    } else {
      if (message.status == "sending") {
        return "...";
      } else {
        return time;
      }
    }
  }();
  var timeClassName = function () {
    if (serverError) {
      return "error";
    } else {
      return "";
    }
  }();
<<<<<<< HEAD
  var messageOption = function messageOption() {
    // message option
=======
  var messageOption = function messageOption(e) {
    e.preventDefault();
    option(message);
  };
  var seePhoto = function seePhoto() {
    visual(message);
>>>>>>> 5b71127 (xapp-24.12.15)
  };
  var messageClick = function () {
    if (serverError) {
      return send;
<<<<<<< HEAD
=======
    } else {
      return seePhoto;
>>>>>>> 5b71127 (xapp-24.12.15)
    }
  }();
  var messageClassName = "x-message " + position + getMessageStatus;
  var getTime = React.useEffect(function () {
    var timer = setInterval(function () {
      if (message.status == "sending") {
        setTime(__.getFormatTimeDifference(message.datetime));
      }
    }, 60000);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: messageClassName,
    onContextMenu: messageOption,
    id: message.id,
    onClick: messageClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-message-container"
  }, profile, /*#__PURE__*/React.createElement("div", {
    className: "x-message-data photo"
  }, /*#__PURE__*/React.createElement("img", {
<<<<<<< HEAD
    src: message.status == 'sending' ? URL.createObjectURL(message.image) : URL.createObjectURL(message.image)
=======
    src: message.status == 'sending' ? URL.createObjectURL(message.image) : message.image
>>>>>>> 5b71127 (xapp-24.12.15)
  }), /*#__PURE__*/React.createElement("div", {
    className: "time"
  }, /*#__PURE__*/React.createElement("span", {
    className: timeClassName,
    ref: uploadData
  }, getTiming), message.isMyMessage ? getIcon : null))));
}
var XImageMessage = React.memo(XImageMessageComponent);
XImageMessage.defaultProps = {
  message: {},
  token: {}
};
XImageMessage.propTypes = {
  message: PropTypes.object,
  onSent: PropTypes.func,
  sendingUrl: PropTypes.string,
  token: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};
function XOpenConversation(_ref47) {
  var style = _ref47.style,
    syncConversationList = _ref47.syncConversationList,
<<<<<<< HEAD
    close = _ref47.close,
    convID = _ref47.convID,
    header = _ref47.header,
    messages = _ref47.messages,
    messageForm = _ref47.messageForm;
=======
    token = _ref47.token,
    projectID = _ref47.projectID,
    visual = _ref47.visual,
    sentSound = _ref47.sentSound,
    close = _ref47.close,
    conversationData = _ref47.conversationData,
    urlSending = _ref47.urlSending,
    convID = _ref47.convID,
    header = _ref47.header,
    messages = _ref47.messages,
    messageForm = _ref47.messageForm,
    convCryptedID = _ref47.convCryptedID;
>>>>>>> 5b71127 (xapp-24.12.15)
  var _React$useState41 = React.useState(""),
    _React$useState42 = _slicedToArray(_React$useState41, 2),
    textValue = _React$useState42[0],
    setTextValue = _React$useState42[1];
  var _React$useState43 = React.useState([]),
    _React$useState44 = _slicedToArray(_React$useState43, 2),
    files = _React$useState44[0],
    setFiles = _React$useState44[1];
  var _React$useState45 = React.useState(null),
    _React$useState46 = _slicedToArray(_React$useState45, 2),
    video = _React$useState46[0],
    setVideo = _React$useState46[1];
  var _React$useState47 = React.useState(null),
    _React$useState48 = _slicedToArray(_React$useState47, 2),
    audio = _React$useState48[0],
    setAudio = _React$useState48[1];
  var _React$useState49 = React.useState(null),
    _React$useState50 = _slicedToArray(_React$useState49, 2),
    photo = _React$useState50[0],
    setPhoto = _React$useState50[1];
  var _React$useState51 = React.useState(messages),
    _React$useState52 = _slicedToArray(_React$useState51, 2),
    messageSent = _React$useState52[0],
    setMessageSent = _React$useState52[1];
  var _React$useState53 = React.useState([]),
    _React$useState54 = _slicedToArray(_React$useState53, 2),
    messageSending = _React$useState54[0],
    setMessageSending = _React$useState54[1];
  var handleTextChange = function handleTextChange(e) {
    setTextValue(e.target.value);
  };
  var handlePhotoChange = function handlePhotoChange(val) {
    sendMessagePhoto(val);
  };
<<<<<<< HEAD
=======
  var socket = null;
  var getMessageSent = React.useMemo(function () {
    return _toConsumableArray(messageSent);
  }, [messageSent]);
  React.useEffect(function () {
    socket = new WebSocket('ws://' + window.location.host + '/ws/chat/' + convCryptedID + '/');
    socket.onclose = function (e) {
      console.error("error when opening a convesation");
    };
    socket.onopen = function (e) {
      console.log("conversation opened successfullly");
    };
    socket.onmessage = function (e) {
      var response = JSON.parse(e.data);
      if (Array.isArray(response)) {
        setMessageSent(response);
        showLastMessage();
      } else {
        if (response.action == 'new') {
          var prev = messageSent.filter(function (m) {
            return m.timestamp == response.timestamp;
          });
          if (prev.length == 0) {
            setMessageSent(function (recent) {
              return [].concat(_toConsumableArray(recent), [response]);
            });
            showLastMessage();
            sentSound();
          }
        } else if (response.action == 'delete') {
          setMessageSent(function (prev) {
            return prev.filter(function (mess) {
              return mess.id != response.id;
            });
          });
        }
      }
    };
    return function () {
      return socket.close();
    };
  }, []);
>>>>>>> 5b71127 (xapp-24.12.15)
  var sendMessagePhoto = function sendMessagePhoto(val) {
    var date = new Date();
    var newMessage = {
      isMyMessage: true,
      id: "fake-ID-message-" + XSettings.fakeIDMessage,
      image: val,
      status: "sending",
      datetime: date.toString()
    };
    setMessageSending(function () {
      return [].concat(_toConsumableArray(messageSending), [newMessage]);
    });
    setTextValue("");
    XSettings.fakeIDMessage++;
    showLastMessage();
  };
  var handleVideoChange = function handleVideoChange(val) {
    sendMessageVideo(val);
  };
  var handleSpeechChange = function handleSpeechChange(val) {
    sendMessageSpeech(val);
  };
  var sendMessageSpeech = function sendMessageSpeech(val) {
    var date = new Date();
    var newMessage = {
      isMyMessage: true,
      id: "fake-ID-message-" + XSettings.fakeIDMessage,
      audio: val,
      size: __.byteToHuman(val.size),
      status: "sending",
      datetime: date.toString()
    };
    setMessageSending(function () {
      return [].concat(_toConsumableArray(messageSending), [newMessage]);
    });
    XSettings.fakeIDMessage++;
    showLastMessage();
  };
  var sendMessageVideo = function sendMessageVideo(val) {
    var date = new Date();
    var newMessage = {
      isMyMessage: true,
      id: "fake-ID-message-" + XSettings.fakeIDMessage,
      video: val,
      size: __.byteToHuman(val.size),
      status: "sending",
      datetime: date.toString()
    };
    setMessageSending(function () {
      return [].concat(_toConsumableArray(messageSending), [newMessage]);
    });
    XSettings.fakeIDMessage++;
    showLastMessage();
  };
  var sendMessageFile = function sendMessageFile(val) {
    var date = new Date();
    var newMessage = {
      isMyMessage: true,
      id: "fake-ID-message-" + XSettings.fakeIDMessage,
      file: val,
      size: __.byteToHuman(val.size),
      status: "sending",
      datetime: date.toString()
    };
    setMessageSending(function () {
      return [].concat(_toConsumableArray(messageSending), [newMessage]);
    });
    XSettings.fakeIDMessage++;
    showLastMessage();
  };
  var handleFileChange = function handleFileChange(val) {
    sendMessageFile(val);
  };
  var handleMessageSent = function handleMessageSent(fakeId, data) {
    var itemToTransfer = messageSending.find(function (item) {
      return item.id == fakeId;
    });
    var updatedListOne = messageSending.filter(function (item) {
      return item.id != fakeId;
    });
<<<<<<< HEAD
    var newItem = _objectSpread(_objectSpread({}, itemToTransfer), {}, {
      status: "sent"
    });
    syncConversationList(convID, newItem);
    setMessageSending(updatedListOne);
    setMessageSent([].concat(_toConsumableArray(messageSent), [newItem]));
=======
    var newItem;
    console.log(data);
    if (data.type == 'text') {
      newItem = _objectSpread(_objectSpread({}, itemToTransfer), {}, {
        status: "sent",
        id: data.id,
        timestamp: data.timestamp
      });
    } else if (data.type == 'image') {
      newItem = _objectSpread(_objectSpread({}, itemToTransfer), {}, {
        status: "sent",
        id: data.id,
        timestamp: data.timestamp,
        image: data.image
      });
    } else if (data.type == 'audio') {
      newItem = _objectSpread(_objectSpread({}, itemToTransfer), {}, {
        status: "sent",
        id: data.id,
        timestamp: data.timestamp,
        audio: data.audio
      });
    } else if (data.type == 'file') {
      newItem = _objectSpread(_objectSpread({}, itemToTransfer), {}, {
        status: "sent",
        id: data.id,
        timestamp: data.timestamp,
        file: data.file
      });
    } else if (data.type == 'video') {
      newItem = _objectSpread(_objectSpread({}, itemToTransfer), {}, {
        status: "sent",
        id: data.id,
        timestamp: data.timestamp,
        video: data.video
      });
    }
    setMessageSending(updatedListOne);
    setMessageSent([].concat(_toConsumableArray(messageSent), [newItem]));
    sentSound();
>>>>>>> 5b71127 (xapp-24.12.15)
  };
  var sendMessageText = function sendMessageText() {
    var date = new Date();
    var newMessage = {
      isMyMessage: true,
      id: "fake-ID-message-" + XSettings.fakeIDMessage,
      text: textValue,
      status: "sending",
      datetime: date.toISOString()
    };
    setMessageSending(function () {
      return [].concat(_toConsumableArray(messageSending), [newMessage]);
    });
    setTextValue("");
    XSettings.fakeIDMessage++;
    showLastMessage();
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    sendMessageText();
  };
  var messageFormStyle = {
    position: "absolute",
    bottom: "0px",
    zIndex: "2"
  };
  var headerStyle = {
    position: "absolute",
    top: "0px",
    zIndex: "2"
  };
  var allMessageStyle = {
    zIndex: "1",
    top: "60px",
    bottom: "65px",
    overflow: "auto"
  };
  var showLastMessage = React.useCallback(function () {
    setTimeout(function () {
      appear.current.scrollIntoView({
        "behavior": "smooth"
      }, 200);
      closeMessageOption();
<<<<<<< HEAD
    }, 1000);
=======
    }, 200);
>>>>>>> 5b71127 (xapp-24.12.15)
  }, []);
  var appear = React.useRef(null);
  var conversationBoxClass = "xpore xwi100per xhe100per";
  var messOp = React.useRef(null);
  var black = React.useRef(null);
<<<<<<< HEAD
  var openMessageOption = function openMessageOption(dataCom) {
    messOp.current.style.right = "0px";
    black.current.style.display = "block";
=======
  var _React$useState55 = React.useState(null),
    _React$useState56 = _slicedToArray(_React$useState55, 2),
    focusedMessageOption = _React$useState56[0],
    setFocusedMessageOption = _React$useState56[1];
  var openMessageOption = function openMessageOption(dataCom) {
    messOp.current.style.right = "0px";
    black.current.style.display = "block";
    setFocusedMessageOption(dataCom);
>>>>>>> 5b71127 (xapp-24.12.15)
  };
  var closeMessageOption = function closeMessageOption() {
    messOp.current.style.right = "-60%";
    black.current.style.display = "none";
  };
<<<<<<< HEAD
=======
  var requestDeleteForMe = /*#__PURE__*/function () {
    var _ref48 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(message_id) {
      var url, to_send, formData, req;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            url = '/delete_message_for_me/';
            to_send = {
              id: focusedMessageOption.id,
              room_id: convCryptedID,
              csrfmiddlewaretoken: token.csrfmiddlewaretoken
            };
            formData = new FormData();
            Object.entries(to_send).forEach(function (_ref49) {
              var _ref50 = _slicedToArray(_ref49, 2),
                key = _ref50[0],
                val = _ref50[1];
              formData.append(key, val);
            });
            _context8.next = 6;
            return __.layoutRequest.post(url, formData, 'json');
          case 6:
            req = _context8.sent;
            if (req.isSuccess) {
              console.log("");
            } else {
              __.xAlert('Connection erreur', "Verifier votre connection s'il vous plaît...", 'danger');
            }
          case 8:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
    return function requestDeleteForMe(_x) {
      return _ref48.apply(this, arguments);
    };
  }();
  var requestDeleteForEveryone = /*#__PURE__*/function () {
    var _ref51 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(message_id) {
      var url, to_send, formData, req;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            url = '/delete_for_everyone/';
            to_send = {
              id: focusedMessageOption.id,
              room_id: convCryptedID,
              csrfmiddlewaretoken: token.csrfmiddlewaretoken
            };
            formData = new FormData();
            Object.entries(to_send).forEach(function (_ref52) {
              var _ref53 = _slicedToArray(_ref52, 2),
                key = _ref53[0],
                val = _ref53[1];
              formData.append(key, val);
            });
            _context9.next = 6;
            return __.layoutRequest.post(url, formData, 'json');
          case 6:
            req = _context9.sent;
            if (req.isSuccess) {
              console.log("");
            } else {
              __.xAlert('Connection erreur', "Verifier votre connection s'il vous plaît...", 'danger');
            }
          case 8:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    }));
    return function requestDeleteForEveryone(_x2) {
      return _ref51.apply(this, arguments);
    };
  }();
  var deleteForEveryone = function deleteForEveryone() {
    requestDeleteForEveryone(focusedMessageOption.id);
    closeMessageOption();
  };
  var deleteForMe = function deleteForMe() {
    requestDeleteForMe(focusedMessageOption.id);
    closeMessageOption();
  };
>>>>>>> 5b71127 (xapp-24.12.15)
  var noneFunc = function noneFunc(xx) {};
  return /*#__PURE__*/React.createElement("div", {
    className: conversationBoxClass
  }, /*#__PURE__*/React.createElement("div", {
    ref: black,
    onClick: closeMessageOption,
    className: "black-this-message x-black-02"
  }), /*#__PURE__*/React.createElement("div", {
    ref: messOp,
    className: "x-message-option xpoab"
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi20 xfowebo title-message-option"
<<<<<<< HEAD
  }, "Option de message:"), /*#__PURE__*/React.createElement("div", {
=======
  }, "Option de message:"), focusedMessageOption != null && focusedMessageOption.text ? /*#__PURE__*/React.createElement("div", {
>>>>>>> 5b71127 (xapp-24.12.15)
    className: "each-conv-option x-center xalitce xhe55 xdigr xwi90per x-pointer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-child-center x-square-40"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-clipboard xfosi22"
  })), /*#__PURE__*/React.createElement("div", {
    className: ""
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi12 xfowebo"
<<<<<<< HEAD
  }, "Copier"))), /*#__PURE__*/React.createElement("div", {
    className: "each-conv-option x-center xalitce xhe55 xdigr xwi90per x-pointer"
=======
  }, "Copier"))) : null, focusedMessageOption != null && (focusedMessageOption.image || focusedMessageOption.video) ? /*#__PURE__*/React.createElement("div", {
    className: "each-conv-option x-center xalitce xhe55 xdigr xwi90per x-pointer",
    onClick: function onClick() {
      return visual(focusedMessageOption);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-child-center x-square-40"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-expand xfosi22"
  })), /*#__PURE__*/React.createElement("div", {
    className: ""
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi12 xfowebo"
  }, "Ouvrez en grand angle"))) : null, /*#__PURE__*/React.createElement("div", {
    className: "each-conv-option x-center xalitce xhe55 xdigr xwi90per x-pointer",
    onClick: deleteForMe
>>>>>>> 5b71127 (xapp-24.12.15)
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-child-center x-square-40"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-trash-alt xfosi22"
  })), /*#__PURE__*/React.createElement("div", {
    className: ""
  }, /*#__PURE__*/React.createElement("p", {
    className: "x-text-danger xfosi12 xfowebo"
<<<<<<< HEAD
  }, "Supprimer pour moi"))), /*#__PURE__*/React.createElement("div", {
    className: "each-conv-option x-center xalitce xhe55 xdigr xwi90per x-pointer"
=======
  }, "Supprimer pour moi"))), focusedMessageOption != null && focusedMessageOption.isMyMessage == true ? /*#__PURE__*/React.createElement("div", {
    className: "each-conv-option x-center xalitce xhe55 xdigr xwi90per x-pointer",
    onClick: deleteForEveryone
>>>>>>> 5b71127 (xapp-24.12.15)
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-child-center x-square-40"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-trash-alt xfosi22"
  })), /*#__PURE__*/React.createElement("div", {
    className: ""
  }, /*#__PURE__*/React.createElement("p", {
    className: "x-text-danger xfosi12 xfowebo"
<<<<<<< HEAD
  }, "Supprimer pour tous le monde"))), /*#__PURE__*/React.createElement("div", {
=======
  }, "Supprimer pour tous le monde"))) : null, /*#__PURE__*/React.createElement("div", {
>>>>>>> 5b71127 (xapp-24.12.15)
    onClick: closeMessageOption,
    className: "each-conv-option x-center xalitce xhe55 xdigr xwi90per x-pointer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-child-center x-square-40"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-times xfosi22"
  })), /*#__PURE__*/React.createElement("div", {
    className: ""
  }, /*#__PURE__*/React.createElement("p", {
    className: "xfosi12 xfowebo"
  }, "Fermer")))), /*#__PURE__*/React.createElement(XConversationHeader, {
    close: close,
    data: header,
    style: headerStyle
  }), /*#__PURE__*/React.createElement("div", {
<<<<<<< HEAD
    className: "x-all-messages xpoab xwi100per",
    style: allMessageStyle
  }, messageSent.map(function (message, key) {
    return /*#__PURE__*/React.createElement(XMessage, {
      key: key,
      message: message,
=======
    className: "x-all-messages x-all-messages-display xpoab xwi100per",
    style: allMessageStyle
  }, messageSent.map(function (message) {
    return /*#__PURE__*/React.createElement(XMessage, {
      sendingUrl: urlSending,
      key: message.id,
      visual: visual,
      projectID: projectID,
      message: message,
      token: token,
>>>>>>> 5b71127 (xapp-24.12.15)
      option: openMessageOption
    });
  }), messageSending.map(function (message, key) {
    return /*#__PURE__*/React.createElement(XMessage, {
<<<<<<< HEAD
      key: key,
=======
      sendingUrl: urlSending,
      key: key,
      token: token,
      visual: visual,
      projectID: projectID,
>>>>>>> 5b71127 (xapp-24.12.15)
      onSent: handleMessageSent,
      message: message
    });
  }), /*#__PURE__*/React.createElement("span", {
    className: "appear-last-message",
    ref: appear
  })), /*#__PURE__*/React.createElement(XMessageForm, {
    value: textValue,
    onPhotoChange: handlePhotoChange,
    onTextChange: handleTextChange,
    onVideoChange: handleVideoChange,
    onFileChange: handleFileChange,
    onSpeechChange: handleSpeechChange,
    style: messageFormStyle,
    onSubmit: handleSubmit
  }));
}
XOpenConversation.defaultProps = {
  header: {},
  messageForm: {},
  messages: {},
<<<<<<< HEAD
  style: {}
=======
  style: {},
  sentSound: function sentSound() {},
  newMessageSound: function newMessageSound() {}
>>>>>>> 5b71127 (xapp-24.12.15)
};
XOpenConversation.propTypes = {
  header: PropTypes.object,
  style: PropTypes.object
};
