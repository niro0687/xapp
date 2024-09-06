
const xAlert = function(title, message, status, x) {
	let statusColor = "x-alert-btn x-sp-btn ";
		
	if (status == 'danger') {
		statusColor = statusColor + "x-alert-btn-danger";
	} else if (status == "warning") {
		statusColor = statusColor + "x-alert-btn-warning";
	} else if (status == "success") {
		statusColor = statusColor + "x-alert-btn-success";
	} else {
		statusColor = statusColor + "x-alert-btn-normal";
	}
	
	let body = document.body;
	let popup = body.querySelector("#x-app-popup");
	let ok = popup.querySelector("#ok");
	let messageAlert = popup.querySelector("#message");
	let titleAlert = popup.querySelector("#title");
	
	ok.setAttribute("class", statusColor);
	
	titleAlert.innerHTML = title;
	messageAlert.innerHTML = message;
	setTimeout(function() {
		if (!x) {
			if ($(popup).hasClass("x-popup-hidden")) {
				__.replaceClass(popup, "x-popup-hidden", "x-popup-alert");
			}
		}
	}, 200);
};

function getPubDateTime(state, value) {
	if (typeof(value) == undefined) {
		return null;
	} else if (typeof(value) == "string") {
		state = __.getFormatDatetimeDifference(value);
		return state;
	}
}


function XPublisher ({className, user, data, imgWidth}) {
	const [datetime, setDatetime] = React.useState("");
	
	const pubClassName = React.useMemo(() => {
		return "x-di_fl x-al-it_ce x-ju-co_sp-ev " + className;
	}, []);
	
	const imgWi = React.useMemo(function() {
		return {width: imgWidth};
	}, []);
	
	React.useEffect(() => {
		if (data.datetime == undefined) {
			setDatetime(null);
		} else {
			setDatetime(__.getFormatDatetimeDifference(data.datetime));
		}
	}, []);
	
	React.useEffect(() => {
		if (data.datetime == undefined) {
			setDatetime(null);
		} else {
			setInterval(() => {
				setDatetime(__.getFormatDatetimeDifference(data.datetime));
			}, 30000);
		}
	}, []);
	return 	<div className={pubClassName}>
    	<div className="x-wi_90per x-di_fl x-al-it_ce">
	    	<div className="x-profile-pic x-square-45 x-ma-ri_15 x-ma-le_10" style={imgWi}>
	    		<img src={user.src} alt="" />
	    	</div>
	    	<div className="">
	    		{ user.name ? <p className="x-ma_0 x-fo-si_13 x-fo-we_bo">{user.name}</p> : null }
	    		<div className="x-ma-to_2">
	    		{ user.id ? <span className="publisher-id x-fo-si_11 x-fo-we_bo x-low-emphasis">{user.id}</span> : null }
	    		{ datetime == null ? null : <span className="pub-date x-low-emphasis x-ma-le_5 x-fo-si_9">{ datetime }</span> }
	    		</div>
	    	</div>
    	</div>
    	<div className="pub-option x-wi_10per x-di_fl x-ju-co_fl-en x-pa-ri_25">
    		<i className="fa fa-ellipsis-h x-fo-si_20"></i>
    	</div>
    </div>
}
XPublisher.defaultProps = {
	imgWidth: "45px",
	className: '',
}
XPublisher.propTypes = {
	user: PropTypes.object.isRequired,
	className: PropTypes.string,
	imgWidth: PropTypes.string,
	data: PropTypes.object,
}



