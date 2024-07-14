WinActivate "Google Chrome"
sx1:=1962
sy1:=689
sx2:=1512
sy2:=611

A_Clipboard:=""
sleep 100
DllCall('SetCursorPos', 'int', sx1, 'int', sy1)
MouseClick "left",,,,,"D"
MouseClick "left",sx2, sy2,1,0,"D"
; Copy the selected text
Send "^c"
MouseClick "left",,,,,"U"

; Extract ID number from name
words := RegExReplace(A_Clipboard, "\d+")
id := RegExReplace(A_Clipboard, words)

Run "cmd", "d:\tech jump\script"
WinActivate "Command Prompt"
Send "g.bat" id "{Enter}"

