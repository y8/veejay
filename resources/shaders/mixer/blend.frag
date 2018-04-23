// Blend texture with background with given level

uniform sampler2D texture;
uniform sampler2D background;

uniform vec2 texOffset;

varying vec4 vertColor;
varying vec4 vertTexCoord;

uniform float level;

void main() {
    vec4 texture_colour = texture2D(texture, vertTexCoord.st);
    vec4 background_colour = texture2D(background, vertTexCoord.st);

    gl_FragColor = mix(texture_colour, background_colour, level);
}
