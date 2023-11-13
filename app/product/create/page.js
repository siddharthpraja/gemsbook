"use client";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [group, setGroup] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState([]);
  const [hsncoad, setHsncoad] = useState("");
  const [gstrate, setGstrate] = useState("");

  const route = useRouter();


  const {getRootProps, getInputProps, isDrageActive} =useDropzone({
    accept : "image/*",
    onDrop : (accepedFiles) =>{
      setImage(
        accepedFiles.map((upFile)=>Object.assign(upFile, {
          preview : URL.createObjectURL(upFile)
        }))
      )
    }
  })

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("name", name);
    formData.append("hsncoad", hsncoad);
    formData.append("gstrate", gstrate);
    formData.append("group", group);

    try {
      const response = await axios({
        method: "post",
        url: "https://gemsbooks.pockethost.io/api/collections/products/records",
        data: formData,
        headers: {
          name: "name",
          description: "description",
          price: "price",
          image: "image",
          hsncoad: "hsncoad",
          gstrate: "gstrate",
          group: "group",
        },
      });
      route.back();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Card className="bg-base-100 m-5 p-10 w-90%" shadow={false}>
      <Typography variant="h4" className=" text-base-content">
        Create Product
      </Typography>

      <form className="mt-8 mb-2  sm:w-90%" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-wrap text-base-content md:grid md:grid-cols-2 gap-2">
          <Input
            size="lg"
            type="text"
            color="teal"
            onChange={(e) => setName(e.target.value)}
            label="Name"
            name="name"
          />
          <Input
            size="lg"
            type="text"
            color="teal"
            onChange={(e) => setDescription(e.target.value)}
            label="Description"
            name="description"
          />
          <Input
            size="lg"
            type="number"
            color="teal"
            onChange={(e) => setPrice(e.target.value)}
            label="Price"
            name="price"
          />

          <div {...getRootProps()} >
            <input {...getInputProps()}/>
            {
              isDrageActive ? <p>Drag the Image here...</p> : <p>Darg and Drop or Click to Select Image...</p>  
            }
          </div>
          <div>
            {image.map((upFile) => {
              return (
                <image src={upFile.preview} width={100} height={100} />
              )
            })}
          </div>



          {/*<div className="avatar gap-2">
            <div className="w-24 rounded" name="Image">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
            <Input
            size="lg"
            color="teal"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            label="Image"
            name="image"
          />
  </div>*/}
          
          <Input
            size="lg"
            color="teal"
            type="number"
            onChange={(e) => setHsncoad(e.target.value)}
            label="Hsncoad"
            name="hsncoad"
          />
          <Input
            size="lg"
            color="teal"
            type="text"
            onChange={(e) => setGstrate(e.target.value)}
            label="Gstrate"
            name="gstrate"
          />
        </div>
        <select
          name="group"
          onChange={(e) => setGroup(e.target.value)}
          className="select select-bordered w-full "
        >
          <option disabled>Group Type?</option>
          <option>Sundry Debtor</option>
          <option>Sundry Creditor</option>
        </select>
        <Button type="submit" className="mt-6 mb-7 bg-accent">
          Register
        </Button>
      </form>
    </Card>
  );
};

export default CreateProduct;
