var request = {
    get:(_this,url,body) =>{
        return _this.$http.get(url,{
            params:body
        })
    }
}
export default request;