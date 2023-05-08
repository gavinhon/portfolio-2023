uniform sampler2D globeTexture;
varying vec2 vertexUV; // example [0, 0.24]
varying vec3 vertexNormal;
// xyz produces vec3 so a vec4 is needed for gl_FragColor
void main(){
    // atmospheric effect from creator of 3js
    float intensity = 1.05 - dot(vertexNormal, vec3(0.0, 0.0, 1.0));
    vec3 atmosphere = vec3(0.3, 0.6, 1.0) * pow(intensity, 1.5);
    //rgba
    gl_FragColor = vec4(atmosphere + texture2D(globeTexture, vertexUV).xyz, 1.0);
}