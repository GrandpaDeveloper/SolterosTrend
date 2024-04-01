document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los botones de opciones de votación
    const votingOptions = document.querySelectorAll('.voting-option');

    // Itera sobre cada botón de opción de votación
    votingOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Oculta el tilde de todas las opciones
            votingOptions.forEach(opt => opt.querySelector('svg').classList.add('hidden'));
            
            // Muestra el tilde para la opción seleccionada
            this.querySelector('svg').classList.remove('hidden');
            
            // Agrega una clase para la animación
            this.querySelector('svg').classList.add('animate-pulse');
            
            // Muestra el botón "Listo" si aún no está visible
            const doneButton = document.querySelector('#doneButton');
            if (doneButton.classList.contains('hidden')) {
                doneButton.classList.remove('hidden');
                doneButton.classList.add('animate-fadeIn');
            }
        });
    });

    // Funcionalidad para el botón "Listo"
    document.querySelector('#doneButton').addEventListener('click', () => {
        // Aquí podrías añadir la lógica para enviar la opción seleccionada
        alert('Votación confirmada!');
    });
});
