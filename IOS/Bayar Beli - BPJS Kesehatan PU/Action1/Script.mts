LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile.qfl") 
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile - Bayar Beli.qfl")
LoadFunctionLibrary("D:\BSI\T24\BSI-T24.qfl")

LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\ReactLib.vbs")

Call Path_Folder()
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Login.tsr")
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Bayar_Beli.tsr")

Call InitiateReact_V2_1(CoverTitle, CoverSubTitle, CompanyLogo, projectName, "Automation Testing", "BSI SuperApps BPJS Kesehatan PU")

'BPJS Kesehatan PU - Positive
Call react.Addtitle("BSI SuperApps - BPJS Kesehatan PU - Positive")
Call Login()
Call BPJSKesehatanPU("positive")
'Call cekMutasi("BPJS Kesehatan PU" , nomorFT)
'Call cekJurnal("BPJS Kesehatan PU", nomorFT)
Call SaveReact_Merge()




