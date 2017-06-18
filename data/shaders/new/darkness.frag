uniform float u_Time;
uniform float u_Opacity;  
uniform sampler2D u_Tex0;   
varying vec2 v_TexCoord;

float sampleDist = 1.0;
float STR = 4.8;
float sampleStrength = 0.0;

void main()                             
{
    sampleStrength += (u_Opacity*STR);
    sampleStrength = (sampleStrength > STR) ? STR : sampleStrength;
    
    vec2 pos = v_TexCoord.xy;
    float dist_squared = dot(pos, pos);
    
    vec2 dir = 0.46 - pos;
    float dist = sqrt(dir.x*dir.x + dir.y*(dir.y+0.14));
        
    vec4 color = texture2D(u_Tex0,v_TexCoord);
    vec4 sum = color;
    sum -= texture2D(u_Tex0, v_TexCoord); 
    float t = dist * sampleStrength;
    t = clamp(t ,0.0,1.0); //0 &lt;= t &lt;= 1

    gl_FragColor = mix(color, sum, t);               
}                                              