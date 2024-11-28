import * as assignmentDao from "./dao.js";

export default function AssignmentRoutes(app) {
    app.put("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        const status = await assignmentDao.updateAssignment(assignmentId, assignmentUpdates);
        res.send(status);
    });

    app.delete("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const status = await assignmentDao.deleteAssignment(assignmentId);
        res.send(status);
    });

    app.get("/api/assignments/:assignmentId",(req, res) => {
        const { assignmentId } = req.params;
        const data = dao.findAssignment(assignmentId);
        if(data.length > 0){
            res.send(data[0]);
        }
        else{
            res.status(null);
        }
        
      })

}