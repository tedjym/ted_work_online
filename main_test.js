(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [
		{name:"main_test_atlas_1", frames: [[0,0,1280,720],[0,722,1280,720]]},
		{name:"main_test_atlas_2", frames: [[0,0,1280,720],[0,722,1280,720]]},
		{name:"main_test_atlas_3", frames: [[0,0,1280,720],[0,722,1280,720]]},
		{name:"main_test_atlas_4", frames: [[0,0,1280,720],[0,722,1280,720]]},
		{name:"main_test_atlas_5", frames: [[0,0,1280,720],[0,722,1280,720]]},
		{name:"main_test_atlas_6", frames: [[0,0,1280,720],[0,722,1280,720]]},
		{name:"main_test_atlas_7", frames: [[0,0,1280,720],[0,722,1280,720]]},
		{name:"main_test_atlas_8", frames: [[0,0,1280,720],[0,722,1280,720]]},
		{name:"main_test_atlas_9", frames: [[0,0,1280,720],[0,722,1280,720]]},
		{name:"main_test_atlas_10", frames: [[478,1696,595,171],[0,1444,872,171],[874,1444,476,250],[0,1617,476,250],[0,0,1280,720],[0,722,1280,720]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.currentSoundStreamInMovieclip;
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		var pos = this.timeline.resolve(positionOrLabel);
		if (pos != null) { this.startStreamSoundsForTargetedFrame(pos); }
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		this.soundStreamDuration.forEach(function(value,key){
			key.instance.stop();
		});
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var _this = this;
			this.soundStreamDuration.forEach(function(value,key,arr){
				if((value.end) == currentFrame){
					key.instance.stop();
					if(_this.currentSoundStreamInMovieclip == key) { _this.currentSoundStreamInMovieclip = undefined; }
					arr.delete(key);
				}
			});
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			var _this = this;
			if(this.soundStreamDuration.size > 0){
				var maxDuration = 0;
				this.soundStreamDuration.forEach(function(value,key){
					if(value.end > maxDuration){
						maxDuration = value.end;
						_this.currentSoundStreamInMovieclip = key;
					}
				});
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if((deltaFrame >= 0) && this.ignorePause){
					cjs.MovieClip.prototype.play.call(this);
					this.ignorePause = false;
				}
				else if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
				else if(deltaFrame <= -2){
					cjs.MovieClip.prototype.stop.call(this);
					this.ignorePause = true;
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_4 = function() {
	this.initialize(ss["main_test_atlas_10"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["main_test_atlas_10"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["main_test_atlas_10"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["main_test_atlas_10"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.플래시맨_0 = function() {
	this.initialize(ss["main_test_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.플래시맨_1 = function() {
	this.initialize(ss["main_test_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.플래시맨_10 = function() {
	this.initialize(ss["main_test_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.플래시맨_11 = function() {
	this.initialize(ss["main_test_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.플래시맨_12 = function() {
	this.initialize(ss["main_test_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.플래시맨_153 = function() {
	this.initialize(ss["main_test_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.플래시맨_154 = function() {
	this.initialize(ss["main_test_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.플래시맨_2 = function() {
	this.initialize(ss["main_test_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.플래시맨_3 = function() {
	this.initialize(ss["main_test_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.플래시맨_4 = function() {
	this.initialize(ss["main_test_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.플래시맨_41 = function() {
	this.initialize(ss["main_test_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.플래시맨_42 = function() {
	this.initialize(ss["main_test_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.플래시맨_43 = function() {
	this.initialize(ss["main_test_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.플래시맨_44 = function() {
	this.initialize(ss["main_test_atlas_7"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.플래시맨_5 = function() {
	this.initialize(ss["main_test_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.플래시맨_6 = function() {
	this.initialize(ss["main_test_atlas_8"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.플래시맨_60 = function() {
	this.initialize(ss["main_test_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.플래시맨_7 = function() {
	this.initialize(ss["main_test_atlas_9"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.플래시맨_8 = function() {
	this.initialize(ss["main_test_atlas_10"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.플래시맨_9 = function() {
	this.initialize(ss["main_test_atlas_10"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AtMucIaZAAIAAc5I6ZAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#332D2B").s().p("AtMOdIAA85IaZAAIAAc5g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("Avhw/IfDAAMAAAAh/I/DAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#91766D").s().p("AvhRAMAAAgh/IfDAAMAAAAh/g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AqZrYIUzAAIAAWxI0zAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#332D2B").s().p("AqZLZIAA2xIUzAAIAAWxg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.5,-93.5,171,187);
p.frameBounds = [rect, new cjs.Rectangle(-100.4,-109.8,200.8,219.6), new cjs.Rectangle(-67.6,-73.9,135.2,147.8), new cjs.Rectangle(-85.5,-93.5,171,187)];


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AtMucIaZAAIAAc5I6ZAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#332D2B").s().p("AtMOdIAA85IaZAAIAAc5g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("Avhw/IfDAAMAAAAh/I/DAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#91766D").s().p("AvhRAMAAAgh/IfDAAMAAAAh/g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AqZrYIUzAAIAAWxI0zAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#332D2B").s().p("AqZLZIAA2xIUzAAIAAWxg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.5,-93.5,171,187);
p.frameBounds = [rect, new cjs.Rectangle(-100.4,-109.8,200.8,219.6), new cjs.Rectangle(-67.6,-73.9,135.2,147.8), new cjs.Rectangle(-85.5,-93.5,171,187)];


(lib.stop = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-159.55,-38.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgoygIbMBRlAAAIAAQ3MhRlAAAg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#91766D").s().p("EgoyAIcIAAw3MBRlAAAIAAQ3g");
	this.shape_1.setTransform(0,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("Egs1gJRMBZrAAAIAASjMhZrAAAg");
	this.shape_2.setTransform(0,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DBBAAF").s().p("Egs1AJSIAAyjMBZrAAAIAASjg");
	this.shape_3.setTransform(0,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("Egl+gH2MBL9AAAIAAPtMhL9AAAg");
	this.shape_4.setTransform(0,0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#91766D").s().p("Egl+AH3IAAvtMBL9AAAIAAPtg");
	this.shape_5.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262,-55,524.1,110.1);
p.frameBounds = [rect, new cjs.Rectangle(-288,-60.3,576,120.8), new cjs.Rectangle(-244.1,-51.3,488.2,102.7), new cjs.Rectangle(-262,-55,524.1,110.1)];


(lib.play = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-228.65,-38.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgoygIbMBRlAAAIAAQ3MhRlAAAg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#91766D").s().p("EgoyAIcIAAw3MBRlAAAIAAQ3g");
	this.shape_1.setTransform(0,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("Egs1gJRMBZrAAAIAASjMhZrAAAg");
	this.shape_2.setTransform(0,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DBBAAF").s().p("Egs1AJSIAAyjMBZrAAAIAASjg");
	this.shape_3.setTransform(0,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("Egl+gH2MBL9AAAIAAPtMhL9AAAg");
	this.shape_4.setTransform(0,0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#91766D").s().p("Egl+AH3IAAvtMBL9AAAIAAPtg");
	this.shape_5.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262,-55,524.1,110.1);
p.frameBounds = [rect, new cjs.Rectangle(-288,-60.3,576,120.8), new cjs.Rectangle(-244.1,-51.3,488.2,102.7), new cjs.Rectangle(-262,-55,524.1,110.1)];


// stage content:
(lib.main_test = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {처음:0,둘째:19};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,18,19,56];
	this.streamSoundSymbolsList[1] = [{id:"저작권없음효과음바람소리효과음_겨울바람효과음_강한바람소리휘이잉_효과음바람소리onlineaudioconvertercom",startFrame:1,endFrame:19,loop:1,offset:0}];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		var _this = this;
		_this.stop();
		
		/*메뉴 네비게이션*/
		
		var _this = this;
		_this.처음버튼.on('click', function(){
			
		_this.gotoAndStop('처음');
		});
		
		var _this = this;
		_this.둘째버튼.on('click', function(){
			
		_this.gotoAndStop('둘째');
		});
		
		/* 네비게이션*/
		
		
		var _this = this;
		_this.플레이버튼.on('click', function(){
			
		_this.play();
		});
		
		var _this = this;
		_this.정지버튼.on('click', function(){
		
		_this.stop();
		});
	}
	this.frame_1 = function() {
		var soundInstance = playSound("저작권없음효과음바람소리효과음_겨울바람효과음_강한바람소리휘이잉_효과음바람소리onlineaudioconvertercom",0);
		this.InsertIntoSoundStreamData(soundInstance,1,19,1);
	}
	this.frame_18 = function() {
		this.gotoAndStop('처음');
	}
	this.frame_19 = function() {
		var _this = this;
		this.stop();
	}
	this.frame_56 = function() {
		this.gotoAndStop('둘째');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(17).call(this.frame_18).wait(1).call(this.frame_19).wait(37).call(this.frame_56).wait(1));

	// Actions
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(520.15,170.15,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({_off:true},1).wait(37));

	// Layer_1
	this.둘째버튼 = new lib.Symbol2();
	this.둘째버튼.name = "둘째버튼";
	this.둘째버튼.setTransform(953.55,626.7,0.5459,0.5459,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.둘째버튼, 0, 1, 2, false, new lib.Symbol2(), 3);

	this.처음버튼 = new lib.Symbol1();
	this.처음버튼.name = "처음버튼";
	this.처음버튼.setTransform(321.45,626.7,0.5459,0.5459,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.처음버튼, 0, 1, 2, false, new lib.Symbol1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.처음버튼},{t:this.둘째버튼}]}).wait(57));

	// play_btn
	this.정지버튼 = new lib.stop();
	this.정지버튼.name = "정지버튼";
	this.정지버튼.setTransform(762.15,630.15,0.3564,1);
	new cjs.ButtonHelper(this.정지버튼, 0, 1, 2, false, new lib.stop(), 3);

	this.플레이버튼 = new lib.play();
	this.플레이버튼.name = "플레이버튼";
	this.플레이버튼.setTransform(508.1,630.15,0.3564,1);
	new cjs.ButtonHelper(this.플레이버튼, 0, 1, 2, false, new lib.play(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.플레이버튼},{t:this.정지버튼}]}).wait(57));

	// Layer_4
	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(520.15,106.35,0.5,0.5);

	this.instance_2 = new lib.플래시맨_0();

	this.instance_3 = new lib.플래시맨_1();

	this.instance_4 = new lib.플래시맨_2();

	this.instance_5 = new lib.플래시맨_3();

	this.instance_6 = new lib.플래시맨_4();

	this.instance_7 = new lib.플래시맨_5();

	this.instance_8 = new lib.플래시맨_6();

	this.instance_9 = new lib.플래시맨_7();

	this.instance_10 = new lib.플래시맨_8();

	this.instance_11 = new lib.플래시맨_9();

	this.instance_12 = new lib.플래시맨_10();

	this.instance_13 = new lib.플래시맨_11();

	this.instance_14 = new lib.플래시맨_12();

	this.instance_15 = new lib.플래시맨_41();

	this.instance_16 = new lib.플래시맨_42();

	this.instance_17 = new lib.플래시맨_43();

	this.instance_18 = new lib.플래시맨_44();

	this.instance_19 = new lib.플래시맨_154();

	this.instance_20 = new lib.플래시맨_153();

	this.instance_21 = new lib.플래시맨_60();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},10).to({state:[{t:this.instance_2}]},26).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(906.2,466.4,742.6,584.2);
p.frameBounds = [rect, rect=new cjs.Rectangle(640,360,1280,720), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(906.2,530.2,742.6,520.4), rect=new cjs.Rectangle(640,360,1280,720), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];
// library properties:
lib.properties = {
	id: '34E24471198C8B499EFDFF7BC35234C0',
	width: 1280,
	height: 720,
	fps: 29.97,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/main_test_atlas_1.png?1706084791925", id:"main_test_atlas_1"},
		{src:"images/main_test_atlas_2.png?1706084791926", id:"main_test_atlas_2"},
		{src:"images/main_test_atlas_3.png?1706084791926", id:"main_test_atlas_3"},
		{src:"images/main_test_atlas_4.png?1706084791926", id:"main_test_atlas_4"},
		{src:"images/main_test_atlas_5.png?1706084791926", id:"main_test_atlas_5"},
		{src:"images/main_test_atlas_6.png?1706084791926", id:"main_test_atlas_6"},
		{src:"images/main_test_atlas_7.png?1706084791926", id:"main_test_atlas_7"},
		{src:"images/main_test_atlas_8.png?1706084791926", id:"main_test_atlas_8"},
		{src:"images/main_test_atlas_9.png?1706084791926", id:"main_test_atlas_9"},
		{src:"images/main_test_atlas_10.png?1706084791926", id:"main_test_atlas_10"},
		{src:"sounds/저작권없음효과음바람소리효과음_겨울바람효과음_강한바람소리휘이잉_효과음바람소리onlineaudioconvertercom.mp3?1706084791944", id:"저작권없음효과음바람소리효과음_겨울바람효과음_강한바람소리휘이잉_효과음바람소리onlineaudioconvertercom"}
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
an.compositions['34E24471198C8B499EFDFF7BC35234C0'] = {
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