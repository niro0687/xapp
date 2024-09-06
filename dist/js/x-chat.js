

function XUserListComponent ({name, id, imgSrc, className, center, style}) {
	
	const getElementCenter = center ? " x-center " : " ";
	const classNameFinal = "x-profile-item " + getElementCenter + className;
	
	return <div className={classNameFinal}>
		<div>
			<img src={imgSrc} />
		</div>
		<div>
			<p>{name}</p>
			<p>{id}</p>
		</div>
	</div>
}

const XUserList = React.memo(XUserListComponent);

function XCreateConversationComponent ({style, className}) {
	const cl = "x-create-conv " + className;
	return <div className={cl} style={style}>
		<i className="fa fa-pen"></i>
	</div>
}
const XCreateConversation = React.memo(XCreateConversationComponent);

XCreateConversation.defaultProps = {
	className: "",
	style: {},
}

function XStartConvBoxComponent ({url, placeholder, title, token, user, style}) {
	const [disabled, setDisabled] = React.useState(true);
	const [sendingStatus, setSendingStatus] = React.useState('none');
	const [loading, setLoading] = React.useState(false);
	const [disabledInput, setDisabledInput] = React.useState(false);
	const [value, setValue] = React.useState('');
	
	const statusContent = React.useMemo(() => {
		if (sendingStatus == 'none') {
			return null;
		} else if (sendingStatus == 'error') {
			let message = "";
			if (navigator.onLine) {
				message = "Server error";
			} else {
				message = "Server error or try your connection";
			}
			return <span className="x-text-danger x-ma-to_7 x-fo-si_11 x-fo-we_bo x-ma-bo_5">{message}</span>
		} else if (sendingStatus == 'sent') {
			return <span className="x-text-success x-ma-to_7 x-fo-si_11 x-fo-we_bo x-ma-bo_5">Sent</span>
		}
	}, [sendingStatus]);
	const handleChange = (e) => {
		setValue(e.target.value);
		setSendingStatus('none');
		if (e.target.value.trim().length == 0) {
			setDisabled(true);
		} else {
			setDisabled(false);
		}
	}
	
	const request = async function() {
		let date = new Date();
		let data = {
			message: value.trim(),
			datetime: date.toString(),
		}
		let formData = new FormData();
		
		let getToken;
		if (typeof(token) == 'function') {
			getToken = token();
		} else if (typeof(token) == 'object') {
			getToken = token;
		} else {
			throw new Error('token must be a function which returns an object or an object');
		}
		Object.entries(getToken).forEach(([key, value]) => {
			formData.append(key, value);
		});
		
		
		Object.entries(data).forEach(([key, value]) => {
			formData.append(key, value);
		});
	
		let req = await __.layoutRequest.post(url, formData, 'json');
		
		if (req.isSuccess) {
			setSendingStatus('sent');
		} else {
			setSendingStatus('error');
		}
		setLoading(false);
		setDisabledInput(false);
		setDisabled(false);
	}
	
	const send = (e) => {
		setDisabledInput(true);
		setDisabled(false);
		setSendingStatus('none');
		setLoading(true);
		request();
	}
	const buttonStyle = {
		width: '100%',
	}
	
	return <div className="x-po_re x-start-conv x-shadow" style={style}>
    	<div className="x-square-40 x-di_fl x-ju-co_ce x-al-it_ce x-po_ab close-start-conv">
    		<i className="fa fa-times"></i>
    	</div>
    	<p className="x-fo-si_22 x-fo-we_bo">{title}</p>
    	<div className="x-di_fl x-al-it_ce x-ma-to_15">
    		<div className="x-profile-pic x-square-60 x-ma-ri_15">
    			<img src={user.profile} alt="" />
    		</div>
    		<div className="user-inf">
    			<p className="x-fo-we_bo x-fo-si_17">{user.name}</p>
    			<p className="x-fo-si_11 x-ma-to_7 x-low-emphasis x-fo-we_bo">{user.id}</p>
    		</div>
    	</div>
    	<textarea disabled={disabledInput} onChange={handleChange} value={value} placeholder={placeholder} className="x-wi_100per x-ma-to_20 x-fo-we_bo"></textarea>
    
    	<span className="li  x-he_1 x-wi_100per x-ma-to_5 x-ma-bo_5"></span>
    	{statusContent}
    	<XButtonLoadable
    		br={30}
    		load={loading}
    		className="x-ma-to_20"
    		onClickFunc={send}
    		center={true}
    		style={buttonStyle}
    		disabled={disabled}
    		>Send</XButtonLoadable>
    </div>
}
const XStartConvBox = React.memo(XStartConvBoxComponent);

XStartConvBox.defaultProps = {
	url: '',
	style: {},
	token: {},
	placeholder: 'Start with some words...',
	title: 'Start a conversation with',
}
XStartConvBox.propTypes = {
	user: PropTypes.object.isRequired,
	title: PropTypes.string,
	style: PropTypes.object,
	token: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.func,
	]),
	placeholder: PropTypes.string,
	url: PropTypes.string,
}

