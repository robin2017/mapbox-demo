#ifdef GL_ES
//这个必须添加，否则失败
precision mediump float;
#endif
varying vec4 _color;
void main() {
    //使用共享数据
    gl_FragColor = _color;
}
