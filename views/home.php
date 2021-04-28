<?php require_once("html/base_top.php"); ?>

    <!-- TASK JAVASCRIPT -->
    <script type="text/javascript" src="../assets/js/task.js"></script>

    <main role="main" class="inner cover">
        <div class="buttons-container">
            <button id="new-task"
                    type="button"
                    class="btn btn-primary btn-lg btn-block"
                    onclick="BEL.task.addTask()">
                Nueva tarea
            </button>
        </div>
        <div class="tasks-container">
            <div class="list-wrapper">
                <ul id="todo-list" class="d-flex flex-column-reverse">
                 <!--   <li class="row">
                        <div class="col-2 checkbox-container">
                            <input class="checkbox tick" type="checkbox"/>
                            <input class="checkbox priority low" type="checkbox" data-priority="0"/>
                        </div>
                        <div class="col-8 inputs-container">
                            <input class="form-control" type="text" placeholder="Nombre de la tarea"/>
                            <textarea class="form-control" rows="3" placeholder="Descripción"></textarea>
                        </div>
                        <div class="col-2 icon-close-container">
                            <i class="material-icons close-icon" style="font-size:30px;">close</i>
                        </div>
                    </li>
                    -->
                </ul>
            </div>
        </div>
    </main>
    <script>
        if (typeof BEL == 'object') {
            BEL.task.init();
        }
    </script>
<?php require_once("html/base_bottom.php"); ?>