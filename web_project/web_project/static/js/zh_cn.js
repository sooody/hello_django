(function(global){var Language = {};

Language.pluralFormFunction = function (n) {
		return 'other';
	};


Language.bubble = Language.bubble || {};

Language.bubble.attention_grabber = {
	"message": "聊天注意力工具"
};


Language.chat = Language.chat || {};

Language.chat.Warning = {
	"message": "警告"
};
Language.chat.accept_call = {
	"message": "接受"
};
Language.chat.active = {
	"message": "活跃"
};
Language.chat.agent_profile_image = {
	"message": "座席人员简介图像"
};
Language.chat.agent_ringing = {
	"message": "传入的呼叫"
};
Language.chat.all_conversations = {
	"message": "查看所有对话"
};
Language.chat.call_end_details = {
	"message": "开始在 #startedOn 和持续 #duration",
	"vars": [
		"startedOn",
		"duration"
	]
};
Language.chat.call_error_load = {
	"message": "无法加载呼叫的详细内容。"
};
Language.chat.call_started_on = {
	"message": "从 #startedOn 开始",
	"vars": [
		"startedOn"
	]
};
Language.chat.chatEnded = {
	"message": "对话已经结束"
};
Language.chat.chat_icon = {
	"message": "聊天图标"
};
Language.chat.chat_qm = {
	"message": "聊聊吧"
};
Language.chat.chat_text = {
	"message": "聊天"
};
Language.chat.close_icon = {
	"message": "关闭图标"
};
Language.chat.completed_call = {
	"message": "结束通话"
};
Language.chat.conversation_ended_on = {
	"message": "对话结束时间"
};
Language.chat.decline_call = {
	"message": "拒绝"
};
Language.chat.defaultName = {
	"message": "您 (更改名称)"
};
Language.chat.departmentIsAway = {
	"message": "#strongStart #departmentName #strongEnd 部门暂时离开。",
	"vars": [
		"departmentName",
		"strongStart",
		"strongEnd"
	]
};
Language.chat.departmentIsOffline = {
	"message": "#strongStart #departmentName #strongEnd 部门目前不在线，请选择其他部门。",
	"vars": [
		"departmentName",
		"strongStart",
		"strongEnd"
	]
};
Language.chat.download = {
	"message": "下载"
};
Language.chat.downloadFile = {
	"message": "下载文件"
};
Language.chat.dragDropText = {
	"message": "拖拽文件到此处上传"
};
Language.chat.emoji_error_load = {
	"message": "无法加载表情符号"
};
Language.chat.error_title = {
	"message": "错误"
};
Language.chat.failed = {
	"message": "失败"
};
Language.chat.generalUploadError = {
	"message": "\"#fileName\"，请重试。",
	"vars": [
		"fileName"
	]
};
Language.chat.generalUploadErrorLabel = {
	"message": "无法上传文件"
};
Language.chat.goToLatest = {
	"message": "转到最新"
};
Language.chat.hideButton = {
	"message": "隐藏聊天框"
};
Language.chat.incoming_call_message = {
	"message": "从 #name 的来电",
	"vars": [
		"name"
	]
};
Language.chat.insert_emoji = {
	"message": "插入表情符号"
};
Language.chat.justNow = {
	"message": "就在刚才"
};
Language.chat.limit2 = {
	"message": "移动端最大上传文件大小为 2MB，请选择较小的文件。"
};
Language.chat.limit50 = {
	"message": "最大上传文件大小为 50MB，请选择较小的文件。"
};
Language.chat.message_not_delivered = {
	"message": "消息未送达，请点击这里重新发送。"
};
Language.chat.message_too_long = {
	"message": "消息不能超过 5000 个字符"
};
Language.chat.missed_agent = {
	"message": "您的呼叫被错过"
};
Language.chat.missed_visitor = {
	"message": "您的呼叫被错过"
};
Language.chat.missed_visitor_messagePreview = {
	"message": "你错过了一个来电，来自"
};
Language.chat.mobileName = {
	"message": "您"
};
Language.chat.newChat = {
	"message": "开始新的聊天"
};
Language.chat.newMessages = {
	"message": "新消息"
};
Language.chat.new_conversation = {
	"message": "新对话"
};
Language.chat.notificationTitle = {
	"message": "通知"
};
Language.chat.ongoing_call = {
	"message": "正在进行的对话"
};
Language.chat.past = {
	"message": "#time 前",
	"vars": [
		"time"
	]
};
Language.chat.pasted_image_title = {
	"message": "粘贴于#dateTime 的图像",
	"vars": [
		"dateTime"
	]
};
Language.chat.profile_prechat_text = {
	"message": "请填写下面的表单"
};
Language.chat.rejected_call = {
	"message": "你拒绝了呼叫。"
};
Language.chat.remove_rate = {
	"message": "你删除了对这次联络的品论"
};
Language.chat.resend = {
	"message": "重新发送"
};
Language.chat.retry = {
	"message": "请重试。"
};
Language.chat.return_to_live_chat = {
	"message": "返回在线聊天"
};
Language.chat.say_something = {
	"message": "写一个答复。"
};
Language.chat.screen_share_error = {
	"message": "屏幕共享不可用。"
};
Language.chat.send_mail = {
	"message": "发送邮件"
};
Language.chat.sent_file = {
	"message": "发送文件"
};
Language.chat.today_time = {
	"message": "今天，#time",
	"vars": [
		"time"
	]
};
Language.chat.tryAgain = {
	"message": "再试一次。"
};
Language.chat.unanswered = {
	"message": "未答复"
};
Language.chat.uploading = {
	"message": "上传中..."
};
Language.chat.video_call_error = {
	"message": "视频通话不可用。"
};
Language.chat.visitor_ringing = {
	"message": "呼叫..."
};
Language.chat.voice_call_error = {
	"message": "语音呼叫不可用。"
};
Language.chat.we_are_live = {
	"message": "客服已经在线，说点什么吧。"
};


Language.days = Language.days || {};

Language.days['0'] = {
	"message": "星期日"
};
Language.days['1'] = {
	"message": "星期一"
};
Language.days['2'] = {
	"message": "星期二"
};
Language.days['3'] = {
	"message": "星期三"
};
Language.days['4'] = {
	"message": "星期四"
};
Language.days['5'] = {
	"message": "星期五"
};
Language.days['6'] = {
	"message": "星期六"
};


Language.form = Language.form || {};

Language.form.CancelButton = {
	"message": "取消"
};
Language.form.CloseButton = {
	"message": "关闭"
};
Language.form.DepartmentsErrorMessage = {
	"message": "必须选择部门"
};
Language.form.DepartmentsPlaceholder = {
	"message": "选择部门"
};
Language.form.EmailErrorMessage = {
	"message": "无效的电子邮件地址。"
};
Language.form.EmailPlaceholder = {
	"message": "电子邮件地址"
};
Language.form.EmailTranscriptFormMessage = {
	"message": "请填写以下表单，以让本次对话记录发送至您的电子邮箱"
};
Language.form.EmailTranscriptSuccess = {
	"message": "已发送电子邮件记录请求。"
};
Language.form.EmailTranscriptTo = {
	"message": "发送对话记录至电子邮箱"
};
Language.form.EndChatMessage = {
	"message": "谢谢您和我们聊天。您可以随时开始新的聊天会话或输入您的电子邮件, 并将此对话的记录发送到您的收件箱。"
};
Language.form.EndChatMessage2 = {
	"message": "感谢您与我们聊天。请随时开始新的聊天会话。"
};
Language.form.EndChatTitle = {
	"message": "您确定您想要结束这次对话吗？"
};
Language.form.MessagePlaceholder = {
	"message": "您的信息..."
};
Language.form.NameErrorMessage = {
	"message": "请输入您的名字.."
};
Language.form.NameFormMessage = {
	"message": "请更改您的姓名以便我们能够在下一次认出您。"
};
Language.form.OfflineFormMessage = {
	"message": "请填写下面的表格，我们会尽快回复您。"
};
Language.form.OfflineMessageNotSent = {
	"message": "信息发送错误，请重试"
};
Language.form.OfflineMessageSent = {
	"message": "信息已发送！"
};
Language.form.PhoneErrorMessage = {
	"message": "无效的电话号码"
};
Language.form.PreChatFormMessage = {
	"message": "为了客服能更好地为您服务，请先填写以下表单。"
};
Language.form.PreChatFormMessageProfile = {
	"message": "请填写下面的表单以开始与我对话。"
};
Language.form.QuestionPlaceholder = {
	"message": "有什么可以帮你的..."
};
Language.form.RequiredErrorMessage = {
	"message": "此字段是必需的"
};
Language.form.SaveButton = {
	"message": "保存"
};
Language.form.SendButton = {
	"message": "发送"
};
Language.form.SendMessage = {
	"message": "发送消息"
};
Language.form.StartChatButton = {
	"message": "开始对话"
};
Language.form.SubmitButton = {
	"message": "提交"
};
Language.form.SubmittedFrom = {
	"message": "表单已发送"
};
Language.form.SubmittingProcess = {
	"message": "提交中"
};
Language.form.TranscriptMessage = {
	"message": "请输入您的电子邮件, 并将此对话的记录发送到您的收件箱。"
};
Language.form.any = {
	"message": "任何"
};
Language.form.chatEnded = {
	"message": "对话已经结束"
};
Language.form.department = {
	"message": "部门"
};
Language.form.email = {
	"message": "电子邮箱"
};
Language.form.errorSaving = {
	"message": "无法保存。请重试"
};
Language.form.message = {
	"message": "消息"
};
Language.form.name = {
	"message": "名字"
};
Language.form.sendAgain = {
	"message": "再次发送"
};
Language.form.visitButton = {
	"message": "访问 tawk.to"
};


Language.home = Language.home || {};

Language.home.banner_image = {
	"message": "横幅图像"
};
Language.home.chat_button = {
	"message": "新对话"
};
Language.home.chat_input = {
	"message": "在此处输入并按回车键……"
};
Language.home.heading_main = {
	"message": "嗨，👋"
};
Language.home.heading_sub = {
	"message": "是否需要帮助？搜索我们的帮助中心获取答案或开启对话："
};
Language.home.kb_search = {
	"message": "搜索答案"
};
Language.home.logo_image = {
	"message": "标志图像"
};


Language.kb = Language.kb || {};

Language.kb.article_image = {
	"message": "文章图像"
};
Language.kb.article_rating = {
	"message": "这篇文章有帮助吗？"
};
Language.kb.article_rating_count = {
	"message": "#totalVotes 中有 #totalLikes 喜欢这篇文章",
	"vars": [
		"totalLikes",
		"totalVotes"
	]
};
Language.kb.author_profile_image = {
	"message": "作者简介图像"
};
Language.kb.clear_search = {
	"message": "清除搜索"
};
Language.kb.downvote_rating_button = {
	"message": "否"
};
Language.kb.help_center = {
	"message": "帮助中心"
};
Language.kb.negative_rating = {
	"message": "负面的"
};
Language.kb.positive_rating = {
	"message": "正面的"
};
Language.kb.recent_searches = {
	"message": "最近的搜索"
};
Language.kb.search_fail_description = {
	"message": "请再试一次"
};
Language.kb.search_fail_title = {
	"message": "没有搜索结果"
};
Language.kb.search_placeholder = {
	"message": "搜索答案"
};
Language.kb.search_results = {
	"message": "搜索结果"
};
Language.kb.show_all_results = {
	"message": "显示所有结果 (#num)",
	"vars": [
		"num"
	]
};
Language.kb.submit_search = {
	"message": "提交搜索"
};
Language.kb.upvote_rating_button = {
	"message": "是"
};
Language.kb.view_full = {
	"message": "查看全部"
};


Language.menu = Language.menu || {};

Language.menu.add_chat_to_your_website = {
	"message": "Add Chat to your website"
};
Language.menu.change_name = {
	"message": "更改名称"
};
Language.menu.email_transcript = {
	"message": "发送对话记录至电子邮箱"
};
Language.menu.end_chat_session = {
	"message": "结束此聊天会话"
};
Language.menu.popout_widget = {
	"message": "弹出此窗口"
};
Language.menu.sound_off = {
	"message": "关闭声音"
};
Language.menu.sound_on = {
	"message": "开启声音"
};


Language.months = Language.months || {};

Language.months['0'] = {
	"message": "1 月"
};
Language.months['1'] = {
	"message": "2 月"
};
Language.months['10'] = {
	"message": "11 月"
};
Language.months['11'] = {
	"message": "12 月"
};
Language.months['2'] = {
	"message": "3 月"
};
Language.months['3'] = {
	"message": "4 月"
};
Language.months['4'] = {
	"message": "5 月"
};
Language.months['5'] = {
	"message": "6 月"
};
Language.months['6'] = {
	"message": "7 月"
};
Language.months['7'] = {
	"message": "8 月"
};
Language.months['8'] = {
	"message": "9 月"
};
Language.months['9'] = {
	"message": "10 月"
};


Language.notifications = Language.notifications || {};

Language.notifications.dismiss_alert = {
	"message": "关闭提醒"
};
Language.notifications.maximum_file_upload_warning = {
	"message": "对不起, 文件传输一次只能传输 #limitFileNumber 个文件。请再次尝试传输以下文件:",
	"vars": [
		"limitFileNumber"
	]
};
Language.notifications.maximum_size_upload_warning = {
	"message": "抱歉, 文件传输限制为每个文件 #limitFileSize。请压缩文件并重试。",
	"vars": [
		"limitFileSize"
	]
};
Language.notifications.reconnecting = {
	"message": "重新连接"
};
Language.notifications.retry = {
	"message": "重试"
};


Language.overlay = Language.overlay || {};

Language.overlay.cookiesOff = {
	"message": "无法启用聊天，因为您的浏览器的 cookie 功能处于关闭状态。请启用并刷新您的浏览器。"
};
Language.overlay.inactive = {
	"message": "点击这里重新开始聊天"
};
Language.overlay.maintenance = {
	"message": "聊天工具正在维护中，暂不可用"
};
Language.overlay.tawkContent = {
	"message": "此应用是由tawk.to提供的 - 它是一款免费的消息传递应用程序,允许您监视与访客在你的网站上。"
};


Language.rollover = Language.rollover || {};

Language.rollover.back = {
	"message": "返回"
};
Language.rollover.chatMenu = {
	"message": "菜单"
};
Language.rollover.emailTranscriptOption = {
	"message": "发送对话记录至电子邮箱"
};
Language.rollover.end = {
	"message": "结束聊天"
};
Language.rollover.knowledgeBase = {
	"message": "知识库"
};
Language.rollover.maximize = {
	"message": "最大化"
};
Language.rollover.minimize = {
	"message": "最小化"
};
Language.rollover.negativeRating = {
	"message": "为本次谈话评分 -1"
};
Language.rollover.popOut = {
	"message": "弹出窗口"
};
Language.rollover.positiveRating = {
	"message": "为本次谈话评分 +1"
};
Language.rollover.rateChat = {
	"message": "对本次聊天进行评价"
};
Language.rollover.resendMessage = {
	"message": "重发消息"
};
Language.rollover.resize = {
	"message": "调整大小"
};
Language.rollover.screenShare = {
	"message": "屏幕共享"
};
Language.rollover.uploadFile = {
	"message": "上传文件"
};
Language.rollover.videoCall = {
	"message": "视频通话"
};
Language.rollover.voiceCall = {
	"message": "语音呼叫"
};


Language.routes = Language.routes || {};

Language.routes.all_agents = {
	"message": "所有座席人员"
};
Language.routes.conversations = {
	"message": "对话"
};
Language.routes.load_more = {
	"message": "加载更多"
};


Language.status = Language.status || {};

Language.status.away = {
	"message": "离开"
};
Language.status.offline = {
	"message": "离线"
};
Language.status.online = {
	"message": "在线"
};




Language.chat = Language.chat || {};

Language.chat.hours = {
	"pluralVars": [
		"num"
	],
	"message": {
		"other": "#num 小时"
	}
};
Language.chat.messageQueuedText = {
	"pluralVars": [
		"t"
	],
	"message": {
		"other": "预计等待时间是 #strongStart #t 分钟 #strongEnd"
	},
	"vars": [
		"strongStart",
		"strongEnd"
	]
};
Language.chat.minutes = {
	"pluralVars": [
		"num"
	],
	"message": {
		"other": "#num 分钟"
	}
};
Language.chat.newMessage = {
	"pluralVars": [
		"num"
	],
	"message": {
		"other": "#num新的消息"
	}
};
Language.chat.seconds = {
	"pluralVars": [
		"num"
	],
	"message": {
		"other": "#num 秒"
	}
};


global.$_Tawk.language = Language;})(window);