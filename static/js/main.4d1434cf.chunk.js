(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,,,function(e,t,n){e.exports={section:"Section_section__Ap5Zy",title:"Section_title__2S6oE"}},,function(e,t,n){e.exports={button:"FeedbackOptions_button__3n-hy"}},function(e,t,n){e.exports={message:"Notification_message__eciZi"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(5),r=n.n(i),o=(n(12),n(2)),a=n(0),j=function(e){var t=e.good,n=e.neutral,c=e.bad,s=e.total,i=e.positiveFeedback;return Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:["Good: ",Object(a.jsx)("span",{children:t})]}),Object(a.jsxs)("li",{children:["Neutral: ",Object(a.jsx)("span",{children:n})]}),Object(a.jsxs)("li",{children:["Bad: ",Object(a.jsx)("span",{children:c})]}),Object(a.jsxs)("li",{children:["Total: ",Object(a.jsx)("span",{children:s})]}),Object(a.jsxs)("li",{children:["Positive feedback: ",Object(a.jsx)("span",{children:i})," %"]})]})},b=n(4),l=n.n(b),u=function(e){var t=e.title,n=e.children;return Object(a.jsxs)("section",{className:l.a.section,children:[Object(a.jsx)("h2",{className:l.a.title,children:t}),n]})},d=n(6),h=n.n(d),O=function(e){var t=e.options,n=e.onLeaveFeedback;return t.map((function(e){return Object(a.jsx)("button",{type:"button",className:h.a.button,onClick:function(){return n(e)},children:e},e)}))},x=n(7),f=n.n(x),p=function(e){var t=e.message;return Object(a.jsx)("p",{className:f.a.message,children:t})};var k=function(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(0),r=Object(o.a)(i,2),b=r[0],l=r[1],d=Object(c.useState)(0),h=Object(o.a)(d,2),x=h[0],f=h[1],k=function(){return n+x+b};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:" Our visitors feedback"}),Object(a.jsx)(u,{title:"Please, leave your feedback! This is important for us!",children:Object(a.jsx)(O,{options:["good","neutral","bad"],onLeaveFeedback:function(e){return"good"===e?s((function(e){return e+1})):"neutral"===e?l((function(e){return e+1})):"bad"===e?f((function(e){return e+1})):console.error("feedbackType error")}})}),Object(a.jsx)(u,{title:"STATISTICS",children:k()>0?Object(a.jsx)(j,{good:n,neutral:b,bad:x,total:k(),positivePercentage:Math.round(n/(.01*k()))||0}):Object(a.jsx)(p,{message:"No feedback given"})})]})};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.4d1434cf.chunk.js.map