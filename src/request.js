var request = {
    get:(_this,url,body) =>{
        console.log(_this)
        console.log(_this)
        return _this.$http.get(url,{
            params:body
        })
    }
}
export default request;