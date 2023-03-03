datatable.ImportSheet "D:\Mentahan\PlugIn UFT\Excel Untuk Report.xlsx",1,"Global"
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Login.tsr")
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_CardlessWithdrawal.tsr")
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile.qfl") 
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile - Cardless Withdrawal.qfl")
LoadFunctionLibrary("D:\BSI\T24\BSI-T24.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\ReactLib.vbs")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Cardless Withdrawal  - Tarik Tunai ATM", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Tarik Tunai ATM")

'Tarik Tunai ATM- Positive

Call react.Addtitle("BSI SuperApps - Tarik Tunai ATM - Positive")
Call TarikTunaiTanpaKartu("Positive", "ATM BSI")
Call SaveReact_Merge()	
