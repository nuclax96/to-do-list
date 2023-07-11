/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  font-family: \"Roboto\", sans-serif;\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n#content {\r\n  display: grid;\r\n  height: 100vh;\r\n  grid-template-columns: minmax(225px, 25%) auto;\r\n  grid-template-rows: 50px 1fr;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  background-image: linear-gradient(to right, #6096b4, #ec52e5);\r\n  grid-column: 1/3;\r\n}\r\n.logoContainerHeader {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.headingLogo {\r\n  color: #eeeeee;\r\n  font-size: 20px;\r\n  padding-left: 20px;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  font-size: 14px;\r\n  background-color: #e6e5e5;\r\n  grid-column: 1/2;\r\n  border-right: 2px solid #e0e2e4;\r\n  gap: 35px;\r\n  border-right: 1px solid rgb(202, 199, 199);\r\n  z-index: 10;\r\n  box-shadow: 3px 1px 6px -6px #202020;\r\n}\r\n.taskNavContainer {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 15px;\r\n  margin-top: 10px;\r\n  width: 90%;\r\n  /* background-color: #ec52e5; */\r\n}\r\n\r\n.projectNavContainer {\r\n  width: 95%;\r\n  padding-right: 10px;\r\n  height: 250px;\r\n  /* background-color: aqua; */\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n  align-items: center;\r\n}\r\n\r\n.projectNavContainer::-webkit-scrollbar {\r\n  width: 7px;\r\n}\r\n\r\n.projectNavContainer::-webkit-scrollbar-track {\r\n  border-radius: 8px;\r\n  padding-right: 10px;\r\n  background-color: #e7e7e7;\r\n  border: 1px solid #cacaca;\r\n}\r\n\r\n.projectNavContainer::-webkit-scrollbar-thumb {\r\n  border-radius: 8px;\r\n  padding-right: 10px;\r\n  background-color: #d55959;\r\n}\r\n.projectHeadingContainer {\r\n  display: grid;\r\n  width: 100%;\r\n  grid-template-columns: 70% 30%;\r\n  justify-content: space-between;\r\n  margin: 20px 10px;\r\n  padding: 0px 10px;\r\n}\r\n\r\n.projectNavHeading {\r\n  padding: 10px;\r\n  padding-top: 0px;\r\n}\r\n\r\n.projectsContainer {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  margin-left: 80px;\r\n  justify-content: center;\r\n}\r\n\r\n.taskNavContainer:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  height: 1px;\r\n  background: rgba(0, 0, 0, 0.363);\r\n  top: 110%;\r\n  width: 75%;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n}\r\n.linkNav {\r\n  text-decoration: none;\r\n  padding: 12px 20px;\r\n  color: black;\r\n  background-color: rgb(255, 255, 255);\r\n  width: 80%;\r\n  border-radius: 5px;\r\n  color: #3e3f3f;\r\n}\r\n\r\n.linkNav.selected {\r\n  background-color: rgb(56, 113, 235);\r\n}\r\n\r\n.linkNav:hover {\r\n  color: white;\r\n  background-color: rgb(56, 113, 235);\r\n}\r\n\r\nmain {\r\n  display: grid;\r\n  grid-template-rows: 100px 50px auto;\r\n  background-color: #eeeeee;\r\n  grid-column: 2/3;\r\n  padding-left: 10px;\r\n}\r\n\r\n.modal {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, 0.76);\r\n  z-index: 100;\r\n}\r\n.modalContainer {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  position: relative;\r\n  width: 50%;\r\n  padding: 10px;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: white;\r\n  border-radius: 5px;\r\n  gap: 20px;\r\n}\r\n.taskModalContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n.taskModalContainer input {\r\n  /* display: block; */\r\n  width: 100%;\r\n  padding: 8px;\r\n  border-radius: 5px;\r\n}\r\n.mainHeadingContainer {\r\n  display: grid;\r\n  grid-template-columns: 2fr 1fr;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: #6e6e6e;\r\n  padding: 10px;\r\n}\r\n.addTaskBtn {\r\n  width: 50%;\r\n  padding: 10px;\r\n  border-radius: 8px;\r\n  border: 1px solid rgb(192, 189, 189);\r\n  font-size: 18px;\r\n  margin-left: 100px;\r\n  color: rgb(13, 37, 102);\r\n  background-color: rgb(243, 157, 243);\r\n  transition: all 400ms ease;\r\n}\r\n\r\n.hidden {\r\n  opacity: 0;\r\n  z-index: -100;\r\n}\r\n\r\n.addTaskBtn:hover {\r\n  color: white;\r\n  background-color: rgb(46, 87, 199);\r\n}\r\n.taskModalHeadingContainer,\r\n.projectModalHeadingContainer {\r\n  display: grid;\r\n  width: 100%;\r\n  grid-template-columns: 90% auto;\r\n  /* justify-content: space-around; */\r\n}\r\n.modalHeading {\r\n  justify-self: center;\r\n  margin-left: 25px;\r\n}\r\n\r\n.taskHeadingContainer {\r\n  display: grid;\r\n  grid-template-columns: 3fr 1fr 1fr 1fr 1fr 1fr;\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n  margin-left: 10px;\r\n}\r\n\r\n.tasksContainer {\r\n  display: grid;\r\n  grid-template-rows: repeat(auto-fit, minmax(50px, 70px));\r\n}\r\n.taskContainer {\r\n  color: #3d3939;\r\n  display: grid;\r\n  grid-template-columns: 3fr 1fr 1fr 1fr 1fr 1fr;\r\n  align-items: center;\r\n  border-bottom: 1px solid gray;\r\n  transition: all 400ms ease-out;\r\n  padding-left: 10px;\r\n  justify-content: center;\r\n}\r\n\r\n.taskContainer:hover {\r\n  background-color: #ced8fa;\r\n}\r\n.addIcon,\r\n.addTaskIcon {\r\n  width: 20%;\r\n  min-width: 15%;\r\n  height: auto;\r\n  transition: all 100ms ease-in;\r\n}\r\n.addIcon:hover {\r\n  transform: scale(1.25);\r\n  height: auto;\r\n}\r\nfooter {\r\n  grid-area: \"footer\";\r\n  background-color: #eeeeee;\r\n  grid-column: 1/3;\r\n  border-top: 2px solid #a8afb3;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectsArr: () => (/* binding */ projectsArr),\n/* harmony export */   taskArr: () => (/* binding */ taskArr)\n/* harmony export */ });\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _modules_initial_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/initial-load */ \"./src/modules/initial-load.js\");\n/* harmony import */ var _modules_domHandler_header_populateHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/domHandler/header/populateHeader */ \"./src/modules/domHandler/header/populateHeader.js\");\n/* harmony import */ var _modules_domHandler_nav_populateNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/domHandler/nav/populateNav */ \"./src/modules/domHandler/nav/populateNav.js\");\n/* harmony import */ var _modules_domHandler_main_populateMain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/domHandler/main/populateMain */ \"./src/modules/domHandler/main/populateMain.js\");\n/* harmony import */ var _modules_dataHandler_task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dataHandler/task */ \"./src/modules/dataHandler/task.js\");\n/* harmony import */ var _modules_dataHandler_projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dataHandler/projects */ \"./src/modules/dataHandler/projects.js\");\n/* harmony import */ var _modules_domHandler_main_addTaskModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/domHandler/main/addTaskModal */ \"./src/modules/domHandler/main/addTaskModal.js\");\n/* harmony import */ var _modules_eventListeners__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/eventListeners */ \"./src/modules/eventListeners.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// import createProjectModal from \"./modules/domHandler/nav/addProjectModal\";\r\n\r\nconst projectsArr = [];\r\nconst taskArr = [];\r\nconst loadElements = () => {\r\n  (0,_modules_initial_load__WEBPACK_IMPORTED_MODULE_1__.initalHtmlLoad)();\r\n  (0,_modules_domHandler_header_populateHeader__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  (0,_modules_domHandler_nav_populateNav__WEBPACK_IMPORTED_MODULE_3__.fillNav)();\r\n  (0,_modules_domHandler_main_populateMain__WEBPACK_IMPORTED_MODULE_4__.fillMainContainer)();\r\n  (0,_modules_domHandler_nav_populateNav__WEBPACK_IMPORTED_MODULE_3__.fillProjectsContainer)();\r\n  // createProject(projectsArr);\r\n  (0,_modules_initial_load__WEBPACK_IMPORTED_MODULE_1__.createModal)();\r\n  // Task Modal\r\n  (0,_modules_domHandler_main_addTaskModal__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n\r\n  // show tasks on inital load\r\n  _modules_dataHandler_task__WEBPACK_IMPORTED_MODULE_5__[\"default\"].displayTask();\r\n  _modules_dataHandler_projects__WEBPACK_IMPORTED_MODULE_6__[\"default\"].displayProject();\r\n};\r\n\r\nconst initializeListeners = () => {\r\n  // Task Listeners\r\n  _modules_eventListeners__WEBPACK_IMPORTED_MODULE_8__.taskEventsListener.taskListeners();\r\n  _modules_eventListeners__WEBPACK_IMPORTED_MODULE_8__.taskEventsListener.taskModalListeners();\r\n  //\r\n\r\n  // Project Listeners\r\n  _modules_eventListeners__WEBPACK_IMPORTED_MODULE_8__.projectEventListeners.addProjectBtn();\r\n  _modules_eventListeners__WEBPACK_IMPORTED_MODULE_8__.projectEventListeners.projectNavListeners();\r\n\r\n  //\r\n};\r\n\r\nloadElements();\r\ninitializeListeners();\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/controller.js":
/*!***********************************!*\
  !*** ./src/modules/controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectControllerFunction: () => (/* binding */ projectControllerFunction),\n/* harmony export */   taskControllerFunctions: () => (/* binding */ taskControllerFunctions)\n/* harmony export */ });\n/* harmony import */ var _dataHandler_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataHandler/projects */ \"./src/modules/dataHandler/projects.js\");\n/* harmony import */ var _dataHandler_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataHandler/task */ \"./src/modules/dataHandler/task.js\");\n/* harmony import */ var _domHandler_main_addTaskModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domHandler/main/addTaskModal */ \"./src/modules/domHandler/main/addTaskModal.js\");\n/* harmony import */ var _domHandler_main_populateMain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domHandler/main/populateMain */ \"./src/modules/domHandler/main/populateMain.js\");\n/* harmony import */ var _domHandler_main_taskModalFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domHandler/main/taskModalFunctions */ \"./src/modules/domHandler/main/taskModalFunctions.js\");\n/* harmony import */ var _domHandler_nav_addProjectModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domHandler/nav/addProjectModal */ \"./src/modules/domHandler/nav/addProjectModal.js\");\n/* harmony import */ var _domHandler_nav_projectModalFunctions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./domHandler/nav/projectModalFunctions */ \"./src/modules/domHandler/nav/projectModalFunctions.js\");\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./eventListeners */ \"./src/modules/eventListeners.js\");\n/* harmony import */ var _helperFunctions_clearContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helperFunctions/clearContainer */ \"./src/modules/helperFunctions/clearContainer.js\");\n/* harmony import */ var _helperFunctions_localStorage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helperFunctions/localStorage */ \"./src/modules/helperFunctions/localStorage.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst taskControllerFunctions = (() => {\r\n  const openTaskModal = () => {\r\n    (0,_helperFunctions_clearContainer__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"modal\");\r\n    (0,_domHandler_main_addTaskModal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    _domHandler_main_taskModalFunctions__WEBPACK_IMPORTED_MODULE_4__[\"default\"].showModal();\r\n    _eventListeners__WEBPACK_IMPORTED_MODULE_7__.taskEventsListener.taskModalListeners();\r\n  };\r\n  const closeTaskModal = () => {\r\n    console.log(\"Hello\");\r\n    _domHandler_main_taskModalFunctions__WEBPACK_IMPORTED_MODULE_4__[\"default\"].hideModal();\r\n  };\r\n  const taskSubmitController = () => {};\r\n\r\n  const addTask = () => {\r\n    const userTask = _dataHandler_task__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addTask();\r\n\r\n    // Form Validation Here , TO-DO\r\n\r\n    // local storage\r\n    _helperFunctions_localStorage__WEBPACK_IMPORTED_MODULE_9__[\"default\"].setLocalStorage(\"taskArr\", userTask);\r\n    // localStorageFunctions.getAllItems(\"taskArr\");\r\n    // Clear Input Fields\r\n    _domHandler_main_taskModalFunctions__WEBPACK_IMPORTED_MODULE_4__[\"default\"].clearTaskModalValues();\r\n    // close the modal\r\n    _domHandler_main_taskModalFunctions__WEBPACK_IMPORTED_MODULE_4__[\"default\"].hideModal();\r\n    _dataHandler_task__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayTask();\r\n    _eventListeners__WEBPACK_IMPORTED_MODULE_7__.taskEventsListener.deleteBtnListener();\r\n  };\r\n  const deleteTask = (e) => {\r\n    const { id } = e.target.parentNode.dataset;\r\n    _dataHandler_task__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteTask(\"taskArr\", id);\r\n    (0,_domHandler_main_populateMain__WEBPACK_IMPORTED_MODULE_3__.deleteTaskUsingId)(id);\r\n  };\r\n\r\n  return {\r\n    taskSubmitController,\r\n    openTaskModal,\r\n    closeTaskModal,\r\n    addTask,\r\n    deleteTask,\r\n  };\r\n})();\r\n\r\nconst projectControllerFunction = (() => {\r\n  const showProjectModal = () => {\r\n    (0,_helperFunctions_clearContainer__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"modal\");\r\n    (0,_domHandler_nav_addProjectModal__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n    _domHandler_nav_projectModalFunctions__WEBPACK_IMPORTED_MODULE_6__[\"default\"].showModal();\r\n    _eventListeners__WEBPACK_IMPORTED_MODULE_7__.projectEventListeners.projectModalListeners();\r\n  };\r\n\r\n  const addProject = () => {\r\n    const projectData = _dataHandler_projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProject();\r\n\r\n    _helperFunctions_localStorage__WEBPACK_IMPORTED_MODULE_9__[\"default\"].setLocalStorage(\"projectArr\", projectData);\r\n    // localStorageFunctions.getAllItems(\"projectArr\");\r\n\r\n    _domHandler_nav_projectModalFunctions__WEBPACK_IMPORTED_MODULE_6__[\"default\"].clearProjectModalValues();\r\n    // close the modal\r\n    _domHandler_nav_projectModalFunctions__WEBPACK_IMPORTED_MODULE_6__[\"default\"].hideModal();\r\n    _dataHandler_projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].displayProject();\r\n    _eventListeners__WEBPACK_IMPORTED_MODULE_7__.taskEventsListener.deleteBtnListener();\r\n  };\r\n\r\n  const closeProjectModal = () => {\r\n    _domHandler_nav_projectModalFunctions__WEBPACK_IMPORTED_MODULE_6__[\"default\"].hideModal();\r\n  };\r\n\r\n  const showProjectTasks = (e) => {\r\n    (0,_helperFunctions_clearContainer__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"tasksContainer\");\r\n    const taskArr = _dataHandler_task__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTasksUsingProjectId(e.target.dataset.id);\r\n    (0,_domHandler_main_populateMain__WEBPACK_IMPORTED_MODULE_3__.fillTaskContainer)(taskArr);\r\n  };\r\n\r\n  return { addProject, showProjectModal, closeProjectModal, showProjectTasks };\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/controller.js?");

