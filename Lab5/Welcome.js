export default function Welcome(app) {
    app.get("/lab5/welcome", (req, res) => {
        res.send("hello");
      });
}