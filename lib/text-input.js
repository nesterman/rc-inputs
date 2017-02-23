"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextInput = function (_React$Component) {
  _inherits(TextInput, _React$Component);

  function TextInput(props) {
    _classCallCheck(this, TextInput);

    var _this = _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).call(this, props));

    _this.state = {
      value: _this.props.defaultValue ? _this.props.defaultValue : ""
    };
    _this.handleData = _this.handleData.bind(_this);
    return _this;
  }

  _createClass(TextInput, [{
    key: "handleData",
    value: function handleData(e) {
      if (this.props.onEnter) {
        switch (e.keyCode) {
          case 13:
            this.props.onEnter(this.state.value);
            break;
        }
      }
      if (this.props.onChange) this.props.onChange(e);
      if (this.onValid) {
        this.onValid(e);
      }
      this.setState({
        value: e.target.value
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autofill && !this.props.defaultValue) {
        if (this.refs.input.value !== "") this.handleData({ target: this.refs.input });
        this._listener = setInterval(function () {
          if (this.state.value !== this.refs.input.value) this.handleData({ target: this.refs.input });
        }.bind(this), 500);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.autofill && !this.props.defaultValue) {
        clearInterval(this._listener);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("input", { type: this.props.type ? this.props.type : "text",
        ref: "input",
        defaultValue: this.props.defaultValue,
        className: this.props.className,
        placeholder: this.props.placeholder,
        onKeyUp: this.handleData,
        autoComplete: this.props.autoComplete });
    }
  }]);

  return TextInput;
}(_react2.default.Component);

exports.default = TextInput;