/***/ }),

/***/ "./src/modules/dataHandler/projects.js":
/*!*********************************************!*\
  !*** ./src/modules/dataHandler/projects.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domHandler_nav_populateNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domHandler/nav/populateNav */ \"./src/modules/domHandler/nav/populateNav.js\");\n/* harmony import */ var _domHandler_nav_projectModalFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domHandler/nav/projectModalFunctions */ \"./src/modules/domHandler/nav/projectModalFunctions.js\");\n/* harmony import */ var _helperFunctions_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helperFunctions/localStorage */ \"./src/modules/helperFunctions/localStorage.js\");\n/* harmony import */ var _model_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/project */ \"./src/modules/model/project.js\");\n\r\n\r\n\r\n\r\n\r\nconst projectDataHandler = (() => {\r\n  const addProject = () => {\r\n    const inputValue = _domHandler_nav_projectModalFunctions__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getAddProjectValues();\r\n    const projectObj = new _model_project__WEBPACK_IMPORTED_MODULE_3__[\"default\"](inputValue.projectName);\r\n    return projectObj;\r\n  };\r\n\r\n  const displayProject = () => {\r\n    const projectArr = _helperFunctions_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getAllItems(\"projectArr\");\r\n    (0,_domHandler_nav_populateNav__WEBPACK_IMPORTED_MODULE_0__.insertProjectLinks)(projectArr);\r\n  };\r\n\r\n  const deleteProject = () => {};\r\n\r\n  return { addProject, displayProject, deleteProject };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectDataHandler);\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/dataHandler/projects.js?");

