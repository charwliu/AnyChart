if(!_.sparkline){_.sparkline=1;(function($){var $ea=function(a,b){return $.sj(Zea,a,b||"line")},PO=function(a){$.U(this);$.X.call(this);this.Ba=a;this.ja(!1)},QO=function(a,b,c){c?(c=a.ma.left,a=a.ma.width):(c=a.ma.Ma(),a=-a.ma.height);return c+b*a},RO=function(a,b){$.Jt.call(this);this.jz=this.fT;this.state=new $.wt(this);this.b=this.Dc=this.nb=null;this.ia=[];this.Da=[];this.Wa=[];this.ga=null;this.j={};this.Qr=!0;this.ca=new $.tu;this.ca.Js($.un);this.ca.size(10);this.ca.fp("center");this.ca.offsetX(0);this.ca.offsetY(0);this.ca.rotation(0);
this.ca.ib(this);this.ca.ag=afa;this.R=new $.Wt;this.R.positionFormatter($.un);this.R.format($.un);this.R.background(null);this.R.rotation(0);this.R.width(null);this.R.height(null);this.R.fontSize(11);this.R.minFontSize(8);this.R.maxFontSize(72);this.R.ib(this);this.R.ag=bfa;this.data(a||null,b);$.jr(this,this,this.Dj,this.Ln,null,this.Dj,null,this.Mm);$.vo(this.F,[["seriesType",8192,1,0,function(){this.b&&(this.b.Rc(),this.b=null)}],["pointWidth",0,0,0,function(){this.b&&this.b.nC()&&this.b.D(80,
1)}],["connectMissingPoints",0,0,0,function(){this.b&&!this.b.nC()&&this.b.D(80,1)}]])},SO=function(a,b){return $.n(b)?(a.Yf=b,a):a.Yf||{}},TO=function(a,b){return $.n(b)?(a.op=b,a):a.op||{}},UO=function(a,b){return $.n(b)?(a.Bp=b,a):a.Bp||{}},VO=function(a,b){return $.n(b)?(a.Ap=b,a):a.Ap||{}},WO=function(a){var b=a.la(),c=b.get("value"),d=b.sa(),e;$.n(b.get("fill"))?e=b.get("fill"):e=d==b.Hb()-1&&$.n(a.Ft())?a.Ft():!d&&$.n(a.it())?a.it():c==a.pf("max")&&$.n(a.Kt())?a.Kt():c==a.pf("min")&&$.n(a.Ot())?
a.Ot():0>c&&$.n(a.Rt())?a.Rt():a.fill();a=a.gy(e);return $.gc(a)},XO=function(a){return $.hc(a.gy(a.stroke()))},YO=function(a,b){var c;c=a.la().sa();if($.D(b)){var d=$.jc("diagonal-brick");c={index:c,sourceHatchFill:d,iterator:a.la()};c=$.jc(b.call(c))}else c=$.na(b)?b?$.jc("diagonal-brick"):null:$.jc(b);return c},cfa=function(a){var b=a.la(),c=b.get("value"),d=b.sa(),e;$.n(b.get("hatchFill"))?e=b.get("hatchFill"):e=d==b.Hb()-1&&$.n(a.Gt())?a.Gt():!d&&$.n(a.jt())?a.jt():c==a.pf("max")&&$.n(a.Lt())?
a.Lt():c==a.pf("min")&&$.n(a.Pt())?a.Pt():0>c&&$.n(a.St())?a.St():a.Ts();return YO(a,e)},ZO=function(a,b){for(var c={},d=a.length;d--;){var e=a[d];if(e){var f=!$.J(e,$.X);if(f?e.enabled:e.enabled())for(var h=0,k=b.length;h<k;h++){var l=b[h],m=f?e[l]:e[l]();$.n(m)&&(c[l]=$.J(m,$.hp)?m.O():m)}}}return c},$O=function(a,b){for(var c={},d=a.length;d--;){var e=a[d];if(e)for(var f=!$.J(e,$.X),h=0,k=b.length;h<k;h++){var l=b[h],m=f?e[l]:e[l]();$.n(m)&&(c[l]=$.J(m,$.hp)?m.O():m)}}return c},bP=function(a){var b=
a.la(),c=b.get("value"),d=b.sa(),e;e=b.get("marker");var f,h;d==b.Hb()-1?(f=a.Wz(),h=a.j.lastMarkers):d||(f=a.cz(),h=a.j.firstMarkers);var k,l;c==a.pf("max")?(k=a.cA(),l=a.j.maxMarkers):c==a.pf("min")&&(k=a.hA(),l=a.j.minMarkers);var m,p;0>c&&(m=a.oA(),p=a.j.negativeMarkers);var b=a.tb(),c=a.j.markers,q=WO(a),q={fill:q,stroke:$.Ek(q)};h=$O([h,l,p,c,q],aP);e=ZO([e,f,k,m,b],aP);e=$O([e,h],aP);f=a.ca.sm(d);k=null;e.enabled?(k=e.position||a.ca.position(),k=a.b.WI(k),f?f.ic(k):f=a.ca.add(k,d),f.zg(),$.wu(f,
a.ca),f.Ic(e),k=f):f&&f.clear();return k},dP=function(a){var b=a.la(),c=b.get("value"),d=b.sa(),e;e=b.get("label");var f,h;d==b.Hb()-1?(f=a.Vz(),h=a.j.lastLabels):d||(f=a.bz(),h=a.j.firstLabels);var k,l;c==a.pf("max")?(k=a.bA(),l=a.j.maxLabels):c==a.pf("min")&&(k=a.gA(),l=a.j.minLabels);var m,p;0>c&&(m=a.nA(),p=a.j.negativeLabels);b=a.labels();h=$O([h,l,p,a.j.labels],cP);e=ZO([e,f,k,m,b],cP);e=$O([e,h],cP);f=a.R.Od(d);k=null;e.enabled?(k=e.position||a.R.N("position"),k=a.b.WI(k),m=a.b.mc(),f?(f.Pe(m),
f.ic(k)):f=a.R.add(m,k,d),f.zg(),f.Ic(e),k=f):f&&f.clear();return k},eP=function(a){a.b&&a.b.D(80)},fP=function(a){PO.call(this,a);this.path=$.mj();this.path.zIndex(1);this.j=null;this.b=[this.path]},gP=function(a){fP.call(this,a);this.B=$.mj();this.B.zIndex(1.1);this.b.push(this.B)},hP=function(a){PO.call(this,a)},iP=function(a,b){var c=b||a.ma,c=Math.floor((a.Ba.Ra().ZD()||1/a.la().Hb())*c.width),c=Math.floor($.M(a.Ba.N("pointWidth"),c));1>c&&(c=1);return c},jP=function(a){fP.call(this,a)},kP=function(a){PO.call(this,
a)},lP=function(a,b){var c=new RO(a,b);c.ra(!0,$.dl("sparkline"));return c},Zea={uu:"area",Yw:"column",Jn:"line",mia:"win-loss"};$.G(PO,$.or);var mP={};$.g=PO.prototype;$.g.ma=null;$.g.Aa=$.or.prototype.Aa|20;$.g.xa=$.or.prototype.xa|976;$.g.fr=!1;$.g.kg=0;$.g.la=function(){return this.Ba.la()};$.g.lc=function(){return this.Ba.lc()};$.g.Ub=function(){return this.Ba};$.g.jh=function(){return!1};
$.g.lv=function(){if(!this.enabled())return null;var a=this.Ba.Ya(),b=this.Ba.Ra(),c=this.la(),d=!1,e=c.get("x"),c=c.get("value");if(!$.n(e)||!$.n(c))return null;a.Bi(c)&&(c=window.NaN);b=b.Bi(e)?window.NaN:QO(this,b.transform(e,.5),!0);a=QO(this,a.transform(c,.5),!1);if((0,window.isNaN)(b)||(0,window.isNaN)(a))d=!0;return d?null:[b,a]};$.g.nC=function(){return!1};
$.g.rQ=function(){if(this.enabled()&&(this.fr=this.fr?this.hy():this.mC())){var a=dP(this.Ba);a&&a.ea()}this.enabled()&&this.fr&&(a=bP(this.Ba))&&a.ea()};$.g.remove=function(){this.Ba.tb().aa(null);this.g&&this.g.remove();this.Ba.labels().aa(null);PO.J.remove.call(this)};
$.g.lp=function(){this.fr=!1;this.ma=this.kb();this.g||(this.g=$.kj(),$.L(this,this.g));this.gc();var a=this.Ba.R;$.U(a);a.clear();a.aa(this.aa());a.qa(this.kb());a=this.Ba.ca;$.U(a);var b=this.YI();a.vJ=b;b=this.sQ();a.U=b;a.clear();a.aa(this.aa());a.qa(this.ma)};
$.g.XI=function(){var a,b=this.Ba.ca;b.ea();a=$.na(this.Ba.clip())?this.Ba.clip()?this.Ba.kb():"none":this.Ba.clip();var c=b.Qe();c&&c.clip(a);b.ja(!1);b.W(4294967295);b=this.Ba.R;b.ea();(c=b.Qe())&&c.clip(a);b.ja(!1);b&&b.W(4294967295);this.X(2)?this.W(0):this.W(4294967295)};
$.g.mc=function(a){if(!this.ba||a)this.ba=new $.Ps;a=this.la();var b={chart:{value:this.Ub(),type:""},series:{value:this,type:""},index:{value:a.sa(),type:"number"},value:{value:a.get("value"),type:"number"},x:{value:a.get("x"),type:"string"},seriesName:{value:"Series "+a.sa(),type:"string"}};this.ba.xh(a).Gh([this,this.Ub()]).cj({"%XValue":"x"});return $.Ds(this.ba,b)};$.g.Nh=function(){return this.mc()};
$.g.WI=function(a){var b=this.la(),c=b.G("shape");return c?(b=c.ob(),a=$.vj(a),{value:$.Ym(b,a)}):{value:{x:b.G("x"),y:b.G("value")}}};$.g.mC=function(){return this.hy()};$.g.YI=function(){return $.gc(this.Ba.gy(this.Ba.fill()))};$.g.sQ=function(){return $.Ek(this.YI())};$.g.Fp=function(){this.Ba.ca.type("circle").size(1.8).position("center");return{labels:{background:{enabled:!1},position:"center",anchor:"center-bottom"},color:"#4682B4"}};$.G(RO,$.Jt);RO.prototype.Xa=function(){return"sparkline"};RO.prototype.xa=$.Jt.prototype.xa|28672;var afa=40,bfa=40;$.g=RO.prototype;$.g.Uf=function(a){a=RO.J.Uf.call(this,a);var b=this.b&&this.b.ma||$.Zl(0,0,0,0),c=a.clientX,d;d=b.left+$.Ti(this.aa().Ea()).x;b=(c-d)/b.width;b=this.Ra().Gc(b);b=this.data().tI("x",b);0>b&&(b=window.NaN);a.pointIndex=b;return a};$.g.Zc=function(){};
$.g.hn=function(a){var b=this.b&&this.b.ma||$.Zl(0,0,0,0),c=a.clientX;a=a.clientY;var d;d=$.Ti(this.aa().Ea());c-=d.x;a-=d.y;d=b.left;var e=b.top,f=b.width,b=b.height;if(c<d||c>d+f||a<e||a>e+b)return null;b=[];d=(c-d)/f;d=this.Ra().Gc(d);d=$.tp(this.data(),d,$.J(this.Ra(),$.dr));d=d.length?d[0]:window.NaN;e=this.la();e.select(d)&&(f=e.G("x"),e=e.G("value"),c=$.Vl(f,e,c,a),(0,window.isNaN)(f)||(0,window.isNaN)(e)||b.push({ha:this,zc:[d],Rj:d,qd:{index:d,Xe:c}}));return b};$.g.De=function(){return"none"};
$.g.mc=function(){this.ba||(this.ba=new $.Ps);var a=this.la();this.ba.xh(a).Gh([this]);a={x:{value:a.get("x"),type:"string"},value:{value:a.get("value"),type:"number"},index:{value:a.sa(),type:"number"},chart:{value:this,type:""}};$.Ds(this.ba,a);return this.ba};$.g.Nh=function(){return this.mc()};$.g.wq=function(){return!0};$.g.eg=function(a){(a=this.sf(a))&&this.dispatchEvent(a)};
$.g.sf=function(a){var b;"pointIndex"in a?b=a.pointIndex:"labelIndex"in a?b=a.labelIndex:"markerIndex"in a&&(b=a.markerIndex);b=$.P(b);a.pointIndex=b;var c=a.type;switch(c){case "mouseout":c="pointmouseout";break;case "mouseover":c="pointmouseover";break;case "mousemove":c="pointmousemove";break;case "mousedown":c="pointmousedown";break;case "mouseup":c="pointmouseup";break;case "click":c="pointclick";break;case "dblclick":c="pointdblclick";break;default:return null}var d=this.data().la();d.select(b)||
d.reset();return{type:c,actualTarget:a.target,pie:this,iterator:d,sliceIndex:b,pointIndex:b,target:this,originalEvent:a}};$.g.Ag=function(){return this};$.g.vg=function(){return this};$.g.Ce=function(){return[this]};$.g.kd=$.ha;$.g.Vc=function(a){return $.n(a)?(a=$.tj(a),a!=this.ta&&(this.ta=a),this):this.ta};$.g.Fd=function(){return null};$.g.If=function(){return!1};$.g.jh=function(){return!1};$.g.Lh=$.ha;$.g.ii=$.ha;$.g.Ti=$.ha;$.g.yl=$.ha;
var aP="enabled position anchor offsetX offsetY type size fill stroke".split(" "),cP="enabled background padding position anchor offsetX offsetY rotation width height fontSize fontFamily fontColor fontOpacity fontDecoration fontStyle fontVariant fontWeight letterSpacing textDirection lineHeight textIndent vAlign hAlign wordWrap wordBreak textOverflow selectable disablePointerEvents useHtml".split(" ");$.g=RO.prototype;
$.g.Ra=function(a){if($.n(a)){if(a=$.Rq(this.nb,a,null,15))this.nb=a,this.nb.ja(!1),this.D(4096,1);return this}this.nb||(this.nb=$.Qq());return this.nb};$.g.Ya=function(a){if($.n(a)){if(a=$.Rq(this.Dc,a,null,15))this.Dc=a,this.Dc.ja(!1),this.D(4096,1);return this}this.Dc||(this.Dc=$.Nq());return this.Dc};
$.g.SI=function(a,b){var c,d;c=$.P(a);(0,window.isNaN)(c)?(c=0,d=a):(c=a,d=b);var e=this.ia[c];e||(e=new $.Xv,e.Y(TO(this)),this.ia[c]=e,$.L(this,e),$.T(e,this.TI,this),this.D(16384,1));return $.n(d)?(e.Y(d),this):e};$.g.UI=function(a,b){var c,d;c=$.P(a);(0,window.isNaN)(c)?(c=0,d=a):(c=a,d=b);var e=this.Da[c];e||(e=new $.$v,e.Y(VO(this)),this.Da[c]=e,$.L(this,e),$.T(e,this.TI,this),this.D(16384,1));return $.n(d)?(e.Y(d),this):e};
$.g.VI=function(a,b){var c,d;c=$.P(a);(0,window.isNaN)(c)?(c=0,d=a):(c=a,d=b);var e=this.Wa[c];e||(e=new $.cw,e.Y(UO(this)),this.Wa[c]=e,$.L(this,e),$.T(e,this.TI,this),this.D(16384,1));return $.n(d)?(e.Y(d),this):e};$.g.TI=function(){this.D(16384,1)};
$.g.data=function(a,b){return $.n(a)?(this.Ta!==a&&(this.Ta=a,$.K(this.$),$.J(a,$.rp)?this.Sa=this.$=a.Lk():this.Sa=$.J(a,$.Bp)?this.$=a.ue():(this.$=new $.Bp($.y(a)||$.B(a)?a:null,b)).ue(),$.L(this,this.$),this.Fa=this.Sa,$.T(this.Fa,this.p4,this),this.b&&this.b.D(16,21),this.D(256,1)),this):this.Fa};$.g.p4=function(a){$.W(a,16)&&(this.b&&this.b.D(16,21),this.D(256,1))};$.g.la=function(){return this.Ca||this.lc()};$.g.lc=function(){return this.Ca=this.data().la()};
$.g.q4=function(a){var b=0;$.W(a,32768)&&(b|=256);$.W(a,2048)&&(b=32);$.W(a,1)&&(b=8192);$.W(a,16)&&(b|=8448,eP(this));$.W(a,4)&&(b|=4096);this.D(b,1)};var nP=function(){var a={};$.R(a,0,"seriesType",$ea);$.R(a,0,"pointWidth",function(a){return $.Sm(a,this.N("pointWidth"))});$.R(a,0,"connectMissingPoints",$.Eo);return a}();$.Ho(RO,nP);$.g=RO.prototype;$.g.clip=function(a){return $.n(a)?(null===a&&(a=!1),this.U!=a&&(this.U=a,this.b&&this.b.D(4,9)),this):this.U};
$.g.gy=function(a,b){var c;$.D(a)?(c=1<arguments.length?this.gy.apply(this,$.cb(arguments,1)):this.j.color,c={index:this.la().sa(),sourceColor:c,iterator:this.la()},c=a.call(c)):c=a;return c};$.g.fill=function(a,b,c,d,e,f,h){if($.n(a)){var k=$.D(a)?a:$.gc.apply(null,arguments);k!=this.I&&(this.I=k,this.b&&this.b.D(16,1));return this}return this.I||this.j.fill};
$.g.Rt=function(a,b,c,d,e,f,h){if($.n(a)){var k=$.D(a)?a:$.gc.apply(null,arguments);k!=this.lg&&(this.lg=k,this.b&&this.b.D(16,1));return this}return this.lg||this.j.negativeFill};$.g.it=function(a,b,c,d,e,f,h){if($.n(a)){var k=$.D(a)?a:$.gc.apply(null,arguments);k!=this.me&&(this.me=k,this.b&&this.b.D(16,1));return this}return this.me||this.j.firstFill};
$.g.Ft=function(a,b,c,d,e,f,h){if($.n(a)){var k=$.D(a)?a:$.gc.apply(null,arguments);k!=this.Me&&(this.Me=k,this.b&&this.b.D(16,1));return this}return this.Me||this.j.lastFill};$.g.Kt=function(a,b,c,d,e,f,h){if($.n(a)){var k=$.D(a)?a:$.gc.apply(null,arguments);k!=this.Ye&&(this.Ye=k,this.b&&this.b.D(16,1));return this}return this.Ye||this.j.maxFill};
$.g.Ot=function(a,b,c,d,e,f,h){if($.n(a)){var k=$.D(a)?a:$.gc.apply(null,arguments);k!=this.jf&&(this.jf=k,this.b&&this.b.D(16,1));return this}return this.jf||this.j.minFill};$.g.stroke=function(a,b,c,d,e){if($.n(a)){var f=$.D(a)?a:$.hc.apply(null,arguments);f!=this.o&&(this.o=f,this.b&&this.b.D(16,1));return this}return this.o||this.j.stroke};
$.g.Ts=function(a,b,c,d){if($.n(a)){var e=$.D(a)||$.na(a)?a:$.jc.apply(null,arguments);e!=this.K&&(this.K=e,this.b&&this.b.D(64,1));return this}return $.n(this.K)?this.K:this.j.hatchFill};$.g.St=function(a,b,c,d){if($.n(a)){var e=$.D(a)||$.na(a)?a:$.jc.apply(null,arguments);e!=this.nd&&(this.nd=e,this.b&&this.b.D(64,1));return this}return $.n(this.nd)?this.nd:this.j.negativeHatchFill};
$.g.jt=function(a,b,c,d){if($.n(a)){var e=$.D(a)||$.na(a)?a:$.jc.apply(null,arguments);e!=this.ye&&(this.ye=e,this.b&&this.b.D(64,1));return this}return this.ye||this.j.firstHatchFill};$.g.Gt=function(a,b,c,d){if($.n(a)){var e=$.D(a)||$.na(a)?a:$.jc.apply(null,arguments);e!=this.Ve&&(this.Ve=e,this.b&&this.b.D(64,1));return this}return this.Ve||this.j.lastHatchFill};
$.g.Lt=function(a,b,c,d){if($.n(a)){var e=$.D(a)||$.na(a)?a:$.jc.apply(null,arguments);e!=this.Ze&&(this.Ze=e,this.b&&this.b.D(64,1));return this}return this.Ze||this.j.maxHatchFill};$.g.Pt=function(a,b,c,d){if($.n(a)){var e=$.D(a)||$.na(a)?a:$.jc.apply(null,arguments);e!=this.kf&&(this.kf=e,this.b&&this.b.D(64,1));return this}return this.kf||this.j.minHatchFill};
$.g.tb=function(a){this.g||(this.g=new $.uu,$.L(this,this.g),$.T(this.g,this.Wk,this));return $.n(a)?(!$.A(a)||"enabled"in a||(a.enabled=!0),this.g.Y(a),this):this.g};$.g.oA=function(a){this.Tc||(this.Tc=new $.uu,$.L(this,this.Tc),$.T(this.Tc,this.Wk,this));return $.n(a)?(!$.A(a)||"enabled"in a||(a.enabled=!0),this.Tc.Y(a),this):this.Tc};
$.g.cz=function(a){this.Na||(this.Na=new $.uu,$.L(this,this.Na),$.T(this.Na,this.Wk,this));return $.n(a)?(!$.A(a)||"enabled"in a||(a.enabled=!0),this.Na.Y(a),this):this.Na};$.g.Wz=function(a){this.bb||(this.bb=new $.uu,$.L(this,this.bb),$.T(this.bb,this.Wk,this));return $.n(a)?(!$.A(a)||"enabled"in a||(a.enabled=!0),this.bb.Y(a),this):this.bb};
$.g.cA=function(a){this.Jb||(this.Jb=new $.uu,$.L(this,this.Jb),$.T(this.Jb,this.Wk,this));return $.n(a)?(!$.A(a)||"enabled"in a||(a.enabled=!0),this.Jb.Y(a),this):this.Jb};$.g.hA=function(a){this.jc||(this.jc=new $.uu,$.L(this,this.jc),$.T(this.jc,this.Wk,this));return $.n(a)?(!$.A(a)||"enabled"in a||(a.enabled=!0),this.jc.Y(a),this):this.jc};$.g.Wk=function(a){$.W(a,1)&&this.b&&this.b.D(128,1)};
$.g.labels=function(a){this.Ha||(this.Ha=new $.au,$.L(this,this.Ha),$.T(this.Ha,this.Bd,this));return $.n(a)?(!$.A(a)||"enabled"in a||(a.enabled=!0),this.Ha.Y(a),this):this.Ha};$.g.nA=function(a){this.Jc||(this.Jc=new $.au,$.L(this,this.Jc),$.T(this.Jc,this.Bd,this));return $.n(a)?(!$.A(a)||"enabled"in a||(a.enabled=!0),this.Jc.Y(a),this):this.Jc};
$.g.bz=function(a){this.Ka||(this.Ka=new $.au,$.L(this,this.Ka),$.T(this.Ka,this.Bd,this));return $.n(a)?(!$.A(a)||"enabled"in a||(a.enabled=!0),this.Ka.Y(a),this):this.Ka};$.g.Vz=function(a){this.lb||(this.lb=new $.au,$.L(this,this.lb),$.T(this.lb,this.Bd,this));return $.n(a)?(!$.A(a)||"enabled"in a||(a.enabled=!0),this.lb.Y(a),this):this.lb};
$.g.bA=function(a){this.Gb||(this.Gb=new $.au,$.L(this,this.Gb),$.T(this.Gb,this.Bd,this));return $.n(a)?(!$.A(a)||"enabled"in a||(a.enabled=!0),this.Gb.Y(a),this):this.Gb};$.g.gA=function(a){this.ac||(this.ac=new $.au,$.L(this,this.ac),$.T(this.ac,this.Bd,this));return $.n(a)?(!$.A(a)||"enabled"in a||(a.enabled=!0),this.ac.Y(a),this):this.ac};$.g.Bd=function(a){$.W(a,1)&&this.b&&this.b.D(256,1)};
$.g.Bc=function(){var a,b;if(this.X(4096)){this.fl={};var c,d=this.Ra(),e=this.Ya();d.ef()&&d.Bf();e.ef()&&e.Bf();for(a=this.lc();a.advance();)c=a.get("x"),b=a.get("value"),$.n(c)&&d.Uc(c),$.n(b)&&e.Uc(b);a=!1;d.ef()&&(a|=d.Ff());e.ef()&&(a|=e.Ff());a&&eP(this);var d=-window.Infinity,e=window.Infinity,f=c=0;for(a=this.lc();a.advance();){var h=this.la();b=this.Ya();h=h.get("value");if(b=b.Bi(h)?null:h)b=$.P(b),(0,window.isNaN)(b)||(d=Math.max(d,b),e=Math.min(e,b),c+=b);f++}a=c/f;this.Ga("max",d);this.Ga("min",
e);this.Ga("sum",c);this.Ga("average",a);this.Ga("pointsCount",f);this.W(4096)}};
$.g.mi=function(a){if(this.X(8192)&&!this.b){var b=this.N("seriesType"),c=mP[b];c?(c=new c(this),$.L(this,c),this.b=c,c.ag=30,$.T(c,this.q4,this),this.j=SO(this)[$.fl(b)]||this.b.Fp(),this.D(12288,1)):($.ck(4,null,[b+" series"]),c=null);this.b=c}this.Bc();if(!$.kp(this)){$.mp(this.b);this.X(4)&&(this.ga=a.clone().round(),this.b.nC()&&(c=this.b,a=this.ga,b=c.lc().Hb(),c=iP(c,a),b=(a.width-b*c)%(b-1),a.height%2&&--a.height,b&&(a.left+=Math.floor(b/2),a.width-=b)),eP(this),this.D(24576));if(this.X(16384)){a=
$.$a(this.ia,this.Da,this.Wa);b=0;for(c=a.length;b<c;b++){var d=a[b];d&&($.U(d),d.Bb()?d.scale(this.Ya()):d.scale(this.Ra()),d.qa(this.ga),d.aa(this.Va),d.ea(),d.ja(!1))}this.W(16384)}if(this.X(8192)){if(a=this.b){a.aa(this.Va);a.qa(this.ga);this.b.lp();for(a=this.lc();a.advance();)this.b.rQ();this.b.XI();this.tb().W(4294967295);this.hA().W(4294967295);this.cA().W(4294967295);this.oA().W(4294967295);this.cz().W(4294967295);this.Wz().W(4294967295);this.labels().W(4294967295);this.gA().W(4294967295);
this.bA().W(4294967295);this.nA().W(4294967295);this.bz().W(4294967295);this.Vz().W(4294967295)}this.W(8192)}$.op(this.b)}};$.g.Lv=function(){return["x"]};$.g.Mv=function(a){return a.get("x")};$.g.Kv=function(a){a=a.get("name");return $.B(a)?a:null};$.g.Ej=function(){return!this.la().Hb()||!(this.b&&this.b.enabled())};
$.g.fa=function(a,b){RO.J.fa.call(this,a,b);"defaultLabelSettings"in a&&$.Kt(this,a.defaultLabelSettings);if("defaultMarkerSettings"in a){var c=a.defaultMarkerSettings;$.n(c)&&(this.Vd=c)}"defaultSeriesSettings"in a&&SO(this,a.defaultSeriesSettings);"defaultLineMarkerSettings"in a&&TO(this,a.defaultLineMarkerSettings);"defaultTextMarkerSettings"in a&&UO(this,a.defaultTextMarkerSettings);"defaultRangeMarkerSettings"in a&&VO(this,a.defaultRangeMarkerSettings);var d,e,f=a.lineAxesMarkers,h=a.rangeAxesMarkers,
k=a.textAxesMarkers,l=a.scales;this.data(a.data);$.Ko(this,nP,a);this.clip(a.clip);this.data(a.data);var m=this.Xa(),p={};if($.y(l))for(d=0;d<l.length;d++)c=l[d],$.B(c)&&(c={type:c}),c=$.gl(c,d,m),e=$.Lq(c.type,!1),e.Y(c),p[d]=e;else if($.A(l))for(d in l)l.hasOwnProperty(d)&&(c=l[d],$.B(c)&&(c={type:c}),c=$.gl(c,d,m),e=$.Lq(c.type,!1),e.Y(c),p[d]=e);c=a.xScale;$.C(c)?e=p[c]:$.B(c)?(e=$.Lq(c,null))||(e=p[c]):$.A(c)?(e=$.Lq(c.type,!0),e.Y(c)):e=null;e&&this.Ra(e);c=a.yScale;$.C(c)?e=p[c]:$.B(c)?(e=
$.Lq(c,null))||(e=p[c]):$.A(c)?(e=$.Lq(c.type,!1),e.Y(c)):e=null;e&&this.Ya(e);if($.y(f))for(d=0;d<f.length;d++)c=f[d],this.SI(d,c),$.A(c)&&"scale"in c&&1<c.scale&&this.SI(d).scale(p[c.scale]);if($.y(h))for(d=0;d<h.length;d++)c=h[d],this.UI(d,c),$.A(c)&&"scale"in c&&1<c.scale&&this.UI(d).scale(p[c.scale]);if($.y(k))for(d=0;d<k.length;d++)c=k[d],this.VI(d,c),$.A(c)&&"scale"in c&&1<c.scale&&this.VI(d).scale(p[c.scale]);this.stroke(a.stroke);this.Ft(a.lastFill);this.it(a.firstFill);this.Kt(a.maxFill);
this.Ot(a.minFill);this.Rt(a.negativeFill);this.fill(a.fill);this.Gt(a.lastHatchFill);this.jt(a.firstHatchFill);this.Lt(a.maxHatchFill);this.Pt(a.minHatchFill);this.St(a.negativeHatchFill);this.Ts(a.hatchFill);a.lastMarkers&&this.Wz().ra(!!b,a.lastMarkers);a.firstMarkers&&this.cz().ra(!!b,a.firstMarkers);a.maxMarkers&&this.cA().ra(!!b,a.maxMarkers);a.minMarkers&&this.hA().ra(!!b,a.minMarkers);a.negativeMarkers&&this.oA().ra(!!b,a.negativeMarkers);a.markers&&this.tb().ra(!!b,a.markers);a.firstLabels&&
this.bz().ra(!!b,a.firstLabels);a.lastLabels&&this.Vz().ra(!!b,a.lastLabels);a.maxLabels&&this.bA().ra(!!b,a.maxLabels);a.minLabels&&this.gA().ra(!!b,a.minLabels);a.negativeLabels&&this.nA().ra(!!b,a.negativeLabels);a.labels&&this.labels().ra(!!b,a.labels)};
$.g.O=function(){var a=RO.J.O.call(this),b,c={},d=[],e,f,h;c[$.qa(this.Ra())]=this.Ra().O();d.push(c[$.qa(this.Ra())]);a.xScale=d.length-1;this.Ra()!=this.Ya()&&(c[$.qa(this.Ya())]=this.Ya().O(),d.push(c[$.qa(this.Ya())]));a.yScale=d.length-1;a.type="sparkline";$.To(this,nP,a);a.clip=$.J(this.U,$.I)?this.U.O():this.U;a.data=this.data().O();$.D(this.lastFill)&&($.D(this.Ft())?$.ek(8,null,["Series last fill"]):$.n(this.Ft())&&(a.lastFill=$.Fk(this.Ft())));$.D(this.lastHatchFill)&&($.D(this.Gt())?$.ek(8,
null,["Series last hatch fill"]):$.n(this.Gt())&&(a.lastHatchFill=$.Fk(this.Gt())));a.lastMarkers=this.Wz().O();a.lastLabels=this.Vz().O();$.D(this.firstFill)&&($.D(this.it())?$.ek(8,null,["Series first fill"]):$.n(this.it())&&(a.firstFill=$.Fk(this.it())));$.D(this.firstHatchFill)&&($.D(this.jt())?$.ek(8,null,["Series first hatch fill"]):$.n(this.jt())&&(a.firstHatchFill=$.Fk(this.jt())));a.firstMarkers=this.cz().O();a.firstLabels=this.bz().O();$.D(this.maxFill)&&($.D(this.Kt())?$.ek(8,null,["Series max fill"]):
$.n(this.Kt())&&(a.maxFill=$.Fk(this.Kt())));$.D(this.maxHatchFill)&&($.D(this.Lt())?$.ek(8,null,["Series max hatch fill"]):$.n(this.Lt())&&(a.maxHatchFill=$.Fk(this.Lt())));a.maxMarkers=this.cA().O();a.maxLabels=this.bA().O();$.D(this.minFill)&&($.D(this.Ot())?$.ek(8,null,["Series min fill"]):$.n(this.Ot())&&(a.minFill=$.Fk(this.Ot())));$.D(this.minHatchFill)&&($.D(this.Pt())?$.ek(8,null,["Series min hatch fill"]):$.n(this.Pt())&&(a.minHatchFill=$.Fk(this.Pt())));a.minMarkers=this.hA().O();a.minLabels=
this.gA().O();$.D(this.negativeFill)&&($.D(this.Rt())?$.ek(8,null,["Series negative fill"]):$.n(this.Rt())&&(a.negativeFill=$.Fk(this.Rt())));$.D(this.negativeHatchFill)&&($.D(this.St())?$.ek(8,null,["Series negative hatch fill"]):$.n(this.St())&&(a.negativeHatchFill=$.Fk(this.St())));a.negativeMarkers=this.oA().O();a.negativeLabels=this.nA().O();$.D(this.fill)&&($.D(this.fill())?$.ek(8,null,["Series fill"]):$.n(this.fill())&&(a.fill=$.Fk(this.fill())));$.D(this.hatchFill)&&($.D(this.Ts())?$.ek(8,
null,["Series hatch fill"]):$.n(this.Ts())&&(a.hatchFill=$.Fk(this.Ts())));a.markers=this.tb().O();a.labels=this.labels().O();$.D(this.stroke)&&($.D(this.stroke())?$.ek(8,null,["Series stroke"]):$.n(this.stroke())&&(a.stroke=$.Fk(this.stroke())));var k=[];for(b=0;b<this.ia.length;b++)if(e=this.ia[b]){f=e.O();if(e=e.scale())h=$.qa(e),c[h]?f.scale=(0,$.Sa)(d,c[h]):(c[h]=e.O(),d.push(c[h]),f.scale=d.length-1);k.push(f)}k.length&&(a.lineAxesMarkers=k);k=[];for(b=0;b<this.Da.length;b++)if(e=this.Da[b]){f=
e.O();if(e=e.scale())h=$.qa(e),c[h]?f.scale=(0,$.Sa)(d,c[h]):(c[h]=e.O(),d.push(c[h]),f.scale=d.length-1);k.push(f)}k.length&&(a.rangeAxesMarkers=k);k=[];for(b=0;b<this.Wa.length;b++)if(e=this.Wa[b]){f=e.O();if(e=e.scale())h=$.qa(e),c[h]?f.scale=(0,$.Sa)(d,c[h]):(c[h]=e.O(),d.push(c[h]),f.scale=d.length-1);k.push(f)}k.length&&(a.textAxesMarkers=k);a.scales=d;return{chart:a}};$.Xn.sparkline=lP;var oP=RO.prototype;$.F("anychart.sparkline",lP);oP.xScale=oP.Ra;oP.yScale=oP.Ya;oP.lineMarker=oP.SI;
oP.rangeMarker=oP.UI;oP.textMarker=oP.VI;oP.data=oP.data;oP.clip=oP.clip;oP.lastFill=oP.Ft;oP.lastHatchFill=oP.Gt;oP.lastMarkers=oP.Wz;oP.lastLabels=oP.Vz;oP.firstFill=oP.it;oP.firstHatchFill=oP.jt;oP.firstMarkers=oP.cz;oP.firstLabels=oP.bz;oP.maxFill=oP.Kt;oP.maxHatchFill=oP.Lt;oP.maxMarkers=oP.cA;oP.maxLabels=oP.bA;oP.minFill=oP.Ot;oP.minHatchFill=oP.Pt;oP.minMarkers=oP.hA;oP.minLabels=oP.gA;oP.negativeFill=oP.Rt;oP.negativeHatchFill=oP.St;oP.negativeMarkers=oP.oA;oP.negativeLabels=oP.nA;
oP.fill=oP.fill;oP.hatchFill=oP.Ts;oP.markers=oP.tb;oP.labels=oP.labels;oP.stroke=oP.stroke;oP.getType=oP.Xa;oP.noData=oP.Mq;$.G(fP,PO);$.g=fP.prototype;$.g.rQ=function(){if(this.enabled()){var a;if(a=this.fr?this.hy():this.mC()){var b=bP(this.Ba);b&&b.ea();(b=dP(this.Ba))&&b.ea()}this.fr=this.Ba.N("connectMissingPoints")&&this.fr||a}};
$.g.lp=function(){fP.J.lp.call(this);if(!$.kp(this)&&this.enabled()){var a=this.Ba.Ya().transform(0);(0,window.isNaN)(a)&&(a=0);this.kg=QO(this,$.sb(a,0,1),!1);var b,a=this.b.length;this.X(8)&&(this.g.zIndex(this.zIndex()),this.W(8));this.X(4)&&(this.Ba.clip()&&($.na(this.Ba.clip())?b=this.ma:b=this.Ba.clip(),this.g.clip(b)),this.W(4));if(this.X(16)){for(b=0;b<a;b++)this.b[b].clear();this.tQ()}if(this.X(2)){b=this.aa();this.g.parent(b);for(b=0;b<a;b++)this.b[b].parent(this.g);this.j&&this.j.parent(this.g);
this.W(2)}this.X(64)&&!this.j&&(this.j=$.mj(),this.j.parent(this.g),this.j.zIndex(2),this.j.cd(!0))}};$.g.XI=function(){this.ZI();this.TS();fP.J.XI.call(this)};$.g.WI=function(){var a=this.la();return{value:{x:a.G("x"),y:a.G("value")}}};$.g.ZI=$.ha;$.g.TS=$.ha;$.g.tQ=function(){this.path.stroke(XO(this.Ba),1);this.path.fill(null)};$.G(gP,fP);mP.area=gP;$.g=gP.prototype;$.g.lp=function(){gP.J.lp.call(this);this.o=window.NaN};$.g.tQ=function(){var a=$.gc(this.Ba.gy(this.Ba.fill()));this.path.stroke(null);this.path.fill(a);this.B.stroke(XO(this.Ba));this.B.fill(null)};$.g.TS=function(){this.X(64)&&this.j&&(this.j.sd(this.path.O()),this.j&&(this.j.stroke(null),this.j.fill(YO(this.Ba,this.Ba.Ts()))))};
$.g.mC=function(){var a=this.lv();if(!a)return!1;if(this.X(16)){var b=a[0],a=a[1];this.ZI();this.path.moveTo(b,this.kg).lineTo(b,a);this.B.moveTo(b,a);this.o=b;this.la().G("x",b).G("value",a)}return!0};$.g.hy=function(){var a=this.lv();if(!a)return!1;if(this.X(16)){var b=a[0],a=a[1];this.path.lineTo(b,a);this.B.lineTo(b,a);this.o=b;this.la().G("x",b).G("value",a)}return!0};$.g.ZI=function(){(0,window.isNaN)(this.o)||this.path.lineTo(this.o,this.kg).close()};
$.g.Fp=function(){var a=gP.J.Fp.call(this);a.stroke={color:"#64b5f6",thickness:1.5};a.fill={color:"#64b5f6",opacity:.5};return a};$.G(hP,PO);mP.column=hP;$.g=hP.prototype;$.g.Va=null;$.g.so=null;$.g.nC=function(){return!0};$.g.SV=function(){return $.ij()};
$.g.lp=function(){hP.J.lp.call(this);var a=this.Ba.Ya().transform(0);(0,window.isNaN)(a)&&(a=0);this.kg=QO(this,$.sb(a,0,1),!1);!$.kp(this)&&this.enabled()&&(this.Va||(this.Va=new $.Tx(this.SV,$.ha),this.Va.zIndex(1)),this.X(8)&&(this.g.zIndex(this.zIndex()),this.W(8)),this.X(4)&&(a=$.na(this.Ba.clip())?this.Ba.clip()?this.ma:"none":this.Ba.clip(),this.g.clip(a),this.W(4)),this.X(16)&&this.Va.clear(),this.X(64)&&(this.so||(this.so=new $.Tx(this.SV,$.ha),this.so.parent(this.g),this.so.zIndex(2),this.so.cd(!0)),
this.so.clear()),this.X(2)&&(this.g.parent(this.aa()),this.Va.parent(this.g),this.so&&this.so.parent(this.g),this.W(2)))};
$.g.hy=function(){var a=this.lv();if(!a)return!1;if(this.X(16)){var b=a[0],c=a[1],c=c<this.kg?Math.ceil(c):Math.floor(c),a=$.Ux(this.Va),d=iP(this),e=d%2?.5:0;this.la().G("x",b).G("value",c).G("shape",a);var f=Math.min(this.kg,c),c=Math.abs(this.kg-c);a.Wl(Math.ceil(b+e-d/2)).Xl(f).Vl(d).Ul(c);b=this.la().G("shape");$.n(b)&&(b.fill(WO(this.Ba)),b.stroke(null))}this.X(64)&&(a=this.la(),b=this.so?$.Ux(this.so):null,a.G("hatchFillShape",b),a=a.G("shape"),$.n(a)&&b&&b.sd(a.O()),(b=this.la().G("hatchFillShape"))&&
b.stroke(null).fill(cfa(this.Ba)));return!0};
$.g.Fp=function(){var a=hP.J.Fp.call(this);a.markers||(a.markers={});a.markers.position="center-top";a.labels||(a.labels={});a.labels.position="center-top";a.labels.anchor="center-bottom";a.negativeMarkers||(a.negativeMarkers={});a.negativeMarkers.position="center-bottom";a.negativeLabels||(a.negativeLabels={});a.negativeLabels.position="center-bottom";a.negativeLabels.anchor="center-top";a.stroke={color:"#64b5f6",thickness:1.5};a.fill={color:"#64b5f6",opacity:.7};a.negativeFill={color:"#ef6c00",
opacity:.7};return a};$.G(jP,fP);mP.line=jP;$.g=jP.prototype;$.g.mC=function(){var a=this.lv();if(!a)return!1;if(this.X(16)){var b=a[0],a=a[1];this.path.moveTo(b,a);this.la().G("x",b).G("value",a)}return!0};$.g.hy=function(){var a=this.lv();if(!a)return!1;if(this.X(16)){var b=a[0],a=a[1];this.path.lineTo(b,a);this.la().G("x",b).G("value",a)}return!0};$.g.YI=function(){return XO(this.Ba)};$.g.sQ=function(){return $.Ek(XO(this.Ba))};
$.g.Fp=function(){var a=jP.J.Fp.call(this);a.stroke={color:"#64b5f6",thickness:1.5};a.fill={color:"#64b5f6",opacity:.5};return a};$.G(kP,hP);mP["win-loss"]=kP;kP.prototype.lp=function(){kP.J.lp.call(this);this.kg=Math.round(QO(this,.5,!1))};kP.prototype.lv=function(){if(!this.enabled())return null;var a=this.Ba.Ya(),b=this.Ba.Ra(),c=this.la(),d=!1,e=c.get("x"),c=c.get("value"),c=0<c?a.Id()?0:1:0>c?a.Id()?1:0:.5;if(!$.n(e)||!$.n(c))return null;a.Bi(c)&&(c=window.NaN);a=b.Bi(e)?window.NaN:QO(this,b.transform(e,.5),!0);b=QO(this,c,!1);if((0,window.isNaN)(a)||(0,window.isNaN)(b))d=!0;return d?null:[a,b]};
kP.prototype.Fp=function(){var a=kP.J.Fp.call(this);a.markers||(a.markers={});a.markers.position="center-top";a.markers.anchor="center-top";a.labels||(a.labels={});a.labels.position="center-top";a.labels.anchor="center-top";a.negativeMarkers||(a.negativeMarkers={});a.negativeMarkers.position="center-bottom";a.negativeMarkers.anchor="center-bottom";a.negativeLabels||(a.negativeLabels={});a.negativeLabels.position="center-bottom";a.negativeLabels.anchor="center-bottom";a.stroke={color:"#64b5f6",thickness:1.5};
a.fill={color:"#64b5f6",opacity:.7};a.negativeFill={color:"#ef6c00",opacity:.7};return a};$.Xn.sparkline=lP;$.F("anychart.sparkline",lP);}).call(this,$)}
