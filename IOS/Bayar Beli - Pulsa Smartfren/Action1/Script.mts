LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile.qfl") 
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile - Bayar Beli.qfl")
LoadFunctionLibrary("D:\BSI\T24\BSI-T24.qfl")
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Login.tsr")
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Bayar_Beli.tsr")

LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\ReactLib.vbs")

Call Path_Folder()

Call InitiateReact_V2_1(CoverTitle, CoverSubTitle, CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Pulsa Smartfren")

'Pulsa Smartfren - Positive | masih error setelah input nomor telp terjadi blank

Call react.Addtitle("BSI SuperApps - Pulsa Smartfren - Positive")
Call PulsaSmartfren("positive")
'Call cekMutasi("Pulsa Smartfren" , nomorFT)
'Call cekJurnal("Pulsa Smartfren", nomorFT)
Call SaveReact_Merge()	