/***/ }),

/***/ "./src/modules/dataHandler/task.js":
/*!*****************************************!*\
  !*** ./src/modules/dataHandler/task.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domHandler_main_populateMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domHandler/main/populateMain */ \"./src/modules/domHandler/main/populateMain.js\");\n/* harmony import */ var _model_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/task */ \"./src/modules/model/task.js\");\n/* harmony import */ var _helperFunctions_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helperFunctions/localStorage */ \"./src/modules/helperFunctions/localStorage.js\");\n/* harmony import */ var _domHandler_main_taskModalFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domHandler/main/taskModalFunctions */ \"./src/modules/domHandler/main/taskModalFunctions.js\");\n\r\n\r\n\r\n\r\n\r\nconst taskDataHandler = (() => {\r\n  const addTask = () => {\r\n    let priority = 5; // default priority set to 5 if not supplied\r\n    // Get task input fields'\r\n    const inputValues = _domHandler_main_taskModalFunctions__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getAddTaskValues();\r\n    priority = inputValues.priority ? inputValues.priority : priority;\r\n    // Create task object\r\n    const userTask = new _model_task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n      inputValues.taskName,\r\n      inputValues.taskDueDate,\r\n      inputValues.taskCreateDate,\r\n      priority,\r\n      false,\r\n      inputValues.taskProjectId\r\n    );\r\n    return userTask;\r\n  };\r\n\r\n  const displayTask = () => {\r\n    const tasksArr = _helperFunctions_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getAllItems(\"taskArr\");\r\n    (0,_domHandler_main_populateMain__WEBPACK_IMPORTED_MODULE_0__.fillTaskContainer)(tasksArr);\r\n  };\r\n\r\n  const deleteTask = (itemName, id) => {\r\n    _helperFunctions_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deleteItemUsingId(itemName, id);\r\n  };\r\n\r\n  const getTasksUsingProjectId = (projectId) => {\r\n    const taskArr = _helperFunctions_localStorage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getAllItems(\"taskArr\");\r\n    return taskArr.filter((item) => item._projectId === projectId);\r\n  };\r\n  return { displayTask, deleteTask, addTask, getTasksUsingProjectId };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskDataHandler);\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/dataHandler/task.js?");

