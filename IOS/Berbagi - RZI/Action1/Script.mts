﻿Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Login.tsr")
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Berbagi.tsr")
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile.qfl") 
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile - Berbagi.qfl")
LoadFunctionLibrary("D:\BSI\T24\BSI-T24.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\ReactLib.vbs")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, CoverSubTitle, CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Rumah Zakat Indonesia")

'Rumah Zakat Indonesia - Positive

Call react.Addtitle("BSI SuperApps - Rumah Zakat Indonesia - Positive")
Call RZI("positive")
'Call cekMutasi("Rumah Zakat Indonesia" , nomorFT)
'Call cekJurnal("Rumah Zakat Indonesia", nomorFT)
Call SaveReact_Merge()	