function XConversationList ({}) {
	
	const listClassName = "x-po_re x-wi_100per x-he_100per";
	const searchStyle = {
		width: "90%",
	}
	const [search, setSearch] = React.useState("");
	const handleSearch = (e) => {
		setSearch(e);
	}
	const convStyle = {
		top: "140px",
		bottom: "0px",
		overflow: "auto",
		zIndex: "1",
	}
	const createConv = {
		zIndex: "2",
	}
	
	const data = {
		isMyMessage: false,
		status: "sent",
		text: "that never happened to my life you know!",
		datetime: "2024-08-31 12:06:55",
	}
	const data2 = {
		isMyMessage: true,
		status: "seen",
		text: "Hey friend 🙋",
		datetime: "2024-08-02 11:08:55",
	}
	const data3 = {
		isMyMessage: false,
		status: "seen",
		text: "Wonderful Day today,",
		datetime: "2024-01-22 14:08:55",
	}
	const data4 = {
		isMyMessage: false,
		status: "sent",
		text: "You invite me to your wedding 😱😱",
		datetime: "2024-06-24 15:08:55",
	}
	const data5 = {
		isMyMessage: false,
		status: "sent",
		text: "Let's talk about it if you want",
		datetime: "2024-07-19 13:08:55",
	}
	const data6 = {
		isMyMessage: false,
		status: "sent",
		text: "See you then!",
		datetime: "2024-07-26 13:08:55",
	}
	const data7 = {
		isMyMessage: false,
		status: "sent",
		text: "Hi Alaina, can you come over right now? 💌",
		datetime: "2024-07-19 13:08:55",
	}
	
	return <div className={listClassName}>
		<div className="x-pt-10">
			<div className="x-di_fl x-al-it_ce x-ju-co_ce x-ma-bo_10" >
				<div className="x-square-50 x-di_fl x-ju-co_ce x-al-it_ce">
					<i className="far fa-comments x-fo-si_20"></i>
				</div>
				<div className="x-wi_75per">
					<h2 className="x-fo-we_bo x-fo-si_16 x-te-al_ce">Chats</h2>
					<p className="x-fo-si_9 x-te-al_ce x-conv-status">No Conversation appeared</p>
				</div>
				<div className="x-square-50 x-di_fl x-ju-co_ce x-al-it_ce">
					<i className="fa fa-ellipsis-v x-fo-si_20"></i>
				</div>
			</div>
			<XSearch 
				center={true}
				bd={30}
				value={search}
				placeholder="Search Conversation"
				onChange={handleSearch}
				style={searchStyle}
			/>
		</div>
		<div className="x-po_ab x-wi_100per" style={convStyle}>
			<XConversation lastMessage={data} img="pool.jpg" name="Jin Henderson" />
			<XConversation lastMessage={data2} img="gim.jpg" name="Tate McRae" />
			<XConversation lastMessage={data5} img="comp.jpg" name="Company" />
			<XConversation lastMessage={data3} img="big.jpg" name="Alida Jessy" />
			<XConversation lastMessage={data4} img="castillo4.JPG" name="Kohvt Mill" />
			<XConversation lastMessage={data7} img="beach.jpg" name="Alicia Kimberg" />
		</div>
		<XCreateConversation style={createConv} />
	</div> 
	
}


XConversationHeader.defaultProps = {
	style: {},
}
XConversationHeader.propTypes = {
	style: PropTypes.object,
}

function XConversationHeader ({data}) {
	const headerClass = "x-conversation-header";
	const statusClass = function () {
		return "status " + data.status.toLowerCase();
	}();

	return <div className={headerClass}>
		<div className="info">
			<div className="x-close-chat show">
				<i className="fa fa-chevron-left"></i>
			</div>
			<div className="user">
				<div className="pic">
					<img src={data.img} />
				</div>
				<div className="data">
					<p className="name">{data.name}</p>
					<span className={statusClass}>{data.status}</span>
				</div>
			</div>
		</div>
		<div className="option">
			<div className="search each-option">
				<i className="fa fa-search"></i>
			</div>
			<div className="close-chat each-option hide">
				<i className="fa fa-times"></i>
			</div>
			<div className="other-option each-option">
				<i className="fa fa-ellipsis-v"></i>
			</div>
		</div>
	</div>
}


XConversationHeader.defaultProps = {
	data: {},
}
XConversationHeader.propTypes = {
	data: PropTypes.object,
}

function XMessageForm ({style, className, value, onSubmit, onTextChange, onFileChange, onSpeechChange, onVideoChange, onPhotoChange}) {
	
	const messageFormClass = "x-message-form" + " " + className;
	

	const image = React.useRef(null);
	const file = React.useRef(null);
	const speech = React.useRef(null);
	const video = React.useRef(null);
	const field = React.useRef(null);
	const form = React.useRef(null);
	const mother = React.useRef(null);
	
	const handleImageChange = (e) => {
		onPhotoChange(image.current.files[0]);
	}
	const handleVideoChange = (e) => {
		onVideoChange(video.current.files[0]);
	}
	const handleSpeechChange = (e) => {
		onSpeechChange(speech.current.files[0]);
	}
	const handleFileChange = (e) => {
		onFileChange(file.current.files[0]);
	}
	const resetForm = () => {
		field.current.style.height = "15px";
		field.current.style.width = "65%";
		form.current.style.width = "70%";
		let insertFiles = mother.current.querySelectorAll(".insert-file");
		for (let i = 0; i < insertFiles.length; i++) {
			if (i != 0) {
				insertFiles[i].style.width = "30px";
			}
		}
		field.current.focus();
	}
	const handleSubmit = (e) => {
		onSubmit(e);
		resetForm();
	}
	
	const imageClick = (e) => {
		image.current.click();
	}
	const videoClick = (e) => {
		video.current.click();
	}
	const fileClick = (e) => {
		file.current.click();
	}
	const speechClick = (e) => {
		speech.current.click();
	}
	
	return <div className={messageFormClass} style={style} ref={mother}>
		<div className="insert-file x-he_50 x-wi_30" onClick={fileClick}>
			<i className="fa fa-plus-circle"></i>
			<input type="file" ref={file} onChange={handleFileChange} />
		
		</div>
		
		<div className="insert-file x-he_50 x-wi_30" onClick={imageClick}>
			<i className="far fa-image"></i>
			<input type="file" ref={image} accept="[.jpg, .JPG, .png, .PNG, .jpeg, .JPEG, .gif]" onChange={handleImageChange} />
		</div>
		
		<div className="insert-file x-he_50 x-wi_30" onClick={videoClick}>
			<i className="fa fa-video"></i>
			<input type="file" accept="[.mp4, .MOV]" onChange={handleVideoChange} ref={video} />
		</div>
		
		<form onSubmit={handleSubmit} ref={form}>
			<textarea placeholder="Text a message" ref={field} onChange={onTextChange} value={value}></textarea>
			<div className="emoji x-he_50 x-wi_30">
				<i className="far fa-smile"></i>
			</div>
			<div className="x-btn-submit x-he_50 x-wi_30">
			<input type="file" className="hide-input" ref={speech} accept=".mp3" onChange={handleSpeechChange} />
			{ value.length > 0 ? <button type="submit"><i className="fa fa-paper-plane"></i></button> : <i className="fa fa-microphone" onClick={speechClick}></i> }
			</div>
		</form>
	</div>
}

