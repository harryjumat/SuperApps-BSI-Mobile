
REM ============== Initiated Datatable
	Mutasi		= DataTable("COMMAND_VALUE", dtlocalsheet)
	Rekening	= DataTable("NO_REKENING", dtlocalsheet)
	Tgl_trx		= DataTable("TANGGAL_TRANSAKSI", dtlocalsheet)
	dtFT		= DataTable.Value("FT", "Global")	

REM ===================== DESCRIPTION
	D_CommandValue		= DataTable.Value("D_COMMANDVALUE", dtlocalsheet)
	D_InfoLayar		 	= DataTable.Value("D_INFOLAYAR", dtlocalsheet)
	D_InqRek			= DataTable.Value("D_INQREK", dtlocalsheet)
	D_InqRekKoran		= DataTable.Value("D_INQREKKORAN", dtlocalsheet)
	D_Input				= DataTable.Value("D_INPUT", dtlocalsheet)
	D_MutasiRek			= DataTable.Value("D_MUTASIREK", dtlocalsheet)
	D_Detil				= DataTable.Value("D_DETIL", dtlocalsheet)

REM ====================== Procedure of Action
	
	If dtFT <> "" Then
		
		If react is Nothing then 
		 	Call Path_Folder()
			Call InitiateReact_V2_1(CoverTitle, CoverSubTitle, CompanyLogo, dtTempTC, "Automation Team", dtTempTC)
			Call react.AddTitle("T24 - Mutasi Rekening")
		Else 
			Call react.AddTitle("T24 - Mutasi Rekening")
		End If
		
		Call Mutasi_Rekening
	
	End If
		
REM ======================= Function 

Function Mutasi_Rekening

	Do
	Loop Until Browser("T24 Sign in").Page("T24 Sign in").WebElement("Sign Off").Exist(0)
	Browser("T24 Sign in").Page("T24 Sign in").WebEdit("commandValue").Set Mutasi
	Call CaptureImageUFTV2(Browser("T24 Sign in").Page("T24 Sign in"), "Main Screen", D_CommandValue, ReportStatus.Passed)
	Browser("T24 Sign in").InsightObject("CommandButton").Highlight
	Browser("T24 Sign in").InsightObject("CommandButton").Click

	wait 3
	
	Browser("Temenos T24").Maximize 'maximize browser
	wait(1)
	
	Call CaptureImageUFTV2(Browser("Temenos T24").Page("Temenos T24"), "Menu Informasi Layar", D_InfoLayar, ReportStatus.Passed)
	Browser("Temenos T24").Page("Temenos T24").WebElement("INFORMASI LAYAR").Click
	wait(1)
	
	Call CaptureImageUFTV2(Browser("Temenos T24").Page("Temenos T24"), "Menu Inquiry Rekening", D_InqRek, ReportStatus.Passed)
	Browser("Temenos T24").Page("Temenos T24").WebElement("Inquiry Rekening").Click
	wait(1)
	
	Call CaptureImageUFTV2(Browser("Temenos T24").Page("Temenos T24"), "Menu Inquiry Rekening Koran Giro/Tabungan", D_InqRekKoran, ReportStatus.Passed)
	Browser("Temenos T24").Page("Temenos T24").Link("Inquiry Rekening Koran").Click

	Do
	Loop Until Browser("Rekening Koran").Page("Rekening Koran").WebElement("Find").Exist(0)
	Browser("Rekening Koran").Maximize 'maximize browser
	
	Browser("Rekening Koran").Page("Rekening Koran").WebEdit("NO REKENING").Set Rekening
	Browser("Rekening Koran").Page("Rekening Koran").WebEdit("TANGGAL MUTASI").Set Tgl_trx
	Call CaptureImageUFTV2(Browser("Rekening Koran").Page("Rekening Koran"), "Mutasi Rekening - Input", D_Input, ReportStatus.Passed)
	Browser("Rekening Koran").Page("Rekening Koran").WebElement("Find").Click
	
	Do
	Loop Until Browser("Rekening Koran").Page("Rekening Koran").WebElement("enquiryDataScroller").Exist(0)
'	cek kondisi lastpage - done
	If Browser("Rekening Koran").Page("Rekening Koran").Image("Last Page").Exist Then
		Browser("Rekening Koran").Page("Rekening Koran").Image("Last Page").Click
	End If
	
	Do
	Loop Until Browser("Rekening Koran").Page("Rekening Koran").WebElement("SALDO AKHIR").Exist(0)
	checknext = Browser("Rekening Koran").Page("Rekening Koran").WebTable("list_transaksi").GetCellData(1,3)
	If checknext = "" Then
		Browser("Rekening Koran").Page("Rekening Koran").Image("Previous Page").Click
	End If
	
	listRow = Browser("Rekening Koran").Page("Rekening Koran").WebTable("list_transaksi").RowCount
	For iCheck = 1 To listRow Step 1
		check_FT = Browser("Rekening Koran").Page("Rekening Koran").WebTable("list_transaksi").GetCellData(iCheck,3)
		If dtFT = check_FT Then
'			cek kondisi lastpage (di highlight) - done
			If Browser("Rekening Koran").Page("Rekening Koran").Image("Last Page").Exist Then
				Browser("Rekening Koran").Page("Rekening Koran").Image("Last Page").Highlight
			End If
			Call CaptureImageUFTV2(Browser("Rekening Koran").Page("Rekening Koran"), "Inquiry Mutasi Rekening", D_MutasiRek, ReportStatus.Passed)
			Browser("Rekening Koran").Page("Rekening Koran").WebTable("list_transaksi").ChildItem(iCheck, 8, "Image", 0).Click
			Call OpenJurnal(Browser("Rekening Koran").Page("Rekening Koran"), "Inquiry Mutasi Rekening - Detail", ReportStatus.Passed)
			Browser("Rekening Koran").Page("Rekening Koran").Link("Rekening Koran").Highlight
			Browser("Rekening Koran").Page("Rekening Koran").Link("Rekening Koran").Click
			Do
			Loop Until Browser("Rekening Koran").Page("Rekening Koran").WebElement("enquiryDataScroller").Exist(0)
			If checknext = "" Then
				Browser("Rekening Koran").Page("Rekening Koran").Image("Last Page").Click
				Do
				Loop Until Browser("Rekening Koran").Page("Rekening Koran").WebElement("SALDO AKHIR").Exist(0)
				Call CaptureImageUFTV2(Browser("Rekening Koran").Page("Rekening Koran"), "Mutasi Rekening - Detail", D_MutasiRek, ReportStatus.Passed)
			End If
			Exit for
		End If
	Next
	
	Browser("Rekening Koran").Close
	Browser("Temenos T24").Close

End Function

Function OpenJurnal(byval page, imageTitle, varStatus)
	
	Call Add_ImageUFT(page, D_Detil)
	Browser("Rekening Koran").Page("Rekening Koran").Link("Tot Rec Chg Lcl").Highlight

'	Browser("Rekening Koran").Page("Rekening Koran").Link("At Chg Code").Highlight
'	Call Add_ImageUFT(page, D_Detil)
'	Browser("Rekening Koran").Page("Rekening Koran").Link("Stmt Nos.1").Highlight
	Call Add_ImageUFT(page, D_Detil)
	wait 1
	Call Get_All_Images(imageTitle, varStatus)
	
End Function
