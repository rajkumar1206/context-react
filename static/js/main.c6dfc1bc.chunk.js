(this.webpackJsonpcontext=this.webpackJsonpcontext||[]).push([[0],{13:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(5),o=n.n(r),i=(n(13),n(3)),l=n(7),s=n(6),u=n.n(s),m=function(e,t){switch(t.type){case"ADD":return[{id:u()(),todo:t.content}].concat(Object(l.a)(e));case"DEL":return e.filter((function(e){return e.id!==t.id}));default:return[]}},d=Object(a.createContext)();function f(e){var t=Object(a.useReducer)(m,[],(function(){var e=localStorage.getItem("todos");return e?JSON.parse(e):[]})),n=Object(i.a)(t,2),r=n[0],o=n[1];return Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(r))}),[r]),c.a.createElement(d.Provider,{value:{todos:r,dispatch:o}},e.children)}function p(){var e=Object(a.useContext)(d).dispatch,t=Object(a.useState)(""),n=Object(i.a)(t,2),r=n[0],o=n[1];return c.a.createElement("div",{className:"container"},c.a.createElement("form",{onSubmit:function(t){t.preventDefault(),r&&e({type:"ADD",content:r}),o("")}},c.a.createElement("div",{className:"input-field center"},c.a.createElement("input",{type:"text",className:"validate center",value:r,placeholder:"Add reminder",onChange:function(e){return o(e.target.value)}}),c.a.createElement("input",{type:"submit",className:"btn center"}))))}function E(e){var t=Object(a.useContext)(d),n=t.todos,r=t.dispatch;return c.a.createElement("div",{className:"container"},c.a.createElement("h3",{className:"indigo-text center"},"Add Reminder..."),c.a.createElement(p,null),c.a.createElement("ul",{className:"collection"},n.length?n.map((function(e){return c.a.createElement("li",{key:e.id,className:"collection-item"},c.a.createElement("i",{className:"material-icons right red-text",onClick:function(t){r({type:"DEL",id:e.id})}},"clear"),c.a.createElement("span",null,e.todo))})):c.a.createElement("li",{className:"collection-item"},"You have no reminder set")))}var h=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(f,null,c.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(22)}},[[8,1,2]]]);
//# sourceMappingURL=main.c6dfc1bc.chunk.js.map