XMessageForm.defaultProps = {
	style: {},
	className: "",
	value: "",
}

XMessageForm.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object,
	value: PropTypes.string,
	onTextChange: PropTypes.func,
	onFileChange: PropTypes.func,
	onPhotoChange: PropTypes.func,
	onVideoChange: PropTypes.func,
	onSpeechChange: PropTypes.func,
}

XUserList.defaultProps = {
	style: {},
	center: true,
	className: " ",
}

XUserList.propTypes = {
	name: PropTypes.string,
	id: PropTypes.string,
	center: PropTypes.bool,
	className: PropTypes.string,
	style: PropTypes.object,
	imgSrc: PropTypes.string
}

function XConversation ({img, name, lastMessage}) {
	
	const [timeDiff, setTimeDiff] = React.useState(__.getFormatDatetimeDifference(lastMessage.datetime));
	
	const getMessage = function() {
		let owner = "";
		if (lastMessage.isMyMessage) {
			owner = "You";
		} else {
			owner = name;
		}
		if (lastMessage.text && lastMessage.audio == undefined && lastMessage.video == undefined && lastMessage.file == undefined && lastMessage.image == undefined) {
			if (lastMessage.isMyMessage) {
				return owner + ": " + __.getShortText(lastMessage.text, 40);
			} else {
				return __.getShortText(lastMessage.text, 40);
			}
		} else if (lastMessage.text == undefined && lastMessage.audio && lastMessage.video == undefined && lastMessage.file == undefined && lastMessage.image == undefined) {
			return owner + " sent a audio";
		}  else if (lastMessage.text == undefined && lastMessage.audio == undefined && lastMessage.video && lastMessage.file == undefined && lastMessage.image == undefined) {
			return owner + " sent a video";
		}  else if (lastMessage.text == undefined && lastMessage.audio == undefined && lastMessage.video == undefined && lastMessage.file && lastMessage.image == undefined) {
			return owner + " sent a file";
		} else if (lastMessage.text == undefined && lastMessage.audio == undefined && lastMessage.video == undefined && lastMessage.file == undefined && lastMessage.image) {
			return owner + " sent a photo";
		} 
		
	}();
	
	const messageNew = function() {
		if (!lastMessage.isMyMessage) {
			if (lastMessage.status == "delivered" || lastMessage.status == "sent") {
				return <span className="notified"></span>
			} else {
				return null;
			}
		} else {
			return null;
		}
	}();
	
	const messageClass = function() {
		let base = "last-message ";
		if (lastMessage.text) {
			base = base + "text";
		} else {
			base = base + "file";
		}
		return base;
	}();
	
	const notify = function () {
		if (!lastMessage.isMyMessage) {
			if (lastMessage.status == "seen") {
				return " seen";
			} else {
				return " new";
			}
		}
		return " seen";
	}();
	
	React.useEffect(() => {
		setTimeout(function() {
			
		}, 30000);
	}, []);
	const conversationClassName = "x-conversation" + notify;
	
	return <div className={conversationClassName}>
		<div className="pic" >
			<img src={img} />
		</div>
		<div className="data" >
			<p className="name">{name}</p>
			<p className={messageClass}>{getMessage}</p>
		</div>
		<div className="time">
			<p>{timeDiff}</p>
			{messageNew}
		</div>
	</div>
}

XConversation.propTypes = {
	lastMessage: PropTypes.object,
}

function XMessageComponent ({message, onSent, token, sendingUrl}) {
	
	const messageContent = function() {
		if (message.text && message.video == undefined && message.audio == undefined && message.file == undefined && message.image == undefined) {
			return <XTextMessage message={message} onSent={onSent} token={token} sendingUrl={sendingUrl} />
		} else if (message.text == undefined && message.video && message.audio == undefined && message.file == undefined && message.image == undefined) {
			return <XVideoMessage message={message} onSent={onSent} token={token} sendingUrl={sendingUrl} />
		} else if (message.text == undefined && message.video == undefined && message.audio && message.file == undefined && message.image == undefined) {
			return <XAudioMessage message={message} onSent={onSent} token={token} sendingUrl={sendingUrl} />
		}  else if (message.text == undefined && message.video == undefined && message.audio == undefined && message.file && message.image == undefined) {
			return <XFileMessage message={message} onSent={onSent} token={token} sendingUrl={sendingUrl} />
		} else if (message.text == undefined && message.video == undefined && message.audio == undefined && message.file == undefined && message.image) {
			return <XImageMessage message={message} onSent={onSent} sendingUrl={sendingUrl} token={token} />
		} 
	}();
	
	return messageContent;
}

const XMessage = React.memo(XMessageComponent);

XMessage.defaultProps = {
	message: {},
	token: {},
	sendingUrl: '',
}

XMessage.propTypes = {
	sendingUrl: PropTypes.string,
	message: PropTypes.object,
	onSent: PropTypes.func,
	token: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.func,
	]),
}