function  XImageSliderComponent ({style, className, images, autoSlide}) {
	const boxClassName = React.useMemo(function() {
		return "x-image-slider x-po_re x-di_fl x-al-it_ce x-ov_hi " + className;
	}, []);
	
	const target = React.useRef(null);
	const updateFocusing = React.useCallback((index) => {
		let child = focusing.current.querySelectorAll("div");
		
		for (let i = 0; i < child.length; i++) {
			if (i == index) {
				child[i].classList.replace("x-white-04", "x-white-10");
				child[i].classList.replace("x-circle-4", "x-circle-5");
			} else {
				child[i].classList.replace("x-white-10", "x-white-04");
				child[i].classList.replace("x-circle-5", "x-circle-4");
			}
		}
	}, []);
	const toLeft = (e) => {
		let index = target.current.getAttribute("index");
		if (index != (images.length - 1)) {
			index = Number(index) + 1;
			let pix = target.current.getAttribute("sec");
			pix = __.dimension.getValueFromPixel(pix);
			
			let marg = (index * pix) * -1;
			slider.current.style.marginLeft = marg + "px";
			target.current.setAttribute("index", index);
			updateFocusing(index);
		}
		
	}
	const toRight = (e) => {
		let index = target.current.getAttribute("index");
		if (index != 0) {
			index = Number(index) - 1;
			let pix = target.current.getAttribute("sec");
			pix = __.dimension.getValueFromPixel(pix);
			
			let marg = (index * pix) * -1;
			slider.current.style.marginLeft = marg + "px";
			target.current.setAttribute("index", index);
			updateFocusing(index);
		}
	}
	const focusing = React.useRef(null);
	const slider = React.useRef(null);
	const boxStyle = React.useMemo(() => {
		if (style == {}) {
			return  {width: "400px", height: "400px"};
		} else {
			if (style.width == undefined && style.height == undefined) {
				return  {width: "400px", height: "400px"};
			} else if (style.width && style.height == undefined) {
				return {...style, height: style.width};
			} else if (style.width == undefined && style.height) {
				return {...style, width: "400px"};
			} else if (style.width && style.height) {
				return style;
			}
		}
	}, []);
	
	const imgStyle = React.useMemo(function() {
		if (style == {}) {
			return {width: "400px"};
		} else {
			if (style.width == undefined) {
				return {width: "400px"};
			} else if (style.width) {
				return {width: style.width};
			}
		}
	}, []);
	
	const sec = React.useMemo(() => {
		if (style == {}) {
			return "400px";
		} else {
			if (style.width == undefined) {
				return "400px";
			} else if (style.width) {
				return style.width;
			}
		}
	}, []);
	
	const getDescription = React.useCallback((words) => {
		return __.convertText(words);
	}, []);
	
	return <div id="roots" className={boxClassName} index="0" style={boxStyle} ref={target} sec={sec} >
	    <span className="x-wi_0 x-he_100per x-di_bl x-ma-le_0 x-tr_al-04s" ref={slider}></span>
	    
	    <div className="slide-to-left x-z-in_2 x-po_ab x-wi_80 x-le_0 x-to_0 x-he_100per" onClick={toRight}></div>
	    
	    <div className="slide-to-right x-z-in_2 x-po_ab x-wi_80 x-ri_0 x-to_0 x-he_100per" onClick={toLeft}></div>
	    	
	    <div className="x-po_ab x-bo_7 x-he_7 x-z-in_4 x-wi_50per x-le_25per x-child-center focus-image-selected" ref={focusing}>
	    { images.map((image, key) => (
	    	<div className={ key == 0 ? "x-circle-5 x-white-10" : "x-circle-4 x-white-04" } key={key}></div>
	    ))}
	    </div>
	    {images.map((image, key) => (
	    	<div className="x-po_re" key={key} style={boxStyle}>
	    		<img src={image.src} alt="" style={imgStyle} className="x-z-in_1" />
	    		
	    		<div className="x-po_ab x-wi_100per x-z-in_2 x-black-faded-to-top x-he_100 x-bo_0"></div> 
	    		
	    		<div className="x-po_ab x-z-in_3 x-bo_20 x-le_10 x-wi_100per">
	    			{ image.title ? <p className="x-fo-we_bo x-co_wh">{ image.title } </p> : null }
	    			{ image.description ? <div dangerouslySetInnerHTML={{ __html: getDescription(image.description) }} className="x-fo-si_10 image-desc"></div> : null }
	    		</div>
	    	</div>
	    ))}
	    
    </div>
}

const XImageSlider = React.memo(XImageSliderComponent);
XImageSlider.defaultProps = {
	autoSlide: false,
	style: {},
	className: '',
}
XImageSlider.propTypes = {
	autoSlide: PropTypes.bool,
	style: PropTypes.object,
	className: PropTypes.string,
	images: PropTypes.array.isRequired,
}

function XShimmerLoadingComponent ({speed, className, style}) {
	const loadingClassName = React.useMemo(() => {
		return "x-shimmer-loading x-load-" + speed + " " + className;
	}, []);
	
	const getStyle = React.useMemo(() => {
		if (style.borderRadius && style.borderRadius != undefined) {
			return style;
		} else {
			return {...style, borderRadius: "30px"};
		}
	}, []);
	console.log(getStyle);
	return <div className={loadingClassName} style={getStyle}>
		<span></span>
	</div> 
}

const XShimmerLoading = React.memo(XShimmerLoadingComponent);
XShimmerLoading.propTypes = {
	speed: PropTypes.string,
	style: PropTypes.object,
	className: PropTypes.string,
}
XShimmerLoading.defaultProps = {
	speed: 'middle',
	style: {},
	className: '',
}


function XPopupBoxComponent ({type, children, style, title, message, headerStyle}) {
	const getType = React.useMemo(() => {
		if (type == "default") {
			return "x-default-popup";
		} else if (type == "sharp") {
			return "x-sharp-popup";
		} else if (type == "close-only") {
			return "x-close-only";
		} else if (type == "cpx") {
			return "x-cpx-popup";
		} else {
			return "x-default-popup";
		}
	}, []);
	
	const myStyle = {
		width: "100%",
		height: "100%",
	}
	
	const boxStyle = function() {
		if (style.background || style.backgroundColor) {
			return {...style, width: myStyle.width, height: myStyle.height, background: "none"};
		} else {
			return {...style, width: myStyle.width, height: myStyle.height};
		}
	}();
	
	const containerStyle = function () {
		if (style.background || style.backgroundColor) {
			return {background: style.background || style.backgroundColor};
		} else {
			return {};
		}
	}();
	
	const getHeaderStyle = React.useMemo(() => {
		if (type == "default" || type == "cpx") {
			return headerStyle;
		} 
		return {};
		
	}, []);
	
	const getContent = React.useMemo(() => {
		if (type == "default" || type == "cpx") {
			
			return <div className="x-header-popup-box" style={getHeaderStyle}>
				<div>
					<p>{title}</p>
					{ message == null ? null : <p>{message}</p> }
				</div>
				<span>
					<i className="fa fa-times"></i>
				</span>
			</div>
		} else if (type == "sharp") {
			return <div className="x-sharp-header">
				<span></span>
			</div>
		} else if (type == "close-only") {
			return <div className="x-close-popup-box">
				<i className="fa fa-times"></i>
			</div>
		}
	}, []);
	
	const popupClassName = "x-popup-box x-shadow " + getType;
	
	return <div className={popupClassName} style={boxStyle}>
		<div className="x-container-popup-box" style={containerStyle}>
			{ getContent }
			<div className="x-body-popup-box">{children}</div>
		</div>
	</div> 
	
}

