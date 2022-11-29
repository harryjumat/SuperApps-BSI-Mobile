Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Login.tsr")
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_CardlessWithdrawal.tsr")
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile.qfl") 
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile - Cardless Withdrawal.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\ReactLib.vbs")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, CoverSubTitle, CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Panduan Penarikan")

'Panduan Penarikan - Positive

Call react.Addtitle("BSI SuperApps - Panduan Penarikan - Positive")
Call PanduanPenarikan()
Call SaveReact_Merge()	
