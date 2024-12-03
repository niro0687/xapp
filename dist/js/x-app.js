

class XSettings {
	static getFieldValuesWithFormData = false;
	static forceAliasDefinition = false;
	static xElementID = 0;
	static xElementName = "xelementid-";
	static createNewXElementIfUndefined = false;
	static xElements = [];
	static fakeIDMessage = 0;
	static filesFormats = ["mp3", "mp4", "wav", "py", "7z", "zip", "java", "js", "css", "html", "xml", "iso", "mov", "txt", "xlsx", "xls", "m4a", "rar",
		"c","jsx", "php", "json", "sqlite3", "sh", "pdf", "png", "jpeg", "jpg",
		"gif", "webm", "webp", "xhtml", "doc", "apk", "avi", "pyc", "svg", "csv", "sql", "xapk", "docx", "JPG", "PNG", "JPEG", "GIF",
	];
	
	static fileFormatToIcon = {
		"JPG": "fa fa-file-image",
		"PNG": "fa fa-file-image",
		"JPEG": "fa fa-file-image",
		"GIF": "fa fa-file-image",
		"mp3": "fa fa-file-audio",
		"wav": "fa fa-file-audio",
		"mp4": "fa fa-file-video",
		"sqlite3": "fa fa-database",
		"mov": "fa fa-file-video",
		"svg": "fa fa-file-image", 
		"pdf": "fa fa-file-pdf",
		"7z": "fa fa-file-archive",
		"java": "fab fa-java",
		"xml": "fa fa-file-code",
		"php": "fab fa-php",
		"avi": "fa fa-file-video",
		"doc": "fa fa-file-word",
		"docx": "fa fa-file-word",
		"rar": "fa fa-file-archive",
		"webp": "fa fa-file-video",
		"xhtml": "fa fa-file-code",
		"json": "fa fa-file-code",
		"txt": "fa fa-file-alt",
		"webm": "fa fa-file-image",
		"csv": "fa fa-file-alt",
		"jsx": "fa fa-file-code",
		"xls": "fa fa-file-excel",
		"zip": "fa fa-file-archive",
		"xlsx": "fa fa-file-excel",
		"c": "fa fa-file-code",
		"pyc": "fab fa-python",
		"jpg": "fa fa-file-image",
		"iso": "fa fa-file",
		"sh": "fa fa-file-code",
		"sql": "fa fa-database",
		"png": "fa fa-file-image",
		"gif": "fa fa-file-image",
		"jpeg": "fa fa-file-image",
		"py": "fab fa-python",
		"html": "fab fa-html5",
		"css": "fab fa-css3",
		"js": "fab fa-js",
		"xapk": "fab fa-android",
		"apk": "fab fa-android",
	};
	static fileFormatToName = {
		"JPG": "Image",
		"JPEG": "Image",
		"PNG": "Image",
		"GIF": "Image",
		"mp3": "Audio",
		"wav": "Audio",
		"mp4": "Video",
		"sqlite3": "Database (Sqlite3)",
		"mov": "Video",
		"apk": "Application Android",
		"xapk": "Application Android",
		"pdf": "Document PDF",
		"7z": "Archive 7z",
		"xhtml": "XHTML",
		"java": "Java",
		"php": "Php",
		"csv": "CSV",
		"avi": "Video",
		"doc": "Document Word",
		"docx": "Document Word",
		"rar": "Archive",
		"webp": "Image",
		"json": "Json",
		"xml": "XML",
		"pyc": "Python",
		"txt": "Text",
		"svg": "Icon",
		"webm": "Image",
		"jsx": "JavaScript (JSX)",
		"xls": "Excel",
		"zip": "Archive",
		"xlsx": "Excel",
		"c": "C",
		"jpg": "Image",
		"sql": "Database",
		"iso": "File ISO",
		"sh": "Bash",
		"png": "Image",
		"gif": "Image",
		"jpeg": "far fa-image",
		"py": "Python",
		"html": "HTML5",
		"css": "CSS3",
		"js": "JavaScript"
	};
	
	static getColorFromChar = {
		"a": "#00FF86",
		"b": "#00FFCE",
		"c": "#FF5E00",
		"d": "#FF004D",
		"e": "#008AFF",
		"f": "#6800FF",
		"g": "#00CBFF",
		"h": "#006DFF",
		"i": "#FFDB00",
		"j": "#001DFF",
		"k": "#FF6E86",
		"l": "#FF9E70",
		"m": "#7FADFF",
		"n": "#D44B39",
		"o": "#FFA7C6",
		"p": "#AB7339",
		"q": "#556E7B",
		"r": "#2C4696",
		"s": "#FF63C2",
		"t": "#22022A",
		"u": "#381436",
		"v": "#FF8F87",
		"w": "#1B0C00",
		"x": "#FF004A",
		"y": "#2F006B",
		"z": "#061331",
	}
}

function noActionFunction(a=null) {
	let no_action = true;
}
function defaultCheckingResponse(data) {
	return data;
}
function defaultSuccessFunc() {
	return null;
}

function setupAudioWaves (wavesID) {
	let body = document.body;
	let wavesHeights = [];
	for (let i = 5; i < 30; i++) {
		wavesHeights.push(i);
	}
	
	
	let spans = body.querySelectorAll(wavesID + " .waves-contents .audio-waves");
	for (let i = 0; i < spans.length; i++) {
		let height = __.choiceObjectRandomlyFrom(wavesHeights);
		spans[i].style.height = height + "px";
	}
}


$(document).on("input", ".x-message-form textarea", function(e) {
	let val = $(this).val();
	let parent = this.parentNode;
	let mother = this.parentNode.parentNode;
	
	let insertFiles = mother.querySelectorAll(".insert-file");
	if (val.length == 0) {
		this.style.height = "15px";
		
	}
	if (val.length > 15) {
		this.style.width = "70%";
		parent.style.width = "86%";
		for (let i = 0; i < insertFiles.length; i++) {
			if (i != 0) {
				insertFiles[i].style.width = "0px";
			}
		}
	} else {
		this.style.width = "65%";
		parent.style.width = "70%";
		for (let i = 0; i < insertFiles.length; i++) {
			if (i != 0) {
				insertFiles[i].style.width = "30px";
			}
		}
	}
	
	if (this.scrollHeight <= 160) {
		this.style.height = "15px";
	    this.style.height = this.scrollHeight + "px";
	}
});


$(document).on("input", ".x-start-conv textarea", function(e) {
	let val = $(this).val();
	if (this.scrollHeight <= 160) {
		this.style.height = "15px";
		this.style.height = this.scrollHeight + "px";
	}
});




const STATUS_FIELD = {
	"x-default-focus": "x-default-error",
	"x-default-bold-focus": "x-default-bold-error",
	"x-soft-focus": "x-soft-error",
	"x-soft-bold-focus": "x-soft-bold-error",
	"x-soft-shadow-focus": "x-soft-shadow-error",
	"x-soft-shadow-bold-focus": "x-soft-shadow-bold-error",
	"x-shadow-focus": "x-shadow-error",
	"x-shadow-bold-focus": "x-shadow-bold-error",
}

const STATUS_FIELD_SUCCESS = {
	"x-default-focus": "x-default-success",
	"x-default-bold-focus": "x-default-bold-success",
	"x-soft-focus": "x-soft-success",
	"x-soft-bold-focus": "x-soft-bold-success",
	"x-soft-shadow-focus": "x-soft-shadow-success",
	"x-soft-shadow-bold-focus": "x-soft-shadow-bold-success",
	"x-shadow-focus": "x-shadow-success",
	"x-shadow-bold-focus": "x-shadow-bold-success",
}