/***/ }),

/***/ "./src/modules/domHandler/header/populateHeader.js":
/*!*********************************************************!*\
  !*** ./src/modules/domHandler/header/populateHeader.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helperFunctions/createHtmlEl */ \"./src/modules/helperFunctions/createHtmlEl.js\");\n\r\nconst fillHeader = function () {\r\n  const header = document.querySelector(\"header\");\r\n  const headingDiv = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_0__.createDiv)(\"logoContainerHeader\");\r\n  const logoHeading = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_0__.createHeading)(\"h3\", \"Just To Do It\", \"headingLogo\");\r\n  console.log(logoHeading);\r\n  header.append(headingDiv);\r\n  headingDiv.append(logoHeading);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fillHeader);\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/domHandler/header/populateHeader.js?");

/***/ }),

/***/ "./src/modules/domHandler/main/addTaskModal.js":
/*!*****************************************************!*\
  !*** ./src/modules/domHandler/main/addTaskModal.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helperFunctions_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helperFunctions/localStorage */ \"./src/modules/helperFunctions/localStorage.js\");\n/* harmony import */ var _helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helperFunctions/createHtmlEl */ \"./src/modules/helperFunctions/createHtmlEl.js\");\n\r\n\r\n\r\nconst createTaskContainer = () => {\r\n  const modal = document.querySelector(\".modal\");\r\n  const taskContainer = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_1__.createForm)(\"taskModalContainer\");\r\n  taskContainer.method = \"GET\";\r\n  const modalContainer = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_1__.createDiv)(\"modalContainer\");\r\n  const taskHeadingContainer = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_1__.createDiv)(\"taskModalHeadingContainer\");\r\n  const closeModalBtn = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_1__.createButton)(\"X\", \"closeModal\");\r\n  const taskModalHeading = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_1__.createParagraph)(\"Add Task\", \"modalHeading\");\r\n  taskHeadingContainer.append(taskModalHeading, closeModalBtn);\r\n  const taskNameInput = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_1__.createInput)(\"taskName\", \"taskName\", \"text\");\r\n  const taskNameLabel = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_1__.createLabel)(\"Task Name\", \"taskName\");\r\n  const taskCreateDateInput = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_1__.createInput)(\r\n    \"taskCreateDate\",\r\n    \"taskCreateDate\",\r\n    \"date\"\r\n  );\r\n  const taskCreateDateLabel = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_1__.createLabel)(\"Create Date\", \"taskCreateDate\");\r\n  const taskDueDateInput = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_1__.createInput)(\"taskDueDate\", \"taskDueDate\", \"date\");\r\n  const taskDueDateLabel = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_1__.createLabel)(\"Due Date\", \"taskDueDate\");\r\n  // const submitBtn = createButton(\"Submit\", \"btnSubmitTask\");\r\n  const submitBtn = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_1__.createInput)(\"Submit\", \"btnSubmitTask\", \"submit\");\r\n\r\n  const projectsArr = _helperFunctions_localStorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllItems(\"projectArr\");\r\n  const projectsDropdownEl = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_1__.createSelectUsingArray)(\r\n    \"projectOptionList\",\r\n    \"selectProject\",\r\n    projectsArr\r\n  );\r\n  submitBtn.classList.add(\"btnSubmitTask\");\r\n  submitBtn.value = \"Submit\";\r\n  modalContainer.append(taskHeadingContainer, taskContainer);\r\n  taskNameInput.required = true;\r\n  taskCreateDateInput.required = true;\r\n  taskDueDateInput.required = true;\r\n  taskContainer.append(\r\n    taskNameLabel,\r\n    taskNameInput,\r\n    taskCreateDateLabel,\r\n    taskCreateDateInput,\r\n    taskDueDateLabel,\r\n    taskDueDateInput,\r\n    projectsDropdownEl,\r\n    submitBtn\r\n  );\r\n  modal.append(modalContainer);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTaskContainer);\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/domHandler/main/addTaskModal.js?");

/***/ }),

