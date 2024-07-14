+S::{
    MouseGetPos &x, &y
    y:=y+30
	A_Clipboard:= "DllCall('SetCursorPos', 'int', " x ", 'int', " y ")"
	Return
}
 
