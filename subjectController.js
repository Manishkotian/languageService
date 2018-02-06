
app.controller('SubjectController',function($scope,$http,SubjectUploadService,$sce,TokenVerifierService,SwalLoadingService){

    //variable initialisation
	$scope.authToken = localStorage.getItem("app_name_token");
    $scope.features = JSON.parse(localStorage.getItem("features"));

    //language
    if(localStorage.getItem("app_name_languageDetails")){
        $scope.languageDetails = JSON.parse(localStorage.getItem("app_name_languageDetails"));
    }
    else{
        LanguageDetailsService.getLanguage().then(function success(){
            $scope.languageDetails = JSON.parse(localStorage.getItem("app_name_languageDetails"));
            viviktaDebugConsole("language received successfully");
        },function failure(){
            viviktaDebugConsole("language received failure");
        });
    }

})
