LoadFunctionLibrary("D:\BSI\BSI Mobile.qfl")
LoadFunctionLibrary("D:\BSI\BSI Mobile - Profile.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl")
'LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl.lck")
LoadFunctionLibrary("D:\BSI\Napalm\libray\ReactLib.vbs")

Call Path_Folder()
Call RepositoriesCollection.Add("D:\BSI\Repository\Repository_Login.tsr")
Call RepositoriesCollection.Add("D:\BSI\Repository\Repository_Profile.tsr")

Call InitiateReact_V2_1(CoverTitle, CoverSubTitle, CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Delete Profile Pic")

'MENGUBAH FOTO PROFIL
'Call react.Addtitle("BSI SuperApps - Change Profile Pic")
'Call Login()
'Call ChangeProfilePic("ChangePic")
'MENGHAPUS FOTO PROFIL
Call react.Addtitle("BSI SuperApps - Delete Profile Pic")
Call Login()
Call ChangeProfilePic("DeletePic")
Call SaveReact_Merge()



