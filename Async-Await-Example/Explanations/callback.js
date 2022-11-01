//En este ejemplo podemos ver el fallo de que se puede pasar con los Callback que es que se vuelve muy larga la consulta hasta llegar al punto del envio del callback y eso en una App grande puede volverse incontrolable. esto tambien causa un efecto llamado Callback Hell por que se alarga mucho el codigo .

function RequestHandler(req, res) {
    User.findById(req.userId, function (err, user) {
        if (err) {
            res.send(err);
        }
        else {
            Task.findById(user.tasksId, function (err, tasks) {
                if (err) {
                    return res.send(err);
                }
                else {
                    tasks.completed = true;
                    tasks.save(function (err) {
                        if (err) {
                            return res.send(err);
                        }
                        else {
                            res.send('Task Completed');
                        }
                    });
                }
            });
        }
    });
}