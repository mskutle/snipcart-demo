module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Product.tsx":
/*!********************************!*\
  !*** ./components/Product.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Product; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"@sanity/block-content-to-react\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ \"./helpers.ts\");\n/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product-service */ \"./product-service.ts\");\n\nvar _jsxFileName = \"/Users/mskutle/Development/miles/snipcart-demo/components/Product.tsx\";\n\n\n\n\nconst builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default()(_product_service__WEBPACK_IMPORTED_MODULE_4__[\"client\"]);\n\nfunction urlFor(source) {\n  return builder.image(source);\n}\n\nfunction Product(props) {\n  const {\n    product\n  } = props;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: {\n      display: \"flex\",\n      alignItems: \"center\"\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      blocks: product.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: \"snipcart-add-item\",\n      style: {\n        height: \"fit-content\",\n        marginLeft: \"10px\"\n      },\n      \"data-item-id\": product._id,\n      \"data-item-price\": \"99.99\",\n      \"data-item-url\": \"/\",\n      \"data-item-image\": urlFor(product.illustration.image).url(),\n      \"data-item-name\": Object(_helpers__WEBPACK_IMPORTED_MODULE_3__[\"toPlainText\"])(product.title),\n      children: \"Add to cart\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2R1Y3QudHN4P2FkNTUiXSwibmFtZXMiOlsiYnVpbGRlciIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsInVybEZvciIsInNvdXJjZSIsImltYWdlIiwiUHJvZHVjdCIsInByb3BzIiwicHJvZHVjdCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwidGl0bGUiLCJoZWlnaHQiLCJtYXJnaW5MZWZ0IiwiX2lkIiwiaWxsdXN0cmF0aW9uIiwidXJsIiwidG9QbGFpblRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsT0FBTyxHQUFHQyx3REFBZSxDQUFDQyx1REFBRCxDQUEvQjs7QUFFQSxTQUFTQyxNQUFULENBQWdCQyxNQUFoQixFQUF3QjtBQUN0QixTQUFPSixPQUFPLENBQUNLLEtBQVIsQ0FBY0QsTUFBZCxDQUFQO0FBQ0Q7O0FBYWMsU0FBU0UsT0FBVCxDQUFpQkMsS0FBakIsRUFBK0I7QUFDNUMsUUFBTTtBQUFFQztBQUFGLE1BQWNELEtBQXBCO0FBQ0Esc0JBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRUUsYUFBTyxFQUFFLE1BQVg7QUFBbUJDLGdCQUFVLEVBQUU7QUFBL0IsS0FBWjtBQUFBLDRCQUNFLHFFQUFDLHFFQUFEO0FBQWMsWUFBTSxFQUFFRixPQUFPLENBQUNHO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQ0UsZUFBUyxFQUFDLG1CQURaO0FBRUUsV0FBSyxFQUFFO0FBQUVDLGNBQU0sRUFBRSxhQUFWO0FBQXlCQyxrQkFBVSxFQUFFO0FBQXJDLE9BRlQ7QUFHRSxzQkFBY0wsT0FBTyxDQUFDTSxHQUh4QjtBQUlFLHlCQUFnQixPQUpsQjtBQUtFLHVCQUFjLEdBTGhCO0FBTUUseUJBQWlCWCxNQUFNLENBQUNLLE9BQU8sQ0FBQ08sWUFBUixDQUFxQlYsS0FBdEIsQ0FBTixDQUFtQ1csR0FBbkMsRUFObkI7QUFPRSx3QkFBZ0JDLDREQUFXLENBQUNULE9BQU8sQ0FBQ0csS0FBVCxDQVA3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0JEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9kdWN0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSBcIkBzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdFwiO1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tIFwiQHNhbml0eS9pbWFnZS11cmxcIjtcbmltcG9ydCB7IHRvUGxhaW5UZXh0IH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcbmltcG9ydCB7IGNsaWVudCB9IGZyb20gXCIuLi9wcm9kdWN0LXNlcnZpY2VcIjtcblxuY29uc3QgYnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcihjbGllbnQpO1xuXG5mdW5jdGlvbiB1cmxGb3Ioc291cmNlKSB7XG4gIHJldHVybiBidWlsZGVyLmltYWdlKHNvdXJjZSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb2R1Y3Qge1xuICBfaWQ6IHN0cmluZztcbiAgX3R5cGU6IHN0cmluZztcbiAgdGl0bGU6IGFueVtdO1xuICBpbGx1c3RyYXRpb246IFJlY29yZDxzdHJpbmcsIGFueT47XG59XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHByb2R1Y3Q6IElQcm9kdWN0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdChwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgeyBwcm9kdWN0IH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiIH19PlxuICAgICAgPEJsb2NrQ29udGVudCBibG9ja3M9e3Byb2R1Y3QudGl0bGV9IC8+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cInNuaXBjYXJ0LWFkZC1pdGVtXCJcbiAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcImZpdC1jb250ZW50XCIsIG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19XG4gICAgICAgIGRhdGEtaXRlbS1pZD17cHJvZHVjdC5faWR9XG4gICAgICAgIGRhdGEtaXRlbS1wcmljZT1cIjk5Ljk5XCJcbiAgICAgICAgZGF0YS1pdGVtLXVybD1cIi9cIlxuICAgICAgICBkYXRhLWl0ZW0taW1hZ2U9e3VybEZvcihwcm9kdWN0LmlsbHVzdHJhdGlvbi5pbWFnZSkudXJsKCl9XG4gICAgICAgIGRhdGEtaXRlbS1uYW1lPXt0b1BsYWluVGV4dChwcm9kdWN0LnRpdGxlKX1cbiAgICAgID5cbiAgICAgICAgQWRkIHRvIGNhcnRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Product.tsx\n");