const XPopupBox = React.memo(XPopupBoxComponent);

XPopupBox.defaultProps = {
	style: {},
	headerStyle: {},
	title: 'The popup title is here',
	message: 'Description',
	type: "default",
	className: '',
}

XPopupBox.propTypes = {
	title: PropTypes.string,
	type: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.node
	]),
	style: PropTypes.object,
	headerStyle: PropTypes.object, 
	className: PropTypes.string,
}


function XAuth ({children, idType, titleSize, idLabel, usernameIcon, usernameStyle, passwordStyle, button, center, checkResponse, passwordMinLength, url, usernameBd, passwordBd, fieldWidth, fieldStyle, register, token, registerUrl, registerText, dataType, successAuthFunc, requestErrorFunc}) {
	
	const [usernameValue, setUsernameValue] = React.useState("");
	const [passwordValue, setPasswordValue] = React.useState("");
	const [loading, setLoading] = React.useState(false);
	const [response, setResponse] = React.useState(null);
	
	const handleClick = function(e) {
		e.preventDefault();
		if (url != '') {
			setLoading(true);
		}
	}
	const handleSubmit = function (e) {
		e.preventDefault();
		if (url != '') {
			setLoading(true);
		}
	}

	
	const check = React.useMemo(function() {
		return checkResponse;
	}, [])
	
	const auth = async () => {
		let values = {...token, username: usernameValue, password: passwordValue};
		
		const resp = await __.layoutRequest.get(url, dataType, values);
		setLoading(false);
		if (resp.status == 'error' && resp.isSuccess == false) {
			setResponse('serverError')
		} else if (resp.status == 'success' && resp.isSuccess) {
			setResponse(check(resp.data)); 
		}
	}


	React.useEffect(() => {
		if (loading) {
			auth();
		}
	}, [loading]);
	
	
	React.useEffect(() => {
		if (!loading) {
			if (response == 'authenticated') {
				successAuthFunc();
			} else if (response == 'serverError') {
				requestErrorFunc('Connexion Error', 'Try your connection or check the server.', 'danger');
			}
		}
	}, [response, loading]);
	
	const handleUsernameChange = function(val) {
		setUsernameValue(val);
		if (response == 'userDoesNotExists') {
			setResponse(null);
		}
	};
	const handlePasswordChange = function(val) {
		setPasswordValue(val);
		if (response == 'wrongPassword') {
			setResponse(null);
		}
	};
	
	const passwordIcon = function() {
		if (usernameIcon != "") {
			return "fa fa-lock";
		} else {
			return '';
		}
	}();
	
	const buttonStyle = React.useMemo(function() {
		let btnStyle = {
			height: "47px",
		}
		if (fieldWidth) {
			if (fieldStyle && fieldStyle.width) {
				return {...btnStyle, width: fieldStyle.width}
			} else {
				return {...btnStyle, width: fieldWidth}
			}
		}
		
	}, []);
	const statusClassName = "x-fo-si_11 x-fo-we_bo x-t-danger";
	
	const getStatus = function() {
		let data = null;
		if (response == null) {
			data = null;
		} else {
			if (response == 'userDoesNotExists') {
				data = <span className={statusClassName}>User Does not exists</span>;
			} else if (response == 'wrongPassword') {
				data = <span className={statusClassName}>Wrong password</span>;
			}
		}
		return data;
	}();
	
	const usernameClass = "x-ma-to_20 x-ma-bo_5";
	const passwordClass = "x-ma-to_15 x-ma-bo_5";
	const titleClass = "x-t-center x-fo-si_" + titleSize;
	const buttonClass = "x-ma-to_25 x-ma-bo_25";
	
	const disabled = React.useMemo(function() {
		if (idType == 'email') {
			if (passwordValue.length >= passwordMinLength && __.testEmail(usernameValue)) {
				return false;
			}
		} else if (idType == 'username') {
			if (passwordValue.length >= passwordMinLength && __.testUsername(usernameValue)) {
				return false;
			}
		}
		return true;
	}, [loading, usernameValue, passwordValue]);
	
	const getFieldStyle = function() {
		return {...fieldStyle, width: "100%"};
	}();
	
	const getCoverStyle = function() {
		if (fieldWidth) {
			if (fieldStyle && fieldStyle.width) {
				return {width: fieldStyle.width}
			}
			return {width: fieldWidth}
		}
	}();
	
	const registerContent = function() {
		let cl = center ? "x-center" : "";
		cl = cl + " x-di_fl x-ju-co_ce x-he_30";
		let st = {};
		
		if (fieldWidth) {
			if (fieldStyle && fieldStyle.width) {
				st = {...st, width: fieldStyle.width}
			} else {
				st = {...st, width: fieldWidth}
			}
		}
		return <div className={cl} style={st}>
			{ registerUrl == null ? 
				<button className="x-t-info x-fo-we_bo">{registerText}</button> :
				<a className="x-t-info x-fo-we_bo" href={registerUrl}>{registerText}</a>
			}
		</div>
	}();
	
	const getSeparator = function() {
		let base = "";
		if (center) {
			base = "x-center x-di-bl x-he_4 x-ma-bo_20 x-bo-ra_10 x-wi_90 x-separator";
			return <div className={base}></div>
		}
		return null;
	}();
	
	const getCoverClassName = function() {
		let coverClass = "";
		if (center) {
			coverClass = coverClass + " x-center";
		}
		return coverClass;
	}();
	
	return <React.Fragment>
		<h2 className={titleClass}>{children}</h2>
		<form onSubmit={handleSubmit}>
			<div className={getCoverClassName} style={getCoverStyle}>
				<XField
					icon={usernameIcon} 
					type={idType} 
					bd={usernameBd}
					style={getFieldStyle}
					onChange={handleUsernameChange}
					value={usernameValue}
					className={usernameClass}
					>{idLabel}</XField>
				{ response == 'userDoesNotExists' ? getStatus : null }
				
			</div>
			
			<div className={getCoverClassName} style={getCoverStyle}>
				<XField 
					type="password"
					icon={passwordIcon}
					bd={passwordBd}
					style={getFieldStyle}
					className={passwordClass}
					value={passwordValue}
					onChange={handlePasswordChange}
					>Password</XField>
				{ response == 'wrongPassword' ? getStatus : null }
			</div>
			
			<XButtonLoadable 
				center={true}  
				className={buttonClass}
				style={buttonStyle}
				br={30}
				shadow={true}
				loadingCircularWeight={6}
				onClickFunc={handleClick}
				load={loading}
				disabled={disabled}
				>{button}</XButtonLoadable>
		</form>
		{ register ? getSeparator : null }
		{ register == false ? null : registerContent }
	</React.Fragment>
}
XAuth.defaultProps = {
	idType: 'email',
	idLabel: 'Email',
	children: "User login",
	usernameIcon: 'far fa-user',
	usernameStyle: {},
	titleSize: 30,
	passwordStyle: {},
	url: '',
	fieldWidth: "380px",
	lostPassword: true,
	register: true,
	dataType: null,
	successAuthFunc: defaultSuccessFunc,
	requestErrorFunc: xAlert,
	token: {},
	registerUrl: null,
	registerText: "I don't have an account? Register",
	fieldStyle: {},
	usernameBd: 30,
	passwordBd: 30,
	center: true,
	checkResponse: defaultCheckingResponse,
	button: 'Connexion',
	passwordMinLength: 8
}


