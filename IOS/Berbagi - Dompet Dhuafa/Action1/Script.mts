﻿datatable.ImportSheet "D:\Mentahan\PlugIn UFT\Excel Untuk Report.xlsx",1,"Global"
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Login.tsr")
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Berbagi.tsr")
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Bayar_Beli.tsr")
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile.qfl") 
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile - Berbagi.qfl")
LoadFunctionLibrary("D:\BSI\T24\BSI-T24.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\ReactLib.vbs")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Berbagi - Dompet Dhuafa", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Dompet Dhuafa")

'Dompet Dhuafa - Positive

Call react.Addtitle("BSI SuperApps - Dompet Dhuafa - Positive")
Call Dompetdhuafa("positive")
Call cekMutasi("Dompet Dhuafa" , nomorFT)
Call cekJurnal("Dompet Dhuafa", nomorFT)
Call SaveReact_Merge()	
