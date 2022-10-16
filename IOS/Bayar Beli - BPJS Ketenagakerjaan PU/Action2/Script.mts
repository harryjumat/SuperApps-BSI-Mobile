LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile.qfl") 
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile - Bayar Beli.qfl")
DataTable.Import("D:\Mentahan\PlugIn UFT\Excel Untuk Report.xlsx")

LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\ReactLib.vbs")

Call Path_Folder()
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Login.tsr")
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Bayar_Beli.tsr")

Call InitiateReact_V2_1(CoverTitle, CoverSubTitle, CompanyLogo, projectName, "Automation Testing", "BSI SuperApps BPJS Ketenagakerjaan PU")

'BPJS Ketenagakerjaan PU - Negative
Call react.Addtitle("BSI SuperApps - BPJS Ketenagakerjaan PU - Negative")
Call Login()
Call BPJSKesehatanPU("negative")
Call SaveReact_Merge()