function XTextMessageComponent ({message, onSent, token, sendingUrl}) {
	const [serverError, setServerError] = React.useState(false);
	
	const [time, setTime] = React.useState(__.getFormatTimeDifference(message.datetime));
	
	const position = function() {
		let a = message.isMyMessage ? " x-right-position " : " x-left-position ";
		return a;
	}();
	
	const send = React.useCallback(async function() {
		setServerError(false);
		let message_data = {
			datetime: message.datetime,
			text: message.text,
		}
		
		let formData = new FormData();
		
		let getToken;
		if (typeof(token) == 'function') {
			getToken = token();
		} else if (typeof(token) == 'object') {
			getToken = token;
		} else {
			throw new Error('token must be a function which returns an object or an object');
		}
		Object.entries(getToken).forEach(([key, value]) => {
			formData.append(key, value);
		});
		
		Object.entries(message_data).forEach(([key, value]) => {
			formData.append(key, value);
		});
		
		let response = await __.layoutRequest.post(sendingUrl, formData, 'json');
		setTimeout(() => {
			if (!response.isSuccess) {
				setServerError(true);
			}
		}, 2000);
	}, []);
	
	React.useEffect(() => {
		if (message.status == "sending" && !serverError) {
			send();
		}
	}, []);
	
	const profile = function(){
		if (message.isMyMessage) {
			return null;
		} else {
			return <div className="x-pic">
				<img src={message.img}/>
			</div>
		}
	}();
	
	const getIcon = function() {
		let cl = "";
		if (serverError) {
			cl = "fa fa-exclamation-circle error";
		} else {
			if (message.status == "sending") {
				cl = "far fa-clock";
			} else if (message.status == "sent") {
				cl = "fa fa-check sent";
			} else if (message.status == "delivered") {
				cl = "fa fa-check-double sent";
			} else if (message.status == "seen") {
				cl = "fa fa-check-double seen";
			}
		}
		return <i className={cl}></i>
	}();
	
	
	const getMessageStatus = function() {
		if (message.status == "sending") {
			return " sending";
		} else {
			return "";
		}
	}();
	
	const getTiming = function() {
		if (serverError) {
			return "Error";
		} else {
			if (message.status == "sending") {
				return "...";
			} else {
				return time;
			}
		}
	}();
	
	const timeClassName = function() {
		if (serverError) {
			return "error";
		} else {
			return "";
		}
	}();
	
	const messageOption = function() {
		alert("Message sent");
	}
	
	const messageClick = function() {
		if (serverError) {
			return send;
		} else {
			return messageOption;
		}
	}();
	
	const messageClassName = "x-message " + position + getMessageStatus;
	
	const getTime = React.useEffect(function() {
		let timer = setInterval(() => {
			if (message.status != "sending") {
				setTime(__.getFormatTimeDifference(message.datetime));
			}
		}, 60000);
	}, []);
	
	return <div className={messageClassName} id={message.id} onClick={messageClick}>
		<div className="x-message-container">
			{profile}
			<div className="x-message-data text">
				<p className="words">{message.text}</p>
				<div className="time">
					<span className={timeClassName}>{ getTiming }</span>
					{message.isMyMessage ? getIcon : null}
				</div>
			</div>
		</div>
	</div>
}

const XTextMessage = React.memo(XTextMessageComponent);

XTextMessage.defaultProps = {
	message: {},
	token: {},
}

XTextMessage.propTypes = {
	onSent: PropTypes.func,
	sendingUrl: PropTypes.string,
	message: PropTypes.object,
	token: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.func,
	]),
}

function XVideoMessageComponent ({message, onSent, token, sendingUrl}) {
	const [serverError, setServerError] = React.useState(false);
	const [time, setTime] = React.useState(__.getFormatTimeDifference(message.datetime));
	
	const position = function() {
		let a = message.isMyMessage ? " x-right-position " : " x-left-position ";
		return a;
	}();
	
	const send = React.useCallback(async function() {
		setServerError(false);
		let message_data = {
			datetime: message.datetime,
			video: message.video,
			size: message.video.size,
			humanSize: message.size,
		}
		
		let formData = new FormData();
		
		let getToken;
		if (typeof(token) == 'function') {
			getToken = token();
		} else if (typeof(token) == 'object') {
			getToken = token;
		} else {
			throw new Error('token must be a function which returns an object or an object');
		}
		Object.entries(getToken).forEach(([key, value]) => {
			formData.append(key, value);
		});
		
		
		Object.entries(message_data).forEach(([key, value]) => {
			formData.append(key, value);
		});
		
		let response = await __.layoutRequest.post(sendingUrl, formData, "json", uploading);
		setTimeout(function() {
			if (!response.isSuccess) {
				setServerError(true);
			}
		}, 3000);
	}, []);
	
	React.useEffect(() => {
		if (message.status == "sending" && !serverError) {
			send();
		}
	}, []);
	
	const uploadData = React.useRef(null);
	
	const uploading = function(loaded, total, percentage) {
		let data =  __.byteToHuman(loaded) + "/" + __.byteToHuman(total) + " | " + percentage + "%";
		uploadData.current.innerHTML = data;
	};
	
	const profile = function(){
		if (message.isMyMessage) {
			return null;
		} else {
			return <div className="x-pic">
				<img src={message.img}/>
			</div>
		}
	}();
	
	const getIcon = function() {
		let cl = "";
		if (serverError) {
			cl = "fa fa-exclamation-circle error";
		} else {
			if (message.status == "sending") {
				cl = "fa fa-upload";
			} else if (message.status == "sent") {
				cl = "fa fa-check sent";
			} else if (message.status == "delivered") {
				cl = "fa fa-check-double sent";
			} else if (message.status == "seen") {
				cl = "fa fa-check-double seen";
			}
		}
		return <i className={cl}></i>
	}();
	
	const timeClassName = function() {
		if (serverError) {
			return "error";
		} else {
			return "";
		}
	}();
	
	const getMessageStatus = function() {
		if (message.status == "sending") {
			return " sending";
		} else {
			return "";
		}
	}();
	
	const messageOption = function() {
		alert("Message sent");
	}
	
	const getTiming = function() {
		if (serverError) {
			return "Error";
		} else {
			if (message.status == "sending") {
				return "...";
			} else {
				return time;
			}
		}
	}();
	
	const messageClick = function() {
		if (serverError) {
			return send;
		} else {
			return messageOption;
		}
	}();
	
	const messageClassName = "x-message " + position + getMessageStatus;
	
	const getTime = React.useEffect(function() {
		let timer = setInterval(() => {
			if (message.status == "sending") {
				setTime(__.getFormatTimeDifference(message.datetime));
			}
		}, 60000);
	}, []);
	
	const canplay = function() {
		if (message.status != "sending") {
			return " can-play";
		} else {
			return "";
		}
	}();
	
	const iconPlay = "icon-play" + canplay;
	
	return <div className={messageClassName} id={message.id} onClick={messageClick}>
		<div className="x-message-container">
			{profile}
			<div className="x-message-data video">
				<div className="video-data">
					<video src={message.video} preload="metadata" poster="video-poster.jpg" onPlay={onPlayVideo} onLoadedMetadata={onVideoLoadedMetadata} onTimeUpdate={onVideoTimeUpdated} target={message.id} onEnded={onEndVideo} />
					<div className="video-controls show">
						<div className="play-pause-video">
							<div className={iconPlay} target={message.id}>
								<i className="fa fa-play"></i>
							</div>
							<div className="video-timer">
								<div className="video-line">
									<div className="video-progress"></div>
								</div>
								<span className="time-progress">0:00</span>
								<span className="time-total">-:--</span>
							</div>
							<div className="video-title">
								<p className="title" >Nandraina.jpg</p>
								<span className="video-size">{ message.size ? message.size : null}</span>
							</div>
						</div>
					</div>
				</div>
				<div className="time">
					<span className={timeClassName} ref={uploadData}>{ getTiming }</span>
					{message.isMyMessage ? getIcon : null}
				</div>
			</div>
		</div>
	</div>
}

