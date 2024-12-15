

function XUserListComponent ({dataComplet, select, name, id, imgSrc, className, center, style}) {
	
	const getElementCenter = center ? " x-center " : " ";
	const classNameFinal = "x-pointer x-profile-item " + getElementCenter + className;
	
	const click = () => {
		select(dataComplet);
	}
	
	return <div className={classNameFinal} onClick={() => select(dataComplet)}>
		<div>
			<XUserProfilePicture
				name={name}
				imageURL={imgSrc}
				fontSize={15}
				width={50}
			/>
		</div>
		<div>
			<p className="xfowebo">{name}</p>
			<p className="xfosi11 xmato2">{id}</p>
		</div>
	</div>
}

const FAKE_CONV_ID = 1;



function XCreateGroupConvComponent ({users, getName, close, created, token, projectID}) {
	
	const [name, setName] = React.useState("");
	const [load, setLoad] = React.useState(false);
	
	const handleChange = (val) => {
		setName(val);
	}
	
	const createButtonStyle = {
		width: "250px",
		height: '50px',
	} 
	const fieldStyle = {
		width: "85%",
	} 
	
	const [selectedUsers, setSelectedUsers] = React.useState([]);

  // Fonction qui gère la sélection d'un utilisateur
	const handleUserClick = (user) => {
	    if (selectedUsers.some(u => u.id === user.id)) {
	      // Si l'utilisateur est déjà sélectionné, on le retire
	      setSelectedUsers(selectedUsers.filter(u => u.id !== user.id));
	    } else {
	      // Sinon, on l'ajoute à la liste des utilisateurs sélectionnés
	      setSelectedUsers([...selectedUsers, user]);
	    }
	};
	
	const create = () => {
		setLoad(true);
		request();
	}
	
	const request = async function () {
		let date = new Date().toISOString();
		let url = '/create_group_chat/';


		let newConv = {
			id: `conv-id-${Date.now()}`,
			lastMessage: null,
			type: 'group',
			empty: true,
			name: name,
			datetime: date,
			photo: null,
		}

		let to_send = {
			csrfmiddlewaretoken: token.csrfmiddlewaretoken,
			project_id: projectID,
			users: selectedUsers.map((u) => u.id),
			name: name,
		}

		let form = __.getFormData(to_send);

		let req = await __.layoutRequest.post(url, form, 'json');

		if (req.isSuccess) {
			created(req.data);
			setLoad(false);
			setName("");
			setSelectedUsers([]);
		} else {
			__.xAlert('Connection erreur', 'Verifier votre connection et re-éssayez plus tard.', 'danger');
		}
	}
	
	const disabled = React.useMemo(() => {
		
		if (selectedUsers.length > 1 && name.trim().length >= 2) {
			return false;
		} 
		return true;
		
	}, [name, selectedUsers]);
	
	const antiBug = (l) => {
		
	}
	
	
	return <div className="x-create-group-conv-box x-pa-to_20 x-pa-bo_20">
		<div className="x-block-create-group xdifl">
			<div className="x-define-name xwi50per">
				<p className="xfosi30 xmabo10 xlihe4 xfowebo xmale20">Créer une <br />groupe de <br />conversation</p>
				<XField
					value={name}
					center={true}
					style={fieldStyle}
					onChange={handleChange}
					>Nom du groupe</XField>
			</div>
			<div className="x-select-user-to-add-in-group xwi50per">
				<p className="xfosi15 xfowebo xmabo5">Select more than one user</p>
				<p className="x-low-emphasis xfosi12 xfowebo xmabo20">{ selectedUsers.length } users selected</p>
				<div className="xhe200 xovau">
					{users.map(user => (
			          <div
			            key={user.id}
			            onClick={() => handleUserClick(user)}
			            style={{
			              borderRadius: "10px",
			              marginRight: "20px",
			              backgroundColor: selectedUsers.some(u => u.id === user.id) ? '#3E93FF' : 'white',
			            }}
			          >
			            <XUserList
			            	name={ getName(user) }
			            	id={user.email}
			            	dataComplet={user}
			            	imgSrc={user.photo}
			            	select={antiBug}
			            	/>
			          </div>
			        ))}
				</div>
			</div>
		</div>
		<div className="x-btn-cancel-or-create xhe50 xwi90per x-center xdigr xmato20">
		
			<div className="x-child-center" onClick={close}>
				<button className="xfowebo">Annuler</button>
			</div>
			
			<XButtonLoadable
				br={30}
				center={true}
				style={createButtonStyle}
				disabled={disabled}
				onClickFunc={create}
				load={load}
				>Créer</XButtonLoadable>
				
		</div>
	</div>
}

