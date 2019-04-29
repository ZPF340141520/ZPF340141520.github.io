// Garden Gnome Software - Skin
// Pano2VR pro 4.1.0/3405MS
// Filename: ???.ggsk
// Generated 周一 4月 29 17:31:46 2019

function pano2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var nodeMarker=new Array();
	var activeNodeMarker=new Array();
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		return 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		this.__4=document.createElement('div');
		this.__4.ggId='\u5bb9\u5668 4';
		this.__4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__4.ggVisible=true;
		this.__4.className='ggskin ggskin_container';
		this.__4.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-632 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-126 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -632px;';
		hs+='top:  -126px;';
		hs+='width: 764px;';
		hs+='height: 117px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this.__4.setAttribute('style',hs);
		this.__5=document.createElement('div');
		this.__5.ggId='\u8425\u9500\u4e2d\u5fc3';
		this.__5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__5.ggVisible=true;
		this.__5.className='ggskin ggskin_mark';
		hs ='position:absolute;';
		hs+='left: 15px;';
		hs+='top:  2px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		this.__5.setAttribute('style',hs);
		this.__5.ggMarkerNodeId='{node2}';
		nodeMarker.push(this.__5);
		this.__5.onclick=function () {
			me.player.openNext('{node2}');
		}
		this.__5.ggActivate=function () {
			if (me.player.transitionsDisabled) {
				me.__5.style[domTransition]='none';
			} else {
				me.__5.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__5.style.opacity='1';
			me.__5.style.visibility=me.__5.ggVisible?'inherit':'hidden';
		}
		this.__5.ggDeactivate=function () {
			me.__5.style[domTransition]='none';
			me.__5.style.opacity='0.5';
			me.__5.style.visibility=me.__5.ggVisible?'inherit':'hidden';
		}
		this.__23=document.createElement('div');
		this.__23.ggId='\u56fe\u7247 2';
		this.__23.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__23.ggVisible=true;
		this.__23.className='ggskin ggskin_image';
		hs ='position:absolute;';
		hs+='left: 5px;';
		hs+='top:  -1px;';
		hs+='width: 110px;';
		hs+='height: 110px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this.__23.setAttribute('style',hs);
		this.__23__img=document.createElement('img');
		this.__23__img.setAttribute('src',basePath + 'images/_23.png');
		this.__23__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this.__23__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__23__img);
		this.__23.appendChild(this.__23__img);
		this.__5.appendChild(this.__23);
		this.__4.appendChild(this.__5);
		this.__1=document.createElement('div');
		this.__1.ggId='\u524d\u53f0';
		this.__1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__1.ggVisible=true;
		this.__1.className='ggskin ggskin_mark';
		hs ='position:absolute;';
		hs+='left: 268px;';
		hs+='top:  2px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		this.__1.setAttribute('style',hs);
		this.__1.ggMarkerNodeId='{node3}';
		nodeMarker.push(this.__1);
		this.__1.onclick=function () {
			me.player.openNext('{node3}');
		}
		this.__1.ggActivate=function () {
			if (me.player.transitionsDisabled) {
				me.__1.style[domTransition]='none';
			} else {
				me.__1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__1.style.opacity='1';
			me.__1.style.visibility=me.__1.ggVisible?'inherit':'hidden';
		}
		this.__1.ggDeactivate=function () {
			me.__1.style[domTransition]='none';
			me.__1.style.opacity='0.5';
			me.__1.style.visibility=me.__1.ggVisible?'inherit':'hidden';
		}
		this.__30=document.createElement('div');
		this.__30.ggId='\u77e9\u5f62 3';
		this.__30.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__30.ggVisible=true;
		this.__30.className='ggskin ggskin_rectangle';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 109px;';
		hs+='height: 109px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		this.__30.setAttribute('style',hs);
		this.__21=document.createElement('div');
		this.__21.ggId='\u56fe\u7247 2';
		this.__21.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__21.ggVisible=true;
		this.__21.className='ggskin ggskin_image';
		hs ='position:absolute;';
		hs+='left: 4px;';
		hs+='top:  4px;';
		hs+='width: 100px;';
		hs+='height: 100px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this.__21.setAttribute('style',hs);
		this.__21__img=document.createElement('img');
		this.__21__img.setAttribute('src',basePath + 'images/_21.png');
		this.__21__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this.__21__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__21__img);
		this.__21.appendChild(this.__21__img);
		this.__30.appendChild(this.__21);
		this.__1.appendChild(this.__30);
		this.__4.appendChild(this.__1);
		this.__0=document.createElement('div');
		this.__0.ggId='\u5927\u5ba2\u6237\u6d3d\u8c08\u5ba4';
		this.__0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__0.ggVisible=true;
		this.__0.className='ggskin ggskin_mark';
		hs ='position:absolute;';
		hs+='left: 141px;';
		hs+='top:  2px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		this.__0.setAttribute('style',hs);
		this.__0.ggMarkerNodeId='{node1}';
		nodeMarker.push(this.__0);
		this.__0.onclick=function () {
			me.player.openNext('{node1}');
		}
		this.__0.ggActivate=function () {
			if (me.player.transitionsDisabled) {
				me.__0.style[domTransition]='none';
			} else {
				me.__0.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__0.style.opacity='1';
			me.__0.style.visibility=me.__0.ggVisible?'inherit':'hidden';
		}
		this.__0.ggDeactivate=function () {
			me.__0.style[domTransition]='none';
			me.__0.style.opacity='0.5';
			me.__0.style.visibility=me.__0.ggVisible?'inherit':'hidden';
		}
		this.__20=document.createElement('div');
		this.__20.ggId='\u56fe\u7247 2';
		this.__20.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__20.ggVisible=true;
		this.__20.className='ggskin ggskin_image';
		hs ='position:absolute;';
		hs+='left: 5px;';
		hs+='top:  0px;';
		hs+='width: 110px;';
		hs+='height: 110px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this.__20.setAttribute('style',hs);
		this.__20__img=document.createElement('img');
		this.__20__img.setAttribute('src',basePath + 'images/_20.png');
		this.__20__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this.__20__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__20__img);
		this.__20.appendChild(this.__20__img);
		this.__0.appendChild(this.__20);
		this.__4.appendChild(this.__0);
		this.__=document.createElement('div');
		this.__.ggId='\u4f1a\u8bae\u5ba4';
		this.__.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__.ggVisible=true;
		this.__.className='ggskin ggskin_mark';
		hs ='position:absolute;';
		hs+='left: 394px;';
		hs+='top:  3px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		this.__.setAttribute('style',hs);
		this.__.ggMarkerNodeId='{node4}';
		nodeMarker.push(this.__);
		this.__.onclick=function () {
			me.player.openNext('{node4}');
		}
		this.__.ggActivate=function () {
			if (me.player.transitionsDisabled) {
				me.__.style[domTransition]='none';
			} else {
				me.__.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__.style.opacity='1';
			me.__.style.visibility=me.__.ggVisible?'inherit':'hidden';
		}
		this.__.ggDeactivate=function () {
			me.__.style[domTransition]='none';
			me.__.style.opacity='0.5';
			me.__.style.visibility=me.__.ggVisible?'inherit':'hidden';
		}
		this.__3=document.createElement('div');
		this.__3.ggId='\u77e9\u5f62 3';
		this.__3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__3.ggVisible=true;
		this.__3.className='ggskin ggskin_rectangle';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 109px;';
		hs+='height: 109px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		this.__3.setAttribute('style',hs);
		this.__2=document.createElement('div');
		this.__2.ggId='\u56fe\u7247 2';
		this.__2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__2.ggVisible=true;
		this.__2.className='ggskin ggskin_image';
		hs ='position:absolute;';
		hs+='left: 4px;';
		hs+='top:  4px;';
		hs+='width: 100px;';
		hs+='height: 100px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this.__2.setAttribute('style',hs);
		this.__2__img=document.createElement('img');
		this.__2__img.setAttribute('src',basePath + 'images/_2.png');
		this.__2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this.__2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__2__img);
		this.__2.appendChild(this.__2__img);
		this.__3.appendChild(this.__2);
		this.__.appendChild(this.__3);
		this.__4.appendChild(this.__);
		this.divSkin.appendChild(this.__4);
		this._fgh=document.createElement('div');
		this._fgh.ggId='fgh';
		this._fgh.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fgh.ggVisible=true;
		this._fgh.className='ggskin ggskin_container';
		this._fgh.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-112 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-122 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -112px;';
		hs+='top:  -122px;';
		hs+='width: 310px;';
		hs+='height: 110px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._fgh.setAttribute('style',hs);
		this.__26=document.createElement('div');
		this.__26.ggId='\u77e9\u5f62 26';
		this.__26.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__26.ggVisible=true;
		this.__26.className='ggskin ggskin_rectangle';
		hs ='position:absolute;';
		hs+='left: 5px;';
		hs+='top:  5px;';
		hs+='width: 300px;';
		hs+='height: 100px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.3;';
		hs+='visibility: inherit;';
		hs+='background: #000000;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this.__26.setAttribute('style',hs);
		this._fgh.appendChild(this.__26);
		this.divSkin.appendChild(this._fgh);
		this.__5.ggMarkerNormal=null;
		this.__5.ggMarkerActive=null;
		this.__1.ggMarkerNormal=null;
		this.__1.ggMarkerActive=null;
		this.__0.ggMarkerNormal=null;
		this.__0.ggMarkerActive=null;
		this.__.ggMarkerNormal=null;
		this.__.ggMarkerActive=null;
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		var newMarker=new Array();
		var i,j;
		var tags=me.player.userdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if (nodeMarker[i].ggMarkerNodeId==id) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		this.elementMouseDown=new Array();
		this.elementMouseOver=new Array();
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position:absolute; left:0px;top:0px;visibility: inherit;');
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='444') {
			this.__div=document.createElement('div');
			this.__div.ggId='444';
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			hs ='position:absolute;';
			hs+='left: 232px;';
			hs+='top:  79px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("{node3}","");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._text2.style[domTransition]='none';
				me._text2.style.visibility='hidden';
				me._text2.ggVisible=false;
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this._asbt2=document.createElement('div');
			this._asbt2.ggId='ASBT';
			this._asbt2.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
			this._asbt2.ggVisible=true;
			this._asbt2.className='ggskin ggskin_button';
			hs ='position:absolute;';
			hs+='left: -49px;';
			hs+='top:  -9px;';
			hs+='width: 100px;';
			hs+='height: 100px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._asbt2.ggParameter) + ';';
			hs+='opacity: 0.5;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._asbt2.setAttribute('style',hs);
			this._asbt2__img=document.createElement('img');
			this._asbt2__img.setAttribute('src',basePath + 'images/asbt2.png');
			this._asbt2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._asbt2__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._asbt2__img);
			this._asbt2.appendChild(this._asbt2__img);
			this.__div.appendChild(this._asbt2);
			this._text2=document.createElement('div');
			this._text2.ggId='text2';
			this._text2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text2.ggVisible=true;
			this._text2.className='ggskin ggskin_text';
			hs ='position:absolute;';
			hs+='left: -43px;';
			hs+='top:  92px;';
			hs+='width: 88px;';
			hs+='height: 20px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='border: 0px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._text2.setAttribute('style',hs);
			this._text2.innerHTML="\u524d\u53f0";
			this.__div.appendChild(this._text2);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
					me._text2.style[domTransition]='none';
					me._text2.style.visibility='inherit';
					me._text2.ggVisible=true;
				}
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='22') {
			this.__div=document.createElement('div');
			this.__div.ggId='22';
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			hs ='position:absolute;';
			hs+='left: 289px;';
			hs+='top:  272px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("{node1}","");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._text1.style[domTransition]='none';
				me._text1.style.visibility='hidden';
				me._text1.ggVisible=false;
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this._asbt1=document.createElement('div');
			this._asbt1.ggId='ASBT';
			this._asbt1.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
			this._asbt1.ggVisible=true;
			this._asbt1.className='ggskin ggskin_button';
			hs ='position:absolute;';
			hs+='left: -51px;';
			hs+='top:  -6px;';
			hs+='width: 100px;';
			hs+='height: 100px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._asbt1.ggParameter) + ';';
			hs+='opacity: 0.5;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._asbt1.setAttribute('style',hs);
			this._asbt1__img=document.createElement('img');
			this._asbt1__img.setAttribute('src',basePath + 'images/asbt1.png');
			this._asbt1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._asbt1__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._asbt1__img);
			this._asbt1.appendChild(this._asbt1__img);
			this.__div.appendChild(this._asbt1);
			this._text1=document.createElement('div');
			this._text1.ggId='text1';
			this._text1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text1.ggVisible=true;
			this._text1.className='ggskin ggskin_text';
			hs ='position:absolute;';
			hs+='left: -44px;';
			hs+='top:  94px;';
			hs+='width: 82px;';
			hs+='height: 21px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='background: #ffffff;';
			hs+='border: 2px solid #000000;';
			hs+='border-radius: 12px;';
			hs+=cssPrefix + 'border-radius: 12px;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 3px 4px 3px 4px;';
			hs+='overflow: hidden;';
			this._text1.setAttribute('style',hs);
			this._text1.innerHTML="\u5927\u5ba2\u6237\u6d3d\u8c08\u5ba4";
			this.__div.appendChild(this._text1);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
					me._text1.style[domTransition]='none';
					me._text1.style.visibility='inherit';
					me._text1.ggVisible=true;
				}
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='999') {
			this.__div=document.createElement('div');
			this.__div.ggId='999';
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			hs ='position:absolute;';
			hs+='left: 361px;';
			hs+='top:  80px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("{node4}","");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._asbt0=document.createElement('div');
			this._asbt0.ggId='ASBT';
			this._asbt0.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
			this._asbt0.ggVisible=true;
			this._asbt0.className='ggskin ggskin_button';
			hs ='position:absolute;';
			hs+='left: -49px;';
			hs+='top:  -9px;';
			hs+='width: 100px;';
			hs+='height: 100px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._asbt0.ggParameter) + ';';
			hs+='opacity: 0.5;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._asbt0.setAttribute('style',hs);
			this._asbt0__img=document.createElement('img');
			this._asbt0__img.setAttribute('src',basePath + 'images/asbt0.png');
			this._asbt0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._asbt0__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._asbt0__img);
			this._asbt0.appendChild(this._asbt0__img);
			this.__div.appendChild(this._asbt0);
			this._text3=document.createElement('div');
			this._text3.ggId='text3';
			this._text3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text3.ggVisible=true;
			this._text3.className='ggskin ggskin_text';
			hs ='position:absolute;';
			hs+='left: -44px;';
			hs+='top:  91px;';
			hs+='width: 82px;';
			hs+='height: 21px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='background: #ffffff;';
			hs+='border: 2px solid #000000;';
			hs+='border-radius: 12px;';
			hs+=cssPrefix + 'border-radius: 12px;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 3px 4px 3px 4px;';
			hs+='overflow: hidden;';
			this._text3.setAttribute('style',hs);
			this._text3.innerHTML="\u4f1a\u8bae\u5ba4";
			this.__div.appendChild(this._text3);
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId='555';
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			hs ='position:absolute;';
			hs+='left: 484px;';
			hs+='top:  79px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext("{node2}","");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._asbt=document.createElement('div');
			this._asbt.ggId='ASBT';
			this._asbt.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
			this._asbt.ggVisible=true;
			this._asbt.className='ggskin ggskin_button';
			hs ='position:absolute;';
			hs+='left: -49px;';
			hs+='top:  -9px;';
			hs+='width: 100px;';
			hs+='height: 100px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._asbt.ggParameter) + ';';
			hs+='opacity: 0.5;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._asbt.setAttribute('style',hs);
			this._asbt__img=document.createElement('img');
			this._asbt__img.setAttribute('src',basePath + 'images/asbt.png');
			this._asbt__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._asbt__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._asbt__img);
			this._asbt.appendChild(this._asbt__img);
			this.__div.appendChild(this._asbt);
			this._text4=document.createElement('div');
			this._text4.ggId='text4';
			this._text4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text4.ggVisible=true;
			this._text4.className='ggskin ggskin_text';
			hs ='position:absolute;';
			hs+='left: -56px;';
			hs+='top:  90px;';
			hs+='width: 109px;';
			hs+='height: 21px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='background: #ffffff;';
			hs+='border: 2px solid #000000;';
			hs+='border-radius: 12px;';
			hs+=cssPrefix + 'border-radius: 12px;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 3px 4px 3px 4px;';
			hs+='overflow: hidden;';
			this._text4.setAttribute('style',hs);
			this._text4.innerHTML="\u8425\u9500\u670d\u52a1\u4e2d\u5fc3";
			this.__div.appendChild(this._text4);
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};