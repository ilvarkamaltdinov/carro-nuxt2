function number_format(number, decimals, dec_point, thousands_sep) {
    let n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        toFixedFix = function (n, prec) {
            // Fix for IE parseFloat(0.55).toFixed(0) = 0;
            let k = Math.pow(10, prec);
            return Math.round(n * k) / k;
        },
        s = (prec ? toFixedFix(n, prec) : Math.round(n)).toString().split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

export default {
    filters: {
        replaceApiUrl(value, id) {
            let rootApiLink = 'https://api.carro.ru/'
            let localApiLink = 'https://api.карро.рф/'
            if (id === 108) {
                return value.replace(rootApiLink, localApiLink)
            }
            return value
        },

        run(value) {
            if (!value) return ''
            return Number(value).toLocaleString('ru')
            // return new Intl.NumberFormat("ru-RU").format(value);
        },
        engineVolume(volume) {
            return number_format(volume, 1, '.', '');
        },
        toCurrency(value) {
            if (!value) return ''
            if (typeof value !== "number") {
                return value;
            }
            return Number(value).toLocaleString('ru') + ' ₽'
            // let formatter = new Intl.NumberFormat("ru-RU", {
            //     style: "currency",
            //     currency: "RUB",
            //     minimumFractionDigits: 0,
            // });
            // return formatter.format(value);
        },
        numberFormat(value) {
            if (!value) return ''
            if (typeof value === 'string') return value
            return new Intl.NumberFormat("ru-RU").format(value);
        },
        toCurrencyValue(value) {
            return Number(value).toLocaleString('ru')
            // let formatter = new Intl.NumberFormat('ru-RU').format(value);
            // return formatter
        },
        access_acredit(price) {
            let percent = 4.9;
            let n = 84;
            let coef_i = percent / 12 / 100;
            let K =
                (coef_i * Math.pow(1 + coef_i, n)) / (Math.pow(1 + coef_i, n) - 1);
            let A = Math.round(K * price);
            let formatter = new Intl.NumberFormat("ru-RU", {
                style: "currency",
                currency: "RUB",
                minimumFractionDigits: 0,
            });
            return formatter.format(A);
        },
    }
}
