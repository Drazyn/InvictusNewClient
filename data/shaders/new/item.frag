uniform float u_Opacity; // painter opacity
uniform vec4 u_Color; // painter color
uniform float u_Time;

vec4 sepia(vec4 color)
{
    return vec4(dot(color, vec4(.393, .769, .189, .0)),
                dot(color, vec4(.349, .686, .168, .0)),
                dot(color, vec4(.272, .534, .131, .0)),
                1);
}

void main()
{
    gl_FragColor = sepia(texture2D(u_Tex0, v_TexCoord));
}