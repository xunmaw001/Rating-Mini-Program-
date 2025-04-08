const base = {
    get() {
        return {
            url : "http://localhost:8080/yingyuhuzhuxiaochengxu/",
            name: "yingyuhuzhuxiaochengxu",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/yingyuhuzhuxiaochengxu/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "英语互助小程序"
        } 
    }
}
export default base