/***/ "./src/modules/domHandler/main/populateMain.js":
/*!*****************************************************!*\
  !*** ./src/modules/domHandler/main/populateMain.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteTaskUsingId: () => (/* binding */ deleteTaskUsingId),\n/* harmony export */   fillMainContainer: () => (/* binding */ fillMainContainer),\n/* harmony export */   fillTaskContainer: () => (/* binding */ fillTaskContainer)\n/* harmony export */ });\n/* harmony import */ var _assets_edit_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/edit.svg */ \"./src/assets/edit.svg\");\n/* harmony import */ var _assets_delete_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/delete.svg */ \"./src/assets/delete.svg\");\n/* harmony import */ var _helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helperFunctions/createHtmlEl */ \"./src/modules/helperFunctions/createHtmlEl.js\");\n\r\n\r\n\r\n\r\nconst createTaskDiv = (\r\n  taskName,\r\n  taskCreatedDate,\r\n  taskDueDate,\r\n  taskCompleted\r\n) => {\r\n  const taskContainer = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_2__.createDiv)(\"taskContainer\");\r\n  const name = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_2__.createParagraph)(taskName, \"taskName\");\r\n  const dueDate = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_2__.createParagraph)(taskDueDate, \"taskDueDate\");\r\n  const createDate = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_2__.createParagraph)(taskCreatedDate, \"taskCreateDate\");\r\n  const completed = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_2__.createParagraph)(taskCompleted, \"taskCompletedInd\");\r\n  const editIcon = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_2__.createImage)(_assets_edit_svg__WEBPACK_IMPORTED_MODULE_0__, \"addIcon\");\r\n  const deleteIcon = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_2__.createImage)(_assets_delete_svg__WEBPACK_IMPORTED_MODULE_1__, \"addIcon\");\r\n  deleteIcon.classList.add(\"taskDeleteBtn\");\r\n\r\n  taskContainer.append(\r\n    name,\r\n    createDate,\r\n    dueDate,\r\n    completed,\r\n    editIcon,\r\n    deleteIcon\r\n  );\r\n  return taskContainer;\r\n};\r\n\r\nconst fillTaskContainer = (taskArr) => {\r\n  const tasksContatiner = document.querySelector(\".tasksContainer\");\r\n  tasksContatiner.textContent = \"\";\r\n  if (!taskArr) return;\r\n  taskArr.forEach((item) => {\r\n    const taskDiv = createTaskDiv(\r\n      item._title,\r\n      item._createDate,\r\n      item._dueDate,\r\n      item._completed\r\n    );\r\n    taskDiv.dataset.id = item._id;\r\n    tasksContatiner.append(taskDiv);\r\n  });\r\n};\r\n\r\nconst deleteTaskUsingId = (id) => {\r\n  const taskDiv = document.querySelector(`[data-id=${id}]`);\r\n  const taskContainer = document.querySelector(\".tasksContainer\");\r\n  taskContainer.removeChild(taskDiv);\r\n};\r\n\r\nconst fillMainContainer = () => {\r\n  const mainContainer = document.querySelector(\"main\");\r\n  const headingContainer = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_2__.createDiv)(\"mainHeadingContainer\");\r\n  const taskHeadingContainer = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_2__.createDiv)(\"taskHeadingContainer\");\r\n  const taskNameHeading = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_2__.createParagraph)(\"Name\", \"taskNameHeading\");\r\n  const taskDueDateHeading = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_2__.createParagraph)(\"Due Date\", \"taskNameHeading\");\r\n  const taskEditHeading = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_2__.createParagraph)(\"Edit\", \"editHeading\");\r\n  const taskDeleteHeading = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_2__.createParagraph)(\"Delete\", \"deleteHeading\");\r\n  const taskCreateDateHeading = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_2__.createParagraph)(\r\n    \"Create Date\",\r\n    \"taskNameHeading\"\r\n  );\r\n  const taskCompletedHeading = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_2__.createParagraph)(\"Completed\", \"taskNameHeading\");\r\n  taskHeadingContainer.append(\r\n    taskNameHeading,\r\n    taskCreateDateHeading,\r\n    taskDueDateHeading,\r\n    taskCompletedHeading,\r\n    taskEditHeading,\r\n    taskDeleteHeading\r\n  );\r\n  const taskContainer = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_2__.createDiv)(\"tasksContainer\");\r\n  const headingMain = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_2__.createHeading)(\"h2\", \"All Tasks\", \"mainHeading\");\r\n  const addTaskBtn = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_2__.createButton)(\"Add Task\", \"addTaskBtn\");\r\n  headingContainer.append(headingMain, addTaskBtn);\r\n\r\n  mainContainer.append(headingContainer, taskHeadingContainer, taskContainer);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/domHandler/main/populateMain.js?");

/***/ }),

/***/ "./src/modules/domHandler/main/taskModalFunctions.js":
/*!***********************************************************!*\
  !*** ./src/modules/domHandler/main/taskModalFunctions.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst taskModalFunctions = (() => {\r\n  const getAddTaskValues = () => {\r\n    const taskName = document.querySelector(\"#taskName\").value;\r\n    const taskCreateDate = document.querySelector(\"#taskCreateDate\").value;\r\n    const taskDueDate = document.querySelector(\"#taskDueDate\").value;\r\n    const taskProjectId = document.querySelector(\"#selectProject\").value;\r\n    console.log(taskProjectId);\r\n    return { taskName, taskCreateDate, taskDueDate, taskProjectId };\r\n  };\r\n\r\n  const clearTaskModalValues = () => {\r\n    document.querySelector(\"#taskName\").value = \"\";\r\n    document.querySelector(\"#taskCreateDate\").value = \"\";\r\n    document.querySelector(\"#taskDueDate\").value = \"\";\r\n  };\r\n\r\n  const hideModal = () => {\r\n    document.querySelector(\".modal\").classList.add(\"hidden\");\r\n  };\r\n  const showModal = () => {\r\n    document.querySelector(\".modal\").classList.remove(\"hidden\");\r\n  };\r\n  return { getAddTaskValues, clearTaskModalValues, hideModal, showModal };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskModalFunctions);\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/domHandler/main/taskModalFunctions.js?");

/***/ }),

/***/ "./src/modules/domHandler/nav/addProjectModal.js":
/*!*******************************************************!*\
  !*** ./src/modules/domHandler/nav/addProjectModal.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helperFunctions/createHtmlEl */ \"./src/modules/helperFunctions/createHtmlEl.js\");\n\r\n\r\nconst createProjectModal = () => {\r\n  const modal = document.querySelector(\".modal\");\r\n  const modalContainer = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_0__.createDiv)(\"modalContainer\");\r\n  const projectContainer = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_0__.createForm)(\"projectModalContainer\");\r\n  projectContainer.method = \"GET\";\r\n  const projectHeadingContainer = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_0__.createDiv)(\"projectModalHeadingContainer\");\r\n  const closeModalBtn = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_0__.createButton)(\"X\", \"closeModal\");\r\n  const projectModalHeading = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_0__.createParagraph)(\"Add Project\", \"modalHeading\");\r\n  projectHeadingContainer.append(projectModalHeading, closeModalBtn);\r\n  const projectNameInput = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_0__.createInput)(\"projectName\", \"projectName\", \"text\");\r\n  const projectNameLabel = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_0__.createLabel)(\"Project Name\", \"ProjectName\");\r\n  //   const taskCreateDateInput = createInput(\r\n  //     \"taskCreateDate\",\r\n  //     \"taskCreateDate\",\r\n  //     \"date\"\r\n  //   );\r\n  //   const taskCreateDateLabel = createLabel(\"Create Date\", \"taskCreateDate\");\r\n  //   const taskDueDateInput = createInput(\"taskDueDate\", \"taskDueDate\", \"date\");\r\n  //   const taskDueDateLabel = createLabel(\"Due Date\", \"taskDueDate\");\r\n  // const submitBtn = createButton(\"Submit\", \"btnSubmitTask\");\r\n  const submitBtn = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_0__.createInput)(\"Submit\", \"btnSubmitProject\", \"submit\");\r\n  submitBtn.classList.add(\"btnSubmitProject\");\r\n  submitBtn.value = \"Submit\";\r\n  modalContainer.append(projectHeadingContainer, projectContainer);\r\n  projectNameInput.required = true;\r\n  //   taskCreateDateInput.required = true;\r\n  //   taskDueDateInput.required = true;\r\n  projectContainer.append(\r\n    projectNameLabel,\r\n    projectNameInput,\r\n    // taskCreateDateLabel,\r\n    // taskCreateDateInput,\r\n    // taskDueDateLabel,\r\n    // taskDueDateInput,\r\n    submitBtn\r\n  );\r\n  modal.append(modalContainer);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProjectModal);\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/domHandler/nav/addProjectModal.js?");

