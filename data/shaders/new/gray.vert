uniform sampler2D u_Tex0;     
varying vec2 v_TexCoord;    
uniform float u_Time;    
uniform float u_Color;

const vec2 center = vec2(0.475, 0.55);
const vec3 start = vec3(1.0, 1.0, 1.0);
const vec3 end = vec3(0.0, 0.0, 0.0);
const float radius = 0.25;

void main() 
{
   float dist = clamp(distance(center, v_TexCoord) / radius, 0.0, 1.0);      
   gl_FragColor = texture2D(u_Tex0, v_TexCoord) * vec4(mix(start, end, dist), 1.0);
}