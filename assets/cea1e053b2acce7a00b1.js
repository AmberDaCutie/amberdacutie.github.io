(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{1709:function(e,t,o){"use strict";t.__esModule=!0,t.getApplicationIcon=function(e,t){if(null!=t){if(window.GLOBAL_ENV.CDN_HOST)return location.protocol+"//"+window.GLOBAL_ENV.CDN_HOST+"/app-icons/"+e+"/"+t+".png";var o=""+location.protocol+window.GLOBAL_ENV.API_ENDPOINT;return o+"/oauth2/applications/"+e+"/app-icons/"+t+".png"}return null},t.getAssetImage=function(e,t){if(null!=t){if(window.GLOBAL_ENV.CDN_HOST)return location.protocol+"//"+window.GLOBAL_ENV.CDN_HOST+"/app-assets/"+e+"/"+t+".png";var o=""+location.protocol+window.GLOBAL_ENV.API_ENDPOINT;return o+"/oauth2/applications/"+e+"/app-assets/"+t+".png"}return null}},2159:function(e,t,o){"use strict";t.__esModule=!0;var n,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,o,a){var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var s in r)void 0===t[s]&&(t[s]=r[s]);else t||(t=r||{});if(1===i)t.children=a;else if(i>1){for(var p=Array(i),l=0;l<i;l++)p[l]=arguments[l+3];t.children=p}return{$$typeof:n,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}),i=P(o(333)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}(o(3)),p=P(o(1870)),l=P(o(331)),u=o(1709),c=o(2018),f=P(o(337)),d=o(38),v=P(o(341)),m=o(71);function P(e){return e&&e.__esModule?e:{default:e}}function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var _=10,N=function(e){var t=e.id,o=e.name,n=d.Endpoints.EDIT_APPLICATION(t);return r(l.default,{to:n,from:"link",className:"my-app"},void 0,r("div",{className:"upper"},void 0,r("div",{className:"img-wrapper"},void 0,r("img",{alt:"",src:(0,u.getApplicationIcon)(e.id,e.icon),className:"app-avatar"}))),r("div",{className:"lower"},void 0,r("span",{},void 0,o)))},w=r(p.default,{}),A=r((function(){return r(l.default,{to:d.Routes.CREATE_APPLICATION,from:"link",className:"my-app new-app"},void 0,r("div",{className:"upper"},void 0,r("div",{className:"img-wrapper"},void 0,r("img",{alt:"",src:d.Images.ICON_PLUS,className:"app-avatar"}))),r("div",{className:"lower"},void 0,r("span",{},void 0,m.Messages.DeveloperPages.NEW_APP)))}),{},"new-app"),y=r((function(){return r("div",{className:"my-app full-app"},void 0,r("img",{alt:"",src:d.Images.ASSET_APPS_FULL_ROBOT,className:"app-avatar"}),r("h4",{},void 0,m.Messages.DeveloperPages.MAX_APPS),r("small",{},void 0,m.Messages.DeveloperPages.MAX_APPS_DESCRIPTION.format({maxApps:_})))}),{},"full-app"),O=function(e){function t(){var o,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,p=Array(i),l=0;l<i;l++)p[l]=arguments[l];return o=n=g(this,e.call.apply(e,[this].concat(p))),n.state={applications:null},n.renderPageContent=function(){var e=n.state.applications;if(!e)return w;var t=e.map((function(e){return s.createElement(N,a({key:e.id,updateFn:n.getAuthorizedApplications},e))}));return t.length<_?t.push(A):t.push(y),r(s.Fragment,{},void 0,r("div",{className:"crown"},void 0,r("h1",{},void 0,m.Messages.DeveloperPages.MY_APPS),r("p",{},void 0,m.Messages.DeveloperPages.MY_APPS_DESCRIPTION)),r("div",{className:"my-apps"},void 0,t))},g(n,o)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){var e=this;f.default.get({url:d.Endpoints.APPLICATIONS},(function(t){401===t.status?v.default.redirectToLogin(d.Routes.MY_APPLICATIONS):t.ok&&e.setState({applications:t.body})}))},t.prototype.render=function(){return r(s.Fragment,{},void 0,r(i.default,{title:(0,c.getTitle)(m.Messages.DeveloperPages.MY_APPS)}),this.renderPageContent())},t}(s.PureComponent);t.default=O,e.exports=t.default}}]);