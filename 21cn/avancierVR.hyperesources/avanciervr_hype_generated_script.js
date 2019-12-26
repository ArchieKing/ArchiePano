//	HYPE.documents["avancierVR"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="avancierVR.hyperesources",c="avancierVR",e="avanciervr_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src;if(null!=b&&-1!=b.indexOf("avanciervr_hype_generated_script.js")){h=b.substr(0,b.lastIndexOf("/"));break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_530","HYPE_dtl_530",!0==(null!=a&&10>a||false==!0)?"HYPE-530.full.min.js":"HYPE-530.thin.min.js"),false==!0&&(a=a||l("HYPE_w_530","HYPE_wdtl_530","HYPE-530.waypoints.min.js")),a))return;
f=window.HYPE.documents;if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);for(var d=document.getElementsByTagName("div"),b=!1,a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),
d[b[a].name]=function(){}}a=new HYPE_530(c,e,{"3":{p:1,n:"menu_cxzs.png",g:"13",t:"@1x"},"1":{p:1,n:"menu_mtzx.png",g:"7",t:"@1x"},"4":{p:1,n:"s12_zi1.png",g:"15",t:"@1x"},"2":{p:1,n:"menu_kcdt.png",g:"11",t:"@1x"},"0":{p:1,n:"menu_wymc.png",g:"5",t:"@1x"}},h,[],d,[{n:"Untitled Scene",o:"1",X:[0]}],[{o:"3",p:"600px",x:0,cA:false,Z:736,Y:414,c:"#FFFFFF",L:[],bY:1,d:414,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["27","20","26","23","24","25","22","21"],v:{"26":{c:419,bS:32,d:741,I:"None",e:0.774129746835443,J:"None",bL:0,bD:"none",K:"None",BDbL:0,g:"#000000",L:"None",M:0,N:0,A:"#D8DDE4",x:"visible",j:"absolute",O:0,k:"div",B:"#D8DDE4",C:"#D8DDE4",z:6,P:0,D:"#D8DDE4",a:0,b:0},"21":{x:"visible",bL:0,k:"div",c:490,d:720,z:1,a:0,j:"absolute",b:0},"24":{h:"11",p:"no-repeat",x:"visible",a:0,q:"100% 100%",bS:32,j:"absolute",b:359,z:3,k:"div",bF:"21",d:181,c:489,r:"inline",bD:"none"},"27":{b:424,z:8,K:"Solid",c:162,L:"Solid",d:38,aS:6,M:1,bD:"none",aT:6,N:1,O:1,g:"#F0F0F0",aU:6,P:1,Q:3,aV:6,R:"#808080",j:"absolute",S:0,aI:6,k:"div",T:0,l:0,aJ:6,m:"#D8D8D8",n:"#FFFFFF",aK:6,aL:6,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:23,aA:{a:[{j:"http://720yun.com/t/f6a2auaOutg",p:5,k:false}]},F:"center",G:"#000000",aP:"pointer",w:"\u8fdb\u5165VR\u7a7a\u95f4",x:"visible",I:"Solid",a:122,y:"preserve",J:"Solid"},"22":{h:"7",p:"no-repeat",x:"visible",a:0,q:"100% 100%",bS:32,j:"absolute",b:0,z:1,k:"div",bF:"21",d:180,c:490,r:"inline",bD:"none"},"25":{h:"5",p:"no-repeat",x:"visible",a:0,q:"100% 100%",bS:32,j:"absolute",b:180,z:2,k:"div",bF:"21",d:179,c:484,r:"inline",bD:"none"},"20":{h:"15",p:"no-repeat",x:"visible",bS:32,q:"100% 100%",aW:0.1093255537974684,a:0,j:"absolute",z:7,k:"div",aX:5,d:78.996499999999997,b:280,c:414,r:"inline",bD:"none"},"23":{w:"",h:"13",p:"no-repeat",x:"visible",bS:32,q:"100% 100%",a:0,j:"absolute",b:540,z:4,k:"div",bF:"21",d:180,c:486,r:"inline",bD:"none"}}}],{},g,{},
(function (shouldShow, mainContentContainer) {
	var loadingPageID = mainContentContainer.id + "_loading";
	var loadingDiv = document.getElementById(loadingPageID);

	if(shouldShow == true) {
		if(loadingDiv == null) {	
			loadingDiv = document.createElement("div");
			loadingDiv.id = loadingPageID;
			loadingDiv.style.cssText = "overflow:hidden;position:absolute;width:150px;top:40%;left:0;right:0;margin:auto;padding:2px;border:3px solid #BBB;background-color:#EEE;border-radius:10px;text-align:center;font-family:Helvetica,Sans-Serif;font-size:13px;font-weight:700;color:#AAA;z-index:100000;";
			loadingDiv.innerHTML = "Loading";
			mainContentContainer.appendChild(loadingDiv);
		}
 
		loadingDiv.style.display = "block";
		loadingDiv.setAttribute("aria-hidden", false);
		mainContentContainer.setAttribute("aria-busy", true);
	} else {
		loadingDiv.style.display = "none";
		loadingDiv.setAttribute("aria-hidden", true);
		mainContentContainer.removeAttribute("aria-busy");
	}
})

,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
