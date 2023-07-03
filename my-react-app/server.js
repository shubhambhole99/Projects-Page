import express from 'express';
const app = express();

app.use(express.static('dist'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 4000; // Adjust the port as needed
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});