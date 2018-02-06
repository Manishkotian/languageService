app
.factory('LanguageDetailsService', ['$http','$q','TokenVerifierService','SwalLoadingService','$rootScope', function ($http,$q,TokenVerifierService,SwalLoadingService,$rootScope) {
	var languageDetailsService = {};
	languageDetailsService.getLanguage = function(){
		var loadingMessage = "Loading Please Wait...";
        SwalLoadingService.showLoading(loadingMessage);
        viviktaDebugConsole("inside languageLoadService -- >");
        var deferred = $q.defer();
        return $http({
            method : "GET",
            url : BASE_URL+LANGUAGE_DETAILS_URL,
            params : {
                token : localStorage.getItem("app_name_token"),
                loginId : localStorage.getItem("app_name_loginId")
            }
        }).then(function success(response){
        	viviktaDebugConsole(JSON.stringify(response));
        	if(response.data.errorCode == LANGUAGE_DETAILS_SUCCESS_CODE && response.data.statusText == SUCCESS_STATUS_TEXT){
                SwalLoadingService.stopLoading();
                //$rootScope.languageDetails = response.data.data;
                localStorage.setItem("app_name_languageDetails",JSON.stringify(response.data.data));
                deferred.resolve();
                return deferred.promise;
            }
            else{
            	SwalLoadingService.stopLoading();
            	deferred.reject();
            	return deferred.promise;
            }
		},function failure(){
            SwalLoadingService.stopLoading();
            deferred.reject();
            return deferred.promise;
        })
	}
	return languageDetailsService;
}])
