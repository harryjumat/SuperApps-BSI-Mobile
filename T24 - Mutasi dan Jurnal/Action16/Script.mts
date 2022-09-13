
REM ============== Initiated Datatable	
	dtFT		= DataTable.Value("FT", "Global")	

REM ===================== DESCRIPTION
	D_Logout		= DataTable.Value("D_LOGOUT", dtlocalsheet)

REM ====================== Procedure of Action

	If dtFT <> "" Then
		Call Path_Folder()
		Call InitiateReact_V2_1(CoverTitle, CoverSubTitle, CompanyLogo, dtTempTC, "Automation Team", dtTempTC)
		Call react.AddTitle("T24 - Logout Jurnal")
		Call Logout
		
	End If

	Call SaveReact_V1_9
REM ======================= Function 

Function Logout
	Do Until Browser("T24 - KPNO (T24iBSM)").Page("T24 - KPNO (T24iBSM)").WebElement("Sign Off").Exist(0)
	Loop 
	Browser("T24 - KPNO (T24iBSM)").Page("T24 - KPNO (T24iBSM)").WebElement("Sign Off").Click
	Call CaptureImageUFTV2(Browser("T24 - KPNO (T24iBSM)").Page("T24 - KPNO (T24iBSM)"), "Login Screen", D_Logout, ReportStatus.Passed)
	wait(1)
	Browser("T24 - KPNO (T24iBSM)").Close
End Function
