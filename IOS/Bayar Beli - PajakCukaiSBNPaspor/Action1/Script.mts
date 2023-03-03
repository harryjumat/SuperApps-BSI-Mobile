datatable.ImportSheet "D:\Mentahan\PlugIn UFT\Excel Untuk Report.xlsx",1,"Global"
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Login.tsr")
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Bayar_Beli.tsr")
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile.qfl") 
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile - Bayar Beli.qfl")
LoadFunctionLibrary("D:\BSI\T24\BSI-T24.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\ReactLib.vbs")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar/Beli - MPN Pajak/Cukai/SBN/Paspor", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps MPN Pajak/Cukai/SBN/Paspor")

'MPN Pajak/Cukai/SBN/Paspor - Positive

Call react.Addtitle("BSI SuperApps - MPN Pajak/Cukai/SBN/Paspor - Positive")
Call MPN("Positive","PajakCukai","...")
Call SaveReact_Merge()
