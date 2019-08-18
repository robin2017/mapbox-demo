/**
 * 初始化着色器
 * 都是程式化的细节
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

/**
 * 使用缓冲区对象向顶点着色器传入多个顶点数据
 */
function initVertexBuffers(gl, program, vertices) {
    // 1、创建缓冲区对象
    var vertexBuffer = gl.createBuffer();
    // 2、绑定缓冲区对象
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    // 3、将数据写入缓冲区对象
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    var a_Position = gl.getAttribLocation(program, 'a_Position');
    // 4、将缓冲区对象分配给一个attribute变量
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
    // 5、开启attribute变量
    gl.enableVertexAttribArray(a_Position);
}