XAuth.propTypes = {
	icon: PropTypes.bool,
	idType: PropTypes.string,
	idLabel: PropTypes.string,
	requestErrorFunc: PropTypes.func,
	register: PropTypes.bool,
	registerUrl: PropTypes.string,
	titleSize: PropTypes.number,
	token: PropTypes.object,
	successAuthFunc: PropTypes.func,
	fieldWidth: PropTypes.string,
	center: PropTypes.bool,
	fieldStyle: PropTypes.object,
	usernameIcon: PropTypes.string,
	children: PropTypes.string,
	url: PropTypes.string.isRequired,
	checkResponse: PropTypes.func.isRequired,
	button: PropTypes.string,
	passwordMinLength: PropTypes.number,
	usernameStyle: PropTypes.object,
	passwordStyle: PropTypes.object,
}



function XSearch ({icon, type, value, bd, center, style, children, onChange, className, xonfocus}) {
	const borderRadius = " x-bo-ra_" + bd;
	
	const handleChange = function(e) {
		onChange(e.target.value);
	}
	
	const content = function() {
		if (icon) {
			return <React.Fragment>
				<div className="icon">
					<i className="fa fa-search"></i>
				</div>
				<input placeholder={children} value={value} type="text" onChange={handleChange} />
				{ type == 'arrow' ? <div className="icon"><i className="fa fa-arrow-right"></i></div> : null }
			</React.Fragment>
		}
	}();
	
	const centerBox = center ? " x-center" : "";
	const searchType = type == "arrow" ? "x-search-arrow" : "x-search";
	const searchClassName = searchType + borderRadius + centerBox + " " + className;
	
	return <div className={searchClassName} xonfocus={xonfocus} style={style}>{content}</div>
}

XSearch.defaultProps = {
	icon: true,
	children: 'Search',
	type: 'normal',
	center: false,
	className: '',
	style: {},
	bd: 12,
	value: '',
	onChange: noActionFunction,
	xonfocus: "x-soft-shadow-bold-focus"
}
XSearch.propTypes = {
	center: PropTypes.bool,
	icon: PropTypes.bool,
	style: PropTypes.object,
	type: PropTypes.string,
	bd: PropTypes.number,
	value: PropTypes.string,
	onChange: PropTypes.func,
	className: PropTypes.string,
	children: PropTypes.string, 
	xonfocus: PropTypes.string,
}

