$(() => {
    $('#rozklad').accordion();
    $('#tabs-zavd').tabs();
    $("#one").draggable({
        snap: "#table",
        containment: $('#game'),
        cursor: 'move',
        revert: 'invalid'
    });
    $("#two").draggable({
        snap: "#table",
        containment: $('#game'),
        cursor: 'move',
        revert: 'invalid'
    });
    $("#three").draggable({
        snap: "#table",
        containment: $('#game'),
        cursor: 'move',
        revert: 'invalid'
    });
    $("#four").draggable({
        snap: "#table",
        containment: $('#game'),
        cursor: 'move',
        revert: 'invalid'
    });
    $("#five").draggable({
        snap: "#table",
        containment: $('#game'),
        cursor: 'move',
        revert: 'invalid'
    });
    $("#six").draggable({
        snap: "#table",
        containment: $('#game'),
        cursor: 'move',
        revert: 'invalid'
    });
    let i = [0, 0, 0];
    $("#table").droppable({
        drop: function () {
            i[0]++;
            $('#count').text(i[0]);
        },
        accept: "#one, #two, #three, #four, #five, #six",
        over: function () {
            $(this).animate({
                'border-width': '5px',
                'border-color': '#0f0',
                'background-color': '#006310'
            }, 700);
        },
        out: function () {
            $(this).animate({
                'border-width': '5px',
                'border-color': '#00658d',
                'background-color': '#002707'
            }, 700);
        }
    });
});