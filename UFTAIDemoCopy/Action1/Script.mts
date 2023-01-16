AIUtil.SetContext Browser("creationtime:=0")
Browser("creationtime:=0").Maximize

wait(3)

AIUtil("Profile").Click
AIUtil("input", "Username").Type "aidemo"
Dim myDeviceReplay
Set myDeviceReplay = CreateObject("Mercury.DeviceReplay")

myDeviceReplay.PressKey 15            'Send Enter key

wait(1)

AIUtil("input", "Password").Type "AIdemo1"
AIUtil("button", "LOGIN").Click

wait(3)
AIUtil("search").Search "17t"
AIUtil.FindTextBlock("HP ENVY - 17t Touch", micFromBottom, 1).Click
AIUtil.FindTextBlock("ADD TO CART").Click
AIUtil("shopping_cart").Click

Browser("creationtime:=0").CloseAllTabs


