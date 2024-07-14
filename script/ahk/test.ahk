WinActivate "Google Chrome"
sx1:=2780
sy1:=454
sx2:=1606
sy2:=453

DllCall('SetCursorPos', 'int', sx1, 'int', sy1)
MouseClick "left",,,,,"D"
MouseClick "left",sx2, sy2,1,0,"D"
; Copy the selected text
Send "^c"
MouseClick "left",,,,,"U"

