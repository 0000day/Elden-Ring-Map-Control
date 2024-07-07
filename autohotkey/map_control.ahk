#Requires AutoHotkey 2.0
#SingleInstance

FindBraveWindow() {
  Hwnds := WinGetList("ahk_exe brave.exe")
    For , Hwnd in Hwnds {
      WinTitle := WinGetTitle("ahk_id" Hwnd)
      WinProcess := WinGetProcessName("ahk_id" Hwnd)

      if (WinTitle = "EldenRingMap AHK - Brave" && WinProcess = "brave.exe") {
        return Hwnd
      }
    }
    return 0
}

NumpadUp:: {
  Hwnd := FindBraveWindow()
  if (Hwnd = 0) {
    Return
  }

  PostMessage(WM_ACTIVATE := 0x0006, 1, Hwnd,, "ahk_id" Hwnd)
  ControlSend("{Up}",, "ahk_id" Hwnd)
}

NumpadDown:: {
  Hwnd := FindBraveWindow()
  if (Hwnd = 0) {
    Return
  }

  PostMessage(WM_ACTIVATE := 0x0006, 1, Hwnd,, "ahk_id" Hwnd)
  ControlSend("{Down}",, "ahk_id" Hwnd)
}

NumpadLeft:: {
  Hwnd := FindBraveWindow()
  if (Hwnd = 0) {
    Return
  }

  PostMessage(WM_ACTIVATE := 0x0006, 1, Hwnd,, "ahk_id" Hwnd)
  ControlSend("{Left}",, "ahk_id" Hwnd)
}

NumpadRight:: {
  Hwnd := FindBraveWindow()
  if (Hwnd = 0) {
    Return
  }

  PostMessage(WM_ACTIVATE := 0x0006, 1, Hwnd,, "ahk_id" Hwnd)
  ControlSend("{Right}",, "ahk_id" Hwnd)
}

NumpadAdd:: {
  Hwnd := FindBraveWindow()
  if (Hwnd = 0) {
    Return
  }

  PostMessage(WM_ACTIVATE := 0x0006, 1, Hwnd,, "ahk_id" Hwnd)
  ControlSend("{+}",, "ahk_id" Hwnd)
}

NumpadSub:: {
  Hwnd := FindBraveWindow()
  if (Hwnd = 0) {
    Return
  }

  PostMessage(WM_ACTIVATE := 0x0006, 1, Hwnd,, "ahk_id" Hwnd)
  ControlSend("{-}",, "ahk_id" Hwnd)
}

NumpadMult:: {
  Hwnd := FindBraveWindow()
  if (Hwnd = 0) {
    Return
  }

  PostMessage(WM_ACTIVATE := 0x0006, 1, Hwnd,, "ahk_id" Hwnd)
  ControlSend("{*}",, "ahk_id" Hwnd)
}

NumpadDiv:: {
  Hwnd := FindBraveWindow()
  if (Hwnd = 0) {
    Return
  }

  PostMessage(WM_ACTIVATE := 0x0006, 1, Hwnd,, "ahk_id" Hwnd)
  ControlSend("{NumpadDiv}",, "ahk_id" Hwnd)
}


NumpadHome:: {
  Hwnd := FindBraveWindow()
  if (Hwnd = 0) {
    Return
  }

  PostMessage(WM_ACTIVATE := 0x0006, 1, Hwnd,, "ahk_id" Hwnd)
  ControlSend("{Home}",, "ahk_id" Hwnd)
}

NumpadEnd:: {
  Hwnd := FindBraveWindow()
  if (Hwnd = 0) {
    Return
  }

  PostMessage(WM_ACTIVATE := 0x0006, 1, Hwnd,, "ahk_id" Hwnd)
  ControlSend("{End}",, "ahk_id" Hwnd)
}

NumpadPgUp:: {
  Hwnd := FindBraveWindow()
  if (Hwnd = 0) {
    Return
  }

  PostMessage(WM_ACTIVATE := 0x0006, 1, Hwnd,, "ahk_id" Hwnd)
  ControlSend("{Delete}",, "ahk_id" Hwnd)
}