/***/ }),

/***/ "./src/modules/domHandler/nav/populateNav.js":
/*!***************************************************!*\
  !*** ./src/modules/domHandler/nav/populateNav.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fillNav: () => (/* binding */ fillNav),\n/* harmony export */   fillProjectsContainer: () => (/* binding */ fillProjectsContainer),\n/* harmony export */   insertProjectLinks: () => (/* binding */ insertProjectLinks)\n/* harmony export */ });\n/* harmony import */ var _helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helperFunctions/createHtmlEl */ \"./src/modules/helperFunctions/createHtmlEl.js\");\n\r\n\r\nconst insertProjectLinks = (projectsArr) => {\r\n  const projectContatiner = document.querySelector(\".projectsContainer\");\r\n  console.log(projectsArr);\r\n  if (!projectsArr) return;\r\n\r\n  projectsArr.forEach((item) => {\r\n    const projectLink = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_0__.createLink)(item._name, \"linkNav\");\r\n    projectLink.dataset.id = item._id;\r\n    projectContatiner.append(projectLink);\r\n  });\r\n};\r\n\r\nconst fillProjectsContainer = () => {\r\n  const navContainer = document.querySelector(\"nav\");\r\n  const projectNavContainer = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_0__.createDiv)(\"projectNavContainer\");\r\n  const headingContainer = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_0__.createDiv)(\"projectHeadingContainer\");\r\n  const projectsContainer = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_0__.createDiv)(\"projectsContainer\");\r\n  const addProjectBtn = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_0__.createButton)(\"Add Project\", \"addProjectBtn\");\r\n  const headingProject = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_0__.createHeading)(\"h3\", `Projects`, \"projectNavHeading\");\r\n\r\n  projectNavContainer.textContent = \"\";\r\n  navContainer.append(projectNavContainer);\r\n  projectNavContainer.append(headingContainer, projectsContainer);\r\n\r\n  headingContainer.append(headingProject, addProjectBtn);\r\n};\r\n\r\nconst fillNav = () => {\r\n  const navContainer = document.querySelector(\"nav\");\r\n  const navTaskContainer = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_0__.createDiv)(\"taskNavContainer\");\r\n  const linkAll = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_0__.createLink)(\"All\", \"linkNav\");\r\n  const linkToday = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_0__.createLink)(\"Today\", \"linkNav\");\r\n  const linkWeek = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_0__.createLink)(\"Week\", \"linkNav\");\r\n  const linkImportant = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_0__.createLink)(\"Important\", \"linkNav\");\r\n  const linkCompleted = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_0__.createLink)(\"Completed\", \"linkNav\");\r\n  navContainer.append(navTaskContainer);\r\n  navTaskContainer.append(\r\n    linkAll,\r\n    linkToday,\r\n    linkWeek,\r\n    linkImportant,\r\n    linkCompleted\r\n  );\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/domHandler/nav/populateNav.js?");

/***/ }),

/***/ "./src/modules/domHandler/nav/projectModalFunctions.js":
/*!*************************************************************!*\
  !*** ./src/modules/domHandler/nav/projectModalFunctions.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst projectModalFunctions = (() => {\r\n  const getAddProjectValues = () => {\r\n    const projectName = document.querySelector(\"#projectName\").value;\r\n    return { projectName };\r\n  };\r\n\r\n  const clearProjectModalValues = () => {\r\n    document.querySelector(\"#projectName\").value = \"\";\r\n  };\r\n\r\n  const hideModal = () => {\r\n    document.querySelector(\".modal\").classList.add(\"hidden\");\r\n  };\r\n  const showModal = () => {\r\n    document.querySelector(\".modal\").classList.remove(\"hidden\");\r\n  };\r\n  return { getAddProjectValues, clearProjectModalValues, hideModal, showModal };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectModalFunctions);\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/domHandler/nav/projectModalFunctions.js?");

/***/ }),

/***/ "./src/modules/eventListeners.js":
/*!***************************************!*\
  !*** ./src/modules/eventListeners.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectEventListeners: () => (/* binding */ projectEventListeners),\n/* harmony export */   taskEventsListener: () => (/* binding */ taskEventsListener)\n/* harmony export */ });\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ \"./src/modules/controller.js\");\n\r\n\r\nconst taskEventsListener = (() => {\r\n  const taskModalListeners = () => {\r\n    const submitTaskBtn = document.querySelector(\".btnSubmitTask\");\r\n    const closeTaskModalBtn = document.querySelector(\".closeModal\");\r\n    submitTaskBtn.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n      _controller__WEBPACK_IMPORTED_MODULE_0__.taskControllerFunctions.addTask();\r\n    });\r\n    closeTaskModalBtn.addEventListener(\r\n      \"click\",\r\n      _controller__WEBPACK_IMPORTED_MODULE_0__.taskControllerFunctions.closeTaskModal\r\n    );\r\n  };\r\n  const taskListeners = () => {\r\n    const addTaskBtn = document.querySelector(\".addTaskBtn\");\r\n    const deleteTasksBtn = document.querySelectorAll(\".taskDeleteBtn\");\r\n    addTaskBtn.addEventListener(\"click\", _controller__WEBPACK_IMPORTED_MODULE_0__.taskControllerFunctions.openTaskModal);\r\n\r\n    deleteTasksBtn.forEach((btn) => {\r\n      btn.addEventListener(\"click\", (e) => {\r\n        _controller__WEBPACK_IMPORTED_MODULE_0__.taskControllerFunctions.deleteTask(e);\r\n      });\r\n    });\r\n  };\r\n  const newTaskEventListener = (id) => {\r\n    const newTaskDiv = document.querySelector(`[data-id=${id}]`);\r\n    const imgDeleteBtn = newTaskDiv.querySelector(\".taskDeleteBtn\");\r\n    imgDeleteBtn.addEventListener(\"click\", (e) => {\r\n      _controller__WEBPACK_IMPORTED_MODULE_0__.taskControllerFunctions.deleteTask(e);\r\n    });\r\n  };\r\n  const deleteBtnListener = () => {\r\n    const deleteTasksBtn = document.querySelectorAll(\".taskDeleteBtn\");\r\n\r\n    deleteTasksBtn.forEach((btn) => {\r\n      btn.addEventListener(\"click\", (e) => {\r\n        _controller__WEBPACK_IMPORTED_MODULE_0__.taskControllerFunctions.deleteTask(e);\r\n      });\r\n    });\r\n  };\r\n  return {\r\n    taskListeners,\r\n    newTaskEventListener,\r\n    deleteBtnListener,\r\n    taskModalListeners,\r\n  };\r\n})();\r\n\r\nconst projectEventListeners = (() => {\r\n  const addProjectBtn = () => {\r\n    const btnAddProject = document.querySelector(\".addProjectBtn\");\r\n    btnAddProject.addEventListener(\r\n      \"click\",\r\n      _controller__WEBPACK_IMPORTED_MODULE_0__.projectControllerFunction.showProjectModal\r\n    );\r\n  };\r\n\r\n  const projectModalListeners = () => {\r\n    const submitProjectBtn = document.querySelector(\".btnSubmitProject\");\r\n    const closeProjectModalBtn = document.querySelector(\".closeModal\");\r\n    submitProjectBtn.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n      _controller__WEBPACK_IMPORTED_MODULE_0__.projectControllerFunction.addProject();\r\n    });\r\n    closeProjectModalBtn.addEventListener(\r\n      \"click\",\r\n      _controller__WEBPACK_IMPORTED_MODULE_0__.projectControllerFunction.closeProjectModal\r\n    );\r\n  };\r\n\r\n  const projectNavListeners = () => {\r\n    const navProjectLinks = document.querySelectorAll(\".linkNav\");\r\n    navProjectLinks.forEach((link) => {\r\n      link.addEventListener(\"click\", (e) => {\r\n        _controller__WEBPACK_IMPORTED_MODULE_0__.projectControllerFunction.showProjectTasks(e);\r\n      });\r\n    });\r\n  };\r\n\r\n  return { addProjectBtn, projectModalListeners, projectNavListeners };\r\n})();\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/eventListeners.js?");