function XBaseField({type, children, value, onChange}) {
	const handleChange = function (e) {
		onChange(e.target.value);
	};
	
	const getType = function() {
		if (type == 'imei') {
			return 'tel';
		} else if (type == 'username') {
			return 'email';
		}
		return type;
	}()
	
	return <input placeholder={children}  type={getType} value={value} onChange={handleChange} />
}


function XShowPassword ({mode, onClick}) {
	const dataClass = mode == 'password' ? "fa fa-eye-slash" : "fa fa-eye";
	return <div className="x-icon-field" onClick={onClick}>
		<i className={dataClass}></i>
	</div>
}

function XField ({icon, style, children, xOnFocus, bd, type, className, value, onChange, xonfocus, center, fieldStatus}) {
	
	const [inputType, setInputType] = React.useState(type);
	const showPassword = function() {
		setInputType(() => inputType == 'password' ? 'text' : 'password');
	}
	const [rendu, setRendu] = React.useState(0);
	
	const field = function () {
		if (icon == '') {
			return <React.Fragment>
				<XBaseField type={inputType} value={value} onChange={onChange}>{children}</XBaseField>
				{ type == 'password' ? <XShowPassword onClick={showPassword} mode={inputType} /> : null }
				</React.Fragment>
		} else {
			return <React.Fragment>
				<div className="x-icon-field">
					<i className={icon}></i>
				</div>
				<XBaseField type={inputType} value={value} onChange={onChange}>{children}</XBaseField>
				{ type == 'password' ? <XShowPassword onClick={showPassword} mode={inputType} /> : null }
			</React.Fragment>
		}
	}();
	
	React.useEffect(() => {
		if (rendu == 0) {
			setRendu(1);
		}
	}, []);
	const centerBox = center ? ' x-center' :  "";
	const background = function () {
		if (style && style.background) {
			return ' ';
		}
		return " x-field-has-bg";
	}();
	
	const childType = function() {
		if (icon != '' || type == 'password') {
			if (icon != "" && type != 'password') {
				return " x-child-ic-in";
			} else if (icon == '' && type == "password") {
				return " x-child-in-ic";
			} else if (icon != '' && type == 'password') {
				return " x-child-ic-in-ic";
			}
		}
		return ' x-child-in';
	}();
	
	const borderRadius = " x-bo-ra_" + bd;
	const fieldClassName = "x-field " + childType + centerBox + background + borderRadius + " " + className;
	
	return <React.Fragment>
		<div className={fieldClassName} xonfocus={xonfocus} style={style}>{field}</div>
	</React.Fragment>
}


XField.defaultProps = {
	style: {},
	childType: 'in',
	icon: '',
	className: '',
	type: 'text',
	center: false,
	fieldStatus: null,
	bd: 12,
	xonfocus: 'x-soft-shadow-bold-focus',
	onChange: noActionFunction,
}

XField.propTypes = {
	type: PropTypes.string.isRequired,
	icon: PropTypes.string,
	style: PropTypes.object,
	bd: PropTypes.number,
	xonfocus: PropTypes.string,
	center: PropTypes.bool,
	onChange: PropTypes.func,
	className: PropTypes.string,
}

function XArrowButtonLoad ({children, color, w, weight}) {
	return <React.Fragment>
		<div className="x-btn-text">
			<button>{children}</button>
		</div>
		<div className="x-icon">
			<XLoading w={w} color={color} weight={weight} />
		</div>
	</React.Fragment>
}


function XButtonLoadableComponent ({type, w, br, center, icon, unit, className, state, onClickFunc, style, disabled, children, loadingWidth, loadingCircularWeight, loadingColor, shadow, square, load, loadText}) {
	const availableStateLoad = ['primary', 'none', 'danger', 'success', 'warning'];
	
	const widthLoad = function() {
		if (type != 'icon') {
			let base = ' x-wi_';
			let unity = '';
			if (unit == 'px') {
				unity = "";
			} else if (unit == '%' || unit == 'percent') {
				unity = "per";
			}
			return base + w + unity;
		} else {
			return " x-square-" + square;
		}
	}();
	
	const buttonTypeLoad = function() {
		if (type == 'simple'){
			return " x-sp-btn";
		} else {
			return " x-" + type + "-btn";
		}
	}();
	
	const boxShadowLoad = shadow ? " x-shadow" : '';
	const borderRadiusLoad = " x-bo-ra_" + br;
	
	const buttonStateLoad = function() {
		let cl = '';
		if (disabled || load) {
			if (state == 'none') {
				cl = ' x-btn-none-disabled';
			} else {
				cl = ' x-btn-disabled';
			}
		} else {
			if (style.background && style.background != "") {
				cl = '';
			} else {
				if (availableStateLoad.indexOf(state.toLowerCase()) != -1) {
					cl = ' x-btn-' + state;
				} else {
					cl = ' ' + state;
				}
			}
		}
		return cl;
	}();
	
	
	const typeContentLoad = function() {
		if (!load) {
			if (type == 'icon') {
				return <XIconButton name={icon} />
			} else if (type == 'simple') {
				return  <XSimpleButton disabled={disabled}>{children}</XSimpleButton>
			} else if (type == 'arrow') {
				return <XArrowButton disabled={disabled}>{children}</XArrowButton>
			} else {
				return <XSimpleButton disabled={disabled}>{children}</XSimpleButton>
			}
		} else {
			if (type == 'arrow') {
				return <XArrowButtonLoad color={loadingColor} w={loadingWidth} weight={loadingCircularWeight}>{children}</XArrowButtonLoad>
			} else {
				return <XLoading color={loadingColor} w={loadingWidth} weight={loadingCircularWeight} /> 
			}
		}
	}();
	
	const handleClickLoad = function(e) {
		if (!disabled && !load) {
			onClickFunc(e);
		}
	}
	const centerBoxLoad = center ? " x-center" : "";
	
	const finalClassNameLoad = buttonTypeLoad + widthLoad + borderRadiusLoad + buttonStateLoad + boxShadowLoad + centerBoxLoad + " " + className;
	
	return <div className={finalClassNameLoad} onClick={handleClickLoad} style={style}>{typeContentLoad}</div>
}
const XButtonLoadable = React.memo(XButtonLoadableComponent);

