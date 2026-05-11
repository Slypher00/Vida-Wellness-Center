document.getElementById('gender-btn').addEventListener('click', function() {
    document.getElementById('gender-modal').classList.remove('hidden');
});
document.getElementById('cancel-btn').addEventListener('click', function() {
    document.getElementById('gender-modal').classList.add('hidden');
})