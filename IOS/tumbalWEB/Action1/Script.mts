﻿LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile.qfl") 
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile - Bayar Beli.qfl")
LoadFunctionLibrary("D:\BSI\T24\BSI-T24.qfl")

LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl")
'LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl.lck")
LoadFunctionLibrary("D:\BSI\Napalm\libray\ReactLib.vbs")

Call Path_Folder()
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Login.tsr")
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Bayar_Beli.tsr")

Call InitiateReact_V2_1(CoverTitle, CoverSubTitle, CompanyLogo, projectName, "Automation Testing", "BSI SuperApps BPJS Kesehatan")

'BPJS Kesehatan - Positive
Call react.Addtitle("BSI SuperApps - BPJS Kesehatan - Positive")
'Call Login() 
'loginnya sudah ada di dalam fungsi
'Call BPJSKesehatan("positive")
'Call SaveReact_Merge()



Call cekMutasi("Pulsa Telkomsel" , nomorFT)
Call cekJurnal("Pulsa Telkomsel", nomorFT)
 @@ hightlight id_;_65920_;_script infofile_;_ZIP::ssf58.xml_;_
 