XButtonLoadable.defaultProps = {
	load: false,
	type: 'simple',
	w: 100,
	square: 40,
	state: 'primary',
	children: '',
	br: 12,
	unit: 'px',
	shadow: false,
	style: {},
	disabled: false,
	center: false,
	loadingWidth: 20,
	loadingColor: '#808080',
	className: '',
	loadingCircularWeight: 4,
}
XButtonLoadable.propTypes = {
	load: PropTypes.bool,
	br: PropTypes.number.isRequired,
	type: PropTypes.string.isRequired,
	w: PropTypes.number.isRequired,
	state: PropTypes.string.isRequired,
	square: PropTypes.number,
	center: PropTypes.bool,
	style: PropTypes.object,
	loadText: PropTypes.string,
	center: PropTypes.bool,
	loadingWidt: PropTypes.number,
	unit: PropTypes.string,
	disabledColor: PropTypes.string,
	loadingColor: PropTypes.string,
	loadingCircularWeight: PropTypes.number,
	disabled: PropTypes.bool,
	icon: PropTypes.string,
	className: PropTypes.string,
	onClickFunc: PropTypes.func,
	children: PropTypes.string,
}

function XIconButtonComponent ({name}) {
	return <i className={name}></i>
}
const XIconButton = React.memo(XIconButtonComponent);

function XSimpleButtonComponent ({children, disabled}) {
	return <button disabled={disabled}>{children}</button>
}
const XSimpleButton = React.memo(XSimpleButtonComponent);

function XArrowButtonComponent ({children, disabled}) {
	return <React.Fragment>
		<div className="x-btn-text">
			<button disabled={disabled}>{children}</button>
		</div>
		<div className='x-icon'>
			<i className='fa fa-chevron-right'></i>
		</div>
	</React.Fragment>
}
const XArrowButton = React.memo(XArrowButtonComponent);


function XButtonComponent ({type, w, br, center, icon, unit, className, state, children, onClickFunc, style, disabled, shadow, square}) {
	
	const availableState = ['primary', 'none', 'danger', 'success', 'warning'];
	
	const width = function() {
		if (type != 'icon') {
			let base = ' x-wi_';
			let unity = '';
			if (unit == 'px') {
				unity = "";
			} else if (unit == '%' || unit == 'percent') {
				unity = "per";
			}
			return base + w + unity;
		} else {
			return " x-square-" + square;
		}
	}();
	
	const buttonType = function() {
		if (type == 'simple'){
			return " x-sp-btn";
		} else {
			return " x-" + type + "-btn";
		}
	}();
	const boxShadow = shadow ? " x-shadow" : '';
	const borderRadius = " x-bo-ra_" + br;
	
	const buttonState = function() {
		let cl = '';
		if (disabled) {
			if (state == 'none') {
				cl = ' x-btn-none-disabled';
			} else {
				cl = ' x-btn-disabled';
			}
		} else {
			if (style.background && style.background != "") {
				cl = '';
			} else {
				if (availableState.indexOf(state.toLowerCase()) != -1) {
					cl = ' x-btn-' + state;
				} else {
					cl = ' ' + state;
				}
			}
		}
		return cl;
	}();
	
	const typeContent = function() {
		if (type == 'icon') {
			return <XIconButton name={icon} />
		} else if (type == 'simple') {
			return  <XSimpleButton disabled={disabled}>{children}</XSimpleButton>
		} else if (type == 'arrow') {
			return <XArrowButton disabled={disabled}>{children}</XArrowButton>
		} else {
			return <XSimpleButton disabled={disabled}>{children}</XSimpleButton>
		}
	}();
	
	const handleClick = function(e) {
		if (!disabled) {
			onClickFunc(e);
		}
	}
	const centerBox = center ? " x-center" : "";
	
	const finalClassName = buttonType + width + borderRadius + buttonState + boxShadow + centerBox +className;
	
	return <div className={finalClassName} onClick={handleClick} style={style}>{typeContent}</div>
}

