(function(t){function e(e){for(var n,o,s=e[0],l=e[1],c=e[2],u=0,v=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&v.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(v.length)v.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,s=1;s<i.length;s++){var l=i[s];0!==a[l]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},a={app:0},r=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=l;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("8a23"),a=i.n(n);a.a},"0aaa":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-app-bar",{attrs:{app:"",color:"#eeeeee"}},[i("div",{staticClass:"d-flex align-center"},[i("p",{staticClass:"title"},[t._v("Create your TODO list")])]),i("v-spacer")],1),i("v-content",[i("v-container",{staticClass:"align-center",attrs:{fluid:""}},[i("v-row",{attrs:{justify:"center"}},t._l(t.lists,(function(e){return i("List",{key:e.id,attrs:{list:e},on:{remove:t.removeList,edit:t.editList}})})),1)],1),i("v-btn",{attrs:{fab:"",right:"",bottom:"",fixed:"",color:"primary"},on:{click:function(e){t.overlay=!t.overlay}}},[i("v-icon",[t._v("mdi-plus")])],1),i("v-dialog",{attrs:{"max-width":"450px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-text-field",{attrs:{label:"Edit name",autofocus:"",clearable:""},model:{value:t.editedItem.text,callback:function(e){t.$set(t.editedItem,"text",e)},expression:"editedItem.text"}}),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary darken-1",text:""},on:{click:t.close}},[t._v("Cancel")]),i("v-btn",{attrs:{color:"primary darken-1",text:""},on:{click:t.save}},[t._v("Save")])],1)],1)],1),i("v-overlay",{attrs:{value:t.overlay}},[i("v-text-field",{staticClass:"input",attrs:{label:"Name of the list",outlined:"",autofocus:"",clearable:""},on:{blur:function(e){t.overlay=!1},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addList(e)}},model:{value:t.primalInput,callback:function(e){t.primalInput=e},expression:"primalInput"}})],1)],1)],1)},r=[],o=(i("4de4"),i("c975"),i("498a"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-col",{attrs:{cols:"12",md:"3"}},[i("v-card",[i("v-toolbar",{staticClass:"list-toolbar",attrs:{color:"primary",dark:""}},[i("v-card-title",[t._v(" "+t._s(t.list.text)+" "),i("v-spacer"),i("v-menu",{attrs:{"open-on-click":"",bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-btn",t._g({attrs:{dark:"",icon:"",transition:"slide-x-transition"}},n),[i("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[i("v-list",[i("v-list-item",{on:{click:function(e){return t.$emit("edit",t.list)}}},[i("v-list-item-title",[t._v("Edit")])],1),i("v-list-item",{on:{click:function(e){return t.$emit("remove",t.list.id)}}},[i("v-list-item-title",[t._v("Delete")])],1)],1)],1)],1)],1),t._l(t.items,(function(e){return i("ListItem",{key:e.id,attrs:{item:e},on:{remove:t.removeItem,edit:t.editItem}})})),i("div",{staticClass:"list-item-input"},[t.seen?i("v-text-field",{staticClass:"input",attrs:{label:"Create todo","hide-details":"",outlined:"",clearable:"",autofocus:""},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addItem(e)},blur:t.changeSeen},model:{value:t.itemInput,callback:function(e){t.itemInput=e},expression:"itemInput"}}):i("v-btn",{attrs:{color:"primary darken-1",text:""},on:{click:t.changeSeen}},[t._v(" Add ")])],1)],2),i("v-dialog",{attrs:{"max-width":"450px"},model:{value:t.dialog2,callback:function(e){t.dialog2=e},expression:"dialog2"}},[i("v-card",[i("v-text-field",{attrs:{label:"Edit todo",autofocus:"",clearable:""},model:{value:t.editedItemList.text,callback:function(e){t.$set(t.editedItemList,"text",e)},expression:"editedItemList.text"}}),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary darken-1",text:""},on:{click:t.close}},[t._v("Cancel")]),i("v-btn",{attrs:{color:"primary darken-1",text:""},on:{click:t.save}},[t._v("Save")])],1)],1)],1)],1)}),s=[],l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card-text",{staticClass:"list-item"},[i("v-checkbox",{attrs:{label:t.item.text},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}}),i("v-spacer"),i("v-menu",{attrs:{"open-on-click":"",bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-btn",t._g({attrs:{icon:"",transition:"slide-x-transition"}},n),[i("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[i("v-list",[i("v-list-item",{on:{click:function(e){return t.$emit("edit",t.item)}}},[i("v-list-item-title",[t._v("Edit")])],1),i("v-list-item",{on:{click:function(e){return t.$emit("remove",t.item.id)}}},[i("v-list-item-title",[t._v("Delete")])],1)],1)],1)],1)},c=[],d={data:function(){return{itemInput:"",seen:!1,checkbox:!1}},props:{item:{type:Object,required:!0}},methods:{changeSeen:function(){this.seen=!this.seen}}},u=d,v=(i("6eda"),i("2877")),p=i("6544"),f=i.n(p),m=i("8336"),h=i("99d9"),b=i("ac7c"),x=i("132d"),y=i("8860"),k=i("da13"),I=i("5d23"),g=i("e449"),V=i("2fa4"),_=Object(v["a"])(u,l,c,!1,null,null,null),O=_.exports;f()(_,{VBtn:m["a"],VCardText:h["b"],VCheckbox:b["a"],VIcon:x["a"],VList:y["a"],VListItem:k["a"],VListItemTitle:I["a"],VMenu:g["a"],VSpacer:V["a"]});var C=1,L={data:function(){return{itemInput:"",seen:!1,items:[],dialog2:!1,editedIndex:-1,editedItemList:"",editedText:""}},components:{ListItem:O},methods:{addItem:function(){var t=this.itemInput.trim();t&&(this.items.push({id:C++,text:t}),this.itemInput="")},removeItem:function(t){this.items=this.items.filter((function(e){return e.id!==t}))},changeSeen:function(){this.seen=!this.seen},editItem:function(t){this.editedIndex=this.items.indexOf(t),this.editedItemList=Object.assign({},t),this.dialog2=!0},close:function(){this.editedItemList="",this.dialog2=!1},save:function(){Object.assign(this.items[this.editedIndex],this.editedItemList),this.close()}},props:{list:{type:Object,required:!0}}},j=L,w=(i("7b89"),i("b0af")),S=i("62ad"),T=i("169a"),$=i("8654"),E=i("71d9"),P=Object(v["a"])(j,o,s,!1,null,null,null),A=P.exports;f()(P,{VBtn:m["a"],VCard:w["a"],VCardActions:h["a"],VCardTitle:h["c"],VCol:S["a"],VDialog:T["a"],VIcon:x["a"],VList:y["a"],VListItem:k["a"],VListItemTitle:I["a"],VMenu:g["a"],VSpacer:V["a"],VTextField:$["a"],VToolbar:E["a"]});var M=1,D={name:"App",components:{List:A},data:function(){return{lists:[],primalInput:"",overlay:!1,dialog:!1,editedIndex:-1,editedItem:"",editedText:""}},methods:{addList:function(){var t=this.primalInput.trim();t&&(this.lists.push({id:M++,text:t,items:[]}),this.primalInput="",this.overlay=!1)},removeList:function(t){this.lists=this.lists.filter((function(e){return e.id!==t}))},editList:function(t){this.editedIndex=this.lists.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},close:function(){this.editedItem="",this.dialog=!1},save:function(){Object.assign(this.lists[this.editedIndex],this.editedItem),this.close()}}},B=D,q=(i("034f"),i("7496")),F=i("40dc"),J=i("a523"),N=i("a75b"),R=i("a797"),z=i("0fd9"),G=Object(v["a"])(B,a,r,!1,null,null,null),H=G.exports;f()(G,{VApp:q["a"],VAppBar:F["a"],VBtn:m["a"],VCard:w["a"],VCardActions:h["a"],VContainer:J["a"],VContent:N["a"],VDialog:T["a"],VIcon:x["a"],VOverlay:R["a"],VRow:z["a"],VSpacer:V["a"],VTextField:$["a"]});var K=i("f309");n["a"].use(K["a"]);var Q=new K["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:Q,render:function(t){return t(H)}}).$mount("#app")},"6eda":function(t,e,i){"use strict";var n=i("0aaa"),a=i.n(n);a.a},"7b89":function(t,e,i){"use strict";var n=i("efd3"),a=i.n(n);a.a},"8a23":function(t,e,i){},efd3:function(t,e,i){}});
//# sourceMappingURL=app.6dadbb26.js.map