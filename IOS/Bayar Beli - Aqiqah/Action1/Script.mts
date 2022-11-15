Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Login.tsr")
Call RepositoriesCollection.Add("D:\BSI\IOS\Repository\Repository_Bayar_Beli.tsr")
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile.qfl") 
LoadFunctionLibrary("D:\BSI\IOS\BSI Mobile - Bayar Beli.qfl")
LoadFunctionLibrary("D:\BSI\T24\BSI-T24.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\GlobalFunction.qfl")
LoadFunctionLibrary("D:\BSI\Napalm\libray\ReactLib.vbs")

Function FastAqiqah(SUPPLIER,LOGO,KAMBING)
	'===================================DOMPET DHUAFA - KAMBING STANDAR========================================	
Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, CoverSubTitle, CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Aqiqah")
'Aqiqah - Positive
Call react.Addtitle("BSI SuperApps - Aqiqah - Positive")
Call Aqiqah("positive",SUPPLIER, LOGO, KAMBING, "Wanita", "Fulanah", "Aktif")
Call cekMutasi("Aqiqah" , nomorFT)
Call cekJurnal("Aqiqah", nomorFT)
Call SaveReact_Merge()

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, CoverSubTitle, CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Aqiqah")
'Aqiqah - Positive
Call react.Addtitle("BSI SuperApps - Aqiqah - Positive")
Call Aqiqah("positive",SUPPLIER, LOGO, KAMBING, "Wanita", "Fulanah", "NonAktif")
Call cekMutasi("Aqiqah" , nomorFT)
Call cekJurnal("Aqiqah", nomorFT)
Call SaveReact_Merge()

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, CoverSubTitle, CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Aqiqah")
'Aqiqah - Positive
Call react.Addtitle("BSI SuperApps - Aqiqah - Positive")
Call Aqiqah("positive",SUPPLIER, LOGO, KAMBING, "Pria", "Fulan", "Aktif")
Call cekMutasi("Aqiqah" , nomorFT)
Call cekJurnal("Aqiqah", nomorFT)
Call SaveReact_Merge()

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, CoverSubTitle, CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Aqiqah")
'Aqiqah - Positive
Call react.Addtitle("BSI SuperApps - Aqiqah - Positive")
Call Aqiqah("positive",SUPPLIER, LOGO, KAMBING, "Pria", "Fulan", "NonAktif")
Call cekMutasi("Aqiqah" , nomorFT)
Call cekJurnal("Aqiqah", nomorFT)
Call SaveReact_Merge()
End Function


Call FastAqiqah("DompetDhuafa","Logo_DompetDhuafa","Kambing")

'Call FastAqiqah("DompetDhuafa","Logo_DompetDhuafa","Hewan_DompetDhuafa_KambingStandar")
'Call FastAqiqah("DompetDhuafa","Logo_DompetDhuafa","Hewan_DompetDhuafa_KambingMedium")
'Call FastAqiqah("DompetDhuafa","Logo_DompetDhuafa","Hewan_DompetDhuafa_KambingPremium")

'Call FastAqiqah("LaznasBSMUmat","Logo_LaznasBSMUmat","Hewan_LaznasBSMUmat_KambingPlatinum")
'Call FastAqiqah("LaznasBSMUmat","Logo_LaznasBSMUmat","Hewan_LaznasBSMUmat_KambingPremium")
'Call FastAqiqah("LaznasBSMUmat","Logo_LaznasBSMUmat","Hewan_LaznasBSMUmat_HewanPotong")
'
'Call FastAqiqah("RumahZakatIndonesia","Logo_RumahZakatIndonesia","Hewan_RumahZakatIndonesia_SuperqurbanKambing")
'Call FastAqiqah("RumahZakatIndonesia","Logo_RumahZakatIndonesia","Hewan_RumahZakatIndonesia_DesakuBerqurbanKambing")
'
'Call FastAqiqah("LAZISMU","Logo_Dana","Hewan_LAZISMU_KambingSiapHaji")
'Call FastAqiqah("LAZISMU","Logo_Dana","Hewan_LAZISMU_KambingSiapSajiPake")
'Call FastAqiqah("LAZISMU","Logo_Dana","Hewan_LAZISMU_KambingDombaPalestin")
'Call FastAqiqah("LAZISMU","Logo_Dana","Hewan_LAZISMU_KambingDombaYaman")
'Call FastAqiqah("LAZISMU","Logo_Dana","Hewan_LAZISMU_KambingDombaSudan")
'
'Call FastAqiqah("LaznasDewanDakwah","Logo_Dana","Hewan_LaznasDewanDakwah_KambingSpesialHemat")
'Call FastAqiqah("LaznasDewanDakwah","Logo_Dana","Hewan_LaznasDewanDakwah_KambingPremiumPelosok")
'Call FastAqiqah("LaznasDewanDakwah","Logo_Dana","Hewan_LaznasDewanDakwah_DombaChadAfrika")
'Call FastAqiqah("LaznasDewanDakwah","Logo_Dana","Hewan_LaznasDewanDakwah_KambingIstimewaPeloso")
'
'Call FastAqiqah("LaznasPPPA","Logo_Dana","Hewan_LaznasPPPA_DombaReguler")
'Call FastAqiqah("LaznasPPPA","Logo_Dana","Hewan_LaznasPPPA_DombaIstimewa")
'
'Call FastAqiqah("YatimMandiri","Logo_Dana","Hewan_YatimMandiri_KambingStandar")
'Call FastAqiqah("YatimMandiri","Logo_Dana","Hewan_YatimMandiri_KambingPremium")
'
'Call FastAqiqah("SinergiFoundation","Logo_Dana","Hewan_SinergiFoundation_KambingStandar")
'Call FastAqiqah("SinergiFoundation","Logo_Dana","Hewan_SinergiFoundation_KambingPremium")
'
'Call FastAqiqah("HumanInitiative","Logo_Dana","Hewan_HumanInitiative_KambingStandar")
'Call FastAqiqah("HumanInitiative","Logo_Dana","Hewan_HumanInitiative_KambingPremium")
'
'Call FastAqiqah("BAZNAS","Logo_Dana","Hewan_BAZNAS_Kambing")