const XButton = React.memo(XButtonComponent);

XButton.defaultProps = {
	type: 'simple',
	w: 100,
	square: 40,
	state: 'primary',
	children: '',
	br: 12,
	unit: 'px',
	shadow: false,
	style: {},
	disabled: false,
	center: false,
	className: '',
}

XButton.propTypes = {
	br: PropTypes.number.isRequired,
	type: PropTypes.string.isRequired,
	w: PropTypes.number.isRequired,
	state: PropTypes.string.isRequired,
	square: PropTypes.number,
	center: PropTypes.bool,
	style: PropTypes.object,
	center: PropTypes.bool,
	unit: PropTypes.string,
	disabledColor: PropTypes.string,
	disabled: PropTypes.bool,
	icon: PropTypes.string,
	className: PropTypes.string,
	onClickFunc: PropTypes.func,
	children: PropTypes.string,
}


function XLoadingComponent ({w, color, weight, center}) {
	const width = " x-wi_" + w;
	const centerLoading = center ? " x-center" : "";
	const loadingClass = "x-circular-loader" + width + centerLoading;
	const loadingStyle = {
		stroke: color
	}
	const size = parseInt(weight);
	const sizeFinal = size.toString();
	
	return <div className={loadingClass} style={loadingStyle}>
		<svg className='x-circular' viewBox="25 25 50 50" >
			<circle className='x-path' cx='50' cy='50' r='20' fill='none' strokeWidth={sizeFinal} strokeMiterlimit='10'style={loadingStyle}></circle>
		</svg>
	</div>
}
const XLoading = React.memo(XLoadingComponent);

XLoading.defaultProps = {
	w: 20,
	color: '#008CFF',
	center: false,
	weight: 4,
}
XLoading.propTypes = {
	center: PropTypes.bool,
	w: PropTypes.number,
	color: PropTypes.string,
	weight: PropTypes.number,
}

function XNavBarV ({menus, menusStat, slider, id, focus, blur, focusBackground}) {
	
	const getType = function() {
		if (menusStat == 'name') {
			return "x-nav-text-only";
		} else if (menusStat == 'icon') {
			return "x-nav-icon-only"
		} else if (menusStat == 'both') {
			return "x-nav-both"
		} else {
			return "x-nav-text-only";
		}
	}();
	
	const navClassName = "x-nav-bar x-" + slider + "-slider " + getType;
	const rows = React.useMemo(() => {
		return getLineRows(menus, menusStat);
	}, []);
	
	React.useEffect(() => {
		setTimeout(function() {
			__.configureNavBar("#" + id);
		}, 300);
	});
	
	if (menusStat == 'name') {
		return <div xslidertype={slider} xfocuscolor={focus} xblurcolor={blur} className={navClassName} id={id}>
			<div className="x-slider"></div>
			{rows}
		</div>
	} else {
		return <div xslidertype={slider} xfocuscolor={focus} xblurcolor={blur} className={navClassName} id={id} xfocusbackground={focusBackground}>
			<div className="x-slider"></div>
			{rows}
		</div>
	}
}
XNavBarV.defaultProps = {
	focus: '',
	blur: '',
}

XNavBarH.propTypes = {
	focus: PropTypes.string,
	blur: PropTypes.string,
}

function TextOnly ({text, active, id}) {
	const getNavItemClass = function() {
		if (active) {
			return "x-nav-active";
		} else {
			return '';
		}
	}();
	const clText = "x-nav-item " + getNavItemClass;

	return <div className={clText} id={id}> 
		<span>{text}</span>
	</div>
}

function Both ({text, icon, active, id}) {
	const getNavItemClass = function() {
		if (active) {
			return "x-nav-active";
		} else {
			return '';
		}
	}();
	const clText = "x-nav-item " + getNavItemClass;
	
	return <div className={clText} id={id}>
		<div className="x-icon">
			<i className={icon}></i>
		</div>
		<span>{text}</span>
	</div>
}

function BothH ({text, icon, active, id}) {
	const getNavItemClass = function() {
		if (active) {
			return "x-h-nav-active";
		} else {
			return '';
		}
	}();
	const clText = "x-h-item " + getNavItemClass;
	
	return <div className={clText} id={id}>
		<div className="x-h-icon">
			<i className={icon}></i>
		</div>
		<span>{text}</span>
	</div>
}


function Icon ({icon, active, id}) {
	const getNavItemClass = function() {
		if (active) {
			return "x-nav-active";
		} else {
			return '';
		}
	}();
	const clText = "x-nav-item " + getNavItemClass;
	
	return <div className={clText} id={id}>
		<div className="x-icon">
			<i className={icon}></i>
		</div>
	</div>
}

