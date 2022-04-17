var accordion = (function() {

    /**
     * @description A very simple script to add an Open class to an element
     */

    const classKeyAction = 'open';

    const open = function(_this, _target_id) {
        var el = document.getElementById(_target_id);
        if (!el) console.error(`accordion.open(): I don't see an id ${_target_id}`);
        el.classList.add(classKeyAction);
    };

    const close = function(_this, _target_id) {
        var el = document.getElementById(_target_id);
        if (!el) console.error(`accordion.close(): I don't see an id ${_target_id}`);
        el.classList.remove(classKeyAction);
    };

    const toggle = function(_this, _target_id) {
        var el = document.getElementById(_target_id);
        if (!el) console.error(`accordion.toggle(): I don't see an id ${_target_id}`);
        el.classList.toggle(classKeyAction);
    };

    return { open, close, toggle }
})()

