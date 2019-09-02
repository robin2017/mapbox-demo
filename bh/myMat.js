/**     demo示例
 *   let a = vec2.create([1,1]);
 *   let ab =  vec2.create([1,1]);
 *   let mat = mat2.create([1,0,0,1]);
 *   let ret = vec2.add(a,mat2.multiplyVec2(mat,ab));
 * */
var mat2 = {};
mat2.create = function (mat) {
    var dest = new Array(4);

    if (mat) {
        dest[0] = mat[0];
        dest[1] = mat[1];
        dest[2] = mat[2];
        dest[3] = mat[3];
    }

    return dest
}
mat2.multiplyVec2 = function (mat, vec, dest) {
    if (!dest) {
        dest = vec
    }

    var x = vec[0], y = vec[1];

    dest[0] = mat[0] * x + mat[1] * y;
    dest[1] = mat[2] * x + mat[3] * y;

    return dest;
}


var vec2 = {};
vec2.create = function (vec) {
    var dest = new Array(2);

    if (vec) {
        dest[0] = vec[0];
        dest[1] = vec[1];
    }

    return dest;
};

vec2.add = function (vec, vec2, dest) {
    if (!dest) {
        dest = vec;
    }

    if (vec == dest) {
        dest[0] += vec2[0];
        dest[1] += vec2[1];
    } else {
        dest[0] = vec[0] + vec2[0];
        dest[1] = vec[1] + vec2[1];
    }
    return dest;
}
vec2.multiply = function (vec, a) {
    vec[0] *= a;
    vec[1] *= a;
    return vec;
}

vec2.subtract = function (vec, vec2, dest) {
    if (!dest) {
        dest = vec;
    }

    if (vec == dest) {
        dest[0] -= vec2[0];
        dest[1] -= vec2[1];

    } else {
        dest[0] = vec[0] - vec2[0];
        dest[1] = vec[1] - vec2[1];
    }

    return dest;
}