datatable.ImportSheet "D:\Mentahan\PlugIn UFT\Excel Untuk Report.xlsx",1,"Global"
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Login.tsr")
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_CardlessWithdrawal.tsr")
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile.qfl") 
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile - Cardless Withdrawal.qfl")
LoadFunctionLibrary("D:\BSI\T24\BSI-T24.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\ReactLib.vbs")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Cardless Withdrawal  - Tarik Tunai Gerai Indomaret", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Tarik Tunai Gerai Indomaret")

'Tarik Tunai Gerai Indomaret- Positive

Call react.Addtitle("BSI SuperApps - Tarik Tunai Gerai Indomaret - Positive")
Call TarikTunaiTanpaKartu("Positive", "Gerai Indomaret")
Call SaveReact_Merge()	
