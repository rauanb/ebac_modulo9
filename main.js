$(document).ready(
    function(){
        $('form').on('submit', function(e) {
            e.preventDefault();

            const textoNovaTarefa = $('#texto-nova-tarefa').val();
            const novaTarefa = $('<li></li>');
            $(`
                <div>
                    <p>${textoNovaTarefa}</p>
                </div>
            `).appendTo(novaTarefa);
            $(novaTarefa).appendTo('ul');
            $(novaTarefa).fadeIn();
            $('#texto-nova-tarefa').val('');

            $(document).on('click','li', function(){  
                $(this).addClass('realizada');    
            });

            $(document).on('dblclick','li', function(){
                $(this).toggleClass('apagada').fadeOut('slow');    
            });

        })
});

