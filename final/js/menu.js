//Что-то пошло не так. Поэтому этот JS код не доработан (P.S. Nurislam)

let $all = $('#all');
let $sp = $('#sp');
let $rl = $('#rl');
let $ds = $('#ds');
let $dr = $('#dr');

$sp.click(() => {
    setTimeout(() => {
        $('#rameng').show(800);
        $('#ramenk').show(800);
        $('#tom').show(800);
        $('#miso').show(800);
        $('#cali').hide(1000);
        $('#fil').hide(1000);
        $('#bon').hide(1000);
        $('#tse').hide(1000);
        $('#nap').hide(1000);
        $('#mol').hide(1000);
        $('#mer').hide(1000);
        $('#tri').hide(1000);
        $('#moj').hide(1000);
        $('#tar').hide(1000);
        $('#man').hide(1000);
        $('#stra').hide(1000);
    }, 500);
});

$rl.click(() => {
        setTimeout(() => {
        $('#rameng').hide(1000);
        $('#ramenk').hide(1000);
        $('#tom').hide(1000);
        $('#miso').hide(1000);
        $('#cali').show(800);
        $('#fil').show(800);
        $('#bon').show(800);
        $('#tse').show(800);
        $('#nap').hide(1000);
        $('#mol').hide(1000);
        $('#mer').hide(1000);
        $('#tri').hide(1000);
        $('#moj').hide(1000);
        $('#tar').hide(1000);
        $('#man').hide(1000);
        $('#stra').hide(1000);
    }, 500);
});

$ds.click(() => {
    setTimeout(() => {
        $('#rameng').hide(1000);
        $('#ramenk').hide(1000);
        $('#tom').hide(1000);
        $('#miso').hide(1000);
        $('#cali').hide(1000);
        $('#fil').hide(1000);
        $('#bon').hide(1000);
        $('#tse').hide(1000);
        $('#nap').show(800);
        $('#mol').show(800);
        $('#mer').show(800);
        $('#tri').show(800);
        $('#moj').hide(1000);
        $('#tar').hide(1000);
        $('#man').hide(1000);
        $('#stra').hide(1000);
    }, 500);
});

$dr.click(() => {
    setTimeout(() => {
        $('#rameng').hide(1000);
        $('#ramenk').hide(1000);
        $('#tom').hide(1000);
        $('#miso').hide(1000);
        $('#cali').hide(1000);
        $('#fil').hide(1000);
        $('#bon').hide(1000);
        $('#tse').hide(1000);
        $('#nap').hide(1000);
        $('#mol').hide(1000);
        $('#mer').hide(1000);
        $('#tri').hide(1000);
        $('#moj').show(800);
        ('#tar').show(800);
        $('#man').show(800);
        $('#stra').show(800);
    }, 500);
});

$all.click(() => {
    setTimeout(() => {
        $('#rameng').show(800);
        $('#ramenk').show(800);
        $('#tom').show(800);
        $('#miso').show(800);
        $('#cali').show(800);
        $('#fil').show(800);
        $('#bon').show(800);
        $('#tse').show(800);
        $('#nap').show(800);
        $('#mol').show(800);
        $('#mer').show(800);
        $('#tri').show(800);
        $('#moj').show(800);
        $('#tar').show(800);
        $('#man').show(800);
        $('#stra').show(800);
    }, 500);
});