const XCreateGroupConv = React.memo(XCreateGroupConvComponent);


const XUserList = React.memo(XUserListComponent);

function XCreateConversationComponent ({style, className, onClick}) {
	const cl = "x-pointer x-create-conv " + className;
	return <div className={cl} style={style} onClick={onClick}>
		<i className="fa fa-pen"></i>
	</div>
}

const XCreateConversation = React.memo(XCreateConversationComponent);

XCreateConversation.defaultProps = {
	className: "",
	style: {},
}

function XDisplayUserToCreateConversationComponent ({userSug, getName, onSelectUser, createGroupClick, close}) {
	
	const searchStyle = {
		width: "90%",
	}
	
	const [value, setValue] = React.useState('');
	
	const change = (val) => {
		setValue(val);
	}
	const getContent = function () {
		if (userSug.length == 0) {
			return <p className="xfosi12 xmato50 xtealce x-low-emphasis">Vous avez déja les conversation avec tous les membres.</p>
		} else {
			let data = [];
			userSug.forEach((user) => {
				let name = (user.lastName + " " + user.firstName).toLowerCase();
				let val = value.trim().toLowerCase();
				if (name.indexOf(val) != -1) {
					data.push(user);
				}
			});
			
			if (data.length == 0) {
				return <p className="xfosi12 xmato50 xtealce x-low-emphasis">Pas trouvé '{value}'</p>
			} else {
				return <div className="xmale10">
					{ data.map((user, key) => (
						<XUserList 
							key={key}
							dataComplet={user}
							name={ getName(user) }
							id={ user.email }
							select={onSelectUser}
							imgSrc={user.photo}
						/>
					))}
				</div>
			}
		}
	}();
	
	return <XPopupBox 
			type="close-only"
			close={close}
		>
		
		<XSearch
			className="x-center xmato10"
			value={value}
			onChange={change}
			style={searchStyle}
			/>
		
		<div onClick={createGroupClick} className="xdigr x-center x-create-conv-group xalitce xmato20">
			<div className="x-child-center x-black-01 x-circle-50">
				<i className="fa fa-users"></i>
			</div>
			<div>
				<p className="xfowebo">Create groupe</p>
			</div>
		</div>
		
		<p className="xmale20 xmato20 xfowebo">Users</p>
		
		{ getContent }
		
	</XPopupBox>
}

const XDisplayUserToCreateConversation = React.memo(XDisplayUserToCreateConversationComponent);

