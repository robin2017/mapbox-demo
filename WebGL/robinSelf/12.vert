attribute vec4 myPosition;
uniform mat4 myView;
attribute vec4 myColor;
varying vec4 _color;
void main() {
    //视图矩阵 * 位置
    gl_Position = myView * myPosition;
    //数据共享
    _color = myColor;
}


