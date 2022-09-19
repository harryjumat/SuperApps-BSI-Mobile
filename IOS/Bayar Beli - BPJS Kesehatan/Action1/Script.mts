LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile.qfl") 
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
'loginnya sudah ada di dalam fungsi
'Call BPJSKesehatan("positive01")
'Call BPJSKesehatan("positive02")
'Call BPJSKesehatan("positive03")
'Call BPJSKesehatan("positive06")
Call BPJSKesehatan("positive12")
Call SaveReact_Merge()
