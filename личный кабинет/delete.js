    function deleteRecord(button) {
        const record = button.closest('.record');
        record.remove(); // Удаляет выбранный блок
    }