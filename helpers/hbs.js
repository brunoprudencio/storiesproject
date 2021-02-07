const handlebars = require('handlebars')

module.exports = {
    formatDate: function (dateString) {
        const sdf = new Intl.DateTimeFormat('en', {day: '2-digit', month: 'short', year: '2-digit'})
        return new handlebars.SafeString(
            sdf.format(new Date(dateString)))
    }
}

