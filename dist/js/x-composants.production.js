"use strict";

var _XButtonLoadable$prop;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var xAlert = function xAlert(title, message, status, x) {
  var statusColor = "x-alert-btn x-sp-btn x-pointer ";
  if (status == 'danger') {
    statusColor = statusColor + "x-alert-btn-danger";
  } else if (status == "warning") {
    statusColor = statusColor + "x-alert-btn-warning";
  } else if (status == "success") {
    statusColor = statusColor + "x-alert-btn-success";
  } else {
    statusColor = statusColor + "x-alert-btn-normal";
  }
  var body = document.body;
  var popup = body.querySelector("#x-app-popup");
  var ok = popup.querySelector("#ok");
  var messageAlert = popup.querySelector("#message");
  var titleAlert = popup.querySelector("#title");
  ok.setAttribute("class", statusColor);
  titleAlert.innerHTML = title;
  messageAlert.innerHTML = message;
  setTimeout(function () {
    if (!x) {
      if ($(popup).hasClass("x-popup-hidden")) {
        __.replaceClass(popup, "x-popup-hidden", "x-popup-alert");
      }
    }
  }, 200);
};
function getPubDateTime(state, value) {
  if (_typeof(value) == undefined) {
    return null;
  } else if (typeof value == "string") {
    state = __.getFormatDatetimeDifference(value);
    return state;
  }
}
function XPublisher(_ref) {
  var className = _ref.className,
    user = _ref.user,
    data = _ref.data,
    imgWidth = _ref.imgWidth;
  var _React$useState = React.useState(""),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    datetime = _React$useState2[0],
    setDatetime = _React$useState2[1];
  var pubClassName = React.useMemo(function () {
    return "xdifl xalitce xjucospev " + className;
  }, []);
  var imgWi = React.useMemo(function () {
    return {
      width: imgWidth
    };
  }, []);
  React.useEffect(function () {
    if (data.datetime == undefined) {
      setDatetime(null);
    } else {
      setDatetime(__.getFormatDatetimeDifference(data.datetime));
    }
  }, []);
  React.useEffect(function () {
    if (data.datetime == undefined) {
      setDatetime(null);
    } else {
      setInterval(function () {
        setDatetime(__.getFormatDatetimeDifference(data.datetime));
      }, 30000);
    }
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: pubClassName
  }, /*#__PURE__*/React.createElement("div", {
    className: "xwi90per xdifl xalitce"
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-profile-pic x-square-45 xmari15 xmale10",
    style: imgWi
  }, /*#__PURE__*/React.createElement("img", {
    src: user.src,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: ""
  }, user.name ? /*#__PURE__*/React.createElement("p", {
    className: "xma0 xfosi13 xfowebo"
  }, user.name) : null, /*#__PURE__*/React.createElement("div", {
    className: "xmato2"
  }, user.id ? /*#__PURE__*/React.createElement("span", {
    className: "publisher-id xfosi11 xfowebo x-low-emphasis"
  }, user.id) : null, datetime == null ? null : /*#__PURE__*/React.createElement("span", {
    className: "pub-date x-low-emphasis xmale5 xfosi9"
  }, datetime)))), /*#__PURE__*/React.createElement("div", {
    className: "pub-option xwi10per xdifl xjucoflen xpari25"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-ellipsis-h xfosi20"
  })));
}
XPublisher.defaultProps = {
  imgWidth: "45px",
  className: ''
};
XPublisher.propTypes = {
  user: PropTypes.object.isRequired,
  className: PropTypes.string,
  imgWidth: PropTypes.string,
  data: PropTypes.object
};
function XUserProfilePictureComponent(_ref2) {
  var name = _ref2.name,
    imageURL = _ref2.imageURL,
    fontSize = _ref2.fontSize,
    width = _ref2.width;
  var cl = function () {
    var w = "";
    if (imageURL == null || imageURL == undefined || imageURL == "") {
      w = "xwi" + width;
      return "x-child-center xasra1 xbora100 " + w;
    } else {
      w = "xwi" + width;
      return "x-profile-pic xasra1 " + w;
    }
  }();
  var size = function () {
    var d = fontSize + "px";
    return {
      fontSize: d
    };
  }();
  var style = {
    background: XSettings.getColorFromChar[name[0].toLowerCase()]
  };
  var getContent = function () {
    if (imageURL == null || imageURL == undefined || imageURL == "") {
      var val = name.slice(0, 2).toLowerCase();
      return /*#__PURE__*/React.createElement("div", {
        className: cl,
        style: style
      }, /*#__PURE__*/React.createElement("span", {
        style: size,
        className: "xfowebo xcowh"
      }, val));
    } else {
      return /*#__PURE__*/React.createElement("div", {
        className: cl
      }, /*#__PURE__*/React.createElement("img", {
        src: typeof imageURL == 'string' ? imageURL : URL.createObjectURL(imageURL)
      }));
    }
  }();
  return /*#__PURE__*/React.createElement(React.Fragment, null, getContent);
}
var XUserProfilePicture = React.memo(XUserProfilePictureComponent);
XUserProfilePicture.propType = {
  name: PropTypes.string,
  imageURL: PropTypes.string,
  fontSize: PropTypes.number,
  width: PropTypes.number
};
XUserProfilePicture.defaultProps = {
  fontSize: 15
};
function XImageSliderComponent(_ref3) {
  var style = _ref3.style,
    className = _ref3.className,
    images = _ref3.images,
    autoSlide = _ref3.autoSlide;
  var boxClassName = React.useMemo(function () {
    return "x-image-slider xpore xdifl xalitce x-ov_hi " + className;
  }, []);
  var target = React.useRef(null);
  var updateFocusing = React.useCallback(function (index) {
    var child = focusing.current.querySelectorAll("div");
    for (var i = 0; i < child.length; i++) {
      if (i == index) {
        child[i].classList.replace("x-white-04", "x-white-10");
        child[i].classList.replace("x-circle-4", "x-circle-5");
      } else {
        child[i].classList.replace("x-white-10", "x-white-04");
        child[i].classList.replace("x-circle-5", "x-circle-4");
      }
    }
  }, []);
  var toLeft = function toLeft(e) {
    var index = target.current.getAttribute("index");
    if (index != images.length - 1) {
      index = Number(index) + 1;
      var pix = target.current.getAttribute("sec");
      pix = __.dimension.getValueFromPixel(pix);
      var marg = index * pix * -1;
      slider.current.style.marginLeft = marg + "px";
      target.current.setAttribute("index", index);
      updateFocusing(index);
    }
  };
  var toRight = function toRight(e) {
    var index = target.current.getAttribute("index");
    if (index != 0) {
      index = Number(index) - 1;
      var pix = target.current.getAttribute("sec");
      pix = __.dimension.getValueFromPixel(pix);
      var marg = index * pix * -1;
      slider.current.style.marginLeft = marg + "px";
      target.current.setAttribute("index", index);
      updateFocusing(index);
    }
  };
  var focusing = React.useRef(null);
  var slider = React.useRef(null);
  var boxStyle = React.useMemo(function () {
    if (style == {}) {
      return {
        width: "400px",
        height: "400px"
      };
    } else {
      if (style.width == undefined && style.height == undefined) {
        return {
          width: "400px",
          height: "400px"
        };
      } else if (style.width && style.height == undefined) {
        return _objectSpread(_objectSpread({}, style), {}, {
          height: style.width
        });
      } else if (style.width == undefined && style.height) {
        return _objectSpread(_objectSpread({}, style), {}, {
          width: "400px"
        });
      } else if (style.width && style.height) {
        return style;
      }
    }
  }, []);
  var imgStyle = React.useMemo(function () {
    if (style == {}) {
      return {
        width: "400px"
      };
    } else {
      if (style.width == undefined) {
        return {
          width: "400px"
        };
      } else if (style.width) {
        return {
          width: style.width
        };
      }
    }
  }, []);
  var sec = React.useMemo(function () {
    if (style == {}) {
      return "400px";
    } else {
      if (style.width == undefined) {
        return "400px";
      } else if (style.width) {
        return style.width;
      }
    }
  }, []);
  var getDescription = React.useCallback(function (words) {
    return __.convertText(words);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    id: "roots",
    className: boxClassName,
    index: "0",
    style: boxStyle,
    ref: target,
    sec: sec
  }, /*#__PURE__*/React.createElement("span", {
    className: "xwi0 xhe100per xdibl xmale0 x-tr_al-04s",
    ref: slider
  }), /*#__PURE__*/React.createElement("div", {
    className: "slide-to-left xzin2 xpoab xwi80 xle0 xto0 xhe100per",
    onClick: toRight
  }), /*#__PURE__*/React.createElement("div", {
    className: "slide-to-right xzin2 xpoab xwi80 xri0 xto0 xhe100per",
    onClick: toLeft
  }), /*#__PURE__*/React.createElement("div", {
    className: "xpoab x-bo_7 xhe7 xzin4 xwi50per xle25per x-child-center focus-image-selected",
    ref: focusing
  }, images.map(function (image, key) {
    return /*#__PURE__*/React.createElement("div", {
      className: key == 0 ? "x-circle-5 x-white-10" : "x-circle-4 x-white-04",
      key: key
    });
  })), images.map(function (image, key) {
    return /*#__PURE__*/React.createElement("div", {
      className: "xpore",
      key: key,
      style: boxStyle
    }, /*#__PURE__*/React.createElement("img", {
      src: image.src,
      alt: "",
      style: imgStyle,
      className: "xzin1"
    }), /*#__PURE__*/React.createElement("div", {
      className: "xpoab xwi100per xzin2 x-black-faded-to-top xhe100 x-bo_0"
    }), /*#__PURE__*/React.createElement("div", {
      className: "xpoab xzin3 x-bo_20 xle10 xwi100per"
    }, image.title ? /*#__PURE__*/React.createElement("p", {
      className: "xfowebo xcowh"
    }, image.title, " ") : null, image.description ? /*#__PURE__*/React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: getDescription(image.description)
      },
      className: "xfosi10 image-desc"
    }) : null));
  }));
}
var XImageSlider = React.memo(XImageSliderComponent);
XImageSlider.defaultProps = {
  autoSlide: false,
  style: {},
  className: ''
};
XImageSlider.propTypes = {
  autoSlide: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
  images: PropTypes.array.isRequired
};
function XShimmerLoadingComponent(_ref4) {
  var speed = _ref4.speed,
    className = _ref4.className,
    style = _ref4.style;
  var loadingClassName = React.useMemo(function () {
    return "x-shimmer-loading x-load-" + speed + " " + className;
  }, []);
  var getStyle = React.useMemo(function () {
    if (style.borderRadius && style.borderRadius != undefined) {
      return style;
    } else {
      return _objectSpread(_objectSpread({}, style), {}, {
        borderRadius: "30px"
      });
    }
  }, []);
  console.log(getStyle);
  return /*#__PURE__*/React.createElement("div", {
    className: loadingClassName,
    style: getStyle
  }, /*#__PURE__*/React.createElement("span", null));
}
var XShimmerLoading = React.memo(XShimmerLoadingComponent);
XShimmerLoading.propTypes = {
  speed: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string
};
XShimmerLoading.defaultProps = {
  speed: 'middle',
  style: {},
  className: ''
};
function XPopupBoxComponent(_ref5) {
  var type = _ref5.type,
    close = _ref5.close,
    children = _ref5.children,
    style = _ref5.style,
    title = _ref5.title,
    message = _ref5.message,
    headerStyle = _ref5.headerStyle;
  var getType = React.useMemo(function () {
    if (type == "default") {
      return "x-default-popup";
    } else if (type == "sharp") {
      return "x-sharp-popup";
    } else if (type == "close-only") {
      return "x-close-only";
    } else if (type == "cpx") {
      return "x-cpx-popup";
    } else {
      return "x-default-popup";
    }
  }, []);
  var myStyle = {
    width: "100%",
    height: "100%"
  };
  var boxStyle = function () {
    if (style.background || style.backgroundColor) {
      return _objectSpread(_objectSpread({}, style), {}, {
        width: myStyle.width,
        height: myStyle.height,
        background: "none"
      });
    } else {
      return _objectSpread(_objectSpread({}, style), {}, {
        width: myStyle.width,
        height: myStyle.height
      });
    }
  }();
  var containerStyle = function () {
    if (style.background || style.backgroundColor) {
      return {
        background: style.background || style.backgroundColor
      };
    } else {
      return {};
    }
  }();
  var getHeaderStyle = React.useMemo(function () {
    if (type == "default" || type == "cpx") {
      return headerStyle;
    }
    return {};
  }, []);
  var closePopup = function closePopup() {
    close();
  };
  var getContent = React.useMemo(function () {
    if (type == "default" || type == "cpx") {
      return /*#__PURE__*/React.createElement("div", {
        className: "x-header-popup-box",
        style: getHeaderStyle
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, title), message == null ? null : /*#__PURE__*/React.createElement("p", null, message)), /*#__PURE__*/React.createElement("span", {
        onClick: closePopup
      }, /*#__PURE__*/React.createElement("i", {
        className: "fa fa-times"
      })));
    } else if (type == "sharp") {
      return /*#__PURE__*/React.createElement("div", {
        className: "x-sharp-header"
      }, /*#__PURE__*/React.createElement("span", null));
    } else if (type == "close-only") {
      return /*#__PURE__*/React.createElement("div", {
        className: "x-close-popup-box",
        onClick: closePopup
      }, /*#__PURE__*/React.createElement("i", {
        className: "fa fa-times"
      }));
    }
  }, []);
  var popupClassName = "x-popup-box x-shadow " + getType;
  return /*#__PURE__*/React.createElement("div", {
    className: popupClassName,
    style: boxStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-container-popup-box",
    style: containerStyle
  }, getContent, /*#__PURE__*/React.createElement("div", {
    className: "x-body-popup-box"
  }, children)));
}
var XPopupBox = React.memo(XPopupBoxComponent);
XPopupBox.defaultProps = {
  style: {},
  headerStyle: {},
  title: 'The popup title is here',
  message: 'Description',
  type: "default",
  className: ''
};
XPopupBox.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  style: PropTypes.object,
  headerStyle: PropTypes.object,
  className: PropTypes.string
};
function XAuth(_ref6) {
  var children = _ref6.children,
    idType = _ref6.idType,
    titleSize = _ref6.titleSize,
    idLabel = _ref6.idLabel,
    usernameIcon = _ref6.usernameIcon,
    usernameStyle = _ref6.usernameStyle,
    passwordStyle = _ref6.passwordStyle,
    button = _ref6.button,
    center = _ref6.center,
    checkResponse = _ref6.checkResponse,
    passwordMinLength = _ref6.passwordMinLength,
    url = _ref6.url,
    usernameBd = _ref6.usernameBd,
    passwordBd = _ref6.passwordBd,
    fieldWidth = _ref6.fieldWidth,
    fieldStyle = _ref6.fieldStyle,
    register = _ref6.register,
    token = _ref6.token,
    registerURL = _ref6.registerURL,
    registerText = _ref6.registerText,
    dataType = _ref6.dataType,
    successAuthFunc = _ref6.successAuthFunc,
    requestErrorFunc = _ref6.requestErrorFunc,
    lostPassword = _ref6.lostPassword;
  var _React$useState3 = React.useState(""),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    usernameValue = _React$useState4[0],
    setUsernameValue = _React$useState4[1];
  var _React$useState5 = React.useState(""),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    passwordValue = _React$useState6[0],
    setPasswordValue = _React$useState6[1];
  var _React$useState7 = React.useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    loading = _React$useState8[0],
    setLoading = _React$useState8[1];
  var _React$useState9 = React.useState(null),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    response = _React$useState10[0],
    setResponse = _React$useState10[1];
  var handleClick = function handleClick(e) {
    e.preventDefault();
    if (url != null) {
      setLoading(true);
    }
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    if (url != null) {
      setLoading(true);
    }
  };
  React.useEffect(function () {
    if (loading) {
      auth();
    }
  }, [loading]);
  var auth = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var formData, values, getToken, resp;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            formData = new FormData();
            values = {
              username: usernameValue,
              password: passwordValue
            };
            getToken = _typeof(token) == 'object' ? token : token();
            Object.entries(values).forEach(function (_ref8) {
              var _ref9 = _slicedToArray(_ref8, 2),
                key = _ref9[0],
                value = _ref9[1];
              formData.append(key, value);
            });
            Object.entries(getToken).forEach(function (_ref10) {
              var _ref11 = _slicedToArray(_ref10, 2),
                key = _ref11[0],
                value = _ref11[1];
              formData.append(key, value);
            });
            _context.next = 7;
            return __.layoutRequest.post(url, formData, dataType, null);
          case 7:
            resp = _context.sent;
            setLoading(false);
            if (resp.status == 'error' && resp.isSuccess == false) {
              setResponse('serverError');
            } else if (resp.status == 'success' && resp.isSuccess) {
              setResponse(checkResponse(resp.data));
            }
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function auth() {
      return _ref7.apply(this, arguments);
    };
  }();
  React.useEffect(function () {
    if (!loading) {
      if (response == 'authenticated') {
        var callBackData = {
          id: usernameValue,
          password: passwordValue
        };
        successAuthFunc(callBackData);
      } else if (response == 'serverError') {
        requestErrorFunc('Connexion Error', 'Try your connection or check the server.', 'danger');
      }
    }
  }, [response, loading]);
  var handleUsernameChange = function handleUsernameChange(val) {
    setUsernameValue(val);
    if (response == 'userDoesNotExists') {
      setResponse(null);
    }
  };
  var handlePasswordChange = function handlePasswordChange(val) {
    setPasswordValue(val);
    if (response == 'wrongPassword') {
      setResponse(null);
    }
  };
  var passwordIcon = function () {
    if (usernameIcon != "") {
      return "fa fa-lock";
    } else {
      return '';
    }
  }();
  var buttonStyle = React.useMemo(function () {
    var btnStyle = {
      height: "47px"
    };
    if (fieldWidth) {
      if (fieldStyle && fieldStyle.width) {
        return _objectSpread(_objectSpread({}, btnStyle), {}, {
          width: fieldStyle.width
        });
      } else {
        return _objectSpread(_objectSpread({}, btnStyle), {}, {
          width: fieldWidth
        });
      }
    }
  }, []);
  var statusClassName = "xfosi11 xfowebo x-text-danger";
  var getStatus = function () {
    var data = null;
    if (response == null) {
      data = null;
    } else {
      if (response == 'userDoesNotExists') {
        data = /*#__PURE__*/React.createElement("span", {
          className: statusClassName
        }, "User Does not exists");
      } else if (response == 'wrongPassword') {
        data = /*#__PURE__*/React.createElement("span", {
          className: statusClassName
        }, "Wrong password");
      }
    }
    return data;
  }();
  var usernameClass = "xmato20 xmabo5";
  var passwordClass = "xmato15 xmabo5";
  var titleClass = "xtealce xfosi" + titleSize;
  var buttonClass = "xmato25 xmabo25";
  var disabled = React.useMemo(function () {
    if (idType == 'email') {
      if (passwordValue.length >= passwordMinLength && __.testEmail(usernameValue)) {
        return false;
      }
    } else if (idType == 'username') {
      if (passwordValue.length >= passwordMinLength && __.testUsername(usernameValue)) {
        return false;
      }
    }
    return true;
  }, [loading, usernameValue, passwordValue]);
  var getFieldStyle = function () {
    return _objectSpread(_objectSpread({}, fieldStyle), {}, {
      width: "100%"
    });
  }();
  var getCoverStyle = function () {
    if (fieldWidth) {
      if (fieldStyle && fieldStyle.width) {
        return {
          width: fieldStyle.width
        };
      }
      return {
        width: fieldWidth
      };
    }
  }();
  var registerContent = function () {
    var cl = center ? "x-center" : "";
    cl = cl + " xdifl xjucoce xhe30";
    var st = {};
    if (fieldWidth) {
      if (fieldStyle && fieldStyle.width) {
        st = _objectSpread(_objectSpread({}, st), {}, {
          width: fieldStyle.width
        });
      } else {
        st = _objectSpread(_objectSpread({}, st), {}, {
          width: fieldWidth
        });
      }
    }
    return /*#__PURE__*/React.createElement("div", {
      className: cl,
      style: st
    }, registerURL == null ? /*#__PURE__*/React.createElement("button", {
      className: "x-t-info x-link xfowebo"
    }, registerText) : /*#__PURE__*/React.createElement("a", {
      className: "x-t-info x-link xfosi13 xfowebo",
      href: registerURL
    }, registerText));
  }();
  var getSeparator = function () {
    var base = "";
    if (center) {
      base = "x-center x-di-bl xhe4 xmabo20 xbora10 xwi90 x-separator";
      return /*#__PURE__*/React.createElement("div", {
        className: base
      });
    }
    return null;
  }();
  var getCoverClassName = function () {
    var coverClass = "";
    if (center) {
      coverClass = coverClass + " x-center";
    }
    return coverClass;
  }();
  var getLostPassworgContent = React.useMemo(function () {
    if (lostPassword) {
      return /*#__PURE__*/React.createElement("div", {
        className: "xwi100per x-child-center xmato0"
      }, /*#__PURE__*/React.createElement("a", {
        href: "",
        className: "xfosi12 xfowebo x-low-emphasis"
      }, "Lost my password"));
    }
    return null;
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    className: titleClass
  }, children), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: getCoverClassName,
    style: getCoverStyle
  }, /*#__PURE__*/React.createElement(XField, {
    icon: usernameIcon,
    type: idType,
    bd: usernameBd,
    style: getFieldStyle,
    onChange: handleUsernameChange,
    value: usernameValue,
    className: usernameClass
  }, idLabel), response == 'userDoesNotExists' ? getStatus : null), /*#__PURE__*/React.createElement("div", {
    className: getCoverClassName,
    style: getCoverStyle
  }, /*#__PURE__*/React.createElement(XField, {
    type: "password",
    icon: passwordIcon,
    bd: passwordBd,
    style: getFieldStyle,
    className: passwordClass,
    value: passwordValue,
    onChange: handlePasswordChange
  }, "Password"), response == 'wrongPassword' ? getStatus : null), /*#__PURE__*/React.createElement(XButtonLoadable, {
    center: true,
    className: buttonClass,
    style: buttonStyle,
    br: 30,
    shadow: true,
    loadingCircularWeight: 6,
    onClickFunc: handleClick,
    load: loading,
    disabled: disabled
  }, button)), register ? getSeparator : null, register == false ? null : registerContent, lostPassword ? getLostPassworgContent : null);
}
XAuth.defaultProps = {
  idType: 'email',
  idLabel: 'Email',
  children: "User login",
  usernameIcon: 'far fa-user',
  usernameStyle: {},
  titleSize: 30,
  passwordStyle: {},
  url: null,
  fieldWidth: "380px",
  lostPassword: true,
  register: true,
  tokens: {},
  dataType: null,
  successAuthFunc: defaultSuccessFunc,
  requestErrorFunc: xAlert,
  registerURL: null,
  registerText: "You don't have an account? Register",
  fieldStyle: {},
  usernameBd: 30,
  passwordBd: 30,
  center: true,
  checkResponse: defaultCheckingResponse,
  button: 'Connexion',
  passwordMinLength: 8
};
XAuth.propTypes = {
  icon: PropTypes.bool,
  idType: PropTypes.string,
  idLabel: PropTypes.string,
  requestErrorFunc: PropTypes.func,
  register: PropTypes.bool,
  registerUrl: PropTypes.string,
  titleSize: PropTypes.number,
  token: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  successAuthFunc: PropTypes.func,
  fieldWidth: PropTypes.string,
  center: PropTypes.bool,
  fieldStyle: PropTypes.object,
  usernameIcon: PropTypes.string,
  children: PropTypes.string,
  url: PropTypes.string.isRequired,
  checkResponse: PropTypes.func.isRequired,
  button: PropTypes.string,
  passwordMinLength: PropTypes.number,
  usernameStyle: PropTypes.object,
  passwordStyle: PropTypes.object
};
function XSearch(_ref12) {
  var icon = _ref12.icon,
    type = _ref12.type,
    value = _ref12.value,
    bd = _ref12.bd,
    center = _ref12.center,
    style = _ref12.style,
    children = _ref12.children,
    onChange = _ref12.onChange,
    className = _ref12.className,
    xonfocus = _ref12.xonfocus;
  var borderRadius = " xbora" + bd;
  var handleChange = function handleChange(e) {
    onChange(e.target.value);
  };
  var content = function () {
    if (icon) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "icon"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fa fa-search"
      })), /*#__PURE__*/React.createElement("input", {
        placeholder: children,
        value: value,
        type: "text",
        onChange: handleChange
      }), type == 'arrow' ? /*#__PURE__*/React.createElement("div", {
        className: "icon"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fa fa-arrow-right"
      })) : null);
    }
  }();
  var centerBox = center ? " x-center" : "";
  var searchType = type == "arrow" ? "x-search-arrow" : "x-search";
  var searchClassName = searchType + borderRadius + centerBox + " " + className;
  return /*#__PURE__*/React.createElement("div", {
    className: searchClassName,
    xonfocus: xonfocus,
    style: style
  }, content);
}
XSearch.defaultProps = {
  icon: true,
  children: 'Search',
  type: 'normal',
  center: false,
  className: '',
  style: {},
  bd: 12,
  value: '',
  onChange: noActionFunction,
  xonfocus: "x-soft-shadow-bold-focus"
};
XSearch.propTypes = {
  center: PropTypes.bool,
  icon: PropTypes.bool,
  style: PropTypes.object,
  type: PropTypes.string,
  bd: PropTypes.number,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.string,
  xonfocus: PropTypes.string
};
function XBaseField(_ref13) {
  var type = _ref13.type,
    children = _ref13.children,
    value = _ref13.value,
    onChange = _ref13.onChange;
  var handleChange = function handleChange(e) {
    onChange(e.target.value);
  };
  var getType = function () {
    if (type == 'imei') {
      return 'tel';
    } else if (type == 'username') {
      return 'email';
    }
    return type;
  }();
  return /*#__PURE__*/React.createElement("input", {
    placeholder: children,
    type: getType,
    value: value,
    onChange: handleChange
  });
}
function XShowPassword(_ref14) {
  var mode = _ref14.mode,
    onClick = _ref14.onClick;
  var dataClass = mode == 'password' ? "fa fa-eye-slash" : "fa fa-eye";
  return /*#__PURE__*/React.createElement("div", {
    className: "x-icon-field",
    onClick: onClick
  }, /*#__PURE__*/React.createElement("i", {
    className: dataClass
  }));
}
<<<<<<< HEAD
function XField(_ref15) {
  var icon = _ref15.icon,
    style = _ref15.style,
    children = _ref15.children,
    xOnFocus = _ref15.xOnFocus,
    bd = _ref15.bd,
    type = _ref15.type,
    className = _ref15.className,
    value = _ref15.value,
    onChange = _ref15.onChange,
    xonfocus = _ref15.xonfocus,
    center = _ref15.center,
    fieldStatus = _ref15.fieldStatus;
  var _React$useState11 = React.useState(type),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    inputType = _React$useState12[0],
    setInputType = _React$useState12[1];
=======
function XSelect(_ref15) {
  var br = _ref15.br,
    style = _ref15.style,
    xonfocus = _ref15.xonfocus,
    children = _ref15.children,
    value = _ref15.value,
    onChange = _ref15.onChange,
    center = _ref15.center,
    multiple = _ref15.multiple,
    className = _ref15.className;
  var getBackground = React.useMemo(function () {
    if (style.background) {
      return ' ';
    }
    return ' x-field-has-bg';
  });
  var getBoxCenter = React.useMemo(function () {
    if (center) {
      return ' x-center';
    }
    return ' ';
  });
  var borderRadius = " xbora" + br;
  var finalClassName = "x-select " + borderRadius + getBackground + getBoxCenter + " " + className;
  return /*#__PURE__*/React.createElement("div", {
    className: finalClassName,
    xonfocus: xonfocus,
    multiple: multiple,
    style: style
  }, /*#__PURE__*/React.createElement("select", {
    name: "",
    id: "",
    value: value,
    onChange: onChange
  }, children));
}
XSelect.defaultProps = {
  style: {},
  br: 12,
  multiple: false,
  center: false,
  className: "",
  onChange: function onChange() {},
  xonfocus: 'x-soft-shadow-bold-focus'
};
function XTextarea(_ref16) {
  var style = _ref16.style,
    br = _ref16.br,
    children = _ref16.children,
    center = _ref16.center,
    onChange = _ref16.onChange,
    xonfocus = _ref16.xonfocus,
    className = _ref16.className;
  var _React$useState11 = React.useState(''),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    value = _React$useState12[0],
    setValue = _React$useState12[1];
  var handleValueChanged = function handleValueChanged(e) {
    setValue(e.target.value);
    onChange(e.target.value);
  };
  var getBackground = React.useMemo(function () {
    if (style.background) {
      return ' ';
    }
    return ' x-field-has-bg';
  });
  var borderRadius = " xbora" + br;
  var parentStyle = React.useMemo(function () {
    return _objectSpread(_objectSpread({}, style), {}, {
      height: 'none'
    });
  });
  var childStyle = React.useMemo(function () {
    if (style && style.height == undefined) {
      return {
        height: '100px'
      };
    } else {
      return {
        height: style.height
      };
    }
  });
  var getBoxCenter = React.useMemo(function () {
    if (center) {
      return ' x-center';
    }
    return ' ';
  });
  var finalClassName = "x-textarea " + borderRadius + getBackground + getBoxCenter + ' ' + className;
  return /*#__PURE__*/React.createElement("div", {
    className: finalClassName,
    style: parentStyle,
    xonfocus: xonfocus
  }, /*#__PURE__*/React.createElement("textarea", {
    className: "xlihe5",
    onChange: handleValueChanged,
    placeholder: children,
    style: childStyle
  }));
}
XTextarea.defaultProps = {
  style: {
    height: '100px'
  },
  br: 12,
  center: false,
  onChange: function onChange() {},
  className: '',
  xonfocus: 'x-soft-shadow-bold-focus'
};
function XField(_ref17) {
  var icon = _ref17.icon,
    style = _ref17.style,
    children = _ref17.children,
    xOnFocus = _ref17.xOnFocus,
    bd = _ref17.bd,
    type = _ref17.type,
    className = _ref17.className,
    value = _ref17.value,
    onChange = _ref17.onChange,
    xonfocus = _ref17.xonfocus,
    center = _ref17.center,
    fieldStatus = _ref17.fieldStatus;
  var _React$useState13 = React.useState(type),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    inputType = _React$useState14[0],
    setInputType = _React$useState14[1];
>>>>>>> 5b71127 (xapp-24.12.15)
  var showPassword = function showPassword() {
    setInputType(function () {
      return inputType == 'password' ? 'text' : 'password';
    });
  };
<<<<<<< HEAD
  var _React$useState13 = React.useState(0),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    rendu = _React$useState14[0],
    setRendu = _React$useState14[1];
=======
  var _React$useState15 = React.useState(0),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    rendu = _React$useState16[0],
    setRendu = _React$useState16[1];
>>>>>>> 5b71127 (xapp-24.12.15)
  var field = function () {
    if (icon == '') {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(XBaseField, {
        type: inputType,
        value: value,
        onChange: onChange
      }, children), type == 'password' ? /*#__PURE__*/React.createElement(XShowPassword, {
        onClick: showPassword,
        mode: inputType
      }) : null);
    } else {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "x-icon-field"
      }, /*#__PURE__*/React.createElement("i", {
        className: icon
      })), /*#__PURE__*/React.createElement(XBaseField, {
        type: inputType,
        value: value,
        onChange: onChange
      }, children), type == 'password' ? /*#__PURE__*/React.createElement(XShowPassword, {
        onClick: showPassword,
        mode: inputType
      }) : null);
    }
  }();
  React.useEffect(function () {
    if (rendu == 0) {
      setRendu(1);
    }
  }, []);
  var centerBox = center ? ' x-center' : "";
  var background = function () {
    if (style && style.background) {
      return ' ';
    }
    return " x-field-has-bg";
  }();
  var childType = function () {
    if (icon != '' || type == 'password') {
      if (icon != "" && type != 'password') {
        return " x-child-ic-in";
      } else if (icon == '' && type == "password") {
        return " x-child-in-ic";
      } else if (icon != '' && type == 'password') {
        return " x-child-ic-in-ic";
      }
    }
    return ' x-child-in';
  }();
  var borderRadius = " xbora" + bd;
  var fieldClassName = "x-field " + childType + centerBox + background + borderRadius + " " + className;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: fieldClassName,
    xonfocus: xonfocus,
    style: style
  }, field));
}
XField.defaultProps = {
  style: {},
  childType: 'in',
  icon: '',
  className: '',
  type: 'text',
  center: false,
  fieldStatus: null,
  bd: 12,
  xonfocus: 'x-soft-shadow-bold-focus',
  onChange: noActionFunction
};
XField.propTypes = {
  type: PropTypes.string.isRequired,
  icon: PropTypes.string,
  style: PropTypes.object,
  bd: PropTypes.number,
  xonfocus: PropTypes.string,
  center: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string
};
<<<<<<< HEAD
function XArrowButtonLoad(_ref16) {
  var children = _ref16.children,
    color = _ref16.color,
    w = _ref16.w,
    weight = _ref16.weight;
=======
function XArrowButtonLoad(_ref18) {
  var children = _ref18.children,
    color = _ref18.color,
    w = _ref18.w,
    weight = _ref18.weight;
>>>>>>> 5b71127 (xapp-24.12.15)
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "x-btn-text"
  }, /*#__PURE__*/React.createElement("button", null, children)), /*#__PURE__*/React.createElement("div", {
    className: "x-icon"
  }, /*#__PURE__*/React.createElement(XLoading, {
    w: w,
    color: color,
    weight: weight
  })));
}
<<<<<<< HEAD
function XButtonLoadableComponent(_ref17) {
  var type = _ref17.type,
    w = _ref17.w,
    br = _ref17.br,
    center = _ref17.center,
    icon = _ref17.icon,
    unit = _ref17.unit,
    className = _ref17.className,
    state = _ref17.state,
    onClickFunc = _ref17.onClickFunc,
    style = _ref17.style,
    disabled = _ref17.disabled,
    children = _ref17.children,
    loadingWidth = _ref17.loadingWidth,
    loadingCircularWeight = _ref17.loadingCircularWeight,
    loadingColor = _ref17.loadingColor,
    shadow = _ref17.shadow,
    square = _ref17.square,
    load = _ref17.load,
    loadText = _ref17.loadText;
=======
function XButtonLoadableComponent(_ref19) {
  var type = _ref19.type,
    w = _ref19.w,
    br = _ref19.br,
    center = _ref19.center,
    icon = _ref19.icon,
    unit = _ref19.unit,
    className = _ref19.className,
    state = _ref19.state,
    onClickFunc = _ref19.onClickFunc,
    style = _ref19.style,
    disabled = _ref19.disabled,
    children = _ref19.children,
    loadingWidth = _ref19.loadingWidth,
    loadingCircularWeight = _ref19.loadingCircularWeight,
    loadingColor = _ref19.loadingColor,
    shadow = _ref19.shadow,
    square = _ref19.square,
    load = _ref19.load,
    loadText = _ref19.loadText;
>>>>>>> 5b71127 (xapp-24.12.15)
  var availableStateLoad = ['primary', 'none', 'danger', 'success', 'warning'];
  var widthLoad = function () {
    if (type != 'icon') {
      var base = ' xwi';
      var unity = '';
      if (unit == 'px') {
        unity = "";
      } else if (unit == '%' || unit == 'percent') {
        unity = "per";
      }
      return base + w + unity;
    } else {
      return " x-square-" + square;
    }
  }();
  var buttonTypeLoad = function () {
    if (type == 'simple') {
      return " x-sp-btn";
    } else {
      return " x-" + type + "-btn";
    }
  }();
  var boxShadowLoad = shadow ? " x-shadow" : '';
  var borderRadiusLoad = " xbora" + br;
  var buttonStateLoad = function () {
    var cl = '';
    if (disabled || load) {
      if (state == 'none') {
        cl = ' x-btn-none-disabled';
      } else {
        cl = ' x-btn-disabled';
      }
    } else {
      if (style.background && style.background != "") {
        cl = '';
      } else {
        if (availableStateLoad.indexOf(state.toLowerCase()) != -1) {
          cl = ' x-btn-' + state;
        } else {
          cl = ' ' + state;
        }
      }
    }
    return cl;
  }();
  var typeContentLoad = function () {
    if (!load) {
      if (type == 'icon') {
        return /*#__PURE__*/React.createElement(XIconButton, {
          name: icon
        });
      } else if (type == 'simple') {
        return /*#__PURE__*/React.createElement(XSimpleButton, {
          disabled: disabled
        }, children);
      } else if (type == 'arrow') {
        return /*#__PURE__*/React.createElement(XArrowButton, {
          disabled: disabled
        }, children);
      } else {
        return /*#__PURE__*/React.createElement(XSimpleButton, {
          disabled: disabled
        }, children);
      }
    } else {
      if (type == 'arrow') {
        return /*#__PURE__*/React.createElement(XArrowButtonLoad, {
          color: loadingColor,
          w: loadingWidth,
          weight: loadingCircularWeight
        }, children);
      } else {
        return /*#__PURE__*/React.createElement(XLoading, {
          color: loadingColor,
          w: loadingWidth,
          weight: loadingCircularWeight
        });
      }
    }
  }();
  var handleClickLoad = function handleClickLoad(e) {
    if (!disabled && !load) {
      onClickFunc(e);
    }
  };
  var centerBoxLoad = center ? " x-center" : "";
  var finalClassNameLoad = buttonTypeLoad + widthLoad + borderRadiusLoad + buttonStateLoad + boxShadowLoad + centerBoxLoad + " x-pointer " + className;
  return /*#__PURE__*/React.createElement("div", {
    className: finalClassNameLoad,
    onClick: handleClickLoad,
    style: style
  }, typeContentLoad);
}
var XButtonLoadable = React.memo(XButtonLoadableComponent);
XButtonLoadable.defaultProps = {
  load: false,
  type: 'simple',
  w: 100,
  square: 40,
  state: 'primary',
  children: '',
  br: 12,
  unit: 'px',
  shadow: false,
  style: {},
  disabled: false,
  center: false,
  loadingWidth: 20,
  loadingColor: '#808080',
  className: '',
  loadingCircularWeight: 4
};
XButtonLoadable.propTypes = (_XButtonLoadable$prop = {
  load: PropTypes.bool,
  br: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  w: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired,
  square: PropTypes.number,
  center: PropTypes.bool,
  style: PropTypes.object,
  loadText: PropTypes.string
}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_XButtonLoadable$prop, "center", PropTypes.bool), "loadingWidt", PropTypes.number), "unit", PropTypes.string), "disabledColor", PropTypes.string), "loadingColor", PropTypes.string), "loadingCircularWeight", PropTypes.number), "disabled", PropTypes.bool), "icon", PropTypes.string), "className", PropTypes.string), "onClickFunc", PropTypes.func), _defineProperty(_XButtonLoadable$prop, "children", PropTypes.string));
<<<<<<< HEAD
function XIconButtonComponent(_ref18) {
  var name = _ref18.name;
=======
function XIconButtonComponent(_ref20) {
  var name = _ref20.name;
>>>>>>> 5b71127 (xapp-24.12.15)
  return /*#__PURE__*/React.createElement("i", {
    className: name
  });
}
var XIconButton = React.memo(XIconButtonComponent);
<<<<<<< HEAD
function XSimpleButtonComponent(_ref19) {
  var children = _ref19.children,
    disabled = _ref19.disabled;
=======
function XSimpleButtonComponent(_ref21) {
  var children = _ref21.children,
    disabled = _ref21.disabled;
>>>>>>> 5b71127 (xapp-24.12.15)
  return /*#__PURE__*/React.createElement("button", {
    disabled: disabled
  }, children);
}
var XSimpleButton = React.memo(XSimpleButtonComponent);
<<<<<<< HEAD
function XArrowButtonComponent(_ref20) {
  var children = _ref20.children,
    disabled = _ref20.disabled;
=======
function XArrowButtonComponent(_ref22) {
  var children = _ref22.children,
    disabled = _ref22.disabled;
>>>>>>> 5b71127 (xapp-24.12.15)
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "x-btn-text"
  }, /*#__PURE__*/React.createElement("button", {
    disabled: disabled
  }, children)), /*#__PURE__*/React.createElement("div", {
    className: "x-icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-chevron-right"
  })));
}
var XArrowButton = React.memo(XArrowButtonComponent);
<<<<<<< HEAD
function XButtonComponent(_ref21) {
  var type = _ref21.type,
    w = _ref21.w,
    br = _ref21.br,
    center = _ref21.center,
    icon = _ref21.icon,
    unit = _ref21.unit,
    className = _ref21.className,
    state = _ref21.state,
    children = _ref21.children,
    onClickFunc = _ref21.onClickFunc,
    style = _ref21.style,
    disabled = _ref21.disabled,
    shadow = _ref21.shadow,
    square = _ref21.square;
=======
function XButtonComponent(_ref23) {
  var type = _ref23.type,
    w = _ref23.w,
    br = _ref23.br,
    center = _ref23.center,
    icon = _ref23.icon,
    unit = _ref23.unit,
    className = _ref23.className,
    state = _ref23.state,
    children = _ref23.children,
    onClickFunc = _ref23.onClickFunc,
    style = _ref23.style,
    disabled = _ref23.disabled,
    shadow = _ref23.shadow,
    square = _ref23.square;
>>>>>>> 5b71127 (xapp-24.12.15)
  var availableState = ['primary', 'none', 'danger', 'success', 'warning'];
  var width = function () {
    if (type != 'icon') {
      var base = ' xwi';
      var unity = '';
      if (unit == 'px') {
        unity = "";
      } else if (unit == '%' || unit == 'percent') {
        unity = "per";
      }
      return base + w + unity;
    } else {
      return " x-square-" + square;
    }
  }();
  var buttonType = function () {
    if (type == 'simple') {
      return " x-sp-btn";
    } else {
      return " x-" + type + "-btn";
    }
  }();
  var boxShadow = shadow ? " x-shadow" : '';
  var borderRadius = " xbora" + br;
  var buttonState = function () {
    var cl = '';
    if (disabled) {
      if (state == 'none') {
        cl = ' x-btn-none-disabled';
      } else {
        cl = ' x-btn-disabled';
      }
    } else {
      if (style.background && style.background != "") {
        cl = '';
      } else {
        if (availableState.indexOf(state.toLowerCase()) != -1) {
          cl = ' x-btn-' + state;
        } else {
          cl = ' ' + state;
        }
      }
    }
    return cl;
  }();
  var typeContent = function () {
    if (type == 'icon') {
      return /*#__PURE__*/React.createElement(XIconButton, {
        name: icon
      });
    } else if (type == 'simple') {
      return /*#__PURE__*/React.createElement(XSimpleButton, {
        disabled: disabled
      }, children);
    } else if (type == 'arrow') {
      return /*#__PURE__*/React.createElement(XArrowButton, {
        disabled: disabled
      }, children);
    } else {
      return /*#__PURE__*/React.createElement(XSimpleButton, {
        disabled: disabled
      }, children);
    }
  }();
  var handleClick = function handleClick(e) {
    if (!disabled) {
      onClickFunc(e);
    }
  };
  var centerBox = center ? " x-center" : "";
  var finalClassName = "x-pointer " + buttonType + width + borderRadius + buttonState + boxShadow + centerBox + className;
  return /*#__PURE__*/React.createElement("div", {
    className: finalClassName,
    onClick: handleClick,
    style: style
  }, typeContent);
}
var XButton = React.memo(XButtonComponent);
XButton.defaultProps = {
  type: 'simple',
  w: 100,
  square: 40,
  state: 'primary',
  children: '',
  br: 12,
  unit: 'px',
  shadow: false,
  style: {},
  disabled: false,
  center: false,
  className: ''
};
XButton.propTypes = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
  br: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  w: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired,
  square: PropTypes.number,
  center: PropTypes.bool,
  style: PropTypes.object
}, "center", PropTypes.bool), "unit", PropTypes.string), "disabledColor", PropTypes.string), "disabled", PropTypes.bool), "icon", PropTypes.string), "className", PropTypes.string), "onClickFunc", PropTypes.func), "children", PropTypes.string);
<<<<<<< HEAD
function XLoadingComponent(_ref22) {
  var w = _ref22.w,
    color = _ref22.color,
    weight = _ref22.weight,
    center = _ref22.center;
=======
function XLoadingComponent(_ref24) {
  var w = _ref24.w,
    color = _ref24.color,
    weight = _ref24.weight,
    center = _ref24.center;
>>>>>>> 5b71127 (xapp-24.12.15)
  var width = " xwi" + w;
  var centerLoading = center ? " x-center" : "";
  var loadingClass = "x-circular-loader" + width + centerLoading;
  var loadingStyle = {
    stroke: color
  };
  var size = parseInt(weight);
  var sizeFinal = size.toString();
  return /*#__PURE__*/React.createElement("div", {
    className: loadingClass,
    style: loadingStyle
  }, /*#__PURE__*/React.createElement("svg", {
    className: "x-circular",
    viewBox: "25 25 50 50"
  }, /*#__PURE__*/React.createElement("circle", {
    className: "x-path",
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none",
    strokeWidth: sizeFinal,
    strokeMiterlimit: "10",
    style: loadingStyle
  })));
}
var XLoading = React.memo(XLoadingComponent);
XLoading.defaultProps = {
  w: 20,
  color: '#008CFF',
  center: false,
  weight: 4
};
XLoading.propTypes = {
  center: PropTypes.bool,
  w: PropTypes.number,
  color: PropTypes.string,
  weight: PropTypes.number
};
<<<<<<< HEAD
function XNavBarV(_ref23) {
  var menus = _ref23.menus,
    menusStat = _ref23.menusStat,
    slider = _ref23.slider,
    id = _ref23.id,
    focus = _ref23.focus,
    blur = _ref23.blur,
    focusBackground = _ref23.focusBackground;
=======
function XNavBarV(_ref25) {
  var menus = _ref25.menus,
    menusStat = _ref25.menusStat,
    slider = _ref25.slider,
    id = _ref25.id,
    focus = _ref25.focus,
    blur = _ref25.blur,
    focusBackground = _ref25.focusBackground;
>>>>>>> 5b71127 (xapp-24.12.15)
  var getType = function () {
    if (menusStat == 'name') {
      return "x-nav-text-only";
    } else if (menusStat == 'icon') {
      return "x-nav-icon-only";
    } else if (menusStat == 'both') {
      return "x-nav-both";
    } else {
      return "x-nav-text-only";
    }
  }();
  var navClassName = "x-nav-bar x-" + slider + "-slider " + getType;
  var rows = React.useMemo(function () {
    return getLineRows(menus, menusStat);
  }, []);
  React.useEffect(function () {
    setTimeout(function () {
      __.configureNavBar("#" + id);
    }, 300);
  });
  if (menusStat == 'name') {
    return /*#__PURE__*/React.createElement("div", {
      xslidertype: slider,
      xfocuscolor: focus,
      xblurcolor: blur,
      className: navClassName,
      id: id
    }, /*#__PURE__*/React.createElement("div", {
      className: "x-slider"
    }), rows);
  } else {
    return /*#__PURE__*/React.createElement("div", {
      xslidertype: slider,
      xfocuscolor: focus,
      xblurcolor: blur,
      className: navClassName,
      id: id,
      xfocusbackground: focusBackground
    }, /*#__PURE__*/React.createElement("div", {
      className: "x-slider"
    }), rows);
  }
}
XNavBarV.defaultProps = {
  focus: '',
  blur: ''
};
XNavBarH.propTypes = {
  focus: PropTypes.string,
  blur: PropTypes.string
};
<<<<<<< HEAD
function TextOnly(_ref24) {
  var text = _ref24.text,
    active = _ref24.active,
    id = _ref24.id;
=======
function TextOnly(_ref26) {
  var text = _ref26.text,
    active = _ref26.active,
    id = _ref26.id;
>>>>>>> 5b71127 (xapp-24.12.15)
  var getNavItemClass = function () {
    if (active) {
      return "x-nav-active";
    } else {
      return '';
    }
  }();
  var clText = "x-nav-item " + getNavItemClass;
  return /*#__PURE__*/React.createElement("div", {
    className: clText,
    id: id
  }, /*#__PURE__*/React.createElement("span", null, text));
}
<<<<<<< HEAD
function Both(_ref25) {
  var text = _ref25.text,
    icon = _ref25.icon,
    active = _ref25.active,
    id = _ref25.id;
=======
function Both(_ref27) {
  var text = _ref27.text,
    icon = _ref27.icon,
    active = _ref27.active,
    id = _ref27.id;
>>>>>>> 5b71127 (xapp-24.12.15)
  var getNavItemClass = function () {
    if (active) {
      return "x-nav-active";
    } else {
      return '';
    }
  }();
  var clText = "x-nav-item " + getNavItemClass;
  return /*#__PURE__*/React.createElement("div", {
    className: clText,
    id: id
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: icon
  })), /*#__PURE__*/React.createElement("span", null, text));
}
<<<<<<< HEAD
function BothH(_ref26) {
  var text = _ref26.text,
    icon = _ref26.icon,
    active = _ref26.active,
    id = _ref26.id;
=======
function BothH(_ref28) {
  var text = _ref28.text,
    icon = _ref28.icon,
    active = _ref28.active,
    id = _ref28.id;
>>>>>>> 5b71127 (xapp-24.12.15)
  var getNavItemClass = function () {
    if (active) {
      return "x-h-nav-active";
    } else {
      return '';
    }
  }();
  var clText = "x-h-item " + getNavItemClass;
  return /*#__PURE__*/React.createElement("div", {
    className: clText,
    id: id
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-h-icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: icon
  })), /*#__PURE__*/React.createElement("span", null, text));
}
<<<<<<< HEAD
function Icon(_ref27) {
  var icon = _ref27.icon,
    active = _ref27.active,
    id = _ref27.id;
=======
function Icon(_ref29) {
  var icon = _ref29.icon,
    active = _ref29.active,
    id = _ref29.id;
>>>>>>> 5b71127 (xapp-24.12.15)
  var getNavItemClass = function () {
    if (active) {
      return "x-nav-active";
    } else {
      return '';
    }
  }();
  var clText = "x-nav-item " + getNavItemClass;
  return /*#__PURE__*/React.createElement("div", {
    className: clText,
    id: id
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: icon
  })));
}
function getLineRows(list, menusStat) {
  var rows = [];
  for (var i = 0; i < list.length; i++) {
    if (menusStat == 'name') {
      if (list[i].active && list[i].active == true) {
        rows.push(/*#__PURE__*/React.createElement(TextOnly, {
          active: true,
          key: i,
          text: list[i].name,
          id: list[i].id
        }));
      } else {
        rows.push(/*#__PURE__*/React.createElement(TextOnly, {
          active: false,
          key: i,
          text: list[i].name,
          id: list[i].id
        }));
      }
    } else if (menusStat == 'both') {
      if (list[i].active && list[i].active == true) {
        rows.push(/*#__PURE__*/React.createElement(Both, {
          active: true,
          key: i,
          text: list[i].name,
          id: list[i].id,
          icon: list[i].icon
        }));
      } else {
        rows.push(/*#__PURE__*/React.createElement(Both, {
          active: false,
          key: i,
          text: list[i].name,
          id: list[i].id,
          icon: list[i].icon
        }));
      }
    } else if (menusStat == 'icon') {
      if (list[i].active && list[i].active == true) {
        rows.push(/*#__PURE__*/React.createElement(Icon, {
          active: true,
          key: i,
          id: list[i].id,
          icon: list[i].icon
        }));
      } else {
        rows.push(/*#__PURE__*/React.createElement(Icon, {
          active: false,
          key: i,
          id: list[i].id,
          icon: list[i].icon
        }));
      }
    }
  }
  return rows;
}
function getHRows(list) {
  var rows = [];
  for (var i = 0; i < list.length; i++) {
    if (list[i].active && list[i].active == true) {
      rows.push(/*#__PURE__*/React.createElement(BothH, {
        icon: list[i].icon,
        key: i,
        id: list[i].id,
        text: list[i].name,
        active: true
      }));
    } else {
      rows.push(/*#__PURE__*/React.createElement(BothH, {
        icon: list[i].icon,
        key: i,
        id: list[i].id,
        text: list[i].name,
        active: false
      }));
    }
  }
  return rows;
}
<<<<<<< HEAD
function XNavBarH(_ref28) {
  var menus = _ref28.menus,
    id = _ref28.id,
    focus = _ref28.focus,
    blur = _ref28.blur,
    focusBackground = _ref28.focusBackground;
=======
function XNavBarH(_ref30) {
  var menus = _ref30.menus,
    id = _ref30.id,
    focus = _ref30.focus,
    blur = _ref30.blur,
    focusBackground = _ref30.focusBackground;
>>>>>>> 5b71127 (xapp-24.12.15)
  var rows = React.useMemo(function () {
    return getHRows(menus);
  }, []);
  var hClassName = "x-nav-bar-h";
  React.useEffect(function () {
    setTimeout(function () {
      __.configureNavBarH("#" + id);
    }, 300);
  });
  return /*#__PURE__*/React.createElement("div", {
    className: hClassName,
    xfocusbackground: focusBackground,
    xfocuscolor: focus,
    xblurcolor: blur,
    id: id
  }, /*#__PURE__*/React.createElement("div", {
    className: "x-h-slider"
  }), rows);
}
<<<<<<< HEAD
function XNavigationBar(_ref29) {
  var align = _ref29.align,
    slider = _ref29.slider,
    menus = _ref29.menus,
    menusStat = _ref29.menusStat,
    navId = _ref29.navId,
    focusColor = _ref29.focusColor,
    focusBackground = _ref29.focusBackground,
    blurColor = _ref29.blurColor;
=======
function XNavigationBar(_ref31) {
  var align = _ref31.align,
    slider = _ref31.slider,
    menus = _ref31.menus,
    menusStat = _ref31.menusStat,
    navId = _ref31.navId,
    focusColor = _ref31.focusColor,
    focusBackground = _ref31.focusBackground,
    blurColor = _ref31.blurColor;
>>>>>>> 5b71127 (xapp-24.12.15)
  var getNavContent = function () {
    if (align == 'v') {
      if (menusStat == 'name') {
        return /*#__PURE__*/React.createElement(XNavBarV, {
          menus: menus,
          slider: slider,
          focus: focusColor,
          blur: blurColor,
          id: navId,
          menusStat: menusStat
        });
      } else {
        return /*#__PURE__*/React.createElement(XNavBarV, {
          menus: menus,
          slider: slider,
          focus: focusColor,
          blur: blurColor,
          id: navId,
          menusStat: menusStat,
          focusBackground: focusBackground
        });
      }
    } else if (align == 'h') {
      return /*#__PURE__*/React.createElement(XNavBarH, {
        menus: menus,
        id: navId,
        focus: focusColor,
        blur: blurColor,
        focusBackground: focusBackground
      });
    }
  }();
  return /*#__PURE__*/React.createElement(React.Fragment, null, getNavContent);
}
XNavigationBar.defaultProps = {
  slider: 'line',
  align: 'v',
  menusStat: 'name'
};
XNavigationBar.propTypes = {
  align: PropTypes.string,
  type: PropTypes.string,
  menusStat: PropTypes.string,
  blurColor: PropTypes.string.isRequired,
  focuBackground: PropTypes.string,
  focusColor: PropTypes.string.isRequired,
  navId: PropTypes.string.isRequired,
  menus: PropTypes.array
};
<<<<<<< HEAD
function XIconInfo(_ref30) {
  var className = _ref30.className,
    icon = _ref30.icon,
    text = _ref30.text,
    children = _ref30.children;
=======
function XIconInfo(_ref32) {
  var className = _ref32.className,
    icon = _ref32.icon,
    text = _ref32.text,
    children = _ref32.children;
>>>>>>> 5b71127 (xapp-24.12.15)
  var parentClassName = "x-icon-info " + className;
  var textClassName = text.className ? text.className : "";
  var iconClassName = icon.className ? "icon xmari5 " + icon.className : "icon xmari5";
  var textStyle = text.style ? text.style : {};
  var iconStyle = icon.style ? icon.style : {};
  var iconName = icon.size ? icon.name + " xfosi" + icon.size : icon.name;
  return /*#__PURE__*/React.createElement("div", {
    className: parentClassName
  }, /*#__PURE__*/React.createElement("div", {
    className: iconClassName
  }, /*#__PURE__*/React.createElement("i", {
    className: iconName,
    style: iconStyle
  })), /*#__PURE__*/React.createElement("div", {
    className: "info"
  }, /*#__PURE__*/React.createElement("p", {
    className: textClassName,
    style: textStyle
  }, children)));
}
XIconInfo.defaultProps = {
  className: "",
  text: {},
  icon: {}
};
XIconInfo.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
  text: PropTypes.object
};
<<<<<<< HEAD
function XUploadingProgressComponent(_ref31) {
  var width = _ref31.width,
    color = _ref31.color,
    id = _ref31.id,
    weight = _ref31.weight,
    className = _ref31.className;
=======
function XUploadingProgressComponent(_ref33) {
  var width = _ref33.width,
    color = _ref33.color,
    id = _ref33.id,
    weight = _ref33.weight,
    className = _ref33.className;
>>>>>>> 5b71127 (xapp-24.12.15)
  var boxStyle = React.useMemo(function () {
    return {
      width: width
    };
  }, []);
  var strokeStyle = React.useMemo(function () {
    return {
      width: width,
      stroke: color
    };
  }, []);
  var getClassName = React.useMemo(function () {
    return "x-circular-progress " + className;
  }, []);
  var getId = React.useMemo(function () {
    return "x-cir-prog-" + id;
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: getClassName,
    style: boxStyle
  }, /*#__PURE__*/React.createElement("svg", {
    className: "x-circular-p",
    viewBox: "25 25 50 50"
  }, /*#__PURE__*/React.createElement("circle", {
    className: "x-path-progress",
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none",
    strokeWidth: weight,
    id: getId,
    strokeMiterlimit: "10",
    style: strokeStyle
  })));
}
var XUploadingProgress = React.memo(XUploadingProgressComponent);
XUploadingProgress.propTypes = {
  width: PropTypes.string,
  weight: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string.isRequired
};
XUploadingProgress.defaultProps = {
  width: '40px',
  weight: 1,
  className: '',
  color: "white"
};
