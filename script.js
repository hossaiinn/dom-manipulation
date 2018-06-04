/* Task 1 */
    

/* Task 2 using plain JavaScript */



/* Task 4 using jQuery */
    //4A
    $("#btn").click(function(event) {
        var para = $('<p>').text("Hello World");
        $('#task4a').append(para);
    })
    
    
    // 4C
    $("#btn-add").click(function(event) {
        var numOne = $("#numOne").val();
        var numTwo = $("#numTwo").val();
        
        var result = Number(numOne) + Number(numTwo);
        
        $("#result").append(result);
    })