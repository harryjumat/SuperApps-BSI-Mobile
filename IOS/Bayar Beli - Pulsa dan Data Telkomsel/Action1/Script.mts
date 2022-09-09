LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile.qfl") 
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile - Bayar Beli.qfl")

LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl")
'LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl.lck")
LoadFunctionLibrary("D:\BSI\Napalm\libray\ReactLib.vbs")

Call Path_Folder()
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Login.tsr")
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Bayar_Beli.tsr")

Call InitiateReact_V2_1(CoverTitle, CoverSubTitle, CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Pulsa & Paket Data Telkomsel")

'Pulsa & Paket Data Telkomsel - Positive
Call react.Addtitle("BSI SuperApps - Paket Data Telkomsel - Positive")
'Call Login()
'Call PulsaPaketDataTelkomsel("pulsapositive")
Call Login()
Call PulsaPaketDataTelkomsel("paketdatapositive")
Call SaveReact_Merge()	