const XVideoMessage = React.memo(XVideoMessageComponent);

XVideoMessage.defaultProps = {
	message: {},
	token: {},
}

XVideoMessage.propTypes = {
	onSent: PropTypes.func,
	sendingUrl: PropTypes.string,
	message: PropTypes.object,
	token: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.func,
	]),
}

function XAudioMessageComponent ({message, onSent, token, sendingUrl}) {
	const [serverError, setServerError] = React.useState(false);
	const [time, setTime] = React.useState(__.getFormatTimeDifference(message.datetime));
	
	const position = function() {
		let a = message.isMyMessage ? " x-right-position " : " x-left-position ";
		return a;
	}();
	
	const send = React.useCallback(async function() {
		setServerError(false);
		let message_data = {
			datetime: message.datetime,
			audio: message.audio,
			size: message.audio.size,
			humanSize: message.size,
		}
		
		
		let formData = new FormData();
		
		let getToken;
		if (typeof(token) == 'function') {
			getToken = token();
		} else if (typeof(token) == 'object') {
			getToken = token;
		} else {
			throw new Error('token must be a function which returns an object or an object');
		}
		Object.entries(getToken).forEach(([key, value]) => {
			formData.append(key, value);
		});
		
		Object.entries(message_data).forEach(([key, value]) => {
			formData.append(key, value);
		});
		
		let response = await __.layoutRequest.post(sendingUrl, formData, 'json', uploading);
		setTimeout(() => {
			if (!response.isSuccess) {
				setServerError(true);
			}
		}, 2000);
	}, []);
	
	React.useEffect(() => {
		if (message.status == "sending" && !serverError) {
			send();
		}
	}, []);
	
	const uploadData = React.useRef(null);
	
	const uploading = function(loaded, total, percentage) {
		uploadData.current.innerHTML = __.byteToHuman(loaded) + "/" + __.byteToHuman(total) + " | " + percentage + "%";
	};
	
	const profile = function(){
		if (message.isMyMessage) {
			return null;
		} else {
			return <div className="x-pic">
				<img src={message.img}/>
			</div>
		}
	}();
	
	const getIcon = function() {
		let cl = "";
		if (serverError) {
			cl = "fa fa-exclamation-circle error"; 
		} else {
			if (message.status == "sending") {
				cl = "fa fa-upload";
			} else if (message.status == "sent") {
				cl = "fa fa-check sent";
			} else if (message.status == "delivered") {
				cl = "fa fa-check-double sent";
			} else if (message.status == "seen") {
				cl = "fa fa-check-double seen";
			}
		}
		return <i className={cl}></i>
	}();
	
	
	const getMessageStatus = function() {
		if (message.status == "sending") {
			return " sending";
		} else {
			return "";
		}
	}();
	const getTiming = function() {
		if (serverError) {
			return "Error";
		} else {
			if (message.status == "sending") {
				return "...";
			} else {
				return time;
			}
		}
	}();
	const timeClassName = function() {
		if (serverError) {
			return "error";
		} else {
			return "";
		}
	}();
	
	const messageOption = function() {
		alert("Message sent");
	}
	const messageClick = function() {
		if (serverError) {
			return send;
		} else {
			return messageOption;
		}
	}();
	
	const messageClassName = "x-message " + position + getMessageStatus;
	
	const getTime = React.useEffect(function() {
		let timer = setInterval(() => {
			if (message.status == "sending") {
				setTime(__.getFormatTimeDifference(message.datetime));
			}
		}, 60000);
	}, []);
	
	return <div className={messageClassName} id={message.id} onClick={messageClick}>
		<div className="x-message-container">
			{profile}
			<div className="x-message-data speech">
				<div className="speech-data">
					<div className={message.status == "sending" ? "play-pause" : "play-pause can-play"} target={message.id}>
						<i className="fa fa-play"></i>
					</div>
					<div className="waves">
						<div className="progress-model"></div>
						<div className="waves-contents">
							<span className="waves-1 audio-waves">
								<span className="audio-progress"></span>
							</span>
							<span className="waves-2 audio-waves">
								<span className="audio-progress"></span>
							</span>
							<span className="waves-3 audio-waves">
								<span className="audio-progress"></span>
							</span>
							<span className="waves-4 audio-waves">
								<span className="audio-progress"></span>
							</span>
							<span className="waves-5 audio-waves">
								<span className="audio-progress"></span>
							</span>
							<span className="waves-6 audio-waves">
								<span className="audio-progress"></span>
							</span>
							<span className="waves-7 audio-waves">
								<span className="audio-progress"></span>
							</span>
							<span className="waves-8 audio-waves">
								<span className="audio-progress"></span>
							</span>
							<span className="waves-9 audio-waves">
								<span className="audio-progress"></span>
							</span>
							<span className="waves-10 audio-waves">
								<span className="audio-progress"></span>
							</span>
							<span className="waves-11 audio-waves">
								<span className="audio-progress"></span>
							</span>
							<span className="waves-12 audio-waves">
								<span className="audio-progress"></span>
							</span>
							<span className="waves-13 audio-waves">
								<span className="audio-progress"></span>
							</span>
							<span className="waves-14 audio-waves">
								<span className="audio-progress"></span>
							</span>
							<span className="waves-15 audio-waves">
								<span className="audio-progress"></span>
							</span>
							<span className="waves-16 audio-waves">
								<span className="audio-progress"></span>
							</span>
							<span className="waves-17 audio-waves">
								<span className="audio-progress"></span>
							</span>
							<span className="waves-18 audio-waves">
								<span className="audio-progress"></span>
							</span>
							<span className="waves-19 audio-waves">
								<span className="audio-progress"></span>
							</span>
						</div>
					</div>
				</div>
				
				<audio src={message.status == "sending" ? "" : message.audio} onPlay={onPlayAudio} onLoadedMetadata={onAudioLoadedMetadata} target={message.id} onEnded={onEndAudio} onTimeUpdate={onAudioTimeUpdated} />
				
				<div className="timer">
					{ message.size ? <span className="audio-size">{message.size}</span> : null }
					<span className="current-time">0:00</span>
					<span className="audio-duration">-:--</span>
				</div>
				
				<div className="time">
					<span className={timeClassName} ref={uploadData}>{ getTiming }</span>
					{message.isMyMessage ? getIcon : null}
				</div>
			</div>
		</div>
	</div>
}

