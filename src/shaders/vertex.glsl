// passing value to another glsl; vertexUV is a customname
varying vec2 vertexUV;
varying vec3 vertexNormal;
void main(){
    //https://threejs.org/docs/#api/en/renderers/webgl/WebGLProgram
    // for every vertex set position
    // use some threejs attributes
    // gl_Position = vec4(1,0,0,1);
    // "position" comes from threejs which has vec3
    // tell shader how to display 3d in 2d
    vertexUV = uv;
    vertexNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}