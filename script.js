// Función para abrir la ventana modal con la información del proyecto seleccionado
function openModal(title, description, imageSrc) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('projectModal').style.display = 'flex';
}

// Función para cerrar la ventana modal
function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}

// Cerrar el modal al hacer clic fuera del contenido principal
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeModal();
    }
};