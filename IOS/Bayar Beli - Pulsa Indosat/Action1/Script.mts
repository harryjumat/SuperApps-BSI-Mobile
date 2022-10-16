﻿LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile.qfl") 
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile - Bayar Beli.qfl")
LoadFunctionLibrary("D:\BSI\T24\BSI-T24.qfl")

LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\ReactLib.vbs")

Call Path_Folder()
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Login.tsr")
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Bayar_Beli.tsr")

Call InitiateReact_V2_1(CoverTitle, CoverSubTitle, CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Pulsa Indosat")

'Pulsa Indosat - Positive

Call react.Addtitle("BSI SuperApps - Pulsa Indosat - Positive")
Call Login()
Call PulsaPaketDataIndosat("pulsapositive")
'Call cekMutasi("Pulsa Indosat" , nomorFT)
'Call cekJurnal("Pulsa Indosat", nomorFT)
Call SaveReact_Merge()	