function XStartConvBoxComponent ({url, placeholder, close ,title, token, user, style, getConversationJustCreated}) {
	
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
			return <span className="x-text-danger xmato7 xfosi11 xfowebo xmabo5">{message}</span>
		} else if (sendingStatus == 'sent') {
			return <span className="x-text-success xmato7 xfosi11 xfowebo xmabo5">Sent</span>
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
			timestamp: Date.now().toString(),
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
			setValue('');
			getConversationJustCreated();
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
	
	return <div className="xpore x-start-conv x-shadow" style={style}>
    	<div onClick={close} className="x-square-40 xdifl xjucoce xalitce xpoab close-start-conv">
    		<i className="fa fa-times"></i>
    	</div>
    	<p className="xfosi22 xfowebo">{title}</p>
    	<div className="xdifl xalitce xmato15">
    		<div className="x-profile-pic x-square-60 xmari15">
    			<XUserProfilePicture 
    				name={user.name}
    				imageURL={user.photo}
    				fontSize={20}
    				width={60}
    			/>
    		</div>
    		<div className="user-inf">
    			<p className="xfowebo xfosi17">{user.name}</p>
    			<p className="xfosi11 xmato7 x-low-emphasis xfowebo">{user.id}</p>
    		</div>
    	</div>
    	<textarea disabled={disabledInput} onChange={handleChange} value={value} placeholder={placeholder} className="xwi100per xmato20 xfowebo"></textarea>
    
    	<span className="li  xhe1 xwi100per xmato5 xmabo5"></span>
    	{statusContent}
    	<XButtonLoadable
    		br={30}
    		load={loading}
    		className="xmato20"
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

function XConversationList ({data, getName, open, createConvClick, createConvURL}) {
	
	const listClassName = "xpore xwi100per xhe100per";
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
	
	const convOption = (dataComp) => {
		op.current.style.bottom = "0px";
		black.current.style.display = "block";
		console.log(dataComp);
	}
	
	const black = React.useRef(null);
	const op = React.useRef(null);
	
	const closeOp = () => {
		black.current.style.display = "none";
		op.current.style.bottom = "-200px";
	}
	


	return <div className={listClassName}>
		<div className="x-pt-10">
			<div className="xdifl xalitce xjucoce xmabo10" >
				<div className="x-square-50 xdifl xjucoce xalitce">
					<i className="far fa-comments xfosi20"></i>
				</div>
				<div className="xwi75per">
					<h2 className="xfowebo xfosi16 xtealce">Chats</h2>
					<p className="xfosi9 xtealce x-conv-status">Vous avez { data.length } conversation{ data.length > 1 ? 's' : ''}</p>
				</div>
				<div className="x-square-50 xdifl xjucoce xalitce">
					<i className="fa fa-ellipsis-v xfosi20"></i>
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
		<div className="xpoab xwi100per" style={convStyle}>
			{ data.map((conv) => (
				<XConversation 
					key={conv.crypted_id}
					open={open}
					rightClick={convOption}
					empty={conv.empty}
					dataComplete={conv}
					lastMessage={conv.lastMessage} 
					img={ conv.type == "private" ? conv.user.photo : conv.photo } 
					name={ getName(conv) } />
			))}
		</div>
		<XCreateConversation 
			style={createConv}
			url={createConvURL}
			onClick={createConvClick} />
		
		<div onClick={closeOp} className="x-bo-ra_10 black-this-conv x-black-01" ref={black}></div>
		
		<div ref={op} className="conv-right-option xpoab x-bo-ra_10 xwi100per x-le_0">
		
		
			<div className="each-conv-option x-center xalitce xhe55 xdigr xwi90per x-pointer" >
				<div className="x-child-center x-square-40" >
					<i className="fa fa-eye-slash xfosi22"></i>
				</div>
				<div className="">
					<p className="xfosi12 xfowebo">Marquer comme non lue</p>
				</div>
			</div>
			
			
			<div className="each-conv-option x-center xalitce xhe55 xdigr xwi90per x-pointer" >
				<div className="x-child-center x-square-40" >
					<i className="fa fa-trash-alt xfosi22"></i>
				</div>
				<div className="">
					<p className="x-text-danger xfosi12 xfowebo">Supprimer le conversation</p>
				</div>
			</div>
			
			<div onClick={closeOp} className="each-conv-option x-center xalitce xhe55 xdigr xwi90per x-pointer">
				<div className="x-child-center x-square-40" >
					<i className="fa fa-times xfosi22"></i>
				</div>
				<div className="">
					<p className="xfosi12 xfowebo">Fermer</p>
				</div>
			</div>
			
			
		</div>
	</div>
	
}


XConversationHeader.defaultProps = {
	style: {},
}
XConversationHeader.propTypes = {
	style: PropTypes.object,
}

function XConversationHeader ({close, data}) {
	const headerClass = "x-conversation-header";
	const statusClass = function () {
		return "status " + data.status.toLowerCase();
	}();

	return <div className={headerClass}>
		<div className="info">
			<div className="x-pointer x-close-chat show" onClick={close}>
				<i className="fa fa-chevron-left"></i>
			</div>
			<div className="user">
				<div className="pic">
					<XUserProfilePicture
						width={47}
						name={data.name}
						fontSize={15}
						imageURL={data.img}
					/>
				</div>
				<div className="data">
					<p className="name">{data.name}</p>
					<span className={statusClass}>{data.status}</span>
				</div>
			</div>
		</div>
		<div className="option">
			<div className="x-pointer search each-option">
				<i className="fa fa-search"></i>
			</div>
			<div className="x-pointer close-chat each-option hide">
				<i className="fa fa-times"></i>
			</div>
			<div className="x-pointer other-option each-option">
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
	const buttonSendText = React.useRef(null);
	
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

	const keyup = function(e) {
		if (e.keyCode === 13) {
			buttonSendText.current.click();
		}
	}
	
	return <div className={messageFormClass} style={style} ref={mother}>
		<div className="x-pointer insert-file xhe50 xwi30" onClick={fileClick}>
			<i className="fa fa-plus-circle"></i>
			<input type="file" ref={file} onChange={handleFileChange} />
		</div>
		
		<div className="x-pointer insert-file xhe50 xwi30" onClick={imageClick}>
			<i className="far fa-image"></i>
			<input type="file" ref={image} accept=".jpg, .JPG, .png, .PNG, .jpeg, .JPEG, .gif" onChange={handleImageChange} />
		</div>
		
		<div className="x-pointer insert-file xhe50 xwi30" onClick={videoClick}>
			<i className="fa fa-video"></i>
			<input type="file" accept=".mp4, .MOV, .avi" onChange={handleVideoChange} ref={video} />
		</div>
		
		<form onSubmit={handleSubmit} ref={form}>
			<textarea placeholder="Text a message" onKeyUp={keyup} ref={field} onChange={onTextChange} value={value} className="xlihe3"></textarea>
			<div className="emoji xhe50 xwi30">
				<i className="far fa-smile"></i>
			</div>
			<div className="x-pointer x-btn-submit xhe50 xwi30">
			<input type="file" className="hide-input" ref={speech} accept=".mp3, .m4a" onChange={handleSpeechChange} />
			{ value.length > 0 ? <button type="submit" ref={buttonSendText}><i className="fa fa-paper-plane"></i></button> : <i className="fa fa-microphone" onClick={speechClick}></i> }
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

function XConversation ({img, name, empty, rightClick ,lastMessage, open, dataComplete}) {
	
	const getDT = function() {
		if (empty) {
			return "";
		} else {
			return __.getFormatTimeDifference(lastMessage.datetime);
		}
	}
	
	const timeDiff = function () {
		return getDT();
	}
	
	
	const getMessage = function() {
		let owner = "";
		if (empty) {
			return "[No messages]";
		} else {
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
		}
	}();
	
	const messageNew = function() {
		if (empty) {
			return null;
		} else {
			if (!lastMessage.isMyMessage) {
				if (lastMessage.status == "delivered" || lastMessage.status == "sent") {
					return <span className="notified"></span>
				} else {
					return null;
				}
			} else {
				return null;
			}
		}
	}();
	
	const messageClass = function() {
		let base = "last-message ";
		if (empty) {
			base = base + "text x-fo-st_it";
		} else {
			if (lastMessage.text) {
				base = base + "text";
			} else {
				base = base + "file";
			}
		}
		return base;
		
	}();
	
	const notify = function () {
		if (empty) {
			return " seen";
		} else {
			if (!lastMessage.isMyMessage) {
				if (lastMessage.status == "seen") {
					return " seen";
				} else {
					return " new";
				}
			}
		}
		return " seen";
	}();
	

	
	const click = () => {
		open(dataComplete);
	}
	
	const contextMenu = (e) => {
		e.preventDefault();
		rightClick(dataComplete);
	}
	const conversationClassName = "x-pointer x-conversation" + notify;
	
	return <div onClick={click} onContextMenu={contextMenu} className={conversationClassName}>
		<div className="pic" >
			<XUserProfilePicture 
				name={name}
				imageURL={img}
				width={47}
				fontSize={13}
				/>
		</div>
		<div className="data" >
			<p className="name">{name}</p>
			<p className={messageClass}>{getMessage}</p>
		</div>
		<div className="time">
			<p>{ timeDiff() }</p>
			{messageNew}
		</div>
	</div>
}

XConversation.propTypes = {
	lastMessage: PropTypes.object,
}

function XMessageComponent ({message, onSent, token, sendingUrl, option, projectID, visual}) {
	
	const messageContent = function() {
		if (message.text && message.video == undefined && message.audio == undefined && message.file == undefined && message.image == undefined) {
			return <XTextMessage 
				message={message} 
				onSent={onSent}
				projectID={projectID}
				option={option}
				token={token} 
				sendingUrl={sendingUrl} />
		} else if (message.text == undefined && message.video && message.audio == undefined && message.file == undefined && message.image == undefined) {
			return <XVideoMessage 
				message={message} 
				option={option} 
				projectID={projectID}
				onSent={onSent} 
				visual={visual}
				token={token}
				sendingUrl={sendingUrl} />
		} else if (message.text == undefined && message.video == undefined && message.audio && message.file == undefined && message.image == undefined) {
			return <XAudioMessage 
				message={message} 
				option={option} 
				onSent={onSent} 
				projectID={projectID}
				token={token} 
				sendingUrl={sendingUrl} />
		}  else if (message.text == undefined && message.video == undefined && message.audio == undefined && message.file && message.image == undefined) {
			return <XFileMessage 
				message={message} 
				option={option} 
				onSent={onSent} 
				projectID={projectID}
				token={token} 
				sendingUrl={sendingUrl} />
		} else if (message.text == undefined && message.video == undefined && message.audio == undefined && message.file == undefined && message.image) {
			return <XImageMessage 
				message={message} 
				option={option} 
				onSent={onSent}
				visual={visual}
				projectID={projectID}
				sendingUrl={sendingUrl} 
				token={token} />
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

function XTextMessageComponent ({message, onSent, token, sendingUrl, option, projectID}) {
	const [serverError, setServerError] = React.useState(false);
	
	const [time, setTime] = React.useState(__.getFormatTimeDifference(message.datetime));
	
	const position = function() {
		let a = message.isMyMessage ? " x-right-position " : " x-left-position ";
		return a;
	}();
	
	const send = React.useCallback(async function() {
		setServerError(false);
		let message_data = {
			type: 'text',
			datetime: message.datetime,
			text: message.text,
			projectID: projectID,
			timestamp: Date.now().toString(),
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
		
		if (response.isSuccess) {
			onSent(message.id, response.data);
		} else {
			setServerError(true)
		}

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
				<XUserProfilePicture
					imageURL={message.user.photo}
					width={43}
					name={ message.user.lastName }
					fontSize={13}
				/>
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
	
	const messageOption = function(e) {
		e.preventDefault();
		option(message);
	}
	
	const messageClick = function() {
		if (serverError) {
			return send;
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
	
	const getMessageScanned = (text) => {
		return __.convertText(text);
	}

	return <div className={messageClassName} onContextMenu={messageOption} id={message.id} onClick={messageClick}>
		<div className="x-message-container">
			{profile}
			<div className="x-message-data text">
				<p className="words xlihe3" dangerouslySetInnerHTML={{ __html: getMessageScanned(message.text) }}></p>
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

function XVideoMessageComponent ({message, onSent, token, sendingUrl, option, projectID}) {
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
			projectID: projectID,
			timestamp: Date.now().toString(),
			type: 'video',
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
		
		if (response.isSuccess) {
			onSent(message.id, response.data);
		} else {
			setServerError(true)
		}
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
				<XUserProfilePicture
					imageURL={message.user.photo}
					width={43}
					name={ message.user.lastName }
					fontSize={13}
				/>
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
	
	const messageOption = function(e) {
		e.preventDefault();
		option(message);
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
	
	return <div className={messageClassName} onContextMenu={messageOption} id={'vid' + message.id} onClick={messageClick}>
		<div className="x-message-container">
			{profile}
			<div className="x-message-data video">
				<div className="video-data">
					<video 
						src={ message.status == "sending" ? "": message.video } 
						preload="metadata" poster="video-poster.jpg" 
						onPlay={onPlayVideo} 
						onLoadedMetadata={onVideoLoadedMetadata} 
						onTimeUpdate={onVideoTimeUpdated} 
						target={'vid' + message.id} 
						onEnded={onEndVideo} />

					<div className="video-controls show">
						<div className="play-pause-video">
							<div className={iconPlay} target={'vid' + message.id}>
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
								<p className="title" >[Video]</p>
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

function XAudioMessageComponent ({message, onSent, token, sendingUrl, option, projectID}) {
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
			projectID: projectID,
			type: 'audio',
			timestamp: Date.now().toString()
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
		
		if (response.isSuccess) {
			onSent(message.id, response.data);
		} else {
			setServerError(true)
		}

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
				<XUserProfilePicture
					imageURL={message.user.photo}
					width={43}
					name={ message.user.lastName }
					fontSize={13}
				/>
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
	
	const messageOption = function(e) {
		e.preventDefault();
		option(message);
	}


	const messageClick = function() {
		if (serverError) {
			return send;
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
	
	return <div className={messageClassName} onContextMenu={messageOption} id={'aud' + message.id} onClick={messageClick}>
		<div className="x-message-container">
			{profile}
			<div className="x-message-data speech">
				<div className="speech-data">
					<div className={message.status == "sending" ? "play-pause" : "play-pause can-play"} target={'aud' + message.id}>
						<i className="fa fa-play"></i>
					</div>
					<div className="waves">
						<div className="progress-model"></div>
						<div className="waves-contents">
							{ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((number, key) => (
								<span className={"waves-" + number + " audio-waves"} key={key}>
									<span className="audio-progress"></span>
								</span>
							))}
						</div>
					</div>
				</div>
				
				<audio 
					src={message.status == "sending" ? "" : message.audio } 
					onPlay={onPlayAudio} 
					onLoadedMetadata={onAudioLoadedMetadata} 
					target={'aud' + message.id} 
					onEnded={onEndAudio} 
					onTimeUpdate={onAudioTimeUpdated} />
				
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


function XFileMessageComponent ({message, onSent, token, sendingUrl, option, projectID}) {
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
			projectID: projectID,
			size: message.file.size,
			humanSize: message.size,
			extension: ext,
			timestamp: Date.now().toString(),
			type: 'file',
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
		
		if (response.isSuccess) {
			onSent(message.id, response.data);
		} else {
			setServerError(true)
		}


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
				<XUserProfilePicture
					imageURL={message.user.photo}
					width={43}
					name={ message.user.lastName }
					fontSize={13}
				/>
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
	
	const messageOption = function(e) {
		e.preventDefault();
		option(message);
	}
	
	const messageClick = function() {
		if (serverError) {
			return send;
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
	
	
	return <div className={messageClassName} onContextMenu={messageOption} id={message.id} onClick={messageClick}>
		<div className="x-message-container">
			{profile}
			<div className="x-message-data other-file">
				<div className="file-data">
					<div className="icon-file">
						<i className={getFileIcon}></i>
					</div>
					<div className="file-detail">
						<p>{message.status == 'sending' ? message.file.name : message.file }</p>
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


function XImageMessageComponent ({message, onSent, token, sendingUrl, option, projectID, visual}) {
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
			timestamp: Date.now().toString(),
			type: 'image',
			projectID: projectID,
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
		
		if (response.isSuccess) {
			console.log(response.data);
			onSent(message.id, response.data);
		} else {
			setServerError(true)
		}

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
	
	const messageOption = function(e) {
		e.preventDefault();
		option(message);
	}

	const seePhoto = () => {
		visual(message);
	}
	
	
	const messageClick = function() {
		if (serverError) {
			return send;
		} else {
			return seePhoto;
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
	
	return <div className={messageClassName} onContextMenu={messageOption} id={message.id} onClick={messageClick}>
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


function XOpenConversation ({style, syncConversationList, token, projectID, visual, sentSound, close, conversationData, urlSending, convID, header, messages, messageForm, convCryptedID}) {
	const [textValue, setTextValue] = React.useState("");
	const [files, setFiles] = React.useState([]);
	const [video, setVideo] = React.useState(null);
	const [audio, setAudio] = React.useState(null);
	const [photo, setPhoto] = React.useState(null);
	

	const [messageSent, setMessageSent] = React.useState(messages);
	const [messageSending, setMessageSending] = React.useState([]);
	
	
	const handleTextChange = (e) => {
		setTextValue(e.target.value);
	}
	
	const handlePhotoChange = (val) => {
		sendMessagePhoto(val);
	}
	
	let socket = null;

	const getMessageSent = React.useMemo(() => {
		return [...messageSent];
	}, [messageSent]);


	React.useEffect(() => {
		socket = new WebSocket(
			'ws://' + window.location.host + '/ws/chat/' + convCryptedID + '/'
		)

		socket.onclose = function (e) {
			console.error("error when opening a convesation");
		}

		socket.onopen = function(e) {
			console.log("conversation opened successfullly")
		}

		socket.onmessage = function (e) {
			let response = JSON.parse(e.data);

			if (Array.isArray(response)) {
				setMessageSent(response);
				showLastMessage();
			} else {
				if (response.action == 'new') {
					let prev = messageSent.filter((m) => m.timestamp == response.timestamp);
					if (prev.length == 0) {
						setMessageSent((recent) => {
							return [...recent, response]
						});
						showLastMessage();
						sentSound();
					}
				} else if (response.action == 'delete') {
					setMessageSent((prev) => {
						return prev.filter((mess) => mess.id != response.id)
					})
				}
			}
		}

		return () => socket.close();
	}, []);

	
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
		
		const itemToTransfer = messageSending.find((item) => item.id == fakeId);
	    const updatedListOne = messageSending.filter((item) => item.id != fakeId);

		let newItem;
		console.log(data);

	    if (data.type == 'text') {
			newItem = {...itemToTransfer, 
				status: "sent", 
				id: data.id,
				timestamp: data.timestamp,
			};
		} else if (data.type == 'image') {
			newItem = {...itemToTransfer, 
				status: "sent", 
				id: data.id,
				timestamp: data.timestamp,
				image: data.image
			};
		} else if (data.type == 'audio') {
			newItem = {...itemToTransfer, 
				status: "sent",
				id: data.id,
				timestamp: data.timestamp,
				audio: data.audio
			};
		} else if (data.type == 'file') {
			newItem = {...itemToTransfer, 
				status: "sent",
				id: data.id,
				timestamp: data.timestamp,
				file: data.file
			};
		} else if (data.type == 'video') {
			newItem = {...itemToTransfer, 
				status: "sent",
				id: data.id,
				timestamp: data.timestamp,
				video: data.video
			};
		}
	    
	    	
	    setMessageSending(updatedListOne);
	    setMessageSent([...messageSent, newItem]);
		sentSound();
	}
	
	
	
	const sendMessageText = () => {
		let date = new Date();
		let newMessage = {
			isMyMessage: true,
			id: "fake-ID-message-" + XSettings.fakeIDMessage,
			text: textValue,
			status: "sending",
			datetime: date.toISOString(),
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
		bottom: "0px",
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
			closeMessageOption(); 
		}, 200);
	}, []);
	
	const appear = React.useRef(null);
	
	const conversationBoxClass = "xpore xwi100per xhe100per";
	
	const messOp = React.useRef(null);
	
	const black = React.useRef(null);

	const [focusedMessageOption, setFocusedMessageOption] = React.useState(null);


	
	const openMessageOption = (dataCom) => {
		messOp.current.style.right = "0px";
		black.current.style.display = "block";
		setFocusedMessageOption(dataCom);
	}
	
	const closeMessageOption = () => {
		messOp.current.style.right = "-60%";
		black.current.style.display = "none";
	}



	const requestDeleteForMe = async function (message_id) {
		let url = '/delete_message_for_me/';

		let to_send = {
			id: focusedMessageOption.id,
			room_id: convCryptedID,
			csrfmiddlewaretoken: token.csrfmiddlewaretoken,
		}

		let formData = new FormData();

		Object.entries(to_send).forEach(([key, val]) => {
			formData.append(key, val);
		})

		let req = await __.layoutRequest.post(url, formData, 'json');

		if (req.isSuccess) {
			console.log("");	
		} else {
			__.xAlert('Connection erreur', "Verifier votre connection s'il vous plaît...", 'danger');
		}
	}
	
	

	const requestDeleteForEveryone = async function (message_id) {
		let url = '/delete_for_everyone/';

		let to_send = {
			id: focusedMessageOption.id,
			room_id: convCryptedID,
			csrfmiddlewaretoken: token.csrfmiddlewaretoken,
		} 

		let formData = new FormData();

		Object.entries(to_send).forEach(([key, val]) => {
			formData.append(key, val);
		})

		let req = await __.layoutRequest.post(url, formData, 'json');

		if (req.isSuccess) {
			console.log("");	
		} else {
			__.xAlert('Connection erreur', "Verifier votre connection s'il vous plaît...", 'danger');
		}
	}
	
	const deleteForEveryone = () => {
		requestDeleteForEveryone(focusedMessageOption.id);
		closeMessageOption();
	}

	const deleteForMe = () => {
		requestDeleteForMe(focusedMessageOption.id);
		closeMessageOption();
	}

	const noneFunc = (xx) => {
		
	}
	
	return <div className={conversationBoxClass}>
	
		<div ref={black} onClick={closeMessageOption} className="black-this-message x-black-02"></div>
		
		<div ref={messOp} className="x-message-option xpoab">
			<p className="xfosi20 xfowebo title-message-option">Option de message:</p>
			
			{ focusedMessageOption != null && focusedMessageOption.text ?
			<div className="each-conv-option x-center xalitce xhe55 xdigr xwi90per x-pointer">
				<div className="x-child-center x-square-40" >
					<i className="fa fa-clipboard xfosi22"></i>
				</div>
				<div className="">
					<p className="xfosi12 xfowebo">Copier</p>
				</div>
			</div> : null
			}
			
			{ (focusedMessageOption != null) && (focusedMessageOption.image || focusedMessageOption.video) ?
			<div className="each-conv-option x-center xalitce xhe55 xdigr xwi90per x-pointer" onClick={ () => visual(focusedMessageOption) }>
				<div className="x-child-center x-square-40">
					<i className="fa fa-expand xfosi22"></i>
				</div>
				<div className="">
					<p className="xfosi12 xfowebo">Ouvrez en grand angle</p>
				</div>
			</div> : null
			}
			
			<div className="each-conv-option x-center xalitce xhe55 xdigr xwi90per x-pointer" onClick={deleteForMe} >
				<div className="x-child-center x-square-40">
					<i className="fa fa-trash-alt xfosi22"></i>
				</div>
				<div className="">
					<p className="x-text-danger xfosi12 xfowebo">Supprimer pour moi</p>
				</div>
			</div>
			
			{ focusedMessageOption != null && focusedMessageOption.isMyMessage == true ? 
			<div className="each-conv-option x-center xalitce xhe55 xdigr xwi90per x-pointer" onClick={deleteForEveryone} >
				<div className="x-child-center x-square-40" >
					<i className="fa fa-trash-alt xfosi22"></i>
				</div>
				<div className="">
					<p className="x-text-danger xfosi12 xfowebo">Supprimer pour tous le monde</p>
				</div>
			</div> : null
			}
			
			
			<div onClick={closeMessageOption} className="each-conv-option x-center xalitce xhe55 xdigr xwi90per x-pointer" >
				<div className="x-child-center x-square-40" >
					<i className="fa fa-times xfosi22"></i>
				</div>
				<div className="">
					<p className="xfosi12 xfowebo">Fermer</p>
				</div>
			</div>
		</div>
		
		<XConversationHeader close={close} data={header} style={headerStyle} />
		
		<div className="x-all-messages x-all-messages-display xpoab xwi100per"  style={allMessageStyle}>
		
			{messageSent.map((message) => <XMessage 
				sendingUrl={urlSending} 
				key={message.id}
				visual={visual}
				projectID={projectID}
				message={message} 
				token={token}
				option={openMessageOption} />)}
			
			{messageSending.map((message, key) => <XMessage 
				sendingUrl={urlSending}
				key={key}
				token={token}
				visual={visual}
				projectID={projectID}
				onSent={handleMessageSent} 
				message={message} />)}
			
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
	sentSound: function () {},
	newMessageSound: function () {},
}

XOpenConversation.propTypes = {
	header: PropTypes.object,
	style: PropTypes.object,
}