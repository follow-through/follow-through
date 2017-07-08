webpackHotUpdate(0,{

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(94);

var _react2 = _interopRequireDefault(_react);

var _YourSide = __webpack_require__(197);

var _YourSide2 = _interopRequireDefault(_YourSide);

var _TheirSide = __webpack_require__(200);

var _TheirSide2 = _interopRequireDefault(_TheirSide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      yours: {
        name: '',
        image: '',
        body: ''
      },
      theirs: {
        name: '',
        image: '',
        body: ''
      }
    };

    _this.getEventData = _this.getEventData.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(_YourSide2.default, { name: true, image: true, body: true }),
          _react2.default.createElement(_TheirSide2.default, { name: true, image: true, body: true })
        ),
        _react2.default.createElement(
          'div',
          { className: 'row text-center' },
          _react2.default.createElement(
            'button',
            { id: 'accept', className: 'btn btn-success' },
            'Accept this agreement'
          )
        )
      );
    }
  }, {
    key: 'getEventData',
    value: function getEventData() {
      // Request to server
      // Update state
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;
;

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(94);

var _react2 = _interopRequireDefault(_react);

var _YourPost = __webpack_require__(198);

var _YourPost2 = _interopRequireDefault(_YourPost);

var _EditModal = __webpack_require__(199);

var _EditModal2 = _interopRequireDefault(_EditModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var YourSide = function YourSide(props) {
  return _react2.default.createElement(
    'div',
    { id: 'yours', className: 'text-center col-xs-6' },
    _react2.default.createElement(
      'h2',
      null,
      'Your Post'
    ),
    _react2.default.createElement(_YourPost2.default, { name: true, image: true, body: true }),
    _react2.default.createElement(
      'div',
      { className: 'text-left' },
      _react2.default.createElement(
        'button',
        { id: 'edit', className: 'btn btn-danger btn-lg', 'data-toggle': 'modal', 'data-target': '#myModal' },
        'Edit'
      )
    ),
    _react2.default.createElement(_EditModal2.default, null)
  );
};

exports.default = YourSide;

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(94);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var YourPost = function YourPost(props) {
  return _react2.default.createElement(
    'div',
    { id: 'your-post', className: 'well' },
    _react2.default.createElement(
      'div',
      { className: 'poster-info text-left' },
      _react2.default.createElement('img', { className: 'img img-circle', src: props.image }),
      _react2.default.createElement(
        'a',
        { className: 'poster' },
        props.name
      )
    ),
    _react2.default.createElement(
      'p',
      { className: 'post-body' },
      props.body
    )
  );
};

exports.default = YourPost;

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(94);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditModal = function EditModal(props) {
  return _react2.default.createElement(
    "div",
    { className: "modal fade", id: "myModal", tabindex: "-1", role: "dialog", "aria-labelledby": "myModalLabel" },
    _react2.default.createElement(
      "div",
      { className: "modal-dialog", role: "document" },
      _react2.default.createElement(
        "div",
        { className: "modal-content" },
        _react2.default.createElement(
          "div",
          { className: "modal-header" },
          _react2.default.createElement(
            "button",
            { type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close" },
            _react2.default.createElement(
              "span",
              { "aria-hidden": "true" },
              "\xD7"
            )
          ),
          _react2.default.createElement(
            "h4",
            { className: "modal-title", id: "myModalLabel" },
            "Edit what you will post"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "modal-body" },
          _react2.default.createElement("textarea", { className: "form-control", defaultValue: "Great time at @codesmith today!" })
        ),
        _react2.default.createElement(
          "div",
          { className: "modal-footer" },
          _react2.default.createElement(
            "button",
            { type: "button", className: "btn btn-default", "data-dismiss": "modal" },
            "Close"
          ),
          _react2.default.createElement(
            "button",
            { type: "button", className: "btn btn-primary" },
            "Save changes"
          )
        )
      )
    )
  );
};

exports.default = EditModal;

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(94);

var _react2 = _interopRequireDefault(_react);

var _TheirPost = __webpack_require__(201);

var _TheirPost2 = _interopRequireDefault(_TheirPost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TheirSide = function TheirSide(props) {
  return _react2.default.createElement(
    'div',
    { id: 'theirs', className: 'text-center col-xs-6' },
    _react2.default.createElement(
      'h2',
      null,
      'Their Post'
    ),
    _react2.default.createElement(_TheirPost2.default, { name: true, image: true, body: true }),
    _react2.default.createElement(
      'div',
      { className: 'text-right' },
      _react2.default.createElement(
        'button',
        { id: 'comment', className: 'btn btn-primary btn-lg', 'data-toggle': 'modal' },
        'Comment'
      )
    )
  );
};

exports.default = TheirSide;

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(94);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TheirPost = function TheirPost(props) {
  return _react2.default.createElement(
    'div',
    { id: 'their-post', className: 'well' },
    _react2.default.createElement(
      'div',
      { className: 'poster-info text-left' },
      _react2.default.createElement('img', { className: 'img img-circle', src: props.image }),
      _react2.default.createElement(
        'a',
        { className: 'poster' },
        props.name
      )
    ),
    _react2.default.createElement(
      'p',
      { className: 'post-body' },
      props.body
    )
  );
};

exports.default = TheirPost;

/***/ })

})