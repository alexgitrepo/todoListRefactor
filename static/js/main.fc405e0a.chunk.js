(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,a){t.exports=a.p+"static/media/rubbish.b3b15eab.svg"},31:function(t,e,a){t.exports=a.p+"static/media/index.infinity-rotate-cycle-loader.13cbb991.svg"},32:function(t,e,a){t.exports=a(62)},37:function(t,e,a){},62:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(11),s=a.n(r);a(37),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(14),c=a(10),u=a(2),d=a.n(u),l=a(8),p=a(18),f=a(1),k=a(29).create({baseURL:"https://radiant-plains-31062.herokuapp.com"}),m=function(){return k.get("/todo-lists")},h=function(t){return k.get("/todo-lists/".concat(t,"/tasks")).then(function(t){return t.data})},T=function(t){return k.post("/todo-lists",{title:t})},O=function(t){return k.delete("/todo-lists/".concat(t))},E=function(t,e){return k.post("/todo-lists/".concat(e,"/tasks"),{title:t})},b=function(t,e,a){return k.put("/todo-lists/".concat(a,"/tasks/").concat(e),Object(f.a)({},t))},v=function(t,e){return k.delete("/todo-lists/".concat(e,"/tasks/").concat(t))},L={todoLists:[],isFetching:!1},w=function(){return{type:"CHANGE_IS_FETCHING"}},y=function(t,e){return{type:"DELETE_TASK",todolistId:t,taskId:e}},_=function(t,e,a){return{type:"UPDATE_TASK",todolistId:t,taskId:e,task:a}},j=function(t,e){return{type:"SET_TO_DO_LIST_TASKS",todolistId:t,tasks:e}},S=function(t){return{type:"ADD_TO_DO_LIST",todolist:t}},I=function(t){return{type:"SET_TO_DO_LISTS",todolists:t}},g=function(t){return{type:"DELETE_TO_DO_LIST",todolistId:t}},N=function(t,e){return{type:"ADD_TASK",todolistId:t,newTask:e}},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"DELETE_TASK":return Object(f.a)({},t,{todoLists:t.todoLists.map(function(t){return t._id===e.todolistId?Object(f.a)({},t,{tasks:t.tasks.filter(function(t){return t._id!==e.taskId})}):t})});case"UPDATE_TASK":return Object(f.a)({},t,{todoLists:t.todoLists.map(function(t){return t._id===e.todolistId?Object(f.a)({},t,{tasks:t.tasks.map(function(t){return t._id===e.taskId?e.task:t})}):t})});case"ADD_TASK":return Object(f.a)({},t,{todoLists:t.todoLists.map(function(t){return t._id===e.todolistId?Object(f.a)({},t,{tasks:[].concat(Object(p.a)(t.tasks),[e.newTask])}):t})});case"SET_TO_DO_LIST_TASKS":return Object(f.a)({},t,{todoLists:t.todoLists.map(function(t){return t._id===e.todolistId?Object(f.a)({},t,{tasks:e.tasks}):t})});case"SET_TO_DO_LISTS":return Object(f.a)({},t,{todoLists:e.todolists.map(function(t){return Object(f.a)({},t,{tasks:[]})})});case"ADD_TO_DO_LIST":return Object(f.a)({},t,{todoLists:[].concat(Object(p.a)(t.todoLists),[e.todolist])});case"DELETE_TO_DO_LIST":return Object(f.a)({},t,{todoLists:t.todoLists.filter(function(t){return t._id!==e.todolistId})});case"CHANGE_IS_FETCHING":var a=!t.isFetching;return Object(f.a)({},t,{isFetching:a})}return t},A=a(30),M=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.c,D=Object(c.d)(C,M(Object(c.a)(A.a))),V=D;window.store=D.getState();var x=a(3),P=a(12),F=a(5),K=a(4),H=a(6),B=(a(9),function(t){function e(){var t,a;Object(x.a)(this,e);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(F.a)(this,(t=Object(K.a)(e)).call.apply(t,[this].concat(r)))).state={inputValue:"",inputErrorStyle:!1},a.inputOnChange=function(t){a.setState({inputValue:t.target.value}),a.setState({inputErrorStyle:!1})},a.addNewItem=function(t){""===a.state.inputValue?a.setState({inputErrorStyle:!0}):(a.props.addItem(a.state.inputValue,a.props.todoListId),a.setState({inputValue:""}),a.setState({inputErrorStyle:!1}))},a.render=function(){return o.a.createElement("div",{className:"todoList-newTaskForm"},o.a.createElement("input",{className:a.state.inputErrorStyle?"inputErrorStyle":"",onChange:a.inputOnChange,value:a.state.inputValue,type:"text",placeholder:a.props.placeholder}),o.a.createElement("button",{onClick:a.addNewItem},"+"))},a}return Object(H.a)(e,t),e}(o.a.Component)),G=a(13),U=a.n(G),W=function(t){function e(){var t,a;Object(x.a)(this,e);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(F.a)(this,(t=Object(K.a)(e)).call.apply(t,[this].concat(r)))).render=function(){return o.a.createElement("div",{className:"todoList-header"},o.a.createElement("div",{className:"todoList-headerWrapper"},o.a.createElement("h3",{className:"todoList-header__title"},a.props.title),o.a.createElement("button",{className:"todoList-header__delete-button",onClick:function(){a.props.deleteTodoList(a.props.todoListId)}},o.a.createElement("img",{className:"todoList-header__delete-button-img",src:U.a,alt:""}))),o.a.createElement(B,{todoListId:a.props.todoListId,placeholder:a.props.placeholder,addItem:a.props.addTask,className:"todoList-newTaskForm"}))},a}return Object(H.a)(e,t),e}(o.a.Component),J=function(t){function e(){var t,a;Object(x.a)(this,e);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(a=Object(F.a)(this,(t=Object(K.a)(e)).call.apply(t,[this].concat(r)))).state={editModeTask:!1,editModePriority:!1,newTaskName:"",newPriority:""},a.EditModeOn=function(){a.setState({editModeTask:!0})},a.EditModeTaskPriorityOn=function(){a.setState({editModePriority:!0})},a.newCheckedValue=function(t){var e=!0===t.currentTarget.checked?2:0;a.props.updateTask(Object(f.a)({},a.props.task,{status:e}),a.props.taskId,a.props.todoListId)},a.EditModeOff=function(t){a.state.newTaskName?(a.props.updateTask(Object(f.a)({},a.props.task,{title:a.state.newTaskName}),a.props.taskId,a.props.todoListId),a.setState({editModeTask:!1,newTaskName:""})):a.setState({editModeTask:!1})},a.EditModeTaskPriorityOff=function(t){var e=+a.state.newPriority;a.state.newPriority?(a.props.updateTask(Object(f.a)({},a.props.task,{priority:e}),a.props.taskId,a.props.todoListId),a.setState({editModePriority:!1,newPriority:""})):a.setState({editModePriority:!1})},a.setNewTaskName=function(t){a.setState({newTaskName:t.target.value})},a.setNewPriority=function(t){a.setState({newPriority:t.target.value})},a.render=function(){return n.createElement("div",{className:"todoList-task ".concat(2===a.props.task.status?"taskChecked":"")},n.createElement("input",{onChange:function(t){a.newCheckedValue(t)},type:"checkbox",checked:2===a.props.task.status}),n.createElement("span",null,"".concat(a.props.task.order)),!a.state.editModeTask&&n.createElement("span",{onDoubleClick:a.EditModeOn},"".concat(a.props.task.title)),a.state.editModeTask&&n.createElement("input",{placeholder:"Enter new title",autoFocus:!0,onBlur:a.EditModeOff,onChange:a.setNewTaskName,value:a.state.newTaskName,type:"text"}),!a.state.editModePriority&&n.createElement("span",{onDoubleClick:a.EditModeTaskPriorityOn},"  task priority: ".concat(a.props.task.priority)),a.state.editModePriority&&n.createElement("input",{placeholder:"Enter new priority value",autoFocus:!0,onBlur:a.EditModeTaskPriorityOff,onChange:a.setNewPriority,value:a.state.newPriority,type:"text"}),n.createElement("button",{onClick:function(){a.props.deleteTask(a.props.taskId,a.props.todoListId)}},n.createElement("img",{className:"todoList-header__delete-button-img",src:U.a,alt:""})))},a}return Object(H.a)(e,t),e}(n.Component),R=function(t){function e(){var t,a;Object(x.a)(this,e);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(F.a)(this,(t=Object(K.a)(e)).call.apply(t,[this].concat(r)))).render=function(){var t=a.props.tasks,e=(void 0===t?[]:t).map(function(t){return o.a.createElement(J,{deleteTask:a.props.deleteTask,updateTask:a.props.updateTask,taskId:t._id,task:t,todoListId:a.props.todoListId})});return o.a.createElement("div",{className:"todoList-tasks"},e)},a}return Object(H.a)(e,t),e}(o.a.Component),X=function(t){function e(){var t,a;Object(x.a)(this,e);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(F.a)(this,(t=Object(K.a)(e)).call.apply(t,[this].concat(r)))).state={showMode:!0},a.changeShowMode=function(){var t=!a.state.showMode;a.setState({showMode:t})},a.render=function(){var t="ALL"===a.props.filterValue?"filter-active":"",e="Completed"===a.props.filterValue?"filter-active":"",n="Active"===a.props.filterValue?"filter-active":"";return o.a.createElement("div",{className:"todoList-footer"},a.state.showMode&&o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){a.props.changeFilterValue("ALL")},className:t},"All"),o.a.createElement("button",{onClick:function(){a.props.changeFilterValue("Completed")},className:e},"Completed"),o.a.createElement("button",{onClick:function(){a.props.changeFilterValue("Active")},className:n},"Active")),a.state.showMode&&o.a.createElement("span",{onClick:a.changeShowMode},"Hide all"),!a.state.showMode&&o.a.createElement("span",{onClick:a.changeShowMode},"Show all"))},a}return Object(H.a)(e,t),e}(o.a.Component),$=function(t){function e(){var t,a;Object(x.a)(this,e);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(F.a)(this,(t=Object(K.a)(e)).call.apply(t,[this].concat(r)))).state={tasks:[],filterValue:"ALL"},a.changeFilterValue=function(t){a.setState(Object(f.a)({},a.state,{filterValue:t}))},a.render=function(){var t="ALL"===a.state.filterValue?a.props.tasks:"Active"===a.state.filterValue?a.props.tasks.filter(function(t){return 2!==t.status}):"Completed"===a.state.filterValue?a.props.tasks.filter(function(t){return 2===t.status}):[];return o.a.createElement("div",{className:"todoList"},o.a.createElement(W,{deleteTodoList:a.props.deleteTodoList,todoListId:a.props.todoListId,placeholder:a.props.placeholder,title:a.props.title,addTask:a.props.addTask}),o.a.createElement("div",{className:"todoList__wrapper"},o.a.createElement(R,{deleteTask:a.props.deleteTask,updateTask:a.props.updateTask,todoListId:a.props.todoListId,tasks:t}),o.a.createElement(X,{changeFilterValue:a.changeFilterValue,filterValue:a.state.filterValue})))},a}return Object(H.a)(e,t),Object(P.a)(e,[{key:"componentDidMount",value:function(){this.props.getTasks(this.props.todoListId)}}]),e}(o.a.Component),q=a(31),z=a.n(q),Q=function(t){return o.a.createElement("div",{className:"preloader"},o.a.createElement("img",{src:z.a,alt:""}))},Y=function(t){function e(){var t,a;Object(x.a)(this,e);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(F.a)(this,(t=Object(K.a)(e)).call.apply(t,[this].concat(r)))).render=function(){var t=a.props.todoLists.map(function(t){return o.a.createElement($,{deleteTask:a.props.deleteTask,deleteTodoList:a.props.deleteTodoList,addTask:a.props.addTask,getTasks:a.props.getTasks,updateTask:a.props.updateTask,tasks:t.tasks,title:t.title,placeholder:"Add new task",todoListId:t._id})});return a.props.isFetching?o.a.createElement(Q,null):o.a.createElement("div",{className:"App"},o.a.createElement(B,{addItem:a.props.addTodoList,placeholder:"New todolist name"}),o.a.createElement("div",{className:"todoLists"},t))},a}return Object(H.a)(e,t),Object(P.a)(e,[{key:"componentDidMount",value:function(){this.props.setTodoLists()}}]),e}(o.a.Component),Z=Object(i.b)(function(t){return{todoLists:t.todoLists,isFetching:t.isFetching}},function(t){return{setTodoLists:function(){t(function(){var t=Object(l.a)(d.a.mark(function t(e){var a;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e(w()),t.next=3,m();case 3:(a=t.sent)&&(e(I(a.data)),e(w()));case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())},addTodoList:function(e){t(function(t){return function(){var e=Object(l.a)(d.a.mark(function e(a){var n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(t);case 2:(n=e.sent)&&a(S(n.data.item));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}(e))},deleteTodoList:function(e){t(function(t){return function(){var e=Object(l.a)(d.a.mark(function e(a){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:e.sent&&a(g(t));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}(e))},addTask:function(e,a){t(function(t,e){return function(){var a=Object(l.a)(d.a.mark(function a(n){var o;return d.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,E(t,e);case 2:(o=a.sent)&&n(N(e,o.data.item));case 4:case"end":return a.stop()}},a)}));return function(t){return a.apply(this,arguments)}}()}(e,a))},getTasks:function(e){t(function(t){return function(){var e=Object(l.a)(d.a.mark(function e(a){var n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:(n=e.sent)&&a(j(t,n));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}(e))},updateTask:function(e,a,n){t(function(t,e,a){return function(){var n=Object(l.a)(d.a.mark(function n(o){var r;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b(t,e,a);case 2:0===(r=n.sent).data.resultCode&&o(_(a,e,r.data.item));case 4:case"end":return n.stop()}},n)}));return function(t){return n.apply(this,arguments)}}()}(e,a,n))},deleteTask:function(e,a){t(function(t,e){return function(){var a=Object(l.a)(d.a.mark(function a(n){return d.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v(t,e);case 2:0===a.sent.data.resultCode&&n(y(e,t));case 4:case"end":return a.stop()}},a)}));return function(t){return a.apply(this,arguments)}}()}(e,a))}}})(Y);s.a.render(o.a.createElement(i.a,{store:V},o.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,a){}},[[32,1,2]]]);
//# sourceMappingURL=main.fc405e0a.chunk.js.map