const XAudioMessage = React.memo(XAudioMessageComponent);

XAudioMessage.defaultProps = {
	message: {},
	token: {},
}

XAudioMessage.propTypes = {
	onSent: PropTypes.func,
	sendingUrl: PropTypes.string,
	message: PropTypes.object,
	token: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.func,
	]),
}


function XFileMessageComponent ({message, onSent, token, sendingUrl}) {
	const [serverError, setServerError] = React.useState(false);
	const [time, setTime] = React.useState(__.getFormatTimeDifference(message.datetime));
	
	
	const position = function() {
		let a = message.isMyMessage ? " x-right-position " : " x-left-position ";
		return a;
	}();
	
	const send = React.useCallback(async function() {
		setServerError(false);
		let ext = __.getFileExtension(message.file.name);
		
		let type = null;
		if (XSettings.filesFormats.indexOf(ext) != -1) {
			type = XSettings.fileFormatToName[ext];
		} else {
			type = "File";
		}
		
		let message_data = {
			datetime: message.datetime,
			file: message.file,
			size: message.file.size,
			humanSize: message.size,
			extension: ext,
			fileType: type.toLowerCase(),
		}
		
		let formData = new FormData();
		
		let getToken;
		if (typeof(token) == 'function') {
			getToken = token();
		} else if (typeof(token) == 'object') {
			getToken = token;
		} else {
			throw new Error('token must be a function which returns an object or an object');
		}
		Object.entries(getToken).forEach(([key, value]) => {
			formData.append(key, value);
		});
		
		
		Object.entries(message_data).forEach(([key, value]) => {
			formData.append(key, value);
		});
		
		let response = await __.layoutRequest.post(sendingUrl, formData, 'json', uploading);
		setTimeout(() => {
			if (!response.isSuccess) {
				setServerError(true);
			}
		}, 2000);
	}, []);
	
	React.useEffect(() => {
		if (message.status == "sending" && !serverError) {
			send();
		}
	}, []);
	
	const uploadData = React.useRef(null);
	
	const uploading = function(loaded, total, percentage) {
		uploadData.current.innerHTML = __.byteToHuman(loaded) + "/" + __.byteToHuman(total) + " | " + percentage + "%";
	};
	
	const profile = function(){
		if (message.isMyMessage) {
			return null;
		} else {
			return <div className="x-pic">
				<img src={message.img}/>
			</div>
		}
	}();
	
	const getFileName = function() {
		let filename = message.status == "sending" ? message.file.name : message.file;
		filename = __.getFileExtension(filename);
		
		if (XSettings.filesFormats.indexOf(filename) != -1) {
			return XSettings.fileFormatToName[filename];
		} else {
			return 'File';
		}
	}();
	
	const getFileIcon = function() {
		let filename = message.status == "sending" ? message.file.name : message.file;
		filename = __.getFileExtension(filename);
		
		if (XSettings.filesFormats.indexOf(filename) != -1) {
			return XSettings.fileFormatToIcon[filename];
		} else {
			return 'fa fa-file-alt';
		}
	}();
	
	
	const getIcon = function() {
		let cl = "";
		if (serverError) {
			cl = "fa fa-exclamation-circle error";
		} else {
			if (message.status == "sending") {
				cl = "fa fa-upload";
			} else if (message.status == "sent") {
				cl = "fa fa-check sent";
			} else if (message.status == "delivered") {
				cl = "fa fa-check-double sent";
			} else if (message.status == "seen") {
				cl = "fa fa-check-double seen";
			}
		}
		return <i className={cl}></i>
	}();
	
	
	const getMessageStatus = function() {
		if (message.status == "sending") {
			return " sending";
		} else {
			return "";
		}
	}();
	const messageOption = function() {
		alert("Message sent");
	}
	const messageClick = function() {
		if (serverError) {
			return send;
		} else {
			return messageOption;
		}
	}();
	
	const getTiming = function() {
		if (serverError) {
			return "Error";
		} else {
			if (message.status == "sending") {
				return "...";
			} else {
				return time;
			}
		}
	}();
	
	const timeClassName = function() {
		if (serverError) {
			return "error";
		} else {
			return "";
		}
	}();
	
	const messageClassName = "x-message " + position + getMessageStatus;
	
	const getTime = React.useEffect(function() {
		let timer = setInterval(() => {
			if (message.status == "sending") {
				setTime(__.getFormatTimeDifference(message.datetime));
			}
		}, 60000);
	}, []);
	
	
	return <div className={messageClassName} id={message.id} onClick={messageClick}>
		<div className="x-message-container">
			{profile}
			<div className="x-message-data other-file">
				<div className="file-data">
					<div className="icon-file">
						<i className={getFileIcon}></i>
					</div>
					<div className="file-detail">
						<p>{message.status == "sending" ? message.file.name : message.file}</p>
						<p>{getFileName}{ message.size ? " | " + message.size : null}</p>
					</div>
				</div>
				<div className="time">
					<span className={timeClassName} ref={uploadData}>{ getTiming }</span>
					{message.isMyMessage ? getIcon : null}
				</div>
			</div>
		</div>
	</div>
}

