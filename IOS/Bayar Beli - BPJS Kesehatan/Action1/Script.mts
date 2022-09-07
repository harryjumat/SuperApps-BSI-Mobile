LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile.qfl") 
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile - Bayar Beli.qfl")

LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl")
'LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl.lck")
LoadFunctionLibrary("D:\BSI\Napalm\libray\ReactLib.vbs")

Call Path_Folder()
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Login.tsr")
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Bayar_Beli.tsr")

Call InitiateReact_V2_1(CoverTitle, CoverSubTitle, CompanyLogo, projectName, "Automation Testing", "BSI SuperApps BPJS Kesehatan")

'BPJS Kesehatan - Positive
Call react.Addtitle("BSI SuperApps - BPJS Kesehatan - Positive")
Call Login()
Call BPJSKesehatan("positive")
Call SaveReact_Merge()


'Function KonfirmasiPIN(byval x)
'	Device("Device").App(x).MobileLabel("1").Tap
'	Device("Device").App(x).MobileLabel("2").Tap
'	Device("Device").App(x).MobileLabel("3").Tap
'	Device("Device").App(x).MobileLabel("4").Tap
'	Device("Device").App(x).MobileLabel("5").Tap
'	Device("Device").App(x).MobileLabel("6").Tap
'End Function
'
'Call KonfirmasiPIN("Bayar_Beli")

