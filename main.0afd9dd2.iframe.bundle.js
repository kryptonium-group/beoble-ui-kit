(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./packages sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$"),__webpack_require__("./packages sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./packages sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./react/components/Avatar/Avatar.stories.tsx":"./packages/react/components/Avatar/Avatar.stories.tsx","./react/components/Button/Button.stories.tsx":"./packages/react/components/Button/Button.stories.tsx","./react/components/Card/Card.stories.tsx":"./packages/react/components/Card/Card.stories.tsx","./react/kits/Chat/Chat.stories.tsx":"./packages/react/kits/Chat/Chat.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./packages sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./packages sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./packages sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$"},"./packages/react/components/Avatar/Avatar.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Square",(function(){return Avatar_stories_Square})),__webpack_require__.d(__webpack_exports__,"Circle",(function(){return Avatar_stories_Circle}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js");var _templateObject,_templateObject2,_templateObject3,styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var AvatarContainer=styled_components_browser_esm.b.div(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n  background-color: #333;\n  ","\n  ","\n  overflow: hidden;\n\n  ","\n"])),index_esm.b,index_esm.a,(function(_ref){return"circle"===_ref.shape&&Object(styled_components_browser_esm.a)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n      border-radius: 50%;\n    "])))})),AvatarImage=styled_components_browser_esm.b.img(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n  max-width: 100%;\n  max-height: 100%;\n"]))),Avatar_Avatar=function Avatar(_ref2){var children=_ref2.children,size=_ref2.size,_ref2$shape=_ref2.shape,shape=void 0===_ref2$shape?"square":_ref2$shape,src=_ref2.src,alt=_ref2.alt;return Object(jsx_runtime.jsx)(AvatarContainer,{width:size,height:size,shape:shape,children:Object(jsx_runtime.jsx)(AvatarImage,{src:src,alt:alt,children:children})})};Avatar_Avatar.displayName="Avatar";var components_Avatar=Avatar_Avatar;try{Avatar_Avatar.displayName="Avatar",Avatar_Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"string | number"}},shape:{defaultValue:{value:"square"},description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"square"'},{value:'"circle"'}]}},src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/components/Avatar/index.tsx#Avatar"]={docgenInfo:Avatar_Avatar.__docgenInfo,name:"Avatar",path:"packages/react/components/Avatar/index.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Avatar",component:components_Avatar};var Avatar_stories_Square=function Square(){return Object(jsx_runtime.jsx)(components_Avatar,{size:100,src:"https://media-exp1.licdn.com/dms/image/C5603AQGQJWAskNWE6A/profile-displayphoto-shrink_800_800/0/1647142782272?e=1653523200&v=beta&t=CdKb2PWVXS3vqJ1mnOR6Wj8Wlg4mAi3ps7xKloU9yV8"})};Avatar_stories_Square.displayName="Square";var Avatar_stories_Circle=function Circle(){return Object(jsx_runtime.jsx)(components_Avatar,{size:24,shape:"circle",src:"https://media-exp1.licdn.com/dms/image/C5603AQGQJWAskNWE6A/profile-displayphoto-shrink_800_800/0/1647142782272?e=1653523200&v=beta&t=CdKb2PWVXS3vqJ1mnOR6Wj8Wlg4mAi3ps7xKloU9yV8"})};Avatar_stories_Circle.displayName="Circle",Avatar_stories_Square.parameters=Object.assign({storySource:{source:'() => {\r\n  return (\r\n    <Avatar\r\n      size={100}\r\n      src="https://media-exp1.licdn.com/dms/image/C5603AQGQJWAskNWE6A/profile-displayphoto-shrink_800_800/0/1647142782272?e=1653523200&v=beta&t=CdKb2PWVXS3vqJ1mnOR6Wj8Wlg4mAi3ps7xKloU9yV8"\r\n    />\r\n  );\r\n}'}},Avatar_stories_Square.parameters),Avatar_stories_Circle.parameters=Object.assign({storySource:{source:'() => {\r\n  return (\r\n    <Avatar\r\n      size={24}\r\n      shape="circle"\r\n      src="https://media-exp1.licdn.com/dms/image/C5603AQGQJWAskNWE6A/profile-displayphoto-shrink_800_800/0/1647142782272?e=1653523200&v=beta&t=CdKb2PWVXS3vqJ1mnOR6Wj8Wlg4mAi3ps7xKloU9yV8"\r\n    />\r\n  );\r\n}'}},Avatar_stories_Circle.parameters)},"./packages/react/components/Button/Button.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/react/components/Button/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Button",component:___WEBPACK_IMPORTED_MODULE_2__.a};var Default=function Default(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.a,{})};Default.displayName="Default",Default.parameters=Object.assign({storySource:{source:"() => {\r\n  return <Button />;\r\n}"}},Default.parameters)},"./packages/react/components/Button/index.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/react/index.js");var _templateObject,styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");var ButtonContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.b.button(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  border: none;\n  cursor: pointer;\n"]))),Button=function Button(_ref){var children=_ref.children,style=_ref.style,className=_ref.className,onClick=_ref.onClick;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ButtonContainer,{style:style,className:className,onClick:onClick,children:children})};Button.displayName="Button",__webpack_exports__.a=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/components/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"packages/react/components/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./packages/react/components/Card/Card.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Card_stories_Default}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js");var _templateObject,styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var CardContainer=styled_components_browser_esm.b.div(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  ","\n"])),index_esm.b),Card_Card=function Card(_ref){var children=_ref.children;return Object(jsx_runtime.jsx)(CardContainer,{children:children})};Card_Card.displayName="Card";var components_Card=Card_Card;try{Card_Card.displayName="Card",Card_Card.__docgenInfo={description:"",displayName:"Card",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/components/Card/index.tsx#Card"]={docgenInfo:Card_Card.__docgenInfo,name:"Card",path:"packages/react/components/Card/index.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Card",component:components_Card};var Card_stories_Default=function Default(){return Object(jsx_runtime.jsx)(components_Card,{})};Card_stories_Default.displayName="Default",Card_stories_Default.parameters=Object.assign({storySource:{source:"() => {\r\n  return <Card />;\r\n}"}},Card_stories_Default.parameters)},"./packages/react/kits/Chat/Chat.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Chat_stories_Default}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),index_esm=__webpack_require__("./node_modules/react-icons/ri/index.esm.js"),Button=__webpack_require__("./packages/react/components/Button/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var ChatContainer=styled_components_browser_esm.b.div(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n  position: fixed;\n  bottom: calc(30px + env(safe-area-inset-bottom)) !important;\n  right: 30px;\n  z-index: 1000 !important;\n"]))),ChatButtonBounceIn=Object(styled_components_browser_esm.c)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n  0% { transform: scale(1); opacity: 1 }\n  70% { transform: scale(1.1); opacity: 0.7 }\n  80% { transform: scale(1.1); opacity: 0.9 }\n  100% { transform: scale(0); opacity: 1}\n"]))),ChatButtonBounceOut=Object(styled_components_browser_esm.c)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n  0% { transform: scale(1); opacity: 1 }\n  50% { transform: scale(1.1); opacity: .7; }\n  60% { transform: scale(0.6); opacity: 1 }\n  80% { transform: scale(0.85) }\n  100% { transform: scale(1) }\n"]))),ChatBoxBonceEnter=Object(styled_components_browser_esm.c)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n  0% { transform: scale(0); opacity: 1 }\n  50% { transform: scale(1.1); opacity: .7; }\n  60% { transform: scale(0.6); opacity: 1 }\n  80% { transform: scale(0.85) }\n  100% { transform: scale(1) }\n"]))),ChatBoxBonceExit=Object(styled_components_browser_esm.c)(_templateObject5||(_templateObject5=_taggedTemplateLiteralLoose([""]))),ChatButton=Object(styled_components_browser_esm.b)(Button.a)(_templateObject6||(_templateObject6=_taggedTemplateLiteralLoose(["\n  width: 60px;\n  height: 60px;\n  background-color: ",";\n  border-radius: 26px !important;\n  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px, rgb(0 0 0 / 15%) 0px 8px 30px,\n    rgb(255 255 255 / 20%) 0px 0px 0px 1px inset !important;\n\n  ","\n"])),(function(_ref){var backgroundColor=_ref.backgroundColor;return null!=backgroundColor?backgroundColor:"#ffffff"}),(function(_ref2){return _ref2.enter?Object(styled_components_browser_esm.a)(_templateObject7||(_templateObject7=_taggedTemplateLiteralLoose(["\n          animation: "," 1s;\n          transform: scale(0);\n          transition: transform 0 1s;\n        "])),ChatButtonBounceIn):Object(styled_components_browser_esm.a)(_templateObject8||(_templateObject8=_taggedTemplateLiteralLoose(["\n          animation: "," 1s;\n          transform: scale(1);\n        "])),ChatButtonBounceOut)})),ChatBox=styled_components_browser_esm.b.div(_templateObject9||(_templateObject9=_taggedTemplateLiteralLoose(["\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  width: 370px;\n  height: 500px;\n  border-radius: 24px;\n  background-color: #ffffff;\n  box-shadow: rgb(0 0 0 / 30%) 0px 12px 60px 5px !important;\n\n  ","\n"])),(function(_ref3){return _ref3.enter?Object(styled_components_browser_esm.a)(_templateObject10||(_templateObject10=_taggedTemplateLiteralLoose(["\n          animation: "," 1s 1s;\n          transform: scale(0);\n          transition: transform 0 1s;\n        "])),ChatBoxBonceEnter):Object(styled_components_browser_esm.a)(_templateObject11||(_templateObject11=_taggedTemplateLiteralLoose(["\n          animation: "," 1s;\n          transform: scale(0);\n        "])),ChatBoxBonceExit)})),Chat_Chat=function Chat(_ref4){var children=_ref4.children,color=_ref4.color,backgroundColor=_ref4.backgroundColor,_useState2=_slicedToArray(Object(react.useState)(!1),2),isEntered=_useState2[0],setIsEntered=_useState2[1];return Object(jsx_runtime.jsxs)(ChatContainer,{children:[Object(jsx_runtime.jsx)(ChatButton,{enter:isEntered,onClick:function onClick(){setIsEntered(!isEntered)},backgroundColor:backgroundColor,children:null!=children?children:Object(jsx_runtime.jsx)(index_esm.a,{fontSize:32,color:null!=color?color:"#5a9ded"})}),isEntered&&Object(jsx_runtime.jsx)(ChatBox,{enter:isEntered})]})};Chat_Chat.displayName="Chat";var kits_Chat=Chat_Chat;try{Chat_Chat.displayName="Chat",Chat_Chat.__docgenInfo={description:"",displayName:"Chat",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string | number"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/react/kits/Chat/index.tsx#Chat"]={docgenInfo:Chat_Chat.__docgenInfo,name:"Chat",path:"packages/react/kits/Chat/index.tsx#Chat"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Chat",component:kits_Chat};var Chat_stories_Default=function Default(){return Object(jsx_runtime.jsx)(kits_Chat,{})};Chat_stories_Default.displayName="Default",Chat_stories_Default.parameters=Object.assign({storySource:{source:"() => {\r\n  return <Chat />;\r\n}"}},Chat_stories_Default.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/esm/preset/argsEnhancers.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);