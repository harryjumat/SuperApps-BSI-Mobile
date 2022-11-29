Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Login.tsr")
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Bayar_Beli.tsr")
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Profile.tsr")
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Card_Management.tsr")
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile.qfl") 
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile - Bayar Beli.qfl")
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile - Card Management.qfl")
LoadFunctionLibrary("D:\BSI\T24\BSI-T24.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\ReactLib.vbs")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, CoverSubTitle, CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Paket Data XL")

'Paket Data XL - Positive
Call react.Addtitle("BSI SuperApps - Paket Data XL - Positive")
Device("Device").App("Login").MobileLabel("Detail Alamat (No.rumah/").Set "Jalan Bonge Raya"
'Call SaveReact_Merge()	
