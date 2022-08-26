LoadFunctionLibrary("D:\BSI\BSI Mobile.qfl")
LoadFunctionLibrary("D:\BSI\BSI Mobile - Berbagi.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl")
'LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl.lck")
LoadFunctionLibrary("D:\BSI\Napalm\libray\ReactLib.vbs")

Call Path_Folder()
Call RepositoriesCollection.Add("D:\BSI\Repository\Repository_Login_Apk94.tsr")
Call RepositoriesCollection.Add("D:\BSI\Repository\Repository_Berbagi.tsr")

Call InitiateReact_V2_1(CoverTitle, CoverSubTitle, CompanyLogo, projectName, "Automation Testing", "BSI SuperApps THR Yatim")

'THR Yatim -  Positive
Call react.Addtitle("BSI SuperApps - THR Yatim - Positive")
Call Login_Apk94()
Call THRYatim("Positive")
Call SaveReact_Merge()












