Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Login.tsr")
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Berbagi.tsr")
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Bayar_Beli.tsr")
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile.qfl") 
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile - Berbagi.qfl")
LoadFunctionLibrary("D:\BSI\T24\BSI-T24.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\ReactLib.vbs")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, CoverSubTitle, CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Kitabisa.id")

'Kitabisa.id - Positive
'BUTUH BILLER (KARNA KETERANGANNYA ERROR ESB SEDANGKAN YANG LAIN LANCAR)
Call react.Addtitle("BSI SuperApps - Kitabisa.id - Positive")
Call Kitabisa("positive")
'Call cekMutasi("Kitabisa.id" , nomorFT)
'Call cekJurnal("Kitabisa.id", nomorFT)
Call SaveReact_Merge()	
