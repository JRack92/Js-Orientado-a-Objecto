//Adiferencia de los Callbacks las promesas son mucho mas facil de leer ya que no abusasn de ir aninando multiples if con condiciones internas, si no que es una continuacion del proceso y si en alguna parte da error, ese error puede ser capturado en cualquier momento del proceso.

function RequestHandler(req, res) {
    User.findById(req.userId).then(function (user) {
        return Tasks.findById(user.tasksId);
    }).then(function (tasks) {
        tasks.completed = true;
        return tasks.save();
    }).then(function () {
        res.send('Tasks Completed');
    }).catch(function (errors) {
        res.send(errors);
    });
}