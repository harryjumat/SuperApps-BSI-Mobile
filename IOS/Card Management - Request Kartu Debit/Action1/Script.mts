datatable.ImportSheet "D:\Mentahan\PlugIn UFT\Excel Untuk Report.xlsx",1,"Global"
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Login.tsr")
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Card_Management.tsr")
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile.qfl") 
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile - Card Management.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\ReactLib.vbs")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Card Management - Request Kartu Debit", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Request Kartu Debit")

'Request Kartu Debit
Call react.Addtitle("BSI SuperApps - Request Kartu Debit")
Call RequestKartuDebit("Debit","alamat_domisili")

'Call RequestKartuDebit("Debit","alamat_baru")
Call SaveReact_Merge()
