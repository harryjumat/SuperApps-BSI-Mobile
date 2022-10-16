LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile.qfl") 
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile - Bayar Beli.qfl")
LoadFunctionLibrary("D:\BSI\T24\BSI-T24.qfl")

LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\ReactLib.vbs")

Call Path_Folder()
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Login.tsr")
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Bayar_Beli.tsr")

Call InitiateReact_V2_1(CoverTitle, CoverSubTitle, CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Akademik")

'Akademik - Positive
Call react.Addtitle("BSI SuperApps - Akademik - Positive")
'Call Login()
'Call Akademik("positive")
'Call SaveReact_Merge()

		
		
		
		Call CaptureImageUFTV2(Device("Device").App("Bayar_Beli"), "Dashboard", "Berhasil masuk ke halaman dashboard", ReportStatus.Passed)
		wait 1
		Device("Device").InsightObject("InsightObject btn bayar beli").Click
		wait 5
		Call CaptureImageUFTV2(Device("Device").App("Bayar_Beli"), "Bayar & Beli", "Berhasil masuk ke halaman bayar/beli", ReportStatus.Passed)
		wait 1
		Device("Device").App("Bayar_Beli").MobileLabel("tampilkanlebihbanyak").Tap
		wait 1
		Call CaptureImageUFTV2(Device("Device").App("Bayar_Beli"), "Bayar & Beli", "Berhasil menampilkan lebih banyak menu", ReportStatus.Passed)
		wait 1
		Device("Device").InsightObject("InsightObject Bayar Beli - Akademik").Click
		Do 
		wait 1
		Loop until Device("Device").App("Dev").MobileLabel("Univ Andalas").Exist
		Call CaptureImageUFTV2(Device("Device").App("Bayar_Beli"), "List Akademik", "Berhasil menampilkan list akademik", ReportStatus.Passed)
		Device("Device").App("Dev").MobileLabel("Univ Andalas").Tap
		Do 
		wait 1
		Loop until Device("Device").App("Dev").MobileLabel("7420605239").Exist
		Call CaptureImageUFTV2(Device("Device").App("Bayar_Beli"), "LAkademik", "Berhasil menampilkan form akademik", ReportStatus.Passed)
		Device("Device").App("Dev").MobileEdit("nomor hp").Set
		'''BELUM SELESAI

		
		



