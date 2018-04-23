// Contour
uniform sampler2D texture;
uniform sampler2D background;

uniform vec2 texOffset;

varying vec4 vertColor;
varying vec4 vertTexCoord;

uniform float level;

uniform vec4 color1;
uniform vec4 color2;
uniform vec4 color3;
uniform vec4 color4;

void main() {
    vec4 texColor = texture2D(texture, vertTexCoord.st).rgba;
    float brightness = (0.2126*texColor.r) + (0.7152*texColor.g) + (0.0722*texColor.b);

    float enabled = step(level, brightness);

    gl_FragColor = color1 * enabled + color2 * (1 - enabled);
}
