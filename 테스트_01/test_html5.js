(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"test_html5_atlas_1", frames: [[0,0,581,1229],[583,0,581,1229],[1166,0,581,1229]]},
		{name:"test_html5_atlas_2", frames: [[0,0,581,1229],[583,0,581,1229],[1166,0,581,1229]]},
		{name:"test_html5_atlas_3", frames: [[0,0,581,1229],[583,0,581,1229],[1166,0,581,1229]]},
		{name:"test_html5_atlas_4", frames: [[765,1231,200,221],[765,1677,124,221],[765,1454,200,221],[0,0,581,1229],[583,0,581,1229],[0,1231,763,628]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_22 = function() {
	this.initialize(ss["test_html5_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["test_html5_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["test_html5_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["test_html5_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["test_html5_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["test_html5_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["test_html5_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["test_html5_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["test_html5_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["test_html5_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["test_html5_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["test_html5_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["test_html5_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["test_html5_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["test_html5_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.스탑버튼 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_22();
	this.instance.setTransform(-3.2,-3.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#669900").s().p("An4H5IAAvxIPxAAIAAPxg");
	this.shape.setTransform(50.475,50.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF99").s().p("AoqIrIAAxVIRVAAIAARVg");
	this.shape_1.setTransform(50.475,50.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1,scaleY:1,x:50.475,y:50.475}}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape,p:{scaleX:0.95,scaleY:0.95,x:50.4511,y:50.4511}}]},1).to({state:[{t:this.shape,p:{scaleX:1,scaleY:1,x:50.475,y:50.475}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,111,111.9);


(lib.리백버튼 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_21();
	this.instance.setTransform(19.6,-14.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#669900").s().p("An4H5IAAvxIPxAAIAAPxg");
	this.shape.setTransform(50.475,50.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF99").s().p("AoqIrIAAxVIRVAAIAARVg");
	this.shape_1.setTransform(50.475,50.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1,scaleY:1,x:50.475,y:50.475}}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape,p:{scaleX:0.95,scaleY:0.95,x:50.4511,y:50.4511}}]},1).to({state:[{t:this.shape,p:{scaleX:1,scaleY:1,x:50.475,y:50.475}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-14.4,111,120.4);


(lib.플레이버튼 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.CachedBmp_20();
	this.instance.setTransform(5.2,-3.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#669900").s().p("An4H5IAAvxIPxAAIAAPxg");
	this.shape.setTransform(50.475,50.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF99").s().p("AoqIrIAAxVIRVAAIAARVg");
	this.shape_1.setTransform(50.475,50.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1,scaleY:1,x:50.475,y:50.475}}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape,p:{scaleX:0.95,scaleY:0.95,x:50.4511,y:50.4511}}]},1).to({state:[{t:this.shape,p:{scaleX:1,scaleY:1,x:50.475,y:50.475}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,111,111.9);


// stage content:
(lib.test_html5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {처음:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,76];
	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		_this.stop();
		
		/*컨트롤버튼*/
		
		var _this = this;
		_this.플레이버튼.on('click', function(){
		_this.play();
		});
		
		
		var _this = this;
		_this.스탑버튼.on('click', function(){
		_this.stop();
		});
		
		
		var _this = this;
		_this.리백버튼.on('click', function(){
		_this.gotoAndStop('처음');
		});
	}
	this.frame_76 = function() {
		this.gotoAndStop('처음');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(76).call(this.frame_76).wait(1));

	// Layer_2
	this.리백버튼 = new lib.리백버튼();
	this.리백버튼.name = "리백버튼";
	this.리백버튼.setTransform(887.55,685.4,1,1,0,0,0,50.5,50.5);
	new cjs.ButtonHelper(this.리백버튼, 0, 1, 2, false, new lib.리백버튼(), 3);

	this.스탑버튼 = new lib.스탑버튼();
	this.스탑버튼.name = "스탑버튼";
	this.스탑버튼.setTransform(661.55,685.4,1,1,0,0,0,50.5,50.5);
	new cjs.ButtonHelper(this.스탑버튼, 0, 1, 2, false, new lib.스탑버튼(), 3);

	this.플레이버튼 = new lib.플레이버튼();
	this.플레이버튼.name = "플레이버튼";
	this.플레이버튼.setTransform(447.55,685.4,1,1,0,0,0,50.5,50.5);
	new cjs.ButtonHelper(this.플레이버튼, 0, 1, 2, false, new lib.플레이버튼(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.플레이버튼},{t:this.스탑버튼},{t:this.리백버튼}]}).wait(77));

	// Layer_4
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(469.15,244.7,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_9();
	this.instance_1.setTransform(538.3,39.85,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_10();
	this.instance_2.setTransform(538.3,39.85,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_11();
	this.instance_3.setTransform(538.3,39.85,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_12();
	this.instance_4.setTransform(538.3,39.85,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_13();
	this.instance_5.setTransform(538.3,39.85,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_14();
	this.instance_6.setTransform(538.3,39.85,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_15();
	this.instance_7.setTransform(538.3,39.85,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_16();
	this.instance_8.setTransform(538.3,39.85,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_17();
	this.instance_9.setTransform(538.3,39.85,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_18();
	this.instance_10.setTransform(538.3,39.85,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_19();
	this.instance_11.setTransform(538.3,39.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_3}]},7).to({state:[{t:this.instance_4}]},8).to({state:[{t:this.instance_5}]},7).to({state:[{t:this.instance_6}]},7).to({state:[{t:this.instance_7}]},7).to({state:[{t:this.instance_8}]},6).to({state:[{t:this.instance_9}]},6).to({state:[{t:this.instance_10}]},7).to({state:[{t:this.instance_11}]},6).wait(8));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1032,439.9,-88.89999999999998,301.9);
// library properties:
lib.properties = {
	id: '20A9B3463619DD4086D1B8D30CFDA1B2',
	width: 1280,
	height: 800,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/test_html5_atlas_1.png?1706082285109", id:"test_html5_atlas_1"},
		{src:"images/test_html5_atlas_2.png?1706082285109", id:"test_html5_atlas_2"},
		{src:"images/test_html5_atlas_3.png?1706082285109", id:"test_html5_atlas_3"},
		{src:"images/test_html5_atlas_4.png?1706082285109", id:"test_html5_atlas_4"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['20A9B3463619DD4086D1B8D30CFDA1B2'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;