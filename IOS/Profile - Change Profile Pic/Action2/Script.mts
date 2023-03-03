datatable.ImportSheet "D:\Mentahan\PlugIn UFT\Excel Untuk Report.xlsx",1,"Global"
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile.qfl") 
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile - Profile.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\ReactLib.vbs")

Call Path_Folder()
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Login.tsr")
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Profile.tsr")

Call InitiateReact_V2_1(CoverTitle, "Profile - Delete Profile Pic", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Delete Profile Pic")

'Delete Profile Pic
Call react.Addtitle("BSI SuperApps - Delete Profile Pic")
Call Login()
Call ChangeProfilePic("DeletePic")
Call SaveReact_Merge()






