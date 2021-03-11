function sanitizeData(char1,char2,data) {
    var arrTemp = data.split(char1);
    var dataTemp = arrTemp[0].split(char2);
    return dataTemp[2] + '/'+ dataTemp[1] + '/' + dataTemp[0];
}


export { sanitizeData }