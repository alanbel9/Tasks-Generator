<?php require_once("html/base_top.php"); ?>

    <!-- TASK JAVASCRIPT -->
    <script type="text/javascript" src="../assets/js/task.js"></script>

    <main role="main" class="inner cover">
        <div class="buttons-container">
            <button type="button"
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
                            <input class="form-control" type="text" placeholder="Introduzca nombre de la tarea"/>
                            <textarea class="form-control" rows="3" placeholder="Introduzca descripción"></textarea>
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
    <footer>
        <div class="text-center p-1 row">
            <div class="col-4 priority-item">
                <div class="square color-beige"></div> BAJA
            </div>
            <div class="col-4 priority-item">
                <div class="square color-yellow"></div> MEDIA
            </div>
            <div class="col-4 priority-item">
                <div class="square color-red"></div> ALTA
            </div>
        </div>
    </footer>
    <script>
        if (typeof BEL == 'object') {
            BEL.task.init();
        }
    </script>
<?php require_once("html/base_bottom.php"); ?>