const mask = () => {
    let setCursorPosition = (pos, elem) => {
        elem.focus();
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            let range = elem.createTextRange();

            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };
    function createMask(event) {
        let matrix = '+7 (___) ___ __ __',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');
        if (def.length >= val.length) {
            val = def;
        }
        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });
        if (event.type ==='blur') {
            if (this.value.length == 2 || this.value.length < matrix.length) {
                this.value = '';
            }
        } else if (event.type ==='keyup' || event.type ==='mouseup') {
            let cur = this.selectionStart;
            if (cur == '0') {
                setCursorPosition(this.value.length, this);
            }
        } else {
            setCursorPosition(this.value.length, this);        
        }
    }
    let inputs = document.querySelectorAll('.tel');
    inputs.forEach(input => {
        input.addEventListener('input', createMask);
        input.addEventListener('focus', createMask);
        input.addEventListener('blur', createMask);
        input.addEventListener('keyup', createMask);
        input.addEventListener('mouseup', createMask);
    });
};
export default mask;