function  getLineRows (list, menusStat) {
	let rows = [];
	for (let i = 0; i < list.length; i++) {
		if (menusStat == 'name') {
			if (list[i].active && list[i].active == true) {
				rows.push(<TextOnly active={true} key={i} text={list[i].name} id={list[i].id} />)
			} else {
				rows.push(<TextOnly active={false} key={i} text={list[i].name} id={list[i].id} />)
			}
		} else if (menusStat == 'both') {
			if (list[i].active && list[i].active == true) {
				rows.push(<Both active={true} key={i} text={list[i].name} id={list[i].id} icon={list[i].icon} />)
			} else {
				rows.push(<Both active={false} key={i} text={list[i].name} id={list[i].id} icon={list[i].icon} />)
			}
		} else if (menusStat == 'icon') {
			if (list[i].active && list[i].active == true) {
				rows.push(<Icon active={true} key={i} id={list[i].id} icon={list[i].icon} />)
			} else {
				rows.push(<Icon active={false} key={i} id={list[i].id} icon={list[i].icon} />)
			}
		}
	}
	return rows;
}
function getHRows (list) {
	let rows = [];
	for (let i = 0; i < list.length; i++) {
		if (list[i].active && list[i].active == true) {
			rows.push(<BothH icon={list[i].icon} key={i} id={list[i].id} text={list[i].name} active={true} />)
		} else {
			rows.push(<BothH icon={list[i].icon} key={i} id={list[i].id} text={list[i].name} active={false} />)
		}
	}
	return rows;
}

function XNavBarH ({menus, id, focus, blur, focusBackground}) {
	
	const rows = React.useMemo(() => {
		return getHRows(menus)
	}, []);
	
	const hClassName = "x-nav-bar-h";
	
	React.useEffect(() => {
		setTimeout(function() {
			__.configureNavBarH("#" + id);
		}, 300);
	});
	
	return <div className={hClassName} xfocusbackground={focusBackground} xfocuscolor={focus} xblurcolor={blur} id={id}>
		<div className="x-h-slider"></div>
		{rows}
	</div>
}

function XNavigationBar({align, slider, menus, menusStat, navId, focusColor, focusBackground, blurColor}) {
	
	const getNavContent = function() {
		if (align == 'v') {
			if (menusStat == 'name') {
				return <XNavBarV menus={menus} slider={slider} focus={focusColor} blur={blurColor} id={navId} menusStat={menusStat} />
			} else {
				return <XNavBarV menus={menus} slider={slider} focus={focusColor} blur={blurColor} id={navId} menusStat={menusStat} focusBackground={focusBackground} />
			}
		} else if (align == 'h') {
			return <XNavBarH menus={menus} id={navId} focus={focusColor} blur={blurColor} focusBackground={focusBackground} />
		} 
	}();
	
	return <React.Fragment>{getNavContent}</React.Fragment>
}
XNavigationBar.defaultProps = {
	slider: 'line',
	align: 'v',
	menusStat: 'name',
}

XNavigationBar.propTypes = {
	align: PropTypes.string,
	type: PropTypes.string,
	menusStat: PropTypes.string,
	blurColor: PropTypes.string.isRequired,
	focuBackground: PropTypes.string,
	focusColor: PropTypes.string.isRequired,
	navId: PropTypes.string.isRequired,
	menus: PropTypes.array,
}




function XIconInfo ({className, icon, text, children}) {
	const parentClassName = "x-icon-info " + className;
	const textClassName = text.className ? text.className : "";
	const iconClassName = icon.className ? "icon x-ma-ri_5 " + icon.className : "icon x-ma-ri_5";
	const textStyle = text.style ? text.style : {};
	const iconStyle = icon.style ? icon.style : {};
	const iconName = icon.size ? icon.name + " x-fo-si_" + icon.size : icon.name
	
	return <div className={parentClassName}>
		<div className={iconClassName}>
			<i className={iconName} style={iconStyle}></i>
		</div>
		<div className="info">
			<p className={textClassName} style={textStyle}>{children}</p>
		</div>
	</div>
}


XIconInfo.defaultProps = {
	className: "",
	text: {},
	icon: {}
}

XIconInfo.propTypes = {
	className: PropTypes.string,
	icon: PropTypes.object.isRequired,
	children: PropTypes.string.isRequired,
	text: PropTypes.object
}


function XUploadingProgressComponent ({width, color, id, weight, className}) {
	const boxStyle = React.useMemo(function() {
		return {width: width};
	}, []);
	const strokeStyle = React.useMemo(function() {
		return {width: width, stroke: color};
	}, []);
	
	const getClassName = React.useMemo(function() {
		return "x-circular-progress " + className;
	}, []);
	
	const getId = React.useMemo(function() {
		return "x-cir-prog-" + id;
	}, []);
	
	return <div className={getClassName} style={boxStyle}>
    	<svg className="x-circular-p" viewBox="25 25 50 50">
    		<circle className="x-path-progress" cx='50' cy="50" r='20' fill="none" strokeWidth={weight} id ={getId} strokeMiterlimit='10' style={strokeStyle}></circle>
    	</svg>
    </div>
}

const XUploadingProgress = React.memo(XUploadingProgressComponent);

XUploadingProgress.propTypes = {
	width: PropTypes.string,
	weight: PropTypes.number,
	color: PropTypes.string,
	className: PropTypes.string,
	id: PropTypes.string.isRequired,
}
XUploadingProgress.defaultProps = {
	width: '40px',
	weight: 1,
	className: '',
	color: "white",
}

