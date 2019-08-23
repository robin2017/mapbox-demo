#ifdef GL_ES
//片元着色器中如果有变量必须添加此宏，否则失败
precision mediump float;
#endif
uniform vec4 myColor;
void main() {
    //内置变量,vec4类型
    gl_FragColor = myColor;
}
