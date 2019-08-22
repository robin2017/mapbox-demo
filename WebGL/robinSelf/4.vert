attribute vec4 myPosition;
attribute float myPointSize;
void main() {
    //内置变量,vec4类型
    gl_Position = myPosition;
    //内置变量,float类型
    gl_PointSize = myPointSize;
}


