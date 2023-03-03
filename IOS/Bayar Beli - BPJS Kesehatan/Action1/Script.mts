datatable.ImportSheet "D:\Mentahan\PlugIn UFT\Excel Untuk Report.xlsx",1,"Global"
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Login.tsr")
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Bayar_Beli.tsr")
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile.qfl") 
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile - Bayar Beli.qfl")
LoadFunctionLibrary("D:\BSI\T24\BSI-T24.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\ReactLib.vbs")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar/Beli - BPJS Kesehatan", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps BPJS Kesehatan")

'BPJS Kesehatan - Positive

Call react.Addtitle("BSI SuperApps - BPJS Kesehatan - Positive")
Call BPJS("Positive", "BPJS Kesehatan", "...") 'BILLER
Call SaveReact_Merge()	