class XElement {
	constructor(obj) {
		this.id = XSettings.xElementName + this.getXID();
		
		this.element = typeof(obj) == 'string' ? __.getElement(obj) : obj;
		this.attr_value = this.getAttrs();
		this.handlerAttributes = {
			set(target, key, value) {
				target[key] = value;
				__.setattr(obj, key, value);
			}
		};
		this.dimension = __.dimension.getDimension(obj); 
		this.css_value = this.getCSS();
		
		this.handlerCss = {
			set(target, key, value) {
				target[key] = value;
				__.css(obj, __.getCSSAttributeName(key), value);
			}
		}
		
		this.attr = new Proxy(this.attr_value, this.handlerAttributes);
		this.css = new Proxy(this.css_value, this.handlerCss);
		XSettings.xElements.push(this);
	}
	
	
	get() {
		return this.element;
	}
	
	focus() {
		this.element.focus();
	}
	
	blur() {
		this.element.blur();
	}
	
	click() {
		this.element.click();
	}
	
	
	getXID() {
		XSettings.xElementID++;
		return XSettings.xElementID;
	}
	
	fadeIn(milliseconds) {
		__.fadeIn(this.element, milliseconds);
	}
	
	fadeOut(milliseconds) {
		__.fadeOut(this.element, milliseconds);
	}
	
	getCSS() {
		let data = {};
		let style = getComputedStyle(this.element);
		for (let x = 0; x < style.length; x++) {
			let key = __.getKeyByText(style[x], ["-", "_", "."]);
			data[key] = style.getPropertyValue(style[x]);
		}
		return data;
	}
	
	getSelf() {
		return this;
	}

	getAttrs() {
		let attrsValue = {
			xelement: this.id,
		}
		
		if (this.get() == null || this.get() == undefined) {
			return {}
		} else {
			let attrs = this.element.attributes;
			for (let i = 0; i < attrs.length; i++) {
				if (attrs[i].name == "class") {
					let final = [];
					let values = attrs[i].value.split(" ");
					for (let a = 0; a < values.length; a++) {
						final.push(values[a]);
					}
					
					attrsValue[attrs[i].name] = final;
				} else {
					attrsValue[attrs[i].name] = attrs[i].value;
				}
			}
		}
		__.setattr(this.element, "xelement", this.id);
		return attrsValue;
	}
}




class Dimension {
	constructor() {
		this.getValueFromPixel = this.getValueFromPixel.bind(this);
		this.getDimension = this.getDimension.bind(this);
	}
	
	getValueFromPixel(pixelValue) {
		let val = pixelValue.split("px");
		val = (parseFloat(val[0])).toFixed(5);
		
		return Number(val);
	}
	
	getDimension(selector) {
		let body = document.body;
		let el = null;
		if (typeof(selector) == 'string') {
			el = body.querySelector(selector);
		} else {
			el = selector;
		}
		
		let width = el.offsetWidth;
		let height = el.offsetHeight;
		let paddingLeft = $(el).css("padding-left");
		let paddingBottom = $(el).css("padding-bottom");
		let paddingTop = $(el).css("padding-top");
		let paddingRight = $(el).css("padding-right");
		let xOffsetLeft = el.offsetLeft;
		let xOffsetTop = el.offsetTop;
		
		let marginTop = $(el).css("margin-top");
		let marginLeft = $(el).css("margin-left");
		let marginBottom = $(el).css("margin-bottom");
		let marginRight = $(el).css("margin-right");
		let fontSize = $(el).css("font-size");
		
		return {
			w: width,
			h: height,
			fs: this.getValueFromPixel(fontSize),
			
			// margin
			mt: this.getValueFromPixel(marginTop),
			ml: this.getValueFromPixel(marginLeft),
			mb: this.getValueFromPixel(marginBottom),
			mr: this.getValueFromPixel(marginRight),
			
			// padding
			pl: this.getValueFromPixel(paddingLeft),
			pr: this.getValueFromPixel(paddingRight),
			pt: this.getValueFromPixel(paddingTop),
			pb: this.getValueFromPixel(paddingBottom),
			
			// offset
			ol: xOffsetLeft,
			ot: xOffsetTop,
		}
	}
}



class XLayoutRequest {
	
	get(url, formData=null, dataType=null) {
		return new Promise((resolve, reject) => {
			let response = {
				status: null,
				statusCode: null,
				readyState: null,
				statusText: null,
				isSuccess: false, 
				isError: false,
				data: null,
				responseText: null,
			}
			
			let request = {
				type: "GET",
				url: url,
				success: function(data, status, xhr) {
					response.status = status;
					response.readyState = xhr.readyState;
					response.statusText = xhr.statusText;
					response.statusCode = xhr.status;
					response.responseText = xhr.responseText;
					response.isSuccess = true;
					response.data = data;
					resolve(response);
				},
				error: function(xhr, textStatus, error) {
					response.status = textStatus;
					response.data = error;
					response.readyState = xhr.readyState;
					response.statusCode = xhr.statusCode;
					response.statusText = xhr.statusText;
					response.responseText = xhr.responseText;
					response.isError = true;
					resolve(response);
				}
			}
			
			if (dataType != null) {
				request.dataType = dataType;
			}
			
			if (formData != null) {
				request.data = formData;
			}
			
			$.ajax(request);
		});
	}
	
	post(url, formData=null, dataType=null, uploadCallback=null) {
		return new Promise((resolve, reject) => {
			let response = {
				status: null,
				statusCode: null,
				statusText: null,
				isSuccess: false,
				readyState: null,
				isError: false,
				data: null,
				responseText: null,
			}
			
			let request = {
				type: "POST",
				url: url,
				cache: false,
				contentType: false,
				processData: false,
				success: function(data, status, xhr) {
					response.status = status;
					response.readyState = xhr.readyState;
					response.statusText = xhr.statusText;
					response.statusCode = xhr.status;
					response.responseText = xhr.responseText;
					response.isSuccess = true;
					response.data = data;
					
					resolve(response);
				},
				error: function(xhr, textStatus, error) {
					response.status = textStatus;
					response.data = error;
					response.readyState = xhr.readyState;
					response.statusCode = xhr.statusCode;
					response.statusText = xhr.statusText;
					response.responseText = xhr.responseText;
					response.isError = true;
					
					resolve(response);
				}
			}
			if (uploadCallback != null && typeof(uploadCallback) == 'function') {
				request.xhr = function() {
					var xhr = new window.XMLHttpRequest();
					xhr.upload.addEventListener("progress", function(evt) {
						if (evt.lengthComputable) {
							let percentage = (evt.loaded / evt.total) * 100;
							percentage = Number(percentage.toFixed(2));
							uploadCallback(evt.loaded, evt.total, percentage);
						}
					}, false);
					
					return xhr;
				}
			}
			if (formData != null) {
				request.data = formData;
			}
			
			if (dataType != null) {
				request.dataType = dataType;
			}
			$.ajax(request);
		});
	}
}

class XNumber {
	constructor(number) {
		this.number = this.init(number);
	}
	
	init(n) {
		if (typeof(n) == 'string') {
			if (n.indexOf(".") != -1) {
				return parseFloat(n);
			} else {
				return parseInt(n);
			}
		}
		return n;
	}
}


