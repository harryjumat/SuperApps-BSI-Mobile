LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile.qfl") 
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile - Bayar Beli.qfl")
LoadFunctionLibrary("D:\BSI\T24\BSI-T24.qfl")

LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\ReactLib.vbs")

Call Path_Folder()
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Login.tsr")
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Bayar_Beli.tsr")

Call InitiateReact_V2_1(CoverTitle, CoverSubTitle, CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Paket Data XL")

'Paket Data XL - Positive
Call react.Addtitle("BSI SuperApps - Paket Data XL - Positive")
Call Login()
Call PulsaPaketDataXL("paketdatapositive")
Call cekMutasi("Pulsa Telkomsel" , nomorFT)
Call cekJurnal("Pulsa Telkomsel", nomorFT)
Call SaveReact_Merge()	






