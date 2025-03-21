import http from "node:http";
import formidable from "formidable";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.url == "/fileupload") {
    const form = formidable();
    form.parse(req, (err, fields, files) => {
      if (err) throw err;

      const oldPath = files.filetoupload.filePath

      if (oldPath) {
        const newPath = `C:/Users/marce/OneDrive/Documentos/base/upload/assets/${files.filetoupload.originalFilename}`;
        fs.rename(oldPath, newPath, (err) => {
          if (err) throw err;
        });
      }
      res.write("file uploaded AND moved");
      res.end();
      console.log("foiiii");
    });
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      '<form action="fileupload" method="post" enctype="multipart/form-data">'
    );
    res.write('<input type="file" name="filetoupload"> <br>');
    res.write('<input type="submit">');
    res.write("</form>");
    return res.end();
  }
});

server.listen(8080);
