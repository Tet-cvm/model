let api = {};

if (process.env.NODE_ENV == 'development') { // 本地环境
    api.test = 'bendi';
} else {
    if (process.env.VUE_APP_TITLE == 'pre') { // 测试环境
        api.test = 'ceshi';
    } else { // 正式环境
        api.test = 'zhengshi';
    }
}

export default api