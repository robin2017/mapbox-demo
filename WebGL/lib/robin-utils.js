var robinUtils = {}
/**
 * 初始化着色器
 * 都是程式化的细节
 * */
robinUtils.initShaders = function (gl, VSHADER_SRC, FSHADER_SRC) {
    // 创建着色器对象
    const fShader = gl.createShader(gl.FRAGMENT_SHADER);
    const vShader = gl.createShader(gl.VERTEX_SHADER);
    // 将着色器源码写入对象
    gl.shaderSource(vShader, VSHADER_SRC);
    gl.shaderSource(fShader, FSHADER_SRC);

    // 编译着色器
    gl.compileShader(vShader);
    gl.compileShader(fShader);

    // 创建程序
    const program = gl.createProgram();

    // 程序绑定着色器
    gl.attachShader(program, vShader);
    gl.attachShader(program, fShader);

    // 链接程序（如果GLSL有问题，此处报错）
    gl.linkProgram(program);
    var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!linked) {
        var error = gl.getProgramInfoLog(program);
        console.log('Failed to link program: ' + error+' /请检查GLSL是否有误');
        gl.deleteProgram(program);
        return null;
    }

    // 使用程序
    gl.useProgram(program);

    //挂载到对象上
    gl.program = program
}


robinUtils.request = function (fileName) {
    return new Promise((resolve) => {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                resolve(xhr.responseText)
            }
        }
        xhr.open('GET', fileName, true);
        xhr.send();
    })

}