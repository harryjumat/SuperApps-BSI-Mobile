Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Login.tsr")
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_CardlessWithdrawal.tsr")

LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile.qfl") 
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile - Cardless Withdrawal.qfl")
LoadFunctionLibrary("D:\BSI\T24\BSI-T24.qfl")

LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\ReactLib.vbs")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, CoverSubTitle, CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Riwayat Token")
'Riwayat & Hapus Token - Positive
Call react.Addtitle("BSI SuperApps - Riwayat & Hapus Token - Positive")
Call RiwayatHapusToken("positive")
'Call cekMutasi("Riwayat & Hapus Token" , nomorFT)
'Call cekJurnal("Riwayat & Hapus Token", nomorFT)
Call SaveReact_Merge()