/***/ }),

/***/ "./src/modules/helperFunctions/clearContainer.js":
/*!*******************************************************!*\
  !*** ./src/modules/helperFunctions/clearContainer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst clearContainer = (className) => {\r\n  const divContainer = document.querySelector(`.${className}`);\r\n  while (divContainer.hasChildNodes()) {\r\n    divContainer.removeChild(divContainer.lastChild);\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearContainer);\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/helperFunctions/clearContainer.js?");

/***/ }),

/***/ "./src/modules/helperFunctions/createHtmlEl.js":
/*!*****************************************************!*\
  !*** ./src/modules/helperFunctions/createHtmlEl.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createButton: () => (/* binding */ createButton),\n/* harmony export */   createDiv: () => (/* binding */ createDiv),\n/* harmony export */   createForm: () => (/* binding */ createForm),\n/* harmony export */   createHeading: () => (/* binding */ createHeading),\n/* harmony export */   createImage: () => (/* binding */ createImage),\n/* harmony export */   createInput: () => (/* binding */ createInput),\n/* harmony export */   createLabel: () => (/* binding */ createLabel),\n/* harmony export */   createLink: () => (/* binding */ createLink),\n/* harmony export */   createParagraph: () => (/* binding */ createParagraph),\n/* harmony export */   createSelectUsingArray: () => (/* binding */ createSelectUsingArray),\n/* harmony export */   insertIntoContainer: () => (/* binding */ insertIntoContainer)\n/* harmony export */ });\nconst createDiv = (divClass) => {\r\n  const createdDiv = document.createElement(\"div\");\r\n  createdDiv.classList.add(divClass);\r\n  return createdDiv;\r\n};\r\n\r\nconst insertIntoContainer = (container, child) => {\r\n  console.log(child);\r\n  container.appendChild(child);\r\n};\r\n\r\nconst createHeading = (size, text, headingClass) => {\r\n  const createdEl = document.createElement(size);\r\n  createdEl.textContent = text;\r\n  createdEl.classList.add(headingClass);\r\n  return createdEl;\r\n};\r\nconst createImage = (src, imgClass) => {\r\n  const createdEl = document.createElement(\"img\");\r\n  createdEl.setAttribute(\"src\", src);\r\n  createdEl.classList.add(imgClass);\r\n  return createdEl;\r\n};\r\nconst createParagraph = (txt, paraClass) => {\r\n  const createdEl = document.createElement(\"p\");\r\n  createdEl.textContent = txt;\r\n  paraClass ? createdEl.classList.add(paraClass) : \"\";\r\n  //   createdEl.classList.add(imgClass);\r\n  return createdEl;\r\n};\r\nconst createLink = (txt, linkClass) => {\r\n  const createdEl = document.createElement(\"a\");\r\n  createdEl.textContent = txt;\r\n  createdEl.setAttribute(\"href\", \"#\");\r\n  linkClass ? createdEl.classList.add(linkClass) : \"\";\r\n  //   createdEl.classList.add(imgClass);\r\n  return createdEl;\r\n};\r\n\r\nconst createButton = (txt, btnClass) => {\r\n  const createdEl = document.createElement(\"button\");\r\n  createdEl.textContent = txt;\r\n  // createdEl.setAttribute(\"href\", \"#\");\r\n  btnClass ? createdEl.classList.add(btnClass) : \"\";\r\n  //   createdEl.classList.add(imgClass);\r\n  return createdEl;\r\n};\r\n\r\nconst createInput = (inputId, nameAttr, type) => {\r\n  const createdEl = document.createElement(\"input\");\r\n  // createdEl.textContent = txt;\r\n  createdEl.setAttribute(\"type\", type);\r\n  createdEl.setAttribute(\"name\", nameAttr);\r\n  createdEl.id = inputId;\r\n  // inputId ? createdEl.classList.add(inputId) : \"\";\r\n  //   createdEl.classList.add(imgClass);\r\n  return createdEl;\r\n};\r\n\r\nconst createLabel = (txt, forAttr) => {\r\n  const createdEl = document.createElement(\"label\");\r\n  createdEl.textContent = txt;\r\n  createdEl.setAttribute(\"for\", forAttr);\r\n  return createdEl;\r\n};\r\n\r\nconst createForm = (formClassName) => {\r\n  const createdEl = document.createElement(\"form\");\r\n  createdEl.setAttribute(\"action\", \"#\");\r\n  createdEl.classList.add(formClassName);\r\n  return createdEl;\r\n};\r\n\r\nconst createSelectUsingArray = (name, id, arr = []) => {\r\n  // const selectLabel = createLabel(\"Project\", \"projectList\");\r\n  const selectEL = document.createElement(\"select\");\r\n  selectEL.name = name;\r\n  selectEL.id = id;\r\n  arr.forEach((item) => {\r\n    const optionEl = document.createElement(\"option\");\r\n    optionEl.value = item._id;\r\n    optionEl.textContent = item._name;\r\n    selectEL.append(optionEl);\r\n  });\r\n  return selectEL;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/helperFunctions/createHtmlEl.js?");

/***/ }),

