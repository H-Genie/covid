(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{186:function(e,t,n){},189:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(67),c=n.n(r),o=n(2),s=n(10),l=n.n(s),i=n(12),d=n(4),u=n(13),h=n.n(u),j=n(24),b=(n(65),n(0)),m=function(e){return e.toLocaleString()},f=function(e){return e.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};var O=function(e){var t=e.today,n=e.daily,a=e.total,r=e.monthly,c={labels:n&&n.slice(n.length-14,n.length).map((function(e){return"".concat(e.date.substring(5,10))})),datasets:[{label:"\uc2e0\uaddc \ud655\uc9c4\uc790",labelFontFamily:"GmarketSansMedium",borderColor:"salmon",fill:!1,data:n&&n.slice(n.length-14,n.length).map((function(e){return e.confirmed}))}]},o={title:{display:!0,text:"\uc2e0\uaddc \ud655\uc9c4\uc790 \ucd94\uc774 (\ucd5c\uadfc 2\uc8fc)",fontSize:16,fontFamily:"GmarketSansMedium"},legend:{display:!1,position:"bottom"},scales:{xAxes:[{ticks:{fontFamily:"GmarketSansMedium"}}],yAxes:[{ticks:{callback:m,fontFamily:"GmarketSansMedium"}}]},tooltips:{titleFontFamily:"GmarketSansMedium",bodyFontFamily:"GmarketSansMedium",callbacks:{label:f,labelColor:function(e,t){return{borderColor:"salmon",backgroundColor:"salmon"}}}}},s={title:{display:!0,text:"\ub204\uc801 \ud655\uc9c4\uc790 \ucd94\uc774",fontSize:16,fontFamily:"GmarketSansMedium"},legend:{display:!1,position:"bottom"},scales:{xAxes:[{ticks:{fontFamily:"GmarketSansMedium"}}],yAxes:[{ticks:{callback:m,fontFamily:"GmarketSansMedium"}}]},tooltips:{titleFontFamily:"GmarketSansMedium",bodyFontFamily:"GmarketSansMedium",callbacks:{label:f}}},l={labels:["\ud655\uc9c4\uc790","\uaca9\ub9ac\ud574\uc81c","\uc0ac\ub9dd"],datasets:[{label:"\ub204\uc801 \ud655\uc9c4, \ud574\uc81c, \uc0ac\ub9dd \ube44\uc728",backgroundColor:["#ff3d67","#059bff","#ffc233"],borderColor:["#ff3d67","#059bff","#ffc233"],fill:!1,data:a&&[a[a.length-1].Confirmed,a[a.length-1].Recovered,a[a.length-1].Deaths]}]},i={title:{display:!0,text:"\ud655\uc9c4, \ud574\uc81c, \uc0ac\ub9dd \ube44\uc728 (".concat(t&&t.date.substring(0,10),")"),fontSize:16,fontFamily:"GmarketSansMedium"},legend:{display:!0,position:"bottom",labels:{fontFamily:"GmarketSansMedium"}},tooltips:{titleFontFamily:"GmarketSansMedium",bodyFontFamily:"GmarketSansMedium",callbacks:{label:function(e,t){var n=t.datasets[e.datasetIndex],a=n.data.reduce((function(e,t){return e+t})),r=n.data[e.index],c=Math.floor(r/a*100+.5);return"".concat(r.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")," (").concat(c,"%)")}}}};return Object(b.jsxs)(b.Fragment,{children:[t&&n&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("h2",{children:["Korea (South)"===a[0].Country?"\uad6d\ub0b4":a[0].Country,"\uc758 ",t.date.substring(0,10)," \ucf54\ub85c\ub098 \ud604\ud669"]}),Object(b.jsxs)("ul",{className:"summary",children:[Object(b.jsxs)("li",{className:"confirmed",children:[Object(b.jsx)("h4",{children:"\ud655\uc9c4\ud658\uc790"}),Object(b.jsx)("h3",{children:a[a.length-1].Confirmed.toLocaleString()}),Object(b.jsxs)("h4",{children:[t.confirmed>0?"\u25b2":null," ",t.confirmed.toLocaleString()," "]})]}),Object(b.jsxs)("li",{className:"recovered",children:[Object(b.jsx)("h4",{children:"\uaca9\ub9ac\ud574\uc81c"}),Object(b.jsx)("h3",{children:a[a.length-1].Recovered.toLocaleString()}),Object(b.jsxs)("h4",{children:[t.recovered>0?"\u25b2":null," ",t.recovered.toLocaleString()]})]}),Object(b.jsxs)("li",{className:"deaths",children:[Object(b.jsx)("h4",{children:"\uc0ac\ub9dd"}),Object(b.jsx)("h3",{children:a[a.length-1].Deaths.toLocaleString()}),Object(b.jsxs)("h4",{children:[t.deaths>0?"\u25b2":null," ",t.deaths.toLocaleString()]})]})]}),Object(b.jsx)("sub",{children:"\u203b \uc218\uce58\uac00 \ube44\uc815\uc0c1\uc801\uc73c\ub85c \ubcf4\uc77c \uacbd\uc6b0\ub294 API DB\uc758 \ubb38\uc81c\uc774\ub2c8 \uc591\ud574\ubc14\ub78d\ub2c8\ub2e4."}),Object(b.jsx)("br",{}),Object(b.jsx)("sub",{children:"\u203b \uaca9\ub9ac\ud574\uc81c\uc790\uc758 \uc218\uce58\uac00 0\uc73c\ub85c \ud45c\uc2dc\ub418\uace0 \uc788\uc73c\ub2c8 \uc591\ud574\ubc14\ub78d\ub2c8\ub2e4."})]}),Object(b.jsxs)("div",{className:"chart",children:[Object(b.jsx)("div",{children:Object(b.jsx)(j.c,{data:c,options:o})}),Object(b.jsx)("div",{children:Object(b.jsx)(j.a,{data:r,options:s})}),Object(b.jsx)("div",{children:Object(b.jsx)(j.b,{data:l,options:i})})]})]})},x=function(e){var t=Object(a.useState)(null),n=Object(d.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(null),s=Object(d.a)(o,2),u=s[0],j=s[1],m=Object(a.useState)(null),f=Object(d.a)(m,2),x=f[0],v=f[1],p=Object(a.useState)({}),g=Object(d.a)(p,2),C=g[0],y=g[1],S=Object(a.useState)(!1),D=Object(d.a)(S,2),k=D[0],T=D[1],R=e.country||e.match.params.slug;return Object(a.useEffect)((function(){var e=function(){var e=Object(i.a)(l.a.mark((function e(){var n,a,r,o,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.covid19api.com/total/dayone/country/".concat(R));case 2:for(n=e.sent,a=n.data,c(a),t(a),r=a[a.length-1],o=a[a.length-2],j({date:r.Date,confirmed:r.Confirmed-o.Confirmed,deaths:r.Deaths-o.Deaths,recovered:r.Recovered-o.Recovered}),s=[],i=0;i<a.length;i++)0===i?s.push({date:a[i].Date,confirmed:a[i].Confirmed,recovered:a[i].Recovered,deaths:a[i].Deaths}):s.push({date:a[i].Date,confirmed:a[i].Confirmed-a[i-1].Confirmed,recovered:a[i].Recovered-a[i-1].Recovered,deaths:a[i].Deaths-a[i-1].Deaths});return v(s),e.next=14,T(!0);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(e){var t=e.reduce((function(e,t){var n=new Date(t.Date),a=n.getFullYear(),r=n.getMonth(),c=n.getDate(),o=t.Confirmed,s=t.Active,l=t.Deaths,i=t.Recovered,d=e.find((function(e){return e.year===a&&e.month===r}));return d||e.push({year:a,month:r,date:c,confirmed:o,active:s,death:l,recovered:i}),d&&d.date<c&&(d.year=a,d.month=r,d.date=c,d.confirmed=o,d.active=s,d.death=l,d.recovered=i),e}),[]),n=t.map((function(e){return"".concat(e.year-2e3,"-").concat(e.month+1)}));y({labels:n,datasets:[{label:"\ub204\uc801 \ud655\uc9c4\uc790",backgroundColor:"salmon",fill:!0,data:t.map((function(e){return e.confirmed}))}]})};e()}),[R]),Object(b.jsx)(b.Fragment,{children:k?Object(b.jsx)(O,{total:r,today:u,daily:x,monthly:C}):"Loading..."})},v=function(e,t){return e.Country===t.Country?0:e.Country>t.Country?1:-1},p=function(e,t){return e.Country===t.Country?0:e.Country>t.Country?-1:1},g=function(e,t){return e.TotalConfirmed===t.TotalConfirmed?0:t.TotalConfirmed-e.TotalConfirmed},C=function(e,t){return e.TotalConfirmed===t.TotalConfirmed?0:e.TotalConfirmed-t.TotalConfirmed},y=function(e,t){return e.TotalRecovered===t.TotalRecovered?0:t.TotalRecovered-e.TotalRecovered},S=function(e,t){return e.TotalRecovered===t.TotalRecovered?0:e.TotalRecovered-t.TotalRecovered},D=function(e,t){return e.TotalDeaths===t.TotalDeaths?0:t.TotalDeaths-e.TotalDeaths},k=function(e,t){return e.TotalDeaths===t.TotalDeaths?0:e.TotalDeaths-t.TotalDeaths},T=function(){var e=Object(a.useState)(null),t=Object(d.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),o=Object(d.a)(c,2),s=o[0],u=o[1],j=Object(a.useState)("descConfirmed"),m=Object(d.a)(j,2),f=m[0],O=m[1],x=Object(a.useState)(!1),T=Object(d.a)(x,2),R=T[0],w=T[1];Object(a.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.covid19api.com/summary");case 2:t=e.sent,n=t.data,a=n.Global,r({date:a.Date,NewConfirmed:a.NewConfirmed,NewDeaths:a.NewDeaths,NewRecovered:a.NewRecovered,TotalConfirmed:a.TotalConfirmed,TotalDeaths:a.TotalDeaths,TotalRecovered:a.TotalRecovered}),e.t0=f,e.next="descCountry"===e.t0?9:"asceCountry"===e.t0?11:"descConfirmed"===e.t0?13:"asceConfirmed"===e.t0?15:"descRecovered"===e.t0?17:"asceRecovered"===e.t0?19:"descDeaths"===e.t0?21:"asceDeaths"===e.t0?23:25;break;case 9:return u(n.Countries.sort(v)),e.abrupt("break",26);case 11:return u(n.Countries.sort(p)),e.abrupt("break",26);case 13:return u(n.Countries.sort(g)),e.abrupt("break",26);case 15:return u(n.Countries.sort(C)),e.abrupt("break",26);case 17:return u(n.Countries.sort(y)),e.abrupt("break",26);case 19:return u(n.Countries.sort(S)),e.abrupt("break",26);case 21:return u(n.Countries.sort(D)),e.abrupt("break",26);case 23:return u(n.Countries.sort(k)),e.abrupt("break",26);case 25:u(n.Countries.sort(g));case 26:return e.next=28,w(!0);case 28:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[f]);var N=function(e){f==="asce".concat(e)?O("desc".concat(e)):f==="desc".concat(e)?O("asce".concat(e)):O("desc".concat(e))};return Object(b.jsx)(b.Fragment,{children:R?n&&s&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("h2",{children:["\uc138\uacc4\uc758 ",n.date.substring(0,10)," \ucf54\ub85c\ub098 \ud604\ud669"]}),Object(b.jsxs)("ul",{className:"summary",children:[Object(b.jsxs)("li",{className:"confirmed",children:[Object(b.jsx)("h4",{children:"\ud655\uc9c4\ud658\uc790"}),Object(b.jsx)("h3",{children:n.TotalConfirmed.toLocaleString()}),Object(b.jsxs)("h4",{children:[n.NewConfirmed>0?"\u25b2":null," ",n.NewConfirmed.toLocaleString()," "]})]}),Object(b.jsxs)("li",{className:"recovered",children:[Object(b.jsx)("h4",{children:"\uaca9\ub9ac\ud574\uc81c"}),Object(b.jsx)("h3",{children:n.TotalRecovered.toLocaleString()}),Object(b.jsxs)("h4",{children:[n.NewRecovered>0?"\u25b2":null," ",n.NewRecovered.toLocaleString()]})]}),Object(b.jsxs)("li",{className:"deaths",children:[Object(b.jsx)("h4",{children:"\uc0ac\ub9dd"}),Object(b.jsx)("h3",{children:n.TotalDeaths.toLocaleString()}),Object(b.jsxs)("h4",{children:[n.NewDeaths>0?"\u25b2":null," ",n.NewDeaths.toLocaleString()]})]})]}),Object(b.jsx)("sub",{children:"\u203b \uc218\uce58\uac00 \ube44\uc815\uc0c1\uc801\uc73c\ub85c \ubcf4\uc77c \uacbd\uc6b0\ub294 API DB\uc758 \ubb38\uc81c\uc774\ub2c8 \uc591\ud574\ubc14\ub78d\ub2c8\ub2e4."}),Object(b.jsx)("br",{}),Object(b.jsx)("sub",{children:"\u203b \uaca9\ub9ac\ud574\uc81c\uc790\uc758 \uc218\uce58\uac00 0\uc73c\ub85c \ud45c\uc2dc\ub418\uace0 \uc788\uc73c\ub2c8 \uc591\ud574\ubc14\ub78d\ub2c8\ub2e4."}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{style:{color:"#ccc"},children:"\uc0c1\uc138\ud604\ud669\uc740 \uad6d\uac00\uba85\uc744 \ud074\ub9ad\ud574\uc8fc\uc138\uc694 / \ub370\uc774\ud130 \uc815\ub82c\uc740 \uac1c\uc694\uba85\uc744 \ud074\ub9ad\ud574\uc8fc\uc138\uc694"}),Object(b.jsx)("table",{children:Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{onClick:function(){return N("Country")},children:Object(b.jsxs)("p",{children:["\uad6d\uac00 ","descCountry"===f?"\u25bc":"asceCountry"===f?"\u25b2":null]})}),Object(b.jsx)("th",{onClick:function(){return N("Confirmed")},children:Object(b.jsxs)("p",{children:["\ud655\uc9c4\uc790 ","descConfirmed"===f?"\u25bc":"asceConfirmed"===f?"\u25b2":null]})}),Object(b.jsx)("th",{onClick:function(){return N("Recovered")},children:Object(b.jsxs)("p",{children:["\uaca9\ub9ac\ud574\uc81c ","descRecovered"===f?"\u25bc":"asceRecovered"===f?"\u25b2":null]})}),Object(b.jsx)("th",{onClick:function(){return N("Deaths")},children:Object(b.jsxs)("p",{children:["\uc0ac\ub9dd ","descDeaths"===f?"\u25bc":"asceDeaths"===f?"\u25b2":null]})})]}),s.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("a",{href:"/".concat(e.Slug),children:e.Country})}),Object(b.jsxs)("td",{className:"world_confirmed",children:[Object(b.jsx)("p",{children:e.TotalConfirmed.toLocaleString()}),e.NewConfirmed>0?Object(b.jsxs)("h5",{children:["\u25b2 ",e.NewConfirmed.toLocaleString()]}):null]}),Object(b.jsxs)("td",{className:"world_recovered",children:[Object(b.jsx)("p",{children:e.TotalRecovered.toLocaleString()}),e.NewRecovered>0?Object(b.jsxs)("h5",{children:["\u25b2 ",e.NewRecovered.toLocaleString()]}):null]}),Object(b.jsxs)("td",{className:"world_deaths",children:[Object(b.jsx)("p",{children:e.TotalDeaths.toLocaleString()}),e.NewDeaths>0?Object(b.jsxs)("h5",{children:["\u25b2 ",e.NewDeaths.toLocaleString()]}):null]})]},t)}))]})})]}):"Loading..."})},R=function(){var e=Object(a.useState)(null),t=Object(d.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),o=Object(d.a)(c,2),s=o[0],u=o[1],j=Object(a.useState)(null),m=Object(d.a)(j,2),f=m[0],x=m[1],v=Object(a.useState)({}),p=Object(d.a)(v,2),g=p[0],C=p[1],y=Object(a.useState)(!1),S=Object(d.a)(y,2),D=S[0],k=S[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(i.a)(l.a.mark((function e(){var n,a,c,o,s,i,d,j;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.covid19api.com/total/dayone/country/kr");case 2:for(n=e.sent,a=n.data,t(a),0!==(s=a[a.length-1].Confirmed-a[a.length-2].Confirmed)?(c=a[a.length-1],o=a[a.length-2],r(a)):(c=a[a.length-2],o=a[a.length-3],r(a.filter((function(e,t){return t<a.length-1})))),u({date:c.Date,confirmed:c.Confirmed-o.Confirmed,deaths:c.Deaths-o.Deaths,recovered:c.Recovered-o.Recovered}),i=[],d=0===s?a.length-1:a.length,j=0;j<d;j++)0===j?i.push({date:a[j].Date,confirmed:a[j].Confirmed,recovered:a[j].Recovered,deaths:a[j].Deaths}):i.push({date:a[j].Date,confirmed:a[j].Confirmed-a[j-1].Confirmed,recovered:a[j].Recovered-a[j-1].Recovered,deaths:a[j].Deaths-a[j-1].Deaths});return x(i),e.next=14,k(!0);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(e){var t=e.reduce((function(e,t){var n=new Date(t.Date),a=n.getFullYear(),r=n.getMonth(),c=n.getDate(),o=t.Confirmed,s=t.Active,l=t.Deaths,i=t.Recovered,d=e.find((function(e){return e.year===a&&e.month===r}));return d||e.push({year:a,month:r,date:c,confirmed:o,active:s,death:l,recovered:i}),d&&d.date<c&&(d.year=a,d.month=r,d.date=c,d.confirmed=o,d.active=s,d.death=l,d.recovered=i),e}),[]),n=t.map((function(e){return"".concat(e.year-2e3,"-").concat(e.month+1)}));C({labels:n,datasets:[{label:"\ub204\uc801 \ud655\uc9c4\uc790",backgroundColor:"salmon",fill:!0,data:t.map((function(e){return e.confirmed}))}]})};e()}),[]),Object(b.jsx)(b.Fragment,{children:D?Object(b.jsx)(O,{total:n,today:s,daily:f,monthly:g}):"Loading..."})},w=(n(186),[{value:"",label:"\uc8fc\uc694 \uad6d\uac00 \uc120\ud0dd"},{value:"world",label:"\uc138\uacc4"},{value:"kr",label:"\uad6d\ub0b4"},{value:"cn",label:"\uc911\uad6d"},{value:"jp",label:"\uc77c\ubcf8"},{value:"us",label:"\ubbf8\uad6d"},{value:"gb",label:"\uc601\uad6d"},{value:"il",label:"\uc774\uc2a4\ub77c\uc5d8"}]),N=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)("h1",{children:Object(b.jsx)("a",{href:"/",children:"COVID-19"})}),Object(b.jsx)("select",{onChange:function(e){e.preventDefault(),""!==e.currentTarget.value&&(location.href="".concat(location.origin,"/").concat(e.currentTarget.value))},children:w.map((function(e,t){return Object(b.jsx)("option",{value:e.value,children:e.label},t)}))})]}),Object(b.jsx)("main",{children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",component:R}),Object(b.jsx)(o.a,{exact:!0,path:"/kr",component:R}),Object(b.jsx)(o.a,{exact:!0,path:"/korea-south",component:R}),Object(b.jsx)(o.a,{exact:!0,path:"/world",component:T}),Object(b.jsx)(o.a,{exact:!0,path:"/:slug",component:x})]})})]})},F=n(36);c.a.render(Object(b.jsx)(F.a,{children:Object(b.jsx)(N,{})}),document.getElementById("root"))},65:function(e,t,n){}},[[189,1,2]]]);
//# sourceMappingURL=main.f5be16bb.chunk.js.map