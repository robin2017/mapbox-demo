attribute vec4 myPosition;
attribute vec4 myColor;
varying vec4 _color;
void main() {
    //内置变量,vec4类型
    gl_Position =  myPosition;
    //数据共享
    _color = myColor;
}


