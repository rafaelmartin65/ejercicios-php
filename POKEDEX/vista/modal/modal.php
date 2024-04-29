<link rel="stylesheet" href="../modal/modal.css">

<div id="miModal" class="modal">
    <div class="flex" id="flex">
        <div class="contenido-modal">
            <div class="modal-header flex">
                <h2>Atención: Proceso de eliminación</h2>
                <span class="close" id="close" onclick="borrarModal()">&times;</span>
            </div>
            <div class="modal-body flex">
                <p>Se va a eliminar el registro : <span id="spanCodigo"></span></p>
            </div>
            <div class="modal-footer flex">
                <div id="botones-footer">
                    <input class="modal-button" type="button" value="Aceptar" onclick="procesarBaja(document.getElementById('spanCodigo').innerText)">
                    <input class="modal-button" type="button" value="Cancelar" onclick="borrarModal()">
                </div>
                <span id="respuestaBaja"></span>
            </div>
        </div>
    </div>
</div>