LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile.qfl") 
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile - Bayar Beli.qfl")

LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl")
'LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl.lck")
LoadFunctionLibrary("D:\BSI\Napalm\libray\ReactLib.vbs")

Call Path_Folder()
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Login.tsr")
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Bayar_Beli.tsr")

Call InitiateReact_V2_1(CoverTitle, CoverSubTitle, CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Pulsa & Paket Data Telkomsel")

'Pulsa & Paket Data Telkomsel - Positive
Call react.Addtitle("BSI SuperApps - Paket Data Telkomsel - Negative")
'Call Login()
'Call PulsaPaketDataTelkomsel("pulsapositive")
'Call Login()
'Call PulsaPaketDataTelkomsel("paketdatanegative")
'Call SaveReact_Merge()			

'		Dim bulan
'		bulan = Array(01, 02, 03, 06, 12)
'		Device("Device").App("Dev").MobileDropDown("MobileDropDown Jumlah Bulan").Select bulan(2),0

		x = 3
		If x > 1 Then
			
			For k = 1 To x Step 1
				Device("Device").App("Dev").MobileDropDown("MobileDropDown Jumlah Bulan").Select "12",0
			Next
		End If
		wait 1
		Device("Device").App("Bayar_Beli").MobileButton("btn_pilih").Tap

