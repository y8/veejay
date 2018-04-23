// Vertically split screen between texture and background by ratio of level

uniform sampler2D texture;
uniform sampler2D background;

uniform vec2 texOffset;

varying vec4 vertColor;
varying vec4 vertTexCoord;

uniform float level;

void main() {
    //float enabled = step(level, vertTexCoord.st.x);

    if(level < vertTexCoord.st.x) {
        gl_FragColor = texture2D(texture, vertTexCoord.st);
    } else {
        gl_FragColor = texture2D(background, vertTexCoord.st);
    }
}
