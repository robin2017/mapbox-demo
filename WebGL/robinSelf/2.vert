//配置vertexAttrib3f，getAttribLocation使用
attribute vec4 myPoint;
void main() {
    //内置变量,vec4类型
    gl_Position = myPoint;
    //内置变量,float类型
    gl_PointSize = 10.0;
}


