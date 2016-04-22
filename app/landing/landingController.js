/**
 * http://usejsdoc.org/
 */
myapp.controller('landingController', function($scope, $location, $parse, questionFactory) {
  $scope.validationFlag = false;
  $scope.totalQuestions = 0;
  $scope.question = {};
  $scope.questions = [];

  $scope.showSubmit = true;

  function resetValidtionKeys() {
    console.log("reset");
    $scope.option1_wrong = false;
    $scope.option2_wrong = false;
    $scope.option3_wrong = false;
    $scope.option4_wrong = false;

    $scope.option1_right = false;
    $scope.option2_right = false;
    $scope.option3_right = false;
    $scope.option4_right = false;
  }

  function getQuestions() {
    questionFactory.getAllQuestions().then(function(response) {

      $scope.totalQuestions = response.data.length;
      console.log(response.data);
      $scope.questions = response.data;
      nextQuestion();
    });
  }

  function nextQuestion() {

    myIndex = getNext($scope.totalQuestions);
    console.log("Reading " + myIndex);
    $scope.question = $scope.questions[myIndex];
  }

  function getNext(max) {
    var x = Math.floor((Math.random() * max));
    return x;
  }

  function markRightAnswer(right) {
    console.log(right);
    switch (right) {
      case 'option1':
        $scope.option1_right = true;
        break;
      case 'option2':
        $scope.option2_right = true;
        break;
      case 'option3':
        $scope.option3_right = true;
        break;
      case 'option4':
        $scope.option4_right = true;
        break;
    }
  }

  function markWrongAnswer(wrong) {
    switch (wrong) {
      case 'option1':
        $scope.option1_wrong = true;
        break;
      case 'option2':
        $scope.option2_wrong = true;
        break;
      case 'option3':
        $scope.option3_wrong = true;
        break;
      case 'option4':
        $scope.option4_wrong = true;
        break;
    }
  }
  $scope.nextQuestion = function() {
    resetValidtionKeys();
    nextQuestion();
    $scope.showSubmit = true;
    $scope.userans = false;
  }
  $scope.validateAnswer = function() {
    resetValidtionKeys();
    

    qans = $scope.question.ans;
    userans = $scope.userans;
    console.log(userans);
    //  $parse(userans+'_wrong').assign($scope,true);

    console.log($scope.option2_wrong);
    if (qans === userans) {
      alert("right");
      markRightAnswer(qans);

    } else {
      markRightAnswer(qans);
      markWrongAnswer(userans);
    }
    $scope.showSubmit = false;

  }

  function init() {
    getQuestions();
    resetValidtionKeys();

  }
  init();

});