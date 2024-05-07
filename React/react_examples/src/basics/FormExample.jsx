import React, { useState } from "react";
import { Card } from "reactstrap";

export const FormExample = () => {
  return (
    <>
      <Card className="mt-2 w-50">
        <h3>Text File Input </h3>
        <TextFileInput />
      </Card>
      <Card className="mt-2 w-50">
        <h3>Images Input </h3>
        <ImagesInput />
      </Card>
      <Card className="mt-2 w-50">
        <h3>Drag And Drop</h3>
        <DragAndDrop />
      </Card>
      <Card className="mt-2 w-50">
        <h3>Click And Download</h3>
        <DomClick />
      </Card>
    </>
  );
};

const ImagesInput = () => {
  const [images, setImages] = useState([]);

  const addImageHandler = (e) => {
    if (e.target.files.length !== 0) {
      let newImages = structuredClone(images);
      Array.from(e.target.files).forEach((file) => {
        let previewURL = URL.createObjectURL(file); //create a url to the file
        let sameNameFile = newImages.find((img) => img.name === file.name);

        if (sameNameFile) {
          sameNameFile.file = file;
          sameNameFile.previewURL = previewURL;
        } else {
          newImages = [
            ...newImages,
            {
              name: file.name,
              file: file,
              previewURL: URL.createObjectURL(file),
            },
          ];
        }
      });
      setImages(newImages);
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("CustomField", "Extra Data");
    postImages(formData);
  };

  const buttonSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    images.forEach((img) => {
      formData.append("files", img.file); //collection of files with the same name "files"
    });
    postImages(formData);
  };

  const postImages = (formData) => {
    fetch("https://example.com", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data", //for FormData
      },
      body: formData, // body data type must match "Content-Type" header
    })
      .then((response) => response.json()) //convert json string to object
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <form
        encType="multipart/form-data"
        method="post"
        onSubmit={(e) => formSubmitHandler(e)}
      >
        <input
          type="file"
          name="images"
          multiple
          onChange={(e) => {
            addImageHandler(e);
            e.target.files = null;
          }}
        />
        <input type="submit" value="Submit" />
        <input
          type="button"
          onClick={(e) => buttonSubmitHandler(e)}
          value="Submit Files"
        />
      </form>
      {images.map((image, idx) => (
        <img
          alt={image.previewURL}
          src={image.previewURL}
          style={{ width: "5vh", height: "5vh" }}
          key={idx}
        />
      ))}
    </>
  );
};

const TextFileInput = () => {
  const [text, setText] = useState(["Text Preview"]);

  const readFileAsText = (file) => {
    return new Promise(function (resolve, reject) {
      let reader = new FileReader();

      reader.onload = function () {
        resolve(reader.result);
      };
      reader.onerror = function () {
        reject(reader);
      };
      reader.readAsText(file);
    });
  };

  const addTextFileHandler = (e) => {
    if (e.target.files.length !== 0) {
      let files = e.currentTarget.files;
      let readers = [];

      // Store promises in array
      for (let i = 0; i < files.length; i++) {
        readers.push(readFileAsText(files[i]));
      }

      Promise.all(readers).then((values) => {
        setText(values.join(" "));
      });
    }
  };

  return (
    <form>
      <input type="file" onChange={(e) => addTextFileHandler(e)} multiple />
      <div>{text} </div>
    </form>
  );
};

const DragAndDrop = () => {
  const dropHandler = (e) => {
    console.log("File(s) dropped");

    e.preventDefault(); //Prevent file from being opened

    if (e.dataTransfer.items) {
      [...e.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === "file") {
          const file = item.getAsFile();
          console.log(`… file[${i}].name = ${file.name}`);
        }
      });
    } else {
      [...e.dataTransfer.files].forEach((file, i) => {
        console.log(`… file[${i}].name = ${file.name}`);
      });
    }
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div
      style={{ border: "1px dotted red" }}
      onDrop={(e) => dropHandler(e)}
      onDragOver={(e) => dragOverHandler(e)}
    >
      <p>Drag one or more files.</p>
    </div>
  );
};

const DomClick = () => {
  const [input, setInput] = useState("");

  const download = () => {
    const a = document.createElement("a");
    let content = input;
    let blob = new Blob([content], { type: "text/markdown" });
    a.download = `title.md`;
    a.href = URL.createObjectURL(blob);
    a.addEventListener("click", () => {
      setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000);
    });
    a.click();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(input);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={download}>Download</button>
      <button onClick={copyToClipboard}>Copy to Clipboard</button>
    </div>
  );
};
