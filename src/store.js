const ficiton_prefix = 'ficiton_reader_';
export default{
    storeGet:function(key) {
        let JSONS = JSON;
        return JSONS.parse(localStorage.getItem(ficiton_prefix + key))
    },
    storeSet:function(key,val) {
        let JSONS = JSON;
        return localStorage.setItem(ficiton_prefix + key,JSONS.stringify(val))
    }
}