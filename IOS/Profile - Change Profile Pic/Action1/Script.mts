datatable.ImportSheet "D:\Mentahan\PlugIn UFT\Excel Untuk Report.xlsx",1,"Global"
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile.qfl") 
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile - Profile.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\ReactLib.vbs")

Call Path_Folder()
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Login.tsr")
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Profile.tsr")

Call InitiateReact_V2_1(CoverTitle, "Profile - Change Profile Pic", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Change Profile Pic")

'Change Profile Pic
Call react.Addtitle("BSI SuperApps - Change Profile Pic")
Call ChangeProfilePic("ChangePic")
Call ChangeProfilePic("ChangePicGallery")
Call SaveReact_Merge()