const XFileMessage = React.memo(XFileMessageComponent);

XFileMessage.defaultProps = {
	token: {},
	message: {},
}

XFileMessage.propTypes = {
	message: PropTypes.object,
	sendingUrl: PropTypes.string,
	onSent: PropTypes.func,
	token: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.func,
	]),
}


function XImageMessageComponent ({message, onSent, token, sendingUrl}) {
	const [serverError, setServerError] = React.useState(false);
	const [time, setTime] = React.useState(__.getFormatTimeDifference(message.datetime));
	
	const position = function() {
		let a = message.isMyMessage ? " x-right-position " : " x-left-position ";
		return a;
	}();
	
	const send = React.useCallback(async function() {
		setServerError(false);
		let message_data = {
			datetime: message.datetime,
			image: message.image,
			size: message.image.size,
			humanSize: message.size,
		}
		
		let formData = new FormData();
		
		let getToken;
		if (typeof(token) == 'function') {
			getToken = token();
		} else if (typeof(token) == 'object') {
			getToken = token;
		} else {
			throw new Error('token must be a function which returns an object or an object');
		}
		Object.entries(getToken).forEach(([key, value]) => {
			formData.append(key, value);
		});
		
		
		Object.entries(message_data).forEach(([key, value]) => {
			formData.append(key, value);
		});
		
		let response = await __.layoutRequest.post(sendingUrl, formData, 'json', uploading);
		setTimeout(() => {
			if (!response.isSuccess) {
				setServerError(true);
			}
		}, 2000);
	}, []);
	
	React.useEffect(() => {
		if (message.status == "sending" && !serverError) {
			send();
		}
	}, []);
	
	const uploadData = React.useRef(null);
	
	const uploading = function(loaded, total, percentage) {
		uploadData.current.innerHTML = __.byteToHuman(loaded) + "/" + __.byteToHuman(total) + " | " + percentage + "%";
	};
	
	const profile = function(){
		if (message.isMyMessage) {
			return null;
		} else {
			return <div className="x-pic">
				<img src={message.img}/>
			</div>
		}
	}();
	
	const getIcon = function() {
		let cl = "";
		if (serverError){
			cl = "fa fa-exclamation-circle error";
		} else {
			if (message.status == "sending") {
				cl = "fa fa-upoload";
			} else if (message.status == "sent") {
				cl = "fa fa-check sent";
			} else if (message.status == "delivered") {
				cl = "fa fa-check-double sent";
			} else if (message.status == "seen") {
				cl = "fa fa-check-double seen";
			}
		}
		return <i className={cl}></i>
	}();
	
	
	const getMessageStatus = function() {
		if (message.status == "sending") {
			return " sending";
		} else {
			return "";
		}
	}();
	
	const getTiming = function() {
		if (serverError) {
			return "Error";
		} else {
			if (message.status == "sending") {
				return "...";
			} else {
				return time;
			}
		}
	}();
	
	const timeClassName = function() {
		if (serverError) {
			return "error";
		} else {
			return "";
		}
	}();
	
	const messageOption = function() {
		alert("Message sent");
	}
	const messageClick = function() {
		if (serverError) {
			return send;
		} else {
			return messageOption;
		}
	}();
	
	const messageClassName = "x-message " + position + getMessageStatus;
	
	const getTime = React.useEffect(function() {
		let timer = setInterval(() => {
			if (message.status == "sending") {
				setTime(__.getFormatTimeDifference(message.datetime));
			}
		}, 60000);
	}, []);
	
	return <div className={messageClassName} id={message.id} onClick={messageClick}>
		<div className="x-message-container">
			{profile}
			<div className="x-message-data photo">
				<img src={ message.status == 'sending' ? URL.createObjectURL(message.image) : message.image } />
				<div className="time">
					<span className={timeClassName} ref={uploadData}>{ getTiming }</span>
					{message.isMyMessage ? getIcon : null}
				</div>
			</div>
		</div>
	</div>
}

