
REM ============== Initiated Datatable
	URL			= DataTable("URL", dtlocalsheet)
	U_nama		= DataTable("USERNAME", dtlocalsheet)
	Password	= DataTable("PASSWORD", dtlocalsheet)	
	dtFT		= DataTable.Value("FT", "Global")	

REM ===================== DESCRIPTION
	D_LoginScreen		= DataTable.Value("D_LOGIN", dtlocalsheet)

REM ====================== Procedure of Action

	If dtFT <> "" Then
		Call Path_Folder()
		Call InitiateReact_V2_1(CoverTitle, CoverSubTitle, CompanyLogo, dtTempTC, "Automation Team", dtTempTC)
		Call react.AddTitle("T24 - Login Mutasi")
		Call OpenBrowser("Chrome.exe", URL)
		Call Login
		
	End If

REM ======================= Function 

Function Login
	Do
	Loop Until Browser("T24 Sign in").Page("T24 Sign in").WebButton("Sign in").Exist(0)
	Browser("T24 Sign in").Page("T24 Sign in").WebEdit("signOnName").Set U_nama
	Browser("T24 Sign in").Page("T24 Sign in").WebEdit("password").Set Password
	Call CaptureImageUFTV2(Browser("T24 Sign in").Page("T24 Sign in"), "Login Screen", D_LoginScreen, ReportStatus.Passed)
	Browser("T24 Sign in").Page("T24 Sign in").WebButton("Sign in").Click
End Function
