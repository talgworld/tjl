WinActivate "Google Chrome"

WinActivate "Google Chrome"

upload(){
    Sleep 200
    A_Clipboard := ""  ; Clear clipboard contents
    Sleep 50  ; Wait for clipboard to clear
    MouseClick "left"
    ;Copy name
    DllCall('SetCursorPos', 'int', 1866, 'int', 142)
    Sleep 200
    MouseClick "left",,,3 ;select filename to copy
    Sleep 200
    Send "^c" ;copy filename
    ;Choose File
    DllCall('SetCursorPos', 'int', 1864, 'int', 232)
    Sleep 1000
    MouseClick "left"
    ;fix name error
    ClipWait  ; Wait for the clipboard to contain data
    filename := A_Clipboard
    upload_y:=383
    ; Conditionally replace "@" with "_"
    if InStr(filename, "@") > 0
        filename := StrReplace(filename, "@", "_")

    if InStr(filename, ".") > 0
        filename := StrReplace(filename, ".", "_")

    if InStr(filename, "#") > 0
        filename := StrReplace(filename, "#", "_")

    if (StrLen(filename) > 33) {
        upload_y:=400
    }
    ;paste filename
    DllCall('SetCursorPos', 'int', 664, 'int', 567)
    Sleep 1500
    MouseClick "left",,,2 ;select filename-box to paste
    Send filename ;paste filename
    Send "{Right}"
    Send ".7z" ;paste filename
    ;Open
    DllCall('SetCursorPos', 'int', 1024, 'int', 601)
    Sleep 1000
    MouseClick "left"
    ;Upload the file
    DllCall('SetCursorPos', 'int', 2070, 'int', upload_y)
    Sleep 200
    MouseClick "left"
    ;click out
    DllCall('SetCursorPos', 'int', 3592, 'int', 305)
    Sleep 200
    MouseClick "left"
    Sleep 500
    ;download next
    DllCall('SetCursorPos', 'int', 2897, 'int', 763)
}


;Upload-7
DllCall('SetCursorPos', 'int', 3325, 'int', 1251)
Sleep 200
upload()