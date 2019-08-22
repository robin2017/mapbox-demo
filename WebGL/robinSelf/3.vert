//配合vertexAttribPointer，getAttribLocation使用
attribute vec4 myPoints;
void main() {
    //内置变量,vec4类型
    gl_Position = myPoints;
    //内置变量,float类型
    gl_PointSize = 10.0;
}


