Dim react

WScript.Echo Now()
Set react = CreateObject("Napalm.React")
WScript.Echo Now()
Call react.SetOutputDirectory("D:\")

'Napalm.React v2.0.0.3 - This Method below has been removed
'Call react.SetOutputFormat("pdf")	-	REMOVED!

Call react.SetImageSizePercentage(50)
Call react.SetAuthor("Automation Team")
Call react.SetProjectName("MCM Automation")
Call react.SetTestCaseId("1")

'Napalm.React v2.0.0.0 - New Method for creating document summary
Call react.SetCreateDocumentSummary(true)

'Napalm.React v2.0.0.2 - New Method for creating document summary
Call react.SetAutoHideWarningStatusIfEmptyInSummary(false)
Call react.SetDisplayLegendInDocumentSummary(true)

'Napalm.React v2.1.0.0 - New Method for creating cover page
Call react.About()
Call react.SetUseCover(true)
Call react.SetCoverTitle("Test Automation for " & react.ProjectName)
Call react.SetCoverSubTitle("Regression Test Report")
Call react.SetCoverLogoPath("C:\Users\Harfiyan Shia\Google Drive Office\8_TESTING COMPANY\99. Others\1_Templates\1sGS New Template 2017\Logo\1sGS - Logo Color Trans 650px.png")

'Napalm.React v2.1.0.0 - New Method for enable image resizing for Mobile Screen
Call react.SetCompatibilityMode(1)

WScript.Echo "Start SS " & Now()

Call react.AddTitle("Run Execution 1")
call react.addimage("step 1", "step 1 description", "d:\file.png")
call react.addimage("step 2", "step 2 description", "d:\file2.png")
call react.addimage("step 3", "step 3 description", "d:\file3.png")
' Call react.AddCapturedScreen("Login", "Input username password aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaInput username password aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaInput username password ")
' Call react.AddTitle("Run Execution 2")

' 'Napalm.React v2.0.0.6 - New Method for add step without image
' Call react.AddStep("Step 1", "Step 1 Description", 1)

' 'Napalm.React v2.0.0.0 - New Method for adding image with passed, failed, warning status
' Call react.AddImage("Step 1", "Step 1 Description", "D:\Untitled.png")
' Call react.AddImage("Step 2", "Step 2 Description", "D:\Untitled.png", 0)
' Call react.AddTitle("Run Execution 3")
' Call react.AddImage("Step 1", "Step 1 Description", "D:\Untitled.png")
' Call react.AddImage("Step 2", "Step 2 Description", "D:\Untitled.png", 0)
' Call react.AddImage("Step 3", "Step 3 Description", "D:\file.png", 1)
' Call react.AddCapturedScreen("Login", "Input username password aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaInput username password aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaInput username password ")
' Call react.AddCapturedScreen("Order")
' Call react.AddCapturedScreen("Logout")
' Call react.AddTitle("Run Execution 4")
' Call react.AddImage("Step 1", "Step 1 Description", "D:\file.png")
' Call react.AddImage("Step 2", "Step 2 Description", "D:\file.png", 0)
' Call react.AddImage("Step 3", "Step 3 Description", "D:\Untitled.png", 1)
' Call react.AddImage("Step 4", "Step 4 Description", "D:\file.png", 2)
' Call react.AddCapturedScreen("Login", "Input username password aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaInput username password aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaInput username password ")
' Call react.AddCapturedScreen("Order", "Input username password aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaInput username password aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaInput username password asad Input username password asadInput username password asad")
' Call react.AddTitle("Run Execution 5")
' Call react.AddImage("Step 1", "Step 1 Description", "D:\file.png")
' Call react.AddImage("Step 2", "Step 2 Description", "D:\file.png", 0)
' Call react.AddImage("Step 4", "Step 4 Description", "D:\Untitled.png", 2)
' Call react.AddCapturedScreen("Login", "Input username password aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaInput username password aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaInput username password ")
' Call react.AddTitle("Run Execution 6")
' Call react.AddImage("Step 1", "Step 1 Description", "D:\file.png")
' Call react.AddImage("Step 2", "Step 2 Description", "D:\Untitled.png", 1)
' Call react.AddCapturedScreen("Login", "Input username password aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaInput username password aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaInput username password ")
' Call react.AddTitle("Run Execution 7")
' Call react.AddImage("Step 1", "Step 1 Description", "D:\file.png")
' Call react.AddImage("Step 2", "Step 2 Description", "D:\Untitled.png", 2)
' Call react.AddCapturedScreen("Login", "Input username password aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaInput username password aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaInput username password ")
' Call react.AddTitle("Run Execution 8")
' Call react.AddImage("Step 8", "Step 8 Description", "D:\file2.png", 0)

'Napalm.React v2.0.0.8 - New Method for adding multiple image with passed, failed, warning status delimited by PIPE ("|")
Call react.AddImages("Step Extra", "D:\\Untitled.png|Image Description 1|D:\\file2.png||D:\\Untitled.png|Image Description 3|D:\\Capture.PNG|Image Description 4", 3)
WScript.Echo "End SS " & Now()
Call react.Save("Result", true)

WScript.Echo "Finish Compiling SS " & Now()