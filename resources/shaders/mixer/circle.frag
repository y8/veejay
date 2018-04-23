// Draw one texture inside the circle of another

uniform sampler2D texture;
uniform sampler2D background;

uniform vec2 texOffset;

varying vec4 vertColor;
varying vec4 vertTexCoord;

uniform vec2 resolution;
uniform float level;

void main() {
  vec2 roundedCenter = vec2(min(resolution.x, resolution.y));
  vec2 st = gl_FragCoord.xy / resolution;
  float dst = distance(st, vec2(0.5));
  float enabled = step(dst, level);

  vec4 txColor = texture2D(texture, vertTexCoord.st);
  vec4 bgColor = texture2D(background, vertTexCoord.st);
  
  gl_FragColor = bgColor * enabled + txColor * (1 - enabled);
}
