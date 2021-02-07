const handlebars = require('handlebars')

module.exports = {
    formatDate: function (dateString) {
        const sdf = new Intl.DateTimeFormat('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        })
        return new handlebars.SafeString(
            sdf.format(new Date(dateString)))
    }
}

