(function(){
	angular.module("LunchCheck",[])
    .controller("LunchCheckController",LunchCheckController);
    LunchCheckController.$inject=['$scope'];
    function LunchCheckController($scope){
    	$scope.item="";
    	$scope.message="";
        $scope.color="";
    $scope.checkItem=function(){
    	var totalItem=0;
    	totalItem=calculateItem($scope.item);
    	if($scope.item==""){
    		$scope.message="Please enter data first";
    		$scope.color="red";
    	}
    	else{
    	$scope.message=getMessage(totalItem);
        $scope.color="green";
    }
    };

    function calculateItem(string){
    	var numberOfItem=0;
    	var arrayOfItem=string.split(",");
    	numberOfItem=arrayOfItem.length;
    	return numberOfItem;
    }

    function getMessage(num){
    	if(num<=3){
    	   return "Enjoy!";
    	}
    	else{
    		return "To Much!";
    	}
    }
    }
})();