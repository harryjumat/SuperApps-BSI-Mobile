
REM ============== Initiated Datatable
	checkJurnal	= DataTable("COMMAND_VALUE", dtlocalsheet)
	dtFT		= DataTable.Value("FT", "Global")	

REM ===================== DESCRIPTION
	D_CommandValue		= DataTable.Value("D_COMMANDVALUE", dtlocalsheet)
	D_Input			 	= DataTable.Value("D_INPUTFT", dtlocalsheet)
	D_InqRek			= DataTable.Value("D_INQTRX", dtlocalsheet)
	D_Debet				= DataTable.Value("D_DEBET", dtlocalsheet)

REM ====================== Procedure of Action

	If dtFT <> "" Then
		
		If react is Nothing then 
		 	Call Path_Folder()
			Call InitiateReact_V2_1(CoverTitle, CoverSubTitle, CompanyLogo, dtTempTC, "Automation Team", dtTempTC)
			Call react.AddTitle("T24 - Check Jurnal")
		Else 
			Call react.AddTitle("T24 - Check Jurnal")
		End If
		
		Call Jurnal
		
	End If
	

REM ======================= Function 

Function Jurnal

	Do
	Loop Until Browser("T24 Sign in").Page("T24 Sign in").WebElement("Sign Off").Exist(0)
	Browser("T24 Sign in").Page("T24 Sign in").WebEdit("commandValue").Set checkJurnal
	Call CaptureImageUFTV2(Browser("T24 Sign in").Page("T24 Sign in"), "Main Screen", D_CommandValue, ReportStatus.Passed)
	Browser("T24 Sign in").InsightObject("CommandButton").Highlight
	Browser("T24 Sign in").InsightObject("CommandButton").Click

	wait 3
	Browser("IDI.TXN.ENTRY").Maximize 'maximize browser
	
	Browser("IDI.TXN.ENTRY").Page("IDI.TXN.ENTRY").WebEdit("FT").Set dtFT
	Call CaptureImageUFTV2(Browser("IDI.TXN.ENTRY").Page("IDI.TXN.ENTRY"), "Input Nomor Transaksi", D_Input, ReportStatus.Passed)
	Browser("IDI.TXN.ENTRY").Page("IDI.TXN.ENTRY").WebElement("Find").Click
	wait(1)
	Call CaptureImageUFTV2(Browser("IDI.TXN.ENTRY").Page("IDI.TXN.ENTRY"), "Inquiry transaksi berdasarkan Nomor Transaksi", D_InqRek, ReportStatus.Passed)

	cJurnal = Browser("IDI.TXN.ENTRY").Page("IDI.TXN.ENTRY").WebTable("Jurnal").RowCount
	For iJurnal = 1 To cJurnal Step 1
		Browser("IDI.TXN.ENTRY").Page("IDI.TXN.ENTRY").WebTable("Jurnal").ChildItem(iJurnal, 13, "Image", 0).Click
		Do
		Loop until Browser("IDI.TXN.ENTRY").Page("IDI.TXN.ENTRY").WebElement("IDI.TXN.ENTRY").Exist(0)
		Call OpenJurnal(Browser("IDI.TXN.ENTRY").Page("IDI.TXN.ENTRY"), "Inquiry Detil - " &iJurnal, ReportStatus.Passed, iJurnal)
		Browser("IDI.TXN.ENTRY").Page("IDI.TXN.ENTRY").WebElement("IDI.TXN.ENTRY").Click
	Next
	
	Browser("IDI.TXN.ENTRY").Close
	
End Function

Function OpenJurnal(byval page, imageTitle, varStatus, eJurnal)
	
	Call Add_ImageUFT(page, D_Debet &" - "& eJurnal)
'	cek kondisi untuk scroll
	Browser("IDI.TXN.ENTRY").Page("IDI.TXN.ENTRY").Link("Orig Ccy Market").Highlight
	Call Add_ImageUFT(page, D_Debet &" - "& eJurnal)
	wait 1
	Call Get_All_Images(imageTitle, varStatus)
	
End Function