/***/ "./src/modules/helperFunctions/localStorage.js":
/*!*****************************************************!*\
  !*** ./src/modules/helperFunctions/localStorage.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst localStorageFunctions = (() => {\r\n  const getItemUsingId = () => {};\r\n\r\n  const getAllItems = (itemName = \"taskArr\") => {\r\n    const taskArrLocalStorage = localStorage.getItem(itemName);\r\n    return JSON.parse(taskArrLocalStorage);\r\n  };\r\n\r\n  const setLocalStorage = (itemName, obj) => {\r\n    let currentItem = getAllItems(itemName);\r\n    if (!currentItem) {\r\n      currentItem = [];\r\n    }\r\n    currentItem.push(obj);\r\n\r\n    localStorage.setItem(itemName, JSON.stringify(currentItem));\r\n  };\r\n\r\n  const deleteItemUsingId = (itemName, id) => {\r\n    const currentItem = getAllItems(itemName);\r\n    const updatedArr = currentItem.filter((item) => {\r\n      if (item._id !== id) return item;\r\n    });\r\n    localStorage.removeItem(\"taskArr\");\r\n    localStorage.setItem(\"taskArr\", JSON.stringify(updatedArr));\r\n  };\r\n  const clearLocalStorage = () => {};\r\n\r\n  return {\r\n    setLocalStorage,\r\n    clearLocalStorage,\r\n    getAllItems,\r\n    getItemUsingId,\r\n    deleteItemUsingId,\r\n  };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localStorageFunctions);\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/helperFunctions/localStorage.js?");

/***/ }),

/***/ "./src/modules/initial-load.js":
/*!*************************************!*\
  !*** ./src/modules/initial-load.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createModal: () => (/* binding */ createModal),\n/* harmony export */   initalHtmlLoad: () => (/* binding */ initalHtmlLoad)\n/* harmony export */ });\n/* harmony import */ var _helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions/createHtmlEl */ \"./src/modules/helperFunctions/createHtmlEl.js\");\n\r\n\r\nconst contentContainer = document.querySelector(\"#content\");\r\n\r\nconst initalHtmlLoad = function () {\r\n  const header = document.createElement(\"header\");\r\n  const nav = document.createElement(\"nav\");\r\n  const main = document.createElement(\"main\");\r\n  // const footer = document.createElement(\"footer\");\r\n\r\n  contentContainer.append(header, nav, main);\r\n};\r\n\r\nconst createModal = function () {\r\n  const modal = (0,_helperFunctions_createHtmlEl__WEBPACK_IMPORTED_MODULE_0__.createDiv)(\"modal\");\r\n  const mainContainer = document.querySelector(\"main\");\r\n  modal.classList.add(\"hidden\");\r\n  mainContainer.append(modal);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/initial-load.js?");

/***/ }),

/***/ "./src/modules/model/project.js":
/*!**************************************!*\
  !*** ./src/modules/model/project.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _getID() {\r\n  return `_${Math.random().toString(36).substring(2, 9)}`;\r\n}\r\n\r\nclass Project {\r\n  constructor(name) {\r\n    this._id = _getID();\r\n    this._name = name;\r\n    this._projectTasks = [];\r\n  }\r\n\r\n  get id() {\r\n    return this._id;\r\n  }\r\n\r\n  set id(value) {\r\n    if (value) {\r\n      this._id = value;\r\n    }\r\n  }\r\n\r\n  get name() {\r\n    return this._name;\r\n  }\r\n\r\n  set name(value) {\r\n    if (value) {\r\n      this._name = value;\r\n    }\r\n  }\r\n\r\n  get projectTasks() {\r\n    return this._projectTasks;\r\n  }\r\n\r\n  set projectTasks(value) {\r\n    if (value) {\r\n      this._projectTasks.push(value);\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/model/project.js?");

/***/ }),

/***/ "./src/modules/model/task.js":
/*!***********************************!*\
  !*** ./src/modules/model/task.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _getID() {\r\n  return `_${Math.random().toString(36).substr(2, 9)}`;\r\n}\r\n\r\nclass Task {\r\n  constructor(title, dueDate, createDate, priority, completed, projectId) {\r\n    this._id = _getID();\r\n    this._title = title;\r\n    this._dueDate = dueDate;\r\n    this._createDate = createDate;\r\n    this._priority = priority;\r\n    this._completed = completed;\r\n    this._projectId = projectId;\r\n  }\r\n\r\n  get id() {\r\n    return this._id;\r\n  }\r\n\r\n  get title() {\r\n    return this._title;\r\n  }\r\n\r\n  set title(value) {\r\n    if (value) {\r\n      this._title = value;\r\n    }\r\n  }\r\n\r\n  get description() {\r\n    return this._description;\r\n  }\r\n\r\n  set description(value) {\r\n    if (value) {\r\n      this._description = value;\r\n    }\r\n  }\r\n\r\n  get createDate() {\r\n    return this._createDate;\r\n  }\r\n\r\n  set createDate(value) {\r\n    if (value) {\r\n      this._createDate = value;\r\n    }\r\n  }\r\n\r\n  get dueDate() {\r\n    return this._dueDate;\r\n  }\r\n\r\n  set dueDate(value) {\r\n    if (value) {\r\n      this._dueDate = value;\r\n    }\r\n  }\r\n\r\n  get priority() {\r\n    return this._priority;\r\n  }\r\n\r\n  set priority(value) {\r\n    if (value) {\r\n      this._priority = value;\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/model/task.js?");

/***/ }),

/***/ "./src/assets/delete.svg":
/*!*******************************!*\
  !*** ./src/assets/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4cde6cf6920bc0095507.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/assets/delete.svg?");

/***/ }),

/***/ "./src/assets/edit.svg":
/*!*****************************!*\
  !*** ./src/assets/edit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eecf65e02cd3cefefc50.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/assets/edit.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;