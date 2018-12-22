(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/components/PostEdit.js":
/*!************************************!*\
  !*** ./src/components/PostEdit.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd_es_card_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/card/style */ \"./node_modules/antd/es/card/style/index.js\");\n/* harmony import */ var antd_es_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/card */ \"./node_modules/antd/es/card/index.js\");\n/* harmony import */ var antd_es_popconfirm_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/popconfirm/style */ \"./node_modules/antd/es/popconfirm/style/index.js\");\n/* harmony import */ var antd_es_popconfirm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/popconfirm */ \"./node_modules/antd/es/popconfirm/index.js\");\n/* harmony import */ var antd_es_button_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/button/style */ \"./node_modules/antd/es/button/style/index.js\");\n/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/button */ \"./node_modules/antd/es/button/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _models_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models.js */ \"./src/models.js\");\n/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../editor */ \"./src/editor/index.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar PostView =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(PostView, _Component);\n\n  function PostView(props) {\n    var _this;\n\n    _classCallCheck(this, PostView);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(PostView).call(this, props));\n    _this.state = {\n      post: {},\n      selectionActive: false,\n      loading: true // create ref for prosemirror div\n\n    };\n    _this.editorDiv = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();\n    _this.titleEditorDiv = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();\n    _this.menubarDiv = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();\n    return _this;\n  }\n\n  _createClass(PostView, [{\n    key: \"debounce\",\n    value: function debounce(func, wait) {\n      var timeout;\n      var self = this;\n      return function () {\n        clearTimeout(timeout);\n        var args = arguments;\n        timeout = setTimeout(function () {\n          func.apply(self, args);\n        }, wait);\n      };\n    }\n  }, {\n    key: \"onPostChange\",\n    value: function onPostChange(postJSON) {\n      // post postJSON to server\n      var post = this.state.post;\n      post.fields.text = postJSON;\n      this.setState({\n        post: post\n      });\n      var params = this.props.match.params;\n      _models_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].editDraft(params.username, params.postslug, post);\n    }\n  }, {\n    key: \"onTitleChange\",\n    value: function onTitleChange(titleJSON) {\n      var title = 'Untitled Post';\n      var doc = titleJSON;\n\n      if (doc.content && doc.content[0].text) {\n        title = doc.content[0].text;\n      } // post title to server\n\n\n      var post = this.state.post;\n      post.fields.title = title;\n      this.setState({\n        post: post\n      });\n      var params = this.props.match.params;\n      _models_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].editDraft(params.username, params.postslug, post);\n    }\n  }, {\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      var _this2 = this;\n\n      var self = this;\n      _models_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].loadPost(this.props.match.params.username, this.props.match.params.postslug).then(function () {\n        _this2.setState({\n          post: _models_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].currentDoc,\n          loading: false\n        });\n\n        var editorDiv = _this2.editorDiv.current;\n        var titleEditorDiv = _this2.titleEditorDiv.current;\n        window.editor = _editor__WEBPACK_IMPORTED_MODULE_8__[\"Editor\"].init(editorDiv, {\n          onChange: _this2.debounce(_this2.onPostChange.bind(_this2), 1000),\n          post: _this2.state.post,\n          editable: true,\n          menubar: true,\n          onSelect: _this2.onSelect.bind(_this2),\n          onDeselect: _this2.onDeselect.bind(_this2)\n        });\n        window.titleEditor = _editor__WEBPACK_IMPORTED_MODULE_8__[\"Editor\"].initTitleEditor(titleEditorDiv, {\n          onChange: _this2.debounce(_this2.onTitleChange.bind(_this2), 1000),\n          post: _this2.state.post,\n          editable: true\n        });\n\n        _this2.repositionMenubar();\n      });\n    }\n  }, {\n    key: \"repositionMenubar\",\n    value: function repositionMenubar() {\n      var $menubar = jquery__WEBPACK_IMPORTED_MODULE_9___default()('.ProseMirror-menubar');\n      $menubar.detach().appendTo(this.menubarDiv.current);\n    }\n  }, {\n    key: \"onSelect\",\n    value: function onSelect() {\n      this.setState({\n        selectionActive: true\n      });\n    }\n  }, {\n    key: \"onDeselect\",\n    value: function onDeselect() {\n      this.setState({\n        selectionActive: false\n      });\n    }\n  }, {\n    key: \"publish\",\n    value: function publish() {\n      var _this3 = this;\n\n      _models_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].publishDraft(this.state.post.pk).then(function (resp) {\n        // redirect to posts listing\n        _this3.props.history.push('/writes/' + _this3.props.match.params.username); // window.location.href = '/writes/' + this.props.match.params.username\n\n      });\n    }\n  }, {\n    key: \"play\",\n    value: function play() {\n      this.props.history.push('/writes/' + this.props.match.params.username + '/play/' + this.state.post.fields.slug);\n    }\n  }, {\n    key: \"view\",\n    value: function view() {\n      this.props.history.push('/writes/' + this.props.match.params.username + '/posts/' + this.state.post.fields.slug);\n    }\n  }, {\n    key: \"delete\",\n    value: function _delete(post) {\n      _models_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].deletePost(post.pk);\n      this.props.history.push('/writes/' + this.props.match.params.username);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      if (this.state.post.fields) {\n        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          className: \"writango-post-container\",\n          style: {\n            minHeight: '100vh',\n            border: '0',\n            width: '800px',\n            margin: 'auto'\n          },\n          extra: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Group, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            type: \"primary\",\n            onClick: this.publish.bind(this)\n          }, \"Publish\"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            onClick: this.play.bind(this)\n          }, \"Play\"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            onClick: this.view.bind(this)\n          }, \"View\"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_popconfirm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            title: \"Are you sure you want to delete this piece?\",\n            onClick: this.delete.bind(this, this.state.post),\n            okText: \"Yes\",\n            cancelText: \"No\"\n          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            type: \"danger\"\n          }, \"Delete\")))\n        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", {\n          style: {\n            visibility: this.state.selectionActive ? 'visible' : 'hidden'\n          },\n          className: \"writango-prosemirror-menubar-container\",\n          ref: this.menubarDiv\n        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", {\n          className: \"prosemirror-title-div\",\n          ref: this.titleEditorDiv\n        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", {\n          className: \"post-body\"\n        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", {\n          className: \"prosemirror-div\",\n          ref: this.editorDiv\n        })));\n      } else if (this.state.loading) {\n        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", {\n          style: {\n            minHeight: '100vh'\n          }\n        });\n      }\n\n      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", {\n        style: {\n          minHeight: '100vh',\n          width: '800px',\n          margin: 'auto'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"p\", null, \"Sorry, either the requested post doesn't exist or you don't have necessary permissions to view the content.\"));\n    }\n  }]);\n\n  return PostView;\n}(react__WEBPACK_IMPORTED_MODULE_6__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostView);\n\n//# sourceURL=webpack:///./src/components/PostEdit.js?");

/***/ })

}]);