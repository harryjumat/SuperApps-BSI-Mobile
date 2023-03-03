datatable.ImportSheet "D:\Mentahan\PlugIn UFT\Excel Untuk Report.xlsx",1,"Global"
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Login.tsr")
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Bayar_Beli.tsr")
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile.qfl") 
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile - Bayar Beli.qfl")
LoadFunctionLibrary("D:\BSI\T24\BSI-T24.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\ReactLib.vbs")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar/Beli - BPJS Ketenagakerjaan BPU", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps BPJS Ketenagakerjaan BPU")

'BPJS Ketenagakerjaan BPU - Positive

Call react.Addtitle("BSI SuperApps - BPJS Ketenagakerjaan BPU - Positive")
Call BPJS("Positive", "BPJS Ketenagakerjaan BPU", "3671081211770004") 'BILLER
Call SaveReact_Merge()	
