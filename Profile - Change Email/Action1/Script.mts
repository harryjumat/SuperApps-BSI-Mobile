LoadFunctionLibrary("D:\BSI\BSI Mobile.qfl")
LoadFunctionLibrary("D:\BSI\BSI Mobile - Profile.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl")
'LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl.lck")
LoadFunctionLibrary("D:\BSI\Napalm\libray\ReactLib.vbs")

Call Path_Folder()
Call RepositoriesCollection.Add("D:\BSI\Repository\Repository_Login.tsr")
Call RepositoriesCollection.Add("D:\BSI\Repository\Repository_Profile.tsr")

Call InitiateReact_V2_1(CoverTitle, CoverSubTitle, CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Change Email")

'Call Login()
Call react.Addtitle("BSI SuperApps - Change Email - Positive")
Call ChangeEmail("Positive")
'Call react.Addtitle("BSI SuperApps - Change Email - Negative")
'Call ChangeEmail("Negative")
Call SaveReact_Merge()

'Device("Device").App("Profile").MobileLabel("HA").Tap
'		wait 2
'		Device("Device").App("Profile").MobileList("profileAccountSettings").Select 0
'		wait 2
'		Device("Device").App("Profile").MobileLabel("Ubah").Tap
'		wait 2
'		Device("Device").App("Profile").MobileEdit("Input_Email").Set "harryminos123@gmail.com"
'		wait 2
'		Device("Device").App("Profile").MobileLabel("Simpan").Tap
'		wait 10
'		'INPUT OTP
'		Device("Device").Enterkeys Number, 1
'		wait 5
'		Device("Device").Enterkeys Number, 2
'		wait 5
'		Device("Device").Enterkeys Number, 3
'		wait 5
'		Device("Device").Enterkeys Number, 4
'		wait 5
'		Device("Device").Enterkeys Number, 5
'		wait 5