class XRequest {
	get(url, success_func, error_func, formData=null, dataType=null) {
		let response = {
			status: null,
			statusCode: null,
			statusText: null,
			isSuccess: false, 
			isError: false,
			readyState: null,
			data: null,
			responseText: null,
		}
		
		let request = {
			type: "GET",
			url: url,
			success: function (data, status, xhr) {
				response.status = status;
				response.readyState = xhr.readyState;
				response.statusText = xhr.statusText;
				response.statusCode = xhr.status;
				response.responseText = xhr.responseText;
				response.isSuccess = true;
				response.data = data;
				
				success_func(response);
			},
			
			error: function (xhr, textStatus, error) {
				response.status = textStatus;
				response.data = error;
				response.readyState = xhr.readyState;
				response.statusCode = xhr.statusCode;
				response.statusText = xhr.statusText;
				response.responseText = xhr.responseText;
				response.isError = true;
				
				
				error_func(response);
			}
		}
		if (dataType != null) {
			request.dataType = dataType;
		}
		
		if (formData != null) {
			request.data = formData;
		}
		
		$.ajax(request);
	}
	
	post(url, success_func, error_func, formData=null, dataType=null, uploadCallback=null) {
		let response = {
			status: null,
			statusCode: null,
			statusText: null,
			isSuccess: false, 
			isError: false,
			data: null,
			readyState: null,
			responseText: null,
		}
		
		let request = {
			type: "POST",
			url: url,
			data: formData,
			cache: false,
			contentType: false,
			processData: false,
			success: function(data, status, xhr) {
				response.status = status;
				response.readyState = xhr.readyState;
				response.statusText = xhr.statusText;
				response.statusCode = xhr.status;
				response.responseText = xhr.responseText;
				response.isSuccess = true;
				response.data = data;
				
				success_func(response);
			},
			error: function(xhr, textStatus, error) {
				response.status = textStatus;
				response.data = error;
				response.readyState = xhr.readyState;
				response.statusCode = xhr.statusCode;
				response.statusText = xhr.statusText;
				response.responseText = xhr.responseText;
				response.isError = true;
				
				error_func(response);
			}
		}
		
		if (uploadCallback != null && typeof(uploadCallback) == 'function') {
			request.xhr = function() {
				var xhr = new window.XMLHttpRequest();
				xhr.upload.addEventListener("progress", function(evt) {
	
					if (evt.lengthComputable) {
						let percentage = (ever.loaded / evt.total) * 100;
						percentage = Number(percentage.toFixed(2));
						uploadCallback(evt.loaded, evt.total, percentage);
					}
				}, false);
				return xhr;
			}
		}
		
		if (dataType != null) {
			request.dataType = dataType;
		}
		console.log(request);
		
		$.ajax(request);
	}
}



class VideoPlayer {
	
	constructor(id) {
		this.id = id;
		this.body = document.body;
		this.video = this.body.querySelector("#" + id + " video");
		this.playing = false;
		this.timerShowed = true;
		this.progress = null;
	}
	
	playPause() {
		if (this.playing) {
			this.pause();
		} else {
			this.play();
		}
	}
	
	displayTimer(bool) {
		let selector = this.body.querySelector("#" + this.id + " .video-controls");
		if (bool) {
			this.timerShowed = true;
			__.replaceClass(selector, "hide", "show");
		} else {
			this.timerShowed = false;
			__.replaceClass(selector, "show", "hide");
		}
	}
	
	
	
	play() {
		this.video.play();
		this.playing = true;
		let icon = this.body.querySelector("#" + this.id + " .icon-play i");
		
		__.replaceClass(icon, "fa-play", "fa-pause");
		setTimeout(() => {
			this.displayTimer(false);
		}, 1000);
	}
	
	pause() {
		this.video.pause();
		let icon = this.body.querySelector("#" + this.id + " .icon-play i");
		__.replaceClass(icon, "fa-pause", "fa-play");
		this.displayTimer(true);
		this.playing = false;
	}
	
		
	end() {
		this.video.currentTime = 0;
		this.pause();
	}
	
	updateProgress() {
		if (this.progress == null) {
			this.progress = this.body.querySelector("#" + this.id + " .video-timer .video-line .video-progress");
		}
		let perc = __.getMediaPercentage(this.video.currentTime, this.video.duration);
		this.progress.style.width = perc + "%";
	}
}


class AudioPlayer {
	constructor(id) {
		this.id = id;
		this.body = document.body;
		this.audio = this.body.querySelector("#" + id + " audio");
		this.playing = false;
	}
	
	playPause() {
		if (this.playing) {
			this.pause();
		} else {
			this.play();
		}
	}
	
	play() {
		this.audio.play();
		this.playing = true;
		let icon = this.body.querySelector("#" + this.id + " .speech-data .play-pause i");
		__.replaceClass(icon, "fa-play", "fa-pause");
	}
	
	pause() {
		this.audio.pause();
		let icon = this.body.querySelector("#" + this.id + " .speech-data .play-pause i");
		__.replaceClass(icon, "fa-pause", "fa-play");
		this.playing = false;
	}
	
	end() {
		this.audio.currentTime = 0;
		this.pause();
		
		let allSpan = this.body.querySelectorAll("#" + this.id + " .x-message-data.speech .waves .audio-waves");
		for (let i = 0; i < allSpan.length; i++) {
			let progress = allSpan[i].querySelector("span.audio-progress");
			progress.style.width = "0px";
		}
	}
	
	updateProgress(percent) {
		let model = this.body.querySelector("#" + this.id + " .x-message-data.speech .waves .progress-model");
		let modelWidth = $(model).css("width");
		modelWidth = modelWidth.split("px");
		modelWidth = (parseFloat(modelWidth[0])).toFixed(4);
		modelWidth = Number(modelWidth);
		
		percent = Number((percent).toFixed(4));
		
		let allSpan = this.body.querySelectorAll("#" + this.id + " .x-message-data.speech .waves .audio-waves");
		
		for (let i = 0; i < allSpan.length; i++) {
			let start = Number(allSpan[i].getAttribute("start"));
			let end = Number(allSpan[i].getAttribute("end"));
			if (start <= percent && percent <= end) {
				let progress = allSpan[i].querySelector("span.audio-progress");
				let spanOffsetLeft = __.dimension.getDimension(allSpan[i]);
				spanOffsetLeft = spanOffsetLeft.ol;
				let progressWidth = modelWidth - spanOffsetLeft + 1;
				progress.style.width = progressWidth + "px";
				break;
			}
		}
	}
}



$(document).on("click", ".x-message-data.video .icon-play.can-play", function() {
	let id = $(this).attr("target");
	let video = null;

	if (__.allVideoID.indexOf(id) != -1) {
		for (let i = 0; i < __.allVideoPlayed.length; i++) {
			if (id == __.allVideoPlayed[i].id) {
				video = __.allVideoPlayed[i];
				video.playPause();
			} else {
				video = __.allVideoPlayed[i];
				video.pause();
			}
		}
	} else {
		video = new VideoPlayer(id);
		__.allVideoPlayed.push(video);
		__.allVideoID.push(id);
		video.playPause();
		for (let i = 0; i < __.allVideoPlayed.length; i++) {
			if (id != __.allVideoPlayed[i].id) {
				__.allVideoPlayed[i].pause();
			}
		}
	}
});

$(document).on("click", ".x-message-data.speech .play-pause.can-play", function() {
	let id = $(this).attr("target");
	let audio = null;
	
	if (__.allAudioID.indexOf(id) != -1) {
		for (let i = 0; i < __.allAudioPlayed.length; i++) {
			if (id == __.allAudioPlayed[i].id) {
				audio = __.allAudioPlayed[i];
				audio.playPause();
			} else {
				audio = __.allAudioPlayed[i];
				audio.pause();
			}
		}
	} else {
		audio = new AudioPlayer(id);
		__.allAudioPlayed.push(audio);
		__.allAudioID.push(id);
		audio.playPause();
		for (let i = 0; i < __.allAudioPlayed.length; i++) {
			if (id != __.allAudioPlayed[i].id) {
				__.allAudioPlayed[i].pause();
			}
		}
	}
});



