// Horizontally split screen between texture and background by ratio of level

uniform sampler2D texture;
uniform sampler2D background;

uniform vec2 texOffset;

varying vec4 vertColor;
varying vec4 vertTexCoord;

uniform float level;

void main() {
    if(level < vertTexCoord.st.y) {
        gl_FragColor = texture2D(texture, vertTexCoord.st);
    } else {
        gl_FragColor = texture2D(background, vertTexCoord.st);
    }
}
