if (typeof BEL !== 'object') {
    var BEL = {}
}

BEL.task = {
    todo_list_id: '#todo-list',

    /**
     * Initialize events
     */
    init: function () {
        /** REMOVE TASK FROM LIST */
        jQuery(document).on('click', '#todo-list .close-icon', function(event){
            this.closest('li').remove();
            console.log('Task removed from list.');
        });

         /** CLICK ON TASK CHECKBOXES */
         jQuery(document).on('click', '#todo-list .checkbox-container input', function(event){
            var item = jQuery(this.closest('li')).find('.inputs-container')[0];
            if (item) {
                jQuery(item).toggleClass('checked');
            }
        });

        jQuery(this.todo_list_id).sortable();
        jQuery(this.todo_list_id).disableSelection();
    },

    /**
     * ADD NEW TASK
     */
    addTask: function () {
        var list = jQuery(this.todo_list_id);

        if (list) {
            list.append('<li><div class="checkbox-container"><input class="checkbox" type="checkbox" /></div><div class="inputs-container"><input class="form-control" type="text" placeholder="Introduzca nombre de la tarea"/><textarea class="form-control" id="exampleFormControlTextarea1" rows="3"  placeholder="Introduzca descripción"></textarea></div><div class="icon-close-container"><i class="material-icons close-icon" style="font-size:30px;">close</i></div></li>');
            console.log('Task appended to list.');
        }
    }
};