/***/ }),

/***/ "./helpers.ts":
/*!********************!*\
  !*** ./helpers.ts ***!
  \********************/
/*! exports provided: toPlainText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toPlainText\", function() { return toPlainText; });\nfunction toPlainText(blocks = []) {\n  return blocks // loop through each block\n  .map(block => {\n    // if it's not a text block with children,\n    // return nothing\n    if (block._type !== \"block\" || !block.children) {\n      return \"\";\n    } // loop through the children spans, and join the\n    // text strings\n\n\n    return block.children.map(child => child.text).join(\"\");\n  }) // join the paragraphs leaving split by two linebreaks\n  .join(\"\\n\\n\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9oZWxwZXJzLnRzP2Q2ODUiXSwibmFtZXMiOlsidG9QbGFpblRleHQiLCJibG9ja3MiLCJtYXAiLCJibG9jayIsIl90eXBlIiwiY2hpbGRyZW4iLCJjaGlsZCIsInRleHQiLCJqb2luIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQU8sU0FBU0EsV0FBVCxDQUFxQkMsTUFBTSxHQUFHLEVBQTlCLEVBQWtDO0FBQ3ZDLFNBQ0VBLE1BQU0sQ0FDSjtBQURJLEdBRUhDLEdBRkgsQ0FFUUMsS0FBRCxJQUFXO0FBQ2Q7QUFDQTtBQUNBLFFBQUlBLEtBQUssQ0FBQ0MsS0FBTixLQUFnQixPQUFoQixJQUEyQixDQUFDRCxLQUFLLENBQUNFLFFBQXRDLEVBQWdEO0FBQzlDLGFBQU8sRUFBUDtBQUNELEtBTGEsQ0FNZDtBQUNBOzs7QUFDQSxXQUFPRixLQUFLLENBQUNFLFFBQU4sQ0FBZUgsR0FBZixDQUFvQkksS0FBRCxJQUFXQSxLQUFLLENBQUNDLElBQXBDLEVBQTBDQyxJQUExQyxDQUErQyxFQUEvQyxDQUFQO0FBQ0QsR0FYSCxFQVlFO0FBWkYsR0FhR0EsSUFiSCxDQWFRLE1BYlIsQ0FERjtBQWdCRCIsImZpbGUiOiIuL2hlbHBlcnMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gdG9QbGFpblRleHQoYmxvY2tzID0gW10pIHtcbiAgcmV0dXJuIChcbiAgICBibG9ja3NcbiAgICAgIC8vIGxvb3AgdGhyb3VnaCBlYWNoIGJsb2NrXG4gICAgICAubWFwKChibG9jaykgPT4ge1xuICAgICAgICAvLyBpZiBpdCdzIG5vdCBhIHRleHQgYmxvY2sgd2l0aCBjaGlsZHJlbixcbiAgICAgICAgLy8gcmV0dXJuIG5vdGhpbmdcbiAgICAgICAgaWYgKGJsb2NrLl90eXBlICE9PSBcImJsb2NrXCIgfHwgIWJsb2NrLmNoaWxkcmVuKSB7XG4gICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbG9vcCB0aHJvdWdoIHRoZSBjaGlsZHJlbiBzcGFucywgYW5kIGpvaW4gdGhlXG4gICAgICAgIC8vIHRleHQgc3RyaW5nc1xuICAgICAgICByZXR1cm4gYmxvY2suY2hpbGRyZW4ubWFwKChjaGlsZCkgPT4gY2hpbGQudGV4dCkuam9pbihcIlwiKTtcbiAgICAgIH0pXG4gICAgICAvLyBqb2luIHRoZSBwYXJhZ3JhcGhzIGxlYXZpbmcgc3BsaXQgYnkgdHdvIGxpbmVicmVha3NcbiAgICAgIC5qb2luKFwiXFxuXFxuXCIpXG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./helpers.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product-service */ \"./product-service.ts\");\n/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Product */ \"./components/Product.tsx\");\n\nvar _jsxFileName = \"/Users/mskutle/Development/miles/snipcart-demo/pages/index.tsx\";\n\n\nfunction Index(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Products\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: props.products.map((p, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Product__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        product: p\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 11\n      }, this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, this);\n}\nasync function getServerSideProps() {\n  const products = await _product_service__WEBPACK_IMPORTED_MODULE_1__[\"productService\"].getProducts();\n  return {\n    props: {\n      products\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwicHJvZHVjdHMiLCJtYXAiLCJwIiwiaW5kZXgiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJwcm9kdWN0U2VydmljZSIsImdldFByb2R1Y3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBTWUsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQTZCO0FBQzFDLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUEsZ0JBQ0dBLEtBQUssQ0FBQ0MsUUFBTixDQUFlQyxHQUFmLENBQW1CLENBQUNDLENBQUQsRUFBSUMsS0FBSixrQkFDbEIscUVBQUMsMkRBQUQ7QUFBUyxlQUFPLEVBQUVEO0FBQWxCLFNBQTBCQyxLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFVRDtBQUVNLGVBQWVDLGtCQUFmLEdBQW9DO0FBQ3pDLFFBQU1KLFFBQVEsR0FBRyxNQUFNSywrREFBYyxDQUFDQyxXQUFmLEVBQXZCO0FBQ0EsU0FBTztBQUNMUCxTQUFLLEVBQUU7QUFDTEM7QUFESztBQURGLEdBQVA7QUFLRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByb2R1Y3RTZXJ2aWNlIH0gZnJvbSBcIi4uL3Byb2R1Y3Qtc2VydmljZVwiO1xuaW1wb3J0IFByb2R1Y3QsIHsgSVByb2R1Y3QgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9kdWN0XCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHByb2R1Y3RzOiBJUHJvZHVjdFtdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgocHJvcHM6IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5Qcm9kdWN0czwvaDE+XG4gICAgICA8dWw+XG4gICAgICAgIHtwcm9wcy5wcm9kdWN0cy5tYXAoKHAsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPFByb2R1Y3QgcHJvZHVjdD17cH0ga2V5PXtpbmRleH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IHByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RzKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb2R1Y3RzLFxuICAgIH0sXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./product-service.ts":
/*!****************************!*\
  !*** ./product-service.ts ***!
  \****************************/
