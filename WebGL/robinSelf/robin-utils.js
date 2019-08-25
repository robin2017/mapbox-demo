var robinUtils = {};
/**
 * 初始化着色器
 * 都是程式化的细节
 * */
robinUtils.initShaders = function (gl, VSHADER_SRC, FSHADER_SRC) {
    //创建着色器对象
    const fShader = gl.createShader(gl.FRAGMENT_SHADER);
    const vShader = gl.createShader(gl.VERTEX_SHADER);
    //将着色器源码写入对象
    gl.shaderSource(vShader, VSHADER_SRC);
    gl.shaderSource(fShader, FSHADER_SRC);
    //编译着色器
    gl.compileShader(vShader);
    gl.compileShader(fShader);
    //创建程序
    const program = gl.createProgram();
    // 程序绑定着色器
    gl.attachShader(program, vShader);
    gl.attachShader(program, fShader);
    //链接程序
    gl.linkProgram(program);
    //使用程序
    gl.useProgram(program);
    //挂载到对象上
    gl.program = program
};
/**
 * 初始化数据缓冲
 * 都是程式化的细节
 * */
robinUtils.initDataBuffer = function (gl, data) {
    // 1、创建缓冲区对象
    var bufferObj = gl.createBuffer();
    // 2、绑定缓冲区对象
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferObj);
    // 3、将数据写入缓冲区对象
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
}

robinUtils.initIndexBuffer = function (gl, data) {
    var Index_Buffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Index_Buffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, data, gl.STATIC_DRAW);
}

robinUtils.request = function (fileName) {
    return new Promise((resolve) => {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                resolve(xhr.responseText)
            }
        };
        xhr.open('GET', fileName, true);
        xhr.send();
    })
};