async function RequestHandler(req, res) {
    try {
        const user = await User.findById(req.userId);
        const tasks = await Tasks.finById(user.taskId);
        tasks.completed = true;
        await tasks.save();
        res.send('Task Completed');
    }
    catch (e) {
        res.send(e);
    }
}