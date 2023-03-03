datatable.ImportSheet "D:\Mentahan\PlugIn UFT\Excel Untuk Report.xlsx",1,"Global"
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Login.tsr")
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Bayar_Beli.tsr")
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Profile.tsr")
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile.qfl") 
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile - Bayar Beli.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\ReactLib.vbs")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar/Beli - Paket Data Telkomsel", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Pulsa & Paket Data Telkomsel")

'Pulsa & Paket Data Telkomsel - Positive
Call react.Addtitle("BSI SuperApps - Paket Data Telkomsel - Negative")
Call PulsaPaketDataTelkomsel("paketdatanegative")
Call SaveReact_Merge()	
