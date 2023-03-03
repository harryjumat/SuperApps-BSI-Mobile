datatable.ImportSheet "D:\Mentahan\PlugIn UFT\Excel Untuk Report.xlsx",1,"Global"
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Login.tsr")
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Bayar_Beli.tsr")
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile.qfl") 
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile - Bayar Beli.qfl")
LoadFunctionLibrary("D:\BSI\T24\BSI-T24.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\ReactLib.vbs")

'Wanita - Toogle Aktif
Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar/Beli - Aqiqah", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Aqiqah")
Call react.Addtitle("BSI SuperApps - Aqiqah - Positive")
Call Aqiqah("positive", "Wanita", "Aktif")
Call SaveReact_Merge()
'Wanita - Toogle NonAktif
Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar/Beli - Aqiqah", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Aqiqah")
Call react.Addtitle("BSI SuperApps - Aqiqah - Positive")
Call Aqiqah("positive", "Wanita", "NonAktif")
Call SaveReact_Merge()
'Pria - Toogle Aktif
Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar/Beli - Aqiqah", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Aqiqah")
Call react.Addtitle("BSI SuperApps - Aqiqah - Positive")
Call Aqiqah("positive", "Pria", "Aktif")
Call SaveReact_Merge()
'Pria - Toogle NonAktif
Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar/Beli - Aqiqah", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Aqiqah")
Call react.Addtitle("BSI SuperApps - Aqiqah - Positive")
Call Aqiqah("Positive", "Pria", "NonAktif")
Call SaveReact_Merge()
