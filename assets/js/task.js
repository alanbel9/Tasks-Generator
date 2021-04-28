if (typeof BEL !== 'object') {
    var BEL = {}
}

BEL.task = {
    todo_list_id: '#todo-list',
    priority_clases: ['low', 'medium', 'high'],

    /**
     * Initialize events
     */
    init: function () {
        var self = this;

        /** REMOVE TASK FROM LIST */
        jQuery(document).on('click', '#todo-list .close-icon', function(event){
            this.closest('li').remove();
            console.log('Task removed from list.');
        });

         /** CLICK ON TASK CHECKBOXES */
        jQuery(document).on('click', '#todo-list .checkbox-container input.tick', function(event){
            var item = jQuery(this.closest('li')).find('.inputs-container')[0];
            if (item) {
                jQuery(item).toggleClass('checked');
            }
        });

        jQuery(document).on('click', '#todo-list .checkbox-container input.priority', function(event) {
            var checkboxItem = this;
            var currentPriority = checkboxItem.dataset.priority;
            var resultPriority = currentPriority;
            var className = '';

            switch (currentPriority) {
                case '0':
                    resultPriority ++;
                    break;
                case '1':
                    resultPriority ++;
                    break;
                case '2':
                    resultPriority = 0;
                    break;
            }

            this.dataset.priority = resultPriority;

            // Remove all classes
            BEL.task.priority_clases.forEach(function (item , index) {
                jQuery(event.target).removeClass(item);
            });

            // Add new class name
            jQuery(this).addClass(BEL.task.priority_clases[resultPriority]);
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