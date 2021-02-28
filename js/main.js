
// for username
// http მომხმარებლის რანდომულად აგენერირება 
$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
        var results = data["results"][0];
        showUserInfo(results);
    }
});

function showUserInfo(results) {
    var avatar = results["picture"]["medium"];
    var name = results["name"]["first"] + " " + results["name"]["last"];

    $("#user-image").attr("src", avatar);
    $("#name").text(name);
    $("#unput-email").val(results["email"]);
    $("#user-age").val(results["dob"]["age"]);
    $("#adress").val(results["location"]["street"]["name"]);
    $("#phone").val(results["phone"]);
    // console.log(results["phone"]);
    $("#input-first-name").val(results["name"]["first"]);

    if (results ["gender"] == "female"){
        $("#female").prop("checked", true);
    }
    else { 
        $("#male").prop("checked", true);
    }
}

// side-bar
if($('.toggle-nav').length > 0) {
    $(".toggle-nav").on('click',function(e){
        console.log("Hi");
        event.stopPropagation();
        $(".navigation").toggleClass("open-navigation");
    })
    $("body").on('click', function(){
        $(".navigation").removeClass("open-navigation");
    })
    $(".pa-menu").on('click',function(){
        event.stopPropagation();
    })
}

