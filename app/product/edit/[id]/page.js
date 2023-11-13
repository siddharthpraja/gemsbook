"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

const UpdatePrdoduct = ({ params }) => {

  
  const [name, setName] = useState("");
  const [group, setGroup] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState([]);
  const [hsncoad, setHsncoad] = useState("");
  const [gstrate, setGstrate] = useState("");

  useEffect(() => {
  axios
      .get(`https://gemsbooks.pockethost.io/api/collections/products/records/${params.id}`)
      .then((response) => {
        setName(response.data.name);
        setGroup(response.data.group);
        setDescription(response.data.description);
        setPrice(response.data.price);
        setImage(response.data.image);
        setHsncoad(response.data.hsncoad);
        setGstrate(response.data.gstrate);
      })
      .catch((error) => {
        alert("An error happened. Please Chack console");
        console.log(error);
      });
    }, []);

  const route = useRouter();

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
        method: "patch",
        url: `https://gemsbooks.pockethost.io/api/collections/products/records/${params.id}`,
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
      route.back()
    } catch (error) {
      alert(error)
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Name"
            name="name"
          />
          <Input
            size="lg"
            type="text"
            color="teal"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            label="Description"
            name="description"
          />
          <Input
            size="lg"
            type="number"
            color="teal"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            label="Price"
            name="price"
          />
          <Input
            size="lg"
            color="teal"
            type="file"
            value={image}
            onChange={(e) => setImage(e.target.files[0])}
            label="Image"
            name="image"
          />
          <Input
            size="lg"
            color="teal"
            type="number"
            value={hsncoad}
            onChange={(e) => setHsncoad(e.target.value)}
            label="Hsncoad"
            name="hsncoad"
          />
          <Input
            size="lg"
            color="teal"
            type="text"
            value={gstrate}
            onChange={(e) => setGstrate(e.target.value)}
            label="Gstrate"
            name="gstrate"
          />
        </div>
        <select
          name="group"
          value={group}
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

export default UpdatePrdoduct;
