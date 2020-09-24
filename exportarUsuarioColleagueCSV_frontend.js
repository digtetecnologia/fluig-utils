let callback = {
    success: function(dsColleague) {
        let data = 'Nome;Matricula;Email;Login\n'
        $.each(dsColleague.values, function (indexInArray, valueOfElement) { 
             data += `${valueOfElement.colleagueName};${valueOfElement['colleaguePK.colleagueId']};${valueOfElement.mail};${valueOfElement.login}\n`
        })
        
        const a = document.createElement("a")
        a.download = "colleague.csv"
        a.href ="data:text/csv;charset=utf-8,%EF%BB%BF"+encodeURIComponent(data)
        a.click()
    },
    error: function() {
        console.log('ERRO')
    }
};

DatasetFactory.getDataset("colleague", null, null, null, callback) 