/*! exports provided: client, productService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"client\", function() { return client; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"productService\", function() { return productService; });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n  dataset: \"production\",\n  projectId: \"ohnqwdve\",\n  useCdn: true\n});\nconst productService = {\n  getProducts: () => {\n    const query =\n    /* groq */\n    `\n      *[_type == 'chair']\n    `;\n    return client.fetch(query);\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcm9kdWN0LXNlcnZpY2UudHM/NjQ3NiJdLCJuYW1lcyI6WyJjbGllbnQiLCJzYW5pdHlDbGllbnQiLCJkYXRhc2V0IiwicHJvamVjdElkIiwidXNlQ2RuIiwicHJvZHVjdFNlcnZpY2UiLCJnZXRQcm9kdWN0cyIsInF1ZXJ5IiwiZmV0Y2giXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLE1BQU0sR0FBR0MscURBQVksQ0FBQztBQUNqQ0MsU0FBTyxFQUFFLFlBRHdCO0FBRWpDQyxXQUFTLEVBQUUsVUFGc0I7QUFHakNDLFFBQU0sRUFBRTtBQUh5QixDQUFELENBQTNCO0FBTUEsTUFBTUMsY0FBYyxHQUFHO0FBQzVCQyxhQUFXLEVBQUUsTUFBTTtBQUNqQixVQUFNQyxLQUFLO0FBQUc7QUFBWTtBQUM5QjtBQUNBLEtBRkk7QUFHQSxXQUFPUCxNQUFNLENBQUNRLEtBQVAsQ0FBYUQsS0FBYixDQUFQO0FBQ0Q7QUFOMkIsQ0FBdkIiLCJmaWxlIjoiLi9wcm9kdWN0LXNlcnZpY2UudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gXCJAc2FuaXR5L2NsaWVudFwiO1xuXG5leHBvcnQgY29uc3QgY2xpZW50ID0gc2FuaXR5Q2xpZW50KHtcbiAgZGF0YXNldDogXCJwcm9kdWN0aW9uXCIsXG4gIHByb2plY3RJZDogXCJvaG5xd2R2ZVwiLFxuICB1c2VDZG46IHRydWUsXG59KTtcblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RTZXJ2aWNlID0ge1xuICBnZXRQcm9kdWN0czogKCkgPT4ge1xuICAgIGNvbnN0IHF1ZXJ5ID0gLyogZ3JvcSAqLyBgXG4gICAgICAqW190eXBlID09ICdjaGFpciddXG4gICAgYDtcbiAgICByZXR1cm4gY2xpZW50LmZldGNoKHF1ZXJ5KTtcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./product-service.ts\n");

/***/ }),

/***/ "@sanity/block-content-to-react":
/*!*************************************************!*\
  !*** external "@sanity/block-content-to-react" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@sanity/block-content-to-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3RcIj9mYWQ1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@sanity/block-content-to-react\n");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@sanity/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FuaXR5L2NsaWVudFwiPzNmYTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHNhbml0eS9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2FuaXR5L2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@sanity/client\n");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@sanity/image-url\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FuaXR5L2ltYWdlLXVybFwiPzhlZmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHNhbml0eS9pbWFnZS11cmwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2FuaXR5L2ltYWdlLXVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@sanity/image-url\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });