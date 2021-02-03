$(function () {
    $('body').append('<div></div>')
    $('div').append('<ul></ul>')
    let colors = [ 
        '#ff0000', '#00ff00', '#0000ff', 
        '#ff3333', '#ffff00', '#ff6600' 
    ];
    $('#btnSubmit').click(function () {
        
        var txt = $("#input").val();
        if (txt === "") {

        } else { 
            let li = $('<li></li>')
            $('ul').append(li)
            li.text(txt)
            $(li).click(function () {
                let randomnumber = Math.floor(Math.random() * colors.length)
                $(li).css("color", colors[randomnumber]);
            });
            $(li).dblclick(function () {
                $(li).remove()
            });
        }
    });
    
    
    // $('#body').append('<div></div>')
    // $('div').append('<h2></h2>')
    // $('#btnSubmit').click(function () {
    //     var txt = $("#input").val();
    //     if (txt === "") {

    //     } else { $('h2').text(txt); }


    // })

});