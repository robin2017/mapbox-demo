/**
 * 初始化着色器，都是程式化的细节
 * */
function initShaders(gl, VSHADER_SRC, FSHADER_SRC) {

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

    // 链接程序
    gl.linkProgram(program);

    // 使用程序
    gl.useProgram(program);
    return program
}