$(document).on("click", ".x-message-data.video video", function() {
	let id = $(this).attr("target");
	let video = null;
	
	if (__.allVideoPlayed.length > 0) {
		for (let i = 0; i < __.allVideoPlayed.length; i++) {
			if (__.allVideoPlayed[i].playing && __.allVideoPlayed[i].timerShowed == false) {
				video = __.allVideoPlayed[i];
				video.displayTimer(true);
			}
		}
	}
});


$(document).on("dblclick", ".x-message-data.video .video-controls",function() {
	let id = $(this).attr("target");
	let video = null;
	if (__.allVideoPlayed.length > 0) {
		for (let i = 0; i < __.allVideoPlayed.length; i++) {
			if (__.allVideoPlayed[i].playing && __.allVideoPlayed[i].timerShowed == true) {
				video = __.allVideoPlayed[i];
				video.displayTimer(false);
			}
		}
	}
})

function onPlayAudio() {
	for (let i = 0; i < __.allVideoPlayed.length; i++) {
		__.allVideoPlayed[i].pause();
	}
}

function onPlayVideo() {
	for (let i = 0; i < __.allAudioPlayed.length; i++) {
		__.allAudioPlayed[i].pause();
	}
}

function onEndAudio (e) {
	let id = $(e.target).attr("target");
	
	for (let i = 0; i < __.allAudioPlayed.length; i++) {
		if (id == __.allAudioPlayed[i].id) {
			__.allAudioPlayed[i].end();
		}
	}
}

function onEndVideo (e) {
	let id = $(e.target).attr("target");
	
	for (let i = 0; i < __.allVideoPlayed.length; i++) {
		if (id == __.allVideoPlayed[i].id) {
			__.allVideoPlayed[i].end();
		}
	}
}



function onAudioTimeUpdated (e) {
	let id = $(e.target).attr("target");
	let body = document.body;
	let currentTime = body.querySelector("#" + id + " .x-message-data.speech .timer span.current-time");
	currentTime.innerHTML = __.getMediaDuration(e.target.currentTime);
	let audio = null;
	
	for (let i = 0; i < __.allAudioPlayed.length; i++) {
		if (id == __.allAudioPlayed[i].id) {
			audio = __.allAudioPlayed[i];
			break;
		}
	}
	
	let perc = __.getMediaPercentage(e.target.currentTime, e.target.duration);
	let model = body.querySelector("#" + id + " .x-message-data.speech .waves .progress-model");
	model.style.width = perc + "%";
	audio.updateProgress(perc);
}

function onVideoTimeUpdated (e) {
	let id = $(e.target).attr("target");
	let body = document.body;
	let currentTime = body.querySelector("#" + id + " .x-message-data.video .video-timer span.time-progress");
	currentTime.innerHTML = __.getMediaDuration(e.target.currentTime);
	
	let video = null;
	
	for (let i = 0; i < __.allVideoPlayed.length; i++) {
		if (id == __.allVideoPlayed[i].id) {
			video = __.allVideoPlayed[i];
			break;
		}
	}
	video.updateProgress();
}


function onAudioLoadedMetadata(e) {
	let id = $(e.target).attr("target");
	let body = document.body;
	let duration = body.querySelector("#" + id + " .x-message-data.speech .timer span.audio-duration");
	duration.innerHTML = __.getMediaDuration(e.target.duration);
	
	let boxWavesDimension = __.dimension.getDimension("#" + id + " .waves .waves-contents");
	
	let eachWavesElement = body.querySelectorAll("#" + id + " .waves .waves-contents .audio-waves");
	let boxWaves = boxWavesDimension.w;
	let waveLength = 19;
	let spaceLength = 20;
	let waveWidths = __.dimension.getDimension("#" + id + " .waves .waves-1");
	let eachWaveWidth = waveWidths.w;
	
	let eachWavePercentage = Number(((eachWaveWidth * 100) / boxWaves).toFixed(4));
	
	let eachSpace = (boxWaves - (eachWaveWidth * 19)) / 20;
	let eachSpacePercentage = Number(((eachSpace * 100) / boxWaves).toFixed(4));
	
	let startCount = 0;
	let endCount = 0;
	
	let totalEffect = 0;
	
	for (let i = 0; i < eachWavesElement.length; i++) {
		if (totalEffect == 0) {
			startCount = Number((eachSpacePercentage).toFixed(4));
			endCount = Number((eachSpacePercentage + eachWavePercentage).toFixed(4));
		} else {
			startCount = Number((totalEffect + eachSpacePercentage).toFixed(4));
			endCount = Number((startCount + eachWavePercentage).toFixed(4));
		}
		
		histories = endCount;
		
		
		$(eachWavesElement[i]).attr("start", startCount);
		$(eachWavesElement[i]).attr("end", endCount);
		
		totalEffect = histories;
	}
	
	setTimeout(() => {
		setupAudioWaves("#" + id);
	}, 1000);
}

function onVideoLoadedMetadata(e) {
	let id = $(e.target).attr("target");
	let body = document.body;
	let duration = body.querySelector("#" + id + " .x-message-data.video .video-timer span.time-total");
	duration.innerHTML = __.getMediaDuration(e.target.duration);
}

$(document).on("play", " .x-message .x-message-data.speech audio", onPlayAudio);
$(document).on("play", " .x-message .x-message-data.video video", onPlayVideo);


class XNi {
	constructor() {
		// func 
		this.allVideoPlayed = [];
		this.allVideoID = [];
		this.allAudioPlayed = [];
		this.allAudioID = [];
		this.switchOn = this.switchOn.bind(this);
		this.switchOff = this.switchOff.bind(this);
		this.replaceClass = this.replaceClass.bind(this);
		this.getElement = this.getElement.bind(this);
		this.configureNavBar = this.configureNavBar.bind(this);
		this.getElements = this.getElements.bind(this);
		this.activateSpace = this.activateSpace.bind(this);
		this.getBoolean = this.getBoolean.bind(this);
		this.getFieldValue = this.getFieldValue.bind(this);
		this.getFieldValues = this.getFieldValues.bind(this);
		this.splits = ["-", " ", "."];
		// init 
		this.falseBoolean = ['f', 'false', '0', 'faux', 'non', 'no', '-1'];
		this.trueBoolean = ['t', 'true', '1', 'vrai', 'oui', 'yes'];
		this.defaultFocusColor = "white";
		
		this.dimension = new Dimension();
		this.layoutRequest = new XLayoutRequest();
		this.emailRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
		this.usernameRegex = /^[a-z0-9._-]{4,20}$/;
		this.dayName = [
			"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
		]
		this.monthName = [
			"Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"
		]
		
		this.popupFrame = null;
		this.containerPopup = null;
		this.span = null;
		this.titleAlert = null;
		this.topStyle = null;
		this.message = null;
		this.ok = null;
		this.okText = null;
	}
	
	escapeHTML(text) {
		return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
	}
	
	convertText(text) {
	    let outputText = this.escapeHTML(text);
		
		// #hashtags 
		outputText = outputText.replace(/(^|\s|[.,!?])(#\w+)/g, '$1<a href="https://twitter.com/hashtag/$2" style="color:blue;">$2</a>');

	    // Préserver les sauts de ligne 
	    outputText = outputText.replace(/\n/g, '<br>');
	    
	    // Détecter et styliser les numéros de carte de crédit (remplacer par des astérisques pour la sécurité)
	    outputText = outputText.replace(/\b\d{4}[-.\s]?\d{4}[-.\s]?\d{4}[-.\s]?\d{4}\b/g, '<span style="color:red;">**** **** **** ****</span>');
	    
	    // Email
		outputText = outputText.replace(/\b([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})\b/g, '<a href="mailto:$1" style="color:blue;">$1</a>');

		
	    // Link
		outputText = outputText.replace(/(^|\s)((https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?(\/[^\s]*)?)(?![^<]*<\/a>)/g, function(match, p1, p2) {
	        let url = p2;
	        if (!/^https?:\/\//.test(url)) {
	            url = 'http://' + url;
	        }
	        return p1 + '<a href="' + url + '" style="color:blue;">' + p2 + '</a>';
	    });
	    
	    // @username
	    outputText = outputText.replace(/(^|\s)(@[a-zA-Z0-9._]+)/g, '$1<a href="https://twitter.com/$2" style="color:blue;">$2</a>');

	    // Number
	    outputText = outputText.replace(/(^|\s)(\+?\d{1,4}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})(?![^<]*<\/a>)/g, '$1<a href="tel:$2" style="color:blue;">$2</a>');

	    // IP address
	    outputText = outputText.replace(/(^|\s)(\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b)(?![^<]*<\/a>)/g, '$1<span style="color:blue;">$2</span>');

	    // Détecter les codes produits (SKU) de type ABC123 ou XYZ-7890
	    outputText = outputText.replace(/\b[A-Z]{3}-?\d{3,4}\b/g, '<span style="color:green;">$&</span>');
	
	    // Liste de mots sensibles (exemple)
	    const sensitiveWords = ["mot_inapproprié1", "mot_inapproprié2", "insulte"];
	    const sensitiveRegex = new RegExp(`\\b(${sensitiveWords.join('|')})\\b`, 'gi');
	
	    // Masquer les mots sensibles avec des astérisques
	    outputText = outputText.replace(sensitiveRegex, '***');
    
	    return outputText;
	}
	
	getFormatDatetimeDifference(date) {
		let hour = 60;
		let dateNow = new Date();
		let dateToCompare = new Date(date);
		let differenceInMilliseconds = dateNow - dateToCompare;
		let differenceInMinutes = Math.floor(differenceInMilliseconds / 1000 / 60);
		let differenceInHour = Math.floor(differenceInMilliseconds / 1000 / 60 / 60);
		let differenceInDay = Math.floor(differenceInMilliseconds / 1000 / 60 / 60 / 24);
		
		
		if (differenceInMinutes < 1) {
			return 'Just now';
		} else if (differenceInMinutes < hour) {
			return differenceInMinutes.toString() + "mn ago";
		} else if (differenceInMinutes >= hour && differenceInHour < 24) {
			return differenceInHour.toString() + "h ago";
		} else if (differenceInHour >= 24 && differenceInDay <= 1) {
			return 'Yesterday';
		} else if (differenceInHour >= 24 && differenceInDay > 1) {
			if (differenceInDay <= 6) {
				return this.dayName[dateToCompare.getDay()] + " " + dateToCompare.getDate();
			} else if (differenceInDay <= 31) {
				return differenceInDay.toString() + "d ago";
			} else {
				let monthName = this.monthName[dateToCompare.getMonth()];
				let hour = dateToCompare.getHours();
				let minute = dateToCompare.getMinutes();
				let second = dateToCompare.getSeconds();
				if (dateToCompare.getHours() < 10) {
					hour = "0" + dateToCompare.getHours();
				} 
				if (dateToCompare.getMinutes() < 10) {
					minute = "0" + dateToCompare.getMinutes();
				}
				if (dateToCompare.getSeconds() < 10) {
					second = "0" + dateToCompare.getSeconds();
				}
				return monthName + " " + dateToCompare.getDate() + " " + dateToCompare.getFullYear() + " " + hour + ":" + minute + ":" + second;
			}
		}
	}
	
	getFormatTimeDifference(dateComplet) {
	    const dateNow = new Date();
	    const dateToCompare = new Date(dateComplet);
	
	    const differenceInMilliseconds = dateNow - dateToCompare;
	    const differenceInMinutes = Math.floor(differenceInMilliseconds / 1000 / 60);
		if (differenceInMinutes < 1) {
			return 'Just now';
		} else if (differenceInMinutes < 60) {
	        return `${differenceInMinutes} mn`;
	    } else {
	        const hours = dateToCompare.getHours().toString().padStart(2, '0');
	        const minutes = dateToCompare.getMinutes().toString().padStart(2, '0');
	        return `${hours}:${minutes}`;
	    }
	}
	
	getFileExtension (file) {
		file = file instanceof File ? file.name : file;
		let ext = file.split(".");
		
		return ext[ext.length - 1];
	}
	
	getMediaPercentage (currenTime, total) {
		currenTime = parseFloat(currenTime);
		total = parseFloat(total);
		return (currenTime * 100) / total;
	}
	
	byteToHuman(byte) {
		byte = typeof(byte != 'number') ? Number(byte) : byte;
		let k = 1024;
		let kb = Math.pow(k, 1);
		let mb = Math.pow(k, 2);
		let gb = Math.pow(k, 3);
		let tb = Math.pow(k, 4);
		let value = "";
		
		if (byte == 0) {
			value = "0KB";
		} else {
			if (byte <= mb) {
				value = (byte / kb).toFixed(1);
				value = value + "KB";
			} else if (byte <= gb) {
				value = (byte / mb).toFixed(1);
				value = value + "MB";
			} else if (byte <= tb) {
				value = (byte / gb).toFixed(1);
				value = value + "TB";
			}
		}
		return value;
	}
	
	
	getMediaDuration (second) {
		let duration = null;
        second = parseInt(second);
        let minute = null;
        let seconds = null;
        if (second < 60) {
            if (second < 10) {
                duration = "0:0" + second; 
            } else {
                duration = "0:" + second;
            }
        } else if (second == 60) {
            duration = "1:00";
        } else if (second > 60) {
            minute = parseInt(second / 60);
            seconds = second % 60;
            let min = "";
            let sec = "";
            if (minute < 10) {
                min = minute;
            } else {
                min = minute;
            }
            if (seconds < 10) {
                sec = "0" + seconds;
            } else {
                sec = seconds;
            }
            duration = min + ":" + sec;
        }
        return duration;
	}
	
	testUsername(val) {
		if (this.usernameRegex.test(val)) {
			return true;
		}
		return false;
	}
	
	closeXAlert() {
		let body = document.body;
		let popup = body.querySelector("#x-app-popup");
		
		popup.classList.replace("x-popup-alert", "x-popup-hidden");
	}
	
	xAlert(title, message, status, x=false) {
		let statusColor = "x-alert-btn x-sp-btn x-pointer ";
		
		if (status == 'danger') {
			statusColor = statusColor + "x-alert-btn-danger";
		} else if (status == "warning") {
			statusColor = statusColor + "x-alert-btn-warning";
		} else if (status == "success") {
			statusColor = statusColor + "x-alert-btn-success";
		} else {
			statusColor = statusColor + "x-alert-btn-normal";
		}
		
		if (this.popupFrame == null) {
			this.popupFrame = this.createElement("div", "x-app-popup", "xpofi xzin10 x-popup-frame x-popup-hidden x-frame-fullscreen");
			this.containerPopup = this.createElement("div", null, "x-container-alert xpore xbora20 xovhi");
			this.topStyle = this.createElement("div", null, "x-frame-top-style");
			this.span = document.createElement("span");
			this.titleAlert = this.createElement("p", "title", "xtealce xfowebo x-alert-title");
			this.message = this.createElement("p", "message", "xtealce xlihe5 x-alert-message");
			this.ok = this.createElement("div", "ok", null);
			this.okText = this.createElement("button", null, "x-pointer");
			this.okText.innerHTML = "OK";
			
			this.ok.appendChild(this.okText);
			this.ok.addEventListener("click", this.closeXAlert);
			this.topStyle.appendChild(this.span);
			this.containerPopup.appendChild(this.topStyle);
			this.containerPopup.appendChild(this.titleAlert);
			this.containerPopup.appendChild(this.message);
			this.containerPopup.appendChild(this.ok);
			this.popupFrame.appendChild(this.containerPopup);
			this.popupFrame.addEventListener("click", this.closeXAlert);
			document.body.append(this.popupFrame);
		}
		this.ok.setAttribute("class", statusColor);
		
		this.titleAlert.innerHTML = title;
		this.message.innerHTML = message;
		if (!x) {
			if ($(this.popupFrame).hasClass("x-popup-hidden")) {
				this.replaceClass(this.popupFrame, "x-popup-hidden", "x-popup-alert");
			}
		}
	}
	
	testEmail(val) {
		if (this.emailRegex.test(val)) {
			return true;
		}
		return false;
	}
	
	choiceObjectRandomlyFrom(list) {
		if (list instanceof Array) {
			if (list.length == 0) {
				return null;
			}
			let index = Math.floor(Math.random() * list.length);
			return list[index];
		} else {
			return false;
		}
	}
	
	updateUploadingProgress (id, percentage) {
		let total = 125;
		let body = document.body;
		let loader = body.querySelector("#x-cir-prog-" + id);
		let bit = parseInt((total * Number(percentage)) / 100);
		loader.style.strokeDasharray = bit + ", 130";
	}
	
	
	createElement(tagName, id, htmlClass, html, _in=false) {
		let obj = document.createElement(tagName);
		
		if (id) {
			obj.id = id;
		}
		
		if (htmlClass) {
			obj.setAttribute("class", htmlClass);
		}
		
		if (html) {
			obj.innerHTML = html;
		}
		
		if (_in) {
			_in = typeof(_in) == "string" ? this.getElement(_in) : _in;
			_in.append(obj);
		}
		
		return obj;
	}
	
	getShortText(text, max) {
		if (text && max) {
			if (typeof(text) != 'string') {
				return new Error('text should be string')
			}
			if (typeof(max) != 'number') {
				return new Error('max number a number')
			}
			
			if (text.length <= max) {
				return text;
			} else {
				return text.slice(0, max) + '...';
			}
		} else {
			return new Error('Argument missing')
		}
	}
	
	createXElement(tagName, id, htmlClass, html, _in) {
		let obj = this.createElement(tagName, id, htmlClass, html, _in);
		return new XElement(obj);
	}
	
	
	showTooltip(selector) {
		selector = typeof(selector) == "string" ? this.getElement(selector) : selector;
		if (selector == null || selector == undefined) {
			return null;
		} else {
			let target = this.dimension.getDimension(selector);
			return target;
		}
	}
	
	css(selector, key, value) {
		$(selector).css(key, value);
	}
	
	getattr(selector, name) {
		let el = typeof(selector) == 'string' ? this.getElement(selector) : selector;
		if (el == null || el == undefined) {
			return null;
		} else {
			return el.getAttribute(name);
		}
	}
	
	fadeIn(selector, milliseconds) {
		let obj = selector == 'string' ? this.getElement(selector) : selector;
		if (obj != null) {
			$(obj).fadeIn(milliseconds);
			return true;
		}
		
		return false;
	}
	
	fadeOut(selector, milliseconds) {
		let obj = selector == 'string' ? this.getElement(selector) : selector;
		if (obj != null) {
			$(obj).fadeOut(milliseconds);
			return false;
		}
		return false;
	}
	
	getCSSAttributeName(string) {
		if (typeof(string) == 'string') {
			string = string.trim();
			let a = 0;
			let dash = "";
			if (string[0] == "_") {
				for (let x = 0; x < string.length; x++) {
					if (string[x] == "_") {
						a++;
					} else {
						break;
					}
				}
			}
			
			let second = string.slice(a, string.length);
			if (second.indexOf("_") != -1) {
				let val = second.split("_");
				second = val.join("-");
			}
			
			for (let o = 0; o < a; o++) {
				dash += "-";
			}
			return dash + second;
		}
		
		return false;
	}
	
	getKeyByText(text, split) {
		text = text.trim();
		let a = 0;
		let underscore = "";
		
		if (typeof(split) == "object") {
			// check if the begin of the string are --
			if (text[0] == "-") {
				for (let x = 0; x < text.length; x++) {
					if (text[x] == "-") {
						a++;
					} else {
						break;
					}
				}
			}
			let second_value = text.slice(a, text.length);
			for (let x = 0; x < split.length; x++) {
				if (second_value.indexOf(split[x])) {
					let val = second_value.split(split[x]);
					for (let v = 0; v < val.length; v++) {
						val[v] = val[v].toLowerCase();
					}
					second_value = val.join("_");
				}
			}
			
			for (let u = 0; u < a; u++) {
				underscore += "_";
			}
			return underscore + second_value;
		} else {
			return null;
		}
	}
	
	toUpperFirstOnly(text) {
		if (typeof(text) == "string") {
			text = text.toLowerCase();
			return text[0].toUpperCase() + text.slice(1, text.length);
		}
	}
	
	setattr(selector, name, value) {
		let el = typeof(selector) == 'string' ? this.getElement(selector) : selector;
		if (el == null || el == undefined) {
			return null;
		} else {
			if (name && value) {
				el.setAttribute(name, value);
			}
		}
	}
	
	getFieldValue(selector, aliasArg) {
		let data = {
			id: selector.toString(),
			alias: aliasArg,
			value: null,
			element: null,
			error: null,
		}
		
		// define an alias
		if (aliasArg == null) {
			let new_alias = data.id;
			for (let i = 0; i < this.splits.length; i++) {
				if (new_alias.indexOf(this.splits[i])) {
					let r = new_alias.split(this.splits[i]);
					for (let a = 0; a < r.length; a++) {
						r[a] = r[a].toLowerCase();
					}
					new_alias = r.join("_");
				}
			}
			data.alias = new_alias;
		}
		
		if (this.getElement("#" + data.id) == null || this.getElement("#" + data.id) == undefined) {
			data.element = null;
			data.error = new Error(data.id + " is not defined.")
		} else {
			data.element = this.getElement("#" + data.id);
			if (data.element.type == "file") {
				
			} else if (data.element.type == "number") {
				data.value = Number(data.element.value);
			} else {
				data.value = data.element.value;
			}
		}
		
		return data;
	}
	
	configureValue(data, form_data) {
		let new_data = {
			id: data.id,
			error: data.error,
			element: data.element,
			alias: data.alias,
		}
		new_data[data.alias] = data.value;
		if (form_data) {
			let f = new FormData();
			f.append(data.alias, data.value);
			let data_with_form_data = {
				data: new_data,
				form_data: f,
			}
			return data_with_form_data;
		}
		return new_data;
	}
	
	getFieldValues(list, form_data=XSettings.getFieldValuesWithFormData) {
		if (typeof(list) == 'object') {
			if (list.length == undefined) {
				if (list.id != '' || list.id != null) {
					// dict
					let data = null;
					let alias = list.alias ? list.alias : null;
					data = this.getFieldValue(list.id.trim(), list.alias);
					let final_data = this.configureValue(data, form_data);
					return final_data;
				}
			} else {
				// list
				// for each id
				let formData = new FormData();
				let final_data = {
					fulldata: {}
				}
				
				for (let i = 0; i < list.length; i++) {
					let data = null;
					if (list[i] instanceof Object) {
						// dict
						let alias = list[i].alias ? list[i].alias : null;
						data = this.getFieldValue(list[i].id.trim(), list[i].alias);
					} else {
						// string
						data = this.getFieldValue(list[i], null);
					}
					final_data[data.alias] = data.element.type == "number" ? Number(data.value) : data.value;
					final_data.fulldata[data.alias] = {
						id: data.id,
						value: data.value,
						element: data.element,
						alias: data.alias,
						error: data.error,
					}
					
					if (form_data) {
						formData.append(data.alias, data.value);
					}
				}
				
				if (form_data) {
					final_data["form_data"] = formData;
				}
				
				return final_data;
			}
			
		} else if (typeof(list) == 'string') {
			// string
			let selector = list.trim();
			let data = this.getFieldValue(selector, null);
			let final_data = this.configureValue(data, form_data);
			return final_data;
				
		} else {
			return new Error("The argument 'list' expected Object or a string. " + typeof(list) + " is mentioned");
		}
	}
	
	replaceClass(selector, oldClass, newClass) {
		selector = typeof(selector) == 'string' ? this.getElement(selector) : selector;
		
		selector.classList.replace(oldClass, newClass);
	}
	
	getElements(selector) {
		return document.querySelectorAll(selector);
	}
	
	xInnerText(params) {
		let startIterator = 0;
		if (params.selector && params.text && params.time) {
			let element = this.getElement(params.selector);
			if (element == null || element == undefined) {
				console.error("Selector null: " + params.dict);
			} else {
				let time = params.time / params.text.length;
				
				setInterval(() => {
					let char = params.text.slice(0, startIterator);
					element.innerHTML = char;
					startIterator++;
					if (startIterator == params.text.length) {
						clearInterval();
						console.log("Done!")
					}
				}, time);
			}
		} else {
			console.error("Parameters error");
		}
	}
	
	configureNavBarH(id) {
		let t = id.split("#");
		let target = t[1];
		let focusColor = $(id).attr("xfocuscolor");
		let blurColor = $(id).attr("xblurcolor");
		let backgroundColor = $(id).attr("xfocusbackground");
		
		let xSlider = this.getElement(id + " .x-h-slider");
		let active = this.dimension.getDimension(id + " .x-h-nav-active");
		
		xSlider.style.top = active.ot + "px";
		xSlider.style.left = active.ol + "px";
		xSlider.style.height = active.h + "px";
		xSlider.style.width = active.w + "px";
		xSlider.style.background = backgroundColor;
		let xs = this.getElements(id + " .x-h-item");
		
		setTimeout(function() {
			xSlider.style.opacity = "1";
			for (let i = 0; i < xs.length; i++) {
				let icon = xs[i].querySelector("i");
				let span = xs[i].querySelector("span");
				
				if (!$(xs[i]).hasClass("x-h-nav-active")) {
					xs[i].classList.add("x-h-nav-deactive");
					icon.style.color = blurColor;
					span.style.color = blurColor;
				} else {
					icon.style.color = focusColor;
					span.style.color = focusColor;
				}
				xs[i].setAttribute("target", target);
			}
		}, 500)
		
	}
	
	activateSpace(mainSpace, idSpace, start) {
		let xMainSpace = this.getElement("#" + mainSpace);
		let xSpaces = xMainSpace.querySelectorAll(".x-space-child");
		for (let i = 0; i < xSpaces.length; i++) {
			if (xSpaces[i].id == idSpace) {
				if (start) {
					xSpaces[i].classList.add("x-space-on");
				} else {
					xSpaces[i].classList.replace("x-space-off", "x-space-on");
				}
			} else {
				if (start) {
					xSpaces[i].classList.add("x-space-off");
				} else {
					xSpaces[i].classList.replace("x-space-on", "x-space-off");
				}
			}
		}
	}
	
	configureNavBar(id) {
		let body = document.body;
		let sliderType = body.querySelector(id).getAttribute("xslidertype");
		let t = id.split("#");
		let target = t[1];
		let mainSpace = body.querySelector(id).getAttribute("xMainSpace");
		
		if (sliderType == 'frame') {
			let focusBackground = body.querySelector(id).getAttribute("xfocusbackground");
			let blurColor = body.querySelector(id).getAttribute("xblurColor");
			let focusColor = body.querySelector(id).getAttribute("xfocusColor");
			let xSlider = body.querySelector(id + " .x-slider");
			let activeNavBar = this.dimension.getDimension(id + " .x-nav-active");
			xSlider.style.width = (activeNavBar.w) + "px";
			xSlider.style.height = activeNavBar.h;
			xSlider.style.backgroundColor = focusBackground;
			xSlider.style.left = activeNavBar.ol + "px";
			
			setTimeout(() => {
				body.querySelector(id + " .x-slider").classList.add("x-slider-show");
				let xNavs = body.querySelectorAll(id + " .x-nav-item");
				for (let i = 0; i < xNavs.length; i++) {
					xNavs[i].setAttribute("target", target);
					let iEl = xNavs[i].querySelector("span");
					let span = xNavs[i].querySelector("i");
					if (!$(xNavs[i]).hasClass("x-nav-active")) {
						if (iEl !== null) {
							iEl.style.color = blurColor;
						}
						if (span !== null) {
							span.style.color = blurColor;
						}
					} else {
						let idSpace = $(xNavs[i]).attr("xSpace");
						if (iEl !== null) {
							iEl.style.color = focusColor;
						}
						if (span !== null) {
							span.style.color = focusColor;
						}
						
						if (mainSpace != null || mainSpace != undefined) {
							this.activateSpace(mainSpace, idSpace, true);
						}
						
					}
				}
			}, 500);
			
		} else if (sliderType == 'line') {
			let focusColor = body.querySelector(id).getAttribute("xfocuscolor");
			let xSlider = body.querySelector(id + " .x-slider");
			let blurColor = body.querySelector(id).getAttribute("xblurcolor");
			
			
			let activeNavBar = this.dimension.getDimension(id + " .x-nav-active");
			
			xSlider.style.left = activeNavBar.ol + "px";
			xSlider.style.top = (activeNavBar.ot + activeNavBar.h) + "px";
			xSlider.style.width = activeNavBar.w + "px";
			xSlider.style.backgroundColor = focusColor;
			
			setTimeout(() => {
				let xNavs = body.querySelectorAll(id + " .x-nav-item");
				body.querySelector(id + " .x-slider").classList.add("x-slider-show");
				body.querySelector(id, " .slider").classList.add("x-slider-show");
				
				for (let i = 0; i < xNavs.length; i++) {
					xNavs[i].setAttribute("target", target);
					if (!$(xNavs[i]).hasClass("x-nav-active")) {
						xNavs[i].querySelector("span").style.color = blurColor;
					} else {
						let idSpace = $(xNavs[i]).attr("xSpace");
						xNavs[i].querySelector("span").style.color = focusColor;
						if (mainSpace != null || mainSpace != undefined) {
							this.activateSpace(mainSpace, idSpace, true);
						}
					}
				}
			}, 500);
		}
	}
	
	getElement(selector) {
		return document.querySelector(selector);
	}
	
	getXElement(selector) {
		if (selector instanceof XElement) {
			return selector;
		}
		
		selector = selector == 'string' ? this.getElement(selector) : selector;
		
		if (selector == null || selector == undefined) {
			return null;
		} else {
			if (this.getattr(selector, "xelement") == null || this.getattr (selector, "xelement") == undefined) {
				return new XElement(selector);
			} else {
				let xid = this.getattr(selector, "xelement");
				let xelement = null;
				let found = false;
				for (let x = 0; XSettings.xElements.length; x++) {
					if (XSettings.xElements[x].id == xid) {
						xelement = XSettings.xElements[x];
						found = true;
						break;
					}
				}
				
				if (found == false) {
					xelement = new XElement(selector);
				}
				return xelement;
			}
		}
	}
	
	switchToggle(id) {
		if ($(id).hasClass('x-toggle-off')) {
			let on = this.switchOn(id);
			return on;
		} else {
			let off = this.switchOff(id);
			return off;
		}
	}
	
	updateProgress(dict) {
		if (dict.id) {
			let progressType = $(dict.id).attr("xProgressType");
			let value = parseInt(dict.value);
			if (progressType == "aw") {
			
				let progress = this.getElement(dict.id + " .x-bar .x-progress");
				
				if (value == 0) {
					if ($(dict.id).hasClass("x-progress-starting")) {
						this.replaceClass(dict.id, "x-progress-starting", "x-aw-progress-0")
					} else {
						this.replaceClass(dict.id, "x-progress-starting", "x-aw-progress-0")
					}
				} else {
					if (value % 10 == 0 && value >= 10) {
						console.log(value);
						let oldClass = value - 10;
						this.replaceClass(dict.id, "x-aw-progress-" + oldClass, "x-aw-progress-" + value);
					}
				}
				progress.style.width = value + "%";
				if (dict.hasPercentText) {
					let perc = this.getElement(dict.id + " p");
					perc.innerHTML = value + "%";
				}
				
			} else if (progressType == "line") {
				let progressLine = this.getElement(dict.id + " .x-progress");
				if (value % 10 == 0 && value >= 10) {
					let oldClass = value - 10;
					this.replaceClass(dict.id, "x-line-progress-" + oldClass, "x-line-progress-" + value);
				}
				progressLine.style.width = value + "%";
			}
			
		} else {
			console.error("Error: Please, set an id to the progress.")
		}
	}
	
	activeNavigationH(id, target) {
		let navBarId = "#" + target;
		let navId = "#" + id;
		
		let focusColor = $(navBarId).attr("xFocusColor");
		let blurColor = $(navBarId).attr("xBlurColor");
		
		let navDim = this.dimension.getDimension(navId);
		let xSlider = this.getElement(navBarId + " .x-h-slider");
		
		xSlider.style.top = navDim.ot + "px";
		
		let xs = this.getElements(navBarId + " .x-h-item");
		for (let i = 0; i < xs.length; i++) {
			let icon = xs[i].querySelector("i");
			let span = xs[i].querySelector("span");
			let b = xs[i].id == id ? focusColor : blurColor;
			icon.style.color = b;
			span.style.color = b;
		}
	}
	
	activeNavigation(id, target) {
		let navId = "#" + id;
		let navBarId = "#" + target;
		let xNavItem = null;
		
		let navDim = this.dimension.getDimension(navId);
		let xSlider = this.getElement(navBarId + " .x-slider");
		let xMainSpace = $(navBarId).attr("xMainSpace");
		
		xSlider.style.left = navDim.ol + "px";
		xSlider.style.width = navDim.w + "px";
		
		
		if ($(navBarId).attr("xSliderType") == 'frame') {
			xNavItem = this.getElement(navId);
			xNavItem.classList.replace("x-nav-deactive", "x-nav-active");
			let iEl = xNavItem.querySelector("i");
			let spanEl = xNavItem.querySelector("span");
			
			if (iEl !== null) {
				iEl.style.color = $(navBarId).attr("xFocusColor");
			}
			if (spanEl !== null) {
				spanEl.style.color = $(navBarId).attr("xFocusColor");
			}
			
			
			let xs = this.getElements(navBarId + " .x-nav-item");
			for (let i = 0; i < xs.length; i++) {
				if (xs[i].id != id) {
					xs[i].classList.replace("x-nav-active", "x-nav-deactive");
					if (xs[i].querySelector("i") !== null) {
						xs[i].querySelector("i").style.color = $(navBarId).attr("xBlurColor");
					}
					if (xs[i].querySelector("span") !== null) {
						xs[i].querySelector("span").style.color = $(navBarId).attr("xBlurColor");
					}
				}
			}
		} else {
			xNavItem = this.getElement(navId + " span");
			
			xNavItem.classList.remove("x-nav-deactive");
			xNavItem.classList.remove("x-nav-deactive2");
			xNavItem.style.color = $(navBarId).attr("xFocusColor");
			
			
			let xs = this.getElements(navBarId + " .x-nav-item");
			for (let i = 0; i < xs.length; i++) {
				if (xs[i].id != id) {
					xs[i].querySelector("span").style.color = $(navBarId).attr("xBlurColor");
				}
			}
		}
		let xSpace = $(navId).attr("xSpace");
		if ((xSpace != null || xSpace != undefined) && (xMainSpace != undefined || xMainSpace != null)) {
			this.activateSpace(xMainSpace, xSpace, false);
		} 
		
	}
	
	switchOn(id) {
		this.replaceClass(id, 'x-toggle-off', 'x-toggle-on');
		return true;
	}
	
	switchOff(id) {
		this.replaceClass(id, 'x-toggle-on', 'x-toggle-off');
		return false;
	}
	
	getBoolean(value) {
		if (this.trueBoolean.indexOf(value.toString().toLowerCase()) != -1) {
			return true;
		} else if (this.falseBoolean.indexOf(value.toString().toLowerCase()) != -1) {
			return  false;
		} else {
			return null;
		}
	}
	
	errorFieldValue(selector, error=null) {
		selector = typeof(selector) == 'string' ? this.getElement(selector).parentNode : selector.parentNode;
		
		if (error == null) {
			let onfocus = this.getattr(selector, "xOnFocus");
			let errorClass = null;
			if (onfocus != null || onfocus != "") {
				errorClass = STATUS_FIELD[onfocus];
				if ($(selector).hasClass(onfocus)) {
					this.replaceClass(selector, onfocus, errorClass);
				}
			}
		} else {
			$(selector).addClass(error);
		}
	}
	
	normalFieldValue(selector) {
		selector = typeof(selector) == 'string' ? this.getElement(selector).parentNode : selector.parentNode;
		
		let onfocus = this.getattr(selector, "xOnFocus");
		let error = null;
		let focused = this.getBoolean(this.getattr(selector, "focused"));
		
		
		if (onfocus != null || onfocus != "") {
			error = STATUS_FIELD[onfocus];
			
			if ($(selector).hasClass(error) && focused) {
				this.replaceClass(selector, error, onfocus);
			} else if ($(selector).hasClass(error) && focused == false) {
				$(selector).removeClass(error);
			}
		}
	}
	
	successFieldValue(selector, success=null) {
		selector = typeof(selector) == 'string' ? this.getElement(selector).parentNode : selector.parentNode;
	}
}


const __ = new XNi();
const xni = __;

__.xAlert("", "", '', true);

$(document).on("click", ".x-nav-item",function() {
	__.activeNavigation(this.id, $(this).attr("target"));
});

$(document).on("click", ".x-h-item" ,function() {
	__.activeNavigationH(this.id, $(this).attr("target"));
});

function xFocusFieldFunc (e) {
	let parent = $(this).get()[0].parentNode;
	let onFocusField = __.getattr(parent, "xonfocus");
	__.setattr(parent, "focused", "true");
	if (onFocusField != null || onFocusField != "") {
		$(parent).addClass(onFocusField);
	}
}

function xBlurFieldFunc (e) {
	let parent = $(this).get()[0].parentNode;
	let onFocusField = __.getattr(parent, "xonFocus");
	__.setattr(parent, "focused", "false");
	if (onFocusField != null && onFocusField != "") {
		$(parent).removeClass(onFocusField);
	}
}

$(document).on("focus", ".x-search input",xFocusFieldFunc);
$(document).on("blur", ".x-search input", xBlurFieldFunc);
$(document).on("focus", ".x-search-arrow input", xFocusFieldFunc);
$(document).on("blur", ".x-search-arrow input", xBlurFieldFunc);


$(document).on("focus", ".x-field input", xFocusFieldFunc);
$(document).on("blur", ".x-field input", xBlurFieldFunc);
