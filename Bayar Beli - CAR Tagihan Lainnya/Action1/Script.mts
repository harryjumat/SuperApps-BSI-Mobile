LoadFunctionLibrary("D:\BSI\BSI Mobile.qfl")
LoadFunctionLibrary("D:\BSI\BSI Mobile - Profile.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl")
'LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl.lck")
LoadFunctionLibrary("D:\BSI\Napalm\libray\ReactLib.vbs")

Call Path_Folder()
Call RepositoriesCollection.Add("D:\BSI\Repository\Repository_Login.tsr")
Call RepositoriesCollection.Add("D:\BSI\Repository\Repository_Bayar_Beli.tsr")

Call InitiateReact_V2_1(CoverTitle, CoverSubTitle, CompanyLogo, projectName, "Automation Testing", "BSI SuperApps CAR Tagihan Lainnya")

'MENGUBAH EMAIL -  NEGATIVE
Call react.Addtitle("BSI SuperApps - CAR Tagihan Lainnya - Positive")
Call Login()
Call CARTransaksiLainnya("Positive")
Call SaveReact_Merge()

		