const XImageMessage = React.memo(XImageMessageComponent);

XImageMessage.defaultProps = {
	message: {},
	token: {},
}

XImageMessage.propTypes = {
	message: PropTypes.object,
	onSent: PropTypes.func,
	sendingUrl: PropTypes.string,
	token: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.func,
	]),
}


function XOpenConversation ({style, header, messages, messageForm}) {
	const [textValue, setTextValue] = React.useState("");
	const [files, setFiles] = React.useState([]);
	const [video, setVideo] = React.useState(null);
	const [audio, setAudio] = React.useState(null);
	const [photo, setPhoto] = React.useState(null);
	
	const [messageSent, setMessageSent] = React.useState([]);
	const [messageSending, setMessageSending] = React.useState([]);
	
	
	const handleTextChange = (e) => {
		setTextValue(e.target.value);
	}
	
	const handlePhotoChange = (val) => {
		sendMessagePhoto(val);
	}
	const sendMessagePhoto = (val) => {
		let date = new Date();
		let newMessage = {
			isMyMessage: true,
			id: "fake-ID-message-" + XSettings.fakeIDMessage,
			image: val,
			status: "sending",
			datetime: date.toString(),
		}
		
		setMessageSending(function() {
			return [...messageSending, newMessage];
		});
		setTextValue("");
		XSettings.fakeIDMessage++;
		showLastMessage();
	}
	
	const handleVideoChange = (val) => {
		sendMessageVideo(val);
	}
	
	const handleSpeechChange = (val) => {
		sendMessageSpeech(val);
	}
	const sendMessageSpeech = (val) => {
		let date = new Date();
		let newMessage = {
			isMyMessage: true,
			id: "fake-ID-message-" + XSettings.fakeIDMessage,
			audio: val,
			size: __.byteToHuman(val.size),
			status: "sending",
			datetime: date.toString(),
		}
		
		setMessageSending(function() {
			return [...messageSending, newMessage];
		});
		XSettings.fakeIDMessage++;
		showLastMessage();
	}
	
	const sendMessageVideo = (val) => {
		let date = new Date();
		let newMessage = {
			isMyMessage: true,
			id: "fake-ID-message-" + XSettings.fakeIDMessage,
			video: val,
			size: __.byteToHuman(val.size),
			status: "sending",
			datetime: date.toString(),
		}
		
		setMessageSending(function() {
			return [...messageSending, newMessage];
		});
		XSettings.fakeIDMessage++;
		showLastMessage();
	}
	
	const sendMessageFile = (val) => {
		let date = new Date();
		let newMessage = {
			isMyMessage: true,
			id: "fake-ID-message-" + XSettings.fakeIDMessage,
			file: val,
			size: __.byteToHuman(val.size),
			status: "sending",
			datetime: date.toString(),
		}
		
		setMessageSending(function() {
			return [...messageSending, newMessage];
		});
		XSettings.fakeIDMessage++;
		showLastMessage();
	}
	
	const handleFileChange = (val) => {
		sendMessageFile(val);
	}
	
	
	const handleMessageSent = (fakeId, data) => {
		console.log(fakeId, data);
	}
	
	const sendMessageText = () => {
		let date = new Date();
		let newMessage = {
			isMyMessage: true,
			id: "fake-ID-message-" + XSettings.fakeIDMessage,
			text: textValue,
			status: "sending",
			datetime: date.toString(),
		}
		
		setMessageSending(function() {
			return [...messageSending, newMessage];
		});
		setTextValue("");
		XSettings.fakeIDMessage++;
		showLastMessage();
	}
	
	const handleSubmit = (e) => {
		e.preventDefault();
		sendMessageText();
	}
	
	const messageFormStyle = {
		position: "absolute",
		bottom: "3px",
		zIndex: "2",
	}
	const headerStyle = {
		position: "absolute",
		top: "0px",
		zIndex: "2",
	}
	const allMessageStyle = {
		zIndex: "1",
		top: "60px",
		bottom: "65px",
		overflow: "auto"
	}
	const showLastMessage = React.useCallback(function() {
		setTimeout(() => {
			appear.current.scrollIntoView({
				"behavior": "smooth"
			}, 200);
		}, 800);
	}, []);
	
	const appear = React.useRef(null);
	
	const conversationBoxClass = "x-po_re x-wi_100per x-he_100per";
	const message = {
		id: "mess",
		isMyMessage: true,
		text: "Je suis vraiment désolé",
		datetime: "2024;08-16 10:15:56",
		status: "sent",
	}
	return <div className={conversationBoxClass}>
	
		<XConversationHeader data={header} style={headerStyle} />
		
		<div className="x-all-messages x-po_ab x-wi_100per"  style={allMessageStyle}>
			<XMessage message={message} />
			{messageSent.map((message, key) => <XMessage key={key} message={message} />)}
			{messageSending.map((message, key) => <XMessage key={key} onSent={handleMessageSent} message={message} />)}
			
			<span className="appear-last-message" ref={appear}></span>
		</div>
		
		<XMessageForm 
			value={textValue} 
			onPhotoChange={handlePhotoChange}
			onTextChange={handleTextChange}
			onVideoChange={handleVideoChange}
			onFileChange={handleFileChange}
			onSpeechChange={handleSpeechChange}
			style={messageFormStyle} 
			onSubmit={handleSubmit} />
			
	</div>
}

XOpenConversation.defaultProps = {
	header: {},
	messageForm: {},
	messages: {},
	style: {},
}

XOpenConversation.propTypes = {
	header: PropTypes.object,
	style: PropTypes.object,
}