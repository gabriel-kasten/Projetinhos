$("#btn").on('click', function () {
    let inputValueText = $("#input").val();

    const inputValueReversed = inputValueText
        .split('')
        .map(Number)
        .reverse();

    const result = inputValueReversed.reduce((accumulator, current, idx) => accumulator + current * Math.pow(2, idx));
    alert(result);

    // kasten esteve ocupado 🤓
});
