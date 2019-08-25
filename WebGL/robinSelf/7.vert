attribute vec4 myPoint;
//变换矩阵
uniform mat4 myMat4;
void main() {
    //内置变量,vec4类型
    gl_Position = myMat4 * myPoint;
    //内置变量,float类型
    gl_PointSize = 10.0;
}



