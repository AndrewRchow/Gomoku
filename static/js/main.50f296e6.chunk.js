(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},8:function(e,t,n){e.exports=n(9)},9:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(2),s=n(4),i=n(3),u=n(5),o=n(0),c=n.n(o),l=n(7),h=n.n(l),p=(n(15),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e,t=this,n=!1;return this.props.winSeq&&(e=this.props.keyProp,n=!!this.props.winSeq.includes(e)),c.a.createElement("button",{className:"square "+(n?"winningSquare":""),onClick:function(){return t.props.onClick()}},this.props.value)}}]),t}(c.a.Component)),f=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(a.a)(t,[{key:"renderSquare",value:function(e){var t=this;return c.a.createElement(p,{key:e,keyProp:e,value:this.props.squares[e],onClick:function(){return t.props.onClick(e)},winSeq:this.props.winSeq})}},{key:"render",value:function(){for(var e=[],t=[],n=0;n<225;n++)n%15==0&&0!=n&&(e.push(c.a.createElement("div",{className:"board-row"},t)),t=[]),t.push(this.renderSquare(n));return c.a.createElement("div",null,e)}}]),t}(c.a.Component),m=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(i.a)(t).call(this,e))).state={history:[{squares:Array(225).fill(null)}],stepNumber:0,xIsNext:!0,isDraw:!1},n}return Object(u.a)(t,e),Object(a.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1].squares.slice();b(n)||n[e]||(n[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:n}]),stepNumber:t.length,xIsNext:!this.state.xIsNext,isDraw:225===t.length}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0,isDraw:!1})}},{key:"render",value:function(){var e,t=this,n=this.state.history,r=n[this.state.stepNumber],a=b(r.squares),s=this.state.isDraw,i=n.map(function(e,n){var r=n?"#"+n:"Begin";return c.a.createElement("li",{key:n},c.a.createElement("button",{onClick:function(){return t.jumpTo(n)}},r))});return e=a?"Winner: "+a.player:s?"Draw":"Next: "+(this.state.xIsNext?"X":"O"),c.a.createElement("div",{className:"game"},c.a.createElement("div",{className:"game-board"},c.a.createElement(f,{squares:r.squares,onClick:function(e){return t.handleClick(e)},winSeq:a.sequence})),c.a.createElement("div",{className:"game-info"},c.a.createElement("div",null,e),c.a.createElement("ol",null,i)))}}]),t}(c.a.Component);function b(e){for(var t,n=[],r=[],a=0;a<e.length;a++)a%15==0&&0!=a&&(n.push(r),r=[]),r.push(e[a]);for(a=0;a<n.length;a++)for(var s=0;s<n[a].length;s++)if(n[a][s]&&(t=v(n,a,s)))return t;return""}function v(e,t,n){for(var r,a=e[t][n],s=[],i=0;i<5;i++){if(0>n-5||a!=e[t][n-i]){s=[],r=!1;break}s.push((t+1)*(n+1-i)-1),r=!0}if(!r)for(i=0;i<5;i++){if(0>n-5||a!=e[t][n-i]){s=[],r=!1;break}s.push((t+1)*(n+1-i)-1),r=!0}if(!r)for(i=0;i<5;i++){if(0>n-5||a!=e[t][n-i]){s=[],r=!1;break}s.push((t+1)*(n+1-i)-1),r=!0}if(!r)for(i=0;i<5;i++){if(0>n-5||a!=e[t][n-i]){s=[],r=!1;break}s.push((t+1)*(n+1-i)-1),r=!0}return r?(console.log(a),a):""}h.a.render(c.a.createElement(m,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.50f296e6.chunk.js.map