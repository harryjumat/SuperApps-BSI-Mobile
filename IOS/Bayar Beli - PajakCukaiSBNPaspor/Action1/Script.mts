Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Login.tsr")
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Bayar_Beli.tsr")

LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile.qfl") 
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile - Bayar Beli.qfl")
LoadFunctionLibrary("D:\BSI\T24\BSI-T24.qfl")

LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\ReactLib.vbs")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, CoverSubTitle, CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Pajak/Cukai/SBN/Paspor")
'Pajak/Cukai/SBN/Paspor - Positive
Call react.Addtitle("BSI SuperApps - Pajak/Cukai/SBN/Paspor - Positive")
Call PajakCukaiSBNPaspor("positive")
'Call cekMutasi("Pajak/Cukai/SBN/Paspor" , nomorFT)
'Call cekJurnal("Pajak/Cukai/SBN/Paspor", nomorFT)
Call SaveReact